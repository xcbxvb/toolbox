
// ELEMENTI PRINCIPALI
const cardGrid = document.getElementById("cardGrid");
const detailPanel = document.getElementById("detailPanel");
const panelTitle = document.getElementById("panelTitle");
const panelSub = document.getElementById("panelSub");
const panelTag = document.getElementById("panelTag");
const panelContent = document.getElementById("panelContent");
const searchInput = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");

const robotBrandMenu = document.getElementById("robotBrandMenu");
const robotModelMenu = document.getElementById("robotModelMenu");
const robotCatalog = document.getElementById("robotCatalog");

let previousVisibleCards = [];
let previousRobotMenus = {};
let currentBrand = null;



// FUNZIONE: NASCONDE TUTTO IL MONDO ROBOTICO
function hideRobotSection() {
    robotBrandMenu.style.display = "none";
    robotModelMenu.style.display = "none";
    robotCatalog.style.display = "none";
}

function updateCardSizeControlsVisibility() {
    const controls = document.querySelector(".card-size-controls");
    const visibleCards = [...document.querySelectorAll(".card")]
        .filter(c => c.style.display !== "none");

    controls.style.display = visibleCards.length > 0 ? "flex" : "none";
}


// CLICK SU CARD
cardGrid.addEventListener("click", e => {
    const card = e.target.closest(".card");
 
 
    if (!card) return;

    const id = card.dataset.id;
    const item = data[id];

		   
// Nasconde tutto
		document.getElementById("manualFanucArea").style.display = "none";
		document.getElementById("manualKukaArea").style.display = "none";
		document.getElementById("manualAbbArea").style.display = "none";
		document.getElementById("manualYaskawaArea").style.display = "none";
		document.getElementById("manualComauArea").style.display = "none";
		document.getElementById("manualUrArea").style.display = "none";
		document.getElementById("manualJavascriptArea").style.display = "none";
		
		// Mostra solo il contenitore principale
		if (id.startsWith("manuali_")) {
		    document.getElementById("manualRobotDownloadArea").style.display = "block";
		} else {
		    document.getElementById("manualRobotDownloadArea").style.display = "none";
		}
		
		// Mostra solo il brand corretto
		if (id === "manuali_fanuc") document.getElementById("manualFanucArea").style.display = "block";
		if (id === "manuali_kuka") document.getElementById("manualKukaArea").style.display = "block";
		if (id === "manuali_abb") document.getElementById("manualAbbArea").style.display = "block";
		if (id === "manuali_yaskawa") document.getElementById("manualYaskawaArea").style.display = "block";
		if (id === "manuali_comau") document.getElementById("manualComauArea").style.display = "block";
		if (id === "manuali_ur") document.getElementById("manualUrArea").style.display = "block";
		if (id === "manuali_Javascript") document.getElementById("manualJavascriptArea").style.display = "block";

 



    // ?? Memorizza quali card erano visibili
    previousVisibleCards = [];
    document.querySelectorAll(".card").forEach(c => {
        if (c.style.display !== "none") previousVisibleCards.push(c);
        c.style.display = "none";   // nasconde tutto
    });

    // ?? Memorizza stato dei menu robot
    previousRobotMenus = {
        brand: robotBrandMenu.style.display,
        model: robotModelMenu.style.display,
        catalog: robotCatalog.style.display
    };

    // ?? Nasconde menu robot
    robotBrandMenu.style.display = "none";
    robotModelMenu.style.display = "none";
    robotCatalog.style.display = "none";

    // ?? Mostra pannello dettagli
    panelTitle.textContent = item.title;
    panelContent.innerHTML = item.content;

    detailPanel.style.display = "block";

    // ?? Mostra pulsante Indietro
    document.getElementById("backButton").style.display = "block";

    // ?? Gestione download KUKA
    const downloadArea = document.getElementById("downloadArea");
    downloadArea.style.display = (id === "kuka_download") ? "flex" : "none";
    
    updateCardSizeControlsVisibility();
});




