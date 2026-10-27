
async function loadArchiveFromGitHub() {
    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/photoArchive.json`;

    // 1?? Primo fetch: otteniamo metadati + SHA + git_url
    const response = await fetch(url, {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
    });

    const data = await response.json();

    // Se il file non esiste
    if (!data.sha || !data.git_url) {
        return { sha: null, archive: [] };
    }

    // 2?? Secondo fetch: scarichiamo il BLOB (contenuto vero)
    const blobResponse = await fetch(data.git_url, {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
    });

    const blobData = await blobResponse.json();

    // 3?? Decodifica del base64
    const decoded = atob(blobData.content);

    // 4?? Parsing JSON
    let archive = [];
    try {
        archive = JSON.parse(decoded);
    } catch (e) {
        console.error("Errore parsing JSON archivio:", e);
        archive = [];
    }

    // ?? Ricarica SHA aggiornato dopo il primo salvataggio
if (!data.sha) {
    const refresh = await fetch(url, {
        headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
    }).then(r => r.json());

    return {
        sha: refresh.sha,
        archive: archive
    };
}

return {
    sha: data.sha,
    archive: archive
};

}

async function saveArchiveToGitHub(newArchive, sha) {
    const MAX_PHOTOS = 200;  // archivio circolare

    // ?? Se supera il limite, elimina le più vecchie
    if (newArchive.length > MAX_PHOTOS) {
        newArchive = newArchive.slice(newArchive.length - MAX_PHOTOS);
    }

    // ??? Compressione JSON (rimuove spazi inutili)
    const compressed = JSON.stringify(newArchive);

    const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/photoArchive.json`;

		const payload = {
        message: "Aggiornamento archivio foto (compress + circular buffer)",
        content: btoa(compressed)
    };

    // ?? IMPORTANTE: sha SOLO SE ESISTE DAVVERO
    if (sha) {
        payload.sha = sha;
    }

    await fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
}



// FUNZIONE DI DALVATAGGIO FOTO IN ARCHIVIO
async function savePhotoToArchive(imgData) {
    const { archive, sha } = await loadArchiveFromGitHub();

    archive.push({
        timestamp: new Date().toLocaleString(),
        image: imgData
    });

    await saveArchiveToGitHub(archive, sha);
}


// ?? Mostra l'archivio
async function showArchive() {
    document.getElementById("archivePasswordScreen").style.display = "flex";
}


// Password archivio (puoi cambiarla)
const ARCHIVE_PASSWORD = "Tommaso2026";

const archivePasswordScreen = document.getElementById("archivePasswordScreen");
const archivePasswordInput = document.getElementById("archivePasswordInput");
const archivePasswordBtn = document.getElementById("archivePasswordBtn");
const archivePasswordError = document.getElementById("archivePasswordError");

archivePasswordBtn.addEventListener("click", async () => {
    if (archivePasswordInput.value === ARCHIVE_PASSWORD) {

        archivePasswordError.style.display = "none";
        archivePasswordScreen.style.display = "none";

        // Ora apriamo davvero l’archivio
        const { archive } = await loadArchiveFromGitHub();
        const container = document.getElementById("archiveContent");

        container.innerHTML = "";

        archive.forEach((entry, index) => {
            const block = document.createElement("div");
            block.style.marginBottom = "30px";

            block.innerHTML = `
                <div style="font-size:18px; margin-bottom:8px;">
                    Tentativo: ${entry.timestamp}
                </div>

                <img src="${entry.image}" 
                     style="width:300px; border:2px solid #fff; border-radius:10px; display:block; margin-bottom:10px;">

                <button class="btn" onclick="downloadPhoto(${index})" style="margin-right:10px;">
                    ?? Scarica foto
                </button>

                <button class="btn" onclick="deletePhoto(${index})" style="background:#ff4444;">
                    ??? Elimina foto
                </button>
            `;

            container.appendChild(block);
        });

        document.getElementById("archivePanel").style.display = "block";

    } else {
        archivePasswordError.style.display = "block";
        archivePasswordInput.classList.add("shake");

        setTimeout(() => {
            archivePasswordInput.classList.remove("shake");
        }, 300);
    }
});


// Permette INVIO
archivePasswordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        archivePasswordBtn.click();
    }
});


// ?? Chiudi archivio
function closeArchive() {
    document.getElementById("archivePanel").style.display = "none";
}

//FUNZIONE SCARICA  FOTO SELEZIONATA IN ARCHIVIO
async function deletePhoto(index) {
    const { archive, sha } = await loadArchiveFromGitHub();

    archive.splice(index, 1);

    await saveArchiveToGitHub(archive, sha);

    showArchive();
}

//FUNZIONE CANCELLA TUTTE LE FOTO IN ARCHIVIO
async function deleteAllPhotos() {
    if (!confirm("Vuoi davvero cancellare tutte le foto?")) return;

    const { sha } = await loadArchiveFromGitHub();

    await saveArchiveToGitHub([], sha);

    showArchive();
}
