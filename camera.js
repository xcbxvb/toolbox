

// ?? Password dinamica giornaliera: aaaammgg
function getDailyPassword() {
    const today = new Date();
    const gg = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const aaaa = today.getFullYear();
    return `${aaaa}${mm}${gg}`;
}

const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const passwordBtn = document.getElementById("passwordBtn");
const passwordError = document.getElementById("passwordError");

passwordBtn.addEventListener("click", () => {
    const correctPassword = getDailyPassword();

    if (passwordInput.value === correctPassword) {
        passwordScreen.style.backgroundImage = "";  
        passwordScreen.remove();
        document.getElementById("passwordMessage").style.display = "none";
        //passwordScreen.style.display = "none";   // ?? Sblocca la pagina

    } else {
        passwordError.style.display = "block";
        passwordInput.classList.add("shake");
        document.getElementById("passwordMessage").style.display = "block";

        setTimeout(() => {
        passwordInput.classList.remove("shake");
}, 300);

        // ?? Scatta foto e imposta sfondo
        capturePhoto();

    }
});



// ?? Permette di premere INVIO per confermare la password
passwordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        passwordBtn.click(); // Simula il click del pulsante
    }
});





// FUNZIONE PER CATTURARE LE FOTO SE PASSWORD ERRATA
async function capturePhoto() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "user" }
        });

        const video = document.getElementById("camStream");
        video.srcObject = stream;

        await new Promise(resolve => {
    			video.onplaying = () => resolve();
    			video.onloadeddata = () => resolve();
				});
				
				// attesa minima per il primo frame reale
				await new Promise(r => setTimeout(r, 150));


        // ?? RIDUZIONE RISOLUZIONE
        const TARGET_WIDTH = 480;   // risoluzione molto più leggera
        const scale = TARGET_WIDTH / video.videoWidth;
        const TARGET_HEIGHT = video.videoHeight * scale;

        const canvas = document.createElement("canvas");
        canvas.width = TARGET_WIDTH;
        canvas.height = TARGET_HEIGHT;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, TARGET_WIDTH, TARGET_HEIGHT);

        // ?? WEBP COMPRESSO (peso ridotto del 90%)
        const imgData = canvas.toDataURL("image/webp", 0.4);

        savePhotoToArchive(imgData);

        const screen = document.getElementById("passwordScreen");
        screen.style.backgroundImage = `url(${imgData})`;
        screen.style.backgroundSize = "cover";
        screen.style.backgroundPosition = "center";

        stream.getTracks().forEach(track => track.stop());

    } catch (err) {
        console.error("Errore fotocamera:", err);
    }
}