// RICERCA
searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    cardGrid.querySelectorAll(".card").forEach(card => {
        const label = (card.dataset.label || "").toLowerCase();
        const match = !term || label.includes(term);
        card.style.opacity = match ? "1" : "0.25";
        card.style.pointerEvents = match ? "auto" : "none";
    });
});




// TEMA
themeToggle.addEventListener("click", () => {
    const body = document.body;
    const next = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", next);
});






// FILTRO "TUTTO"
document.querySelectorAll(".card").forEach(card => {
    const group = card.dataset.group;
    card.style.display = (group !== "manuali") ? "block" : "none";
});

hideRobotSection();
detailPanel.style.display = "none";

updateCardSizeControlsVisibility();





// FILTRO CATEGORIE PRINCIPALI
document.querySelectorAll("button[data-filter]").forEach(btn => {
    btn.addEventListener("click", () => {

        const filter = btn.dataset.filter;

        document.querySelectorAll(".card").forEach(card => {
            const group = card.dataset.group;
            card.style.display = (filter === "all" || group === filter) ? "block" : "none";
        });

        if (filter === "robot") {
            robotBrandMenu.style.display = "flex";
            robotModelMenu.style.display = "none";
            robotCatalog.style.display = "none";
        } else {
            hideRobotSection();
        }

        detailPanel.style.display = "none";
        updateCardSizeControlsVisibility();
    });
});


document.getElementById("manualiBtn").addEventListener("click", () => {

    document.querySelectorAll(".card").forEach(c => {
        const group= c.dataset.group
        c.style.display = (group === "manuali") ? "block" : "none";
    });

    hideRobotSection();
    detailPanel.style.display = "none";

    document.getElementById("downloadArea").style.display = "none";
    document.getElementById("manualRobotDownloadArea").style.display = "none";

    updateCardSizeControlsVisibility();
});







document.getElementById("backButton").addEventListener("click", () => {

    // ?? Nasconde pannello dettagli
    detailPanel.style.display = "none";
    document.getElementById("backButton").style.display = "none";

    // ?? Ripristina card visibili
    document.querySelectorAll(".card").forEach(c => c.style.display = "none");
    previousVisibleCards.forEach(c => c.style.display = "block");

    // ?? Ripristina stato dei menu robot
    robotBrandMenu.style.display = previousRobotMenus.brand;
    robotModelMenu.style.display = previousRobotMenus.model;
    robotCatalog.style.display = previousRobotMenus.catalog;
    
   	document.getElementById("downloadArea").style.display = "none";
	 	document.getElementById("manualRobotDownloadArea").style.display = "none";

    updateCardSizeControlsVisibility();
});

document.addEventListener("DOMContentLoaded", () => {
    // ?? Controllo dimensione testo nella scheda dettagli
    const panelContent = document.getElementById("panelContent");
    const textPlus = document.getElementById("textPlus");
    const textMinus = document.getElementById("textMinus");

    // Se qualcosa non esiste, non facciamo nulla (e non rompiamo il resto)
    if (!panelContent || !textPlus || !textMinus) {
        console.warn("Controlli testo (+/-) non inizializzati: elementi mancanti.");
        return;
    }

    let currentSize = 18; // dimensione iniziale
    panelContent.style.fontSize = currentSize + "px";

    textPlus.addEventListener("click", () => {
        currentSize += 2;
        panelContent.style.fontSize = currentSize + "px";
    });

    textMinus.addEventListener("click", () => {
        if (currentSize > 10) {
            currentSize -= 2;
            panelContent.style.fontSize = currentSize + "px";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const plus = document.getElementById("cardPlus");
    const minus = document.getElementById("cardMinus");

    let size = 280; // base

    function applySize() {
        document.documentElement.style.setProperty("--card-size", size + "px");
        console.log("card-size =", size);
    }

    applySize();

    plus.addEventListener("click", () => {
        size = Math.min(size + 40, 600);
        applySize();
    });

    minus.addEventListener("click", () => {
        size = Math.max(size - 40, 120);
        applySize();
    });
});


























