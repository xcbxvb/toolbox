


// DATABASE MODELLI ROBOT
const robotCatalogData = {
    fanuc: [
        { model: "M-10iD/12", payload: "12 kg", reach: "1441 mm", img: "fanuc_m10id12.png" },
        { model: "M-20iD/25", payload: "25 kg", reach: "1831 mm", img: "fanuc_m20id25.png" },
        { model: "R-2000iC/210F", payload: "210 kg", reach: "2650 mm", img: "fanuc_r2000ic210f.png" }
    ],
    kuka: [
        { model: "KR10 R1420", payload: "10 kg", reach: "1420 mm", img: "kuka_kr10R1420.png" },
        { model: "KR10 R1440-2", payload: "10 kg", reach: "1440 mm", img: "kuka_kr10R1440-2.png" },
        { model: "KR60", payload: "60 kg", reach: "2033 mm", img: "kuka_kr60.png" }
    ],
    abb: [
        { model: "IRB1200", payload: "7 kg", reach: "900 mm", img: "abb_irb1200.png" },
        { model: "IRB6700", payload: "150 kg", reach: "3200 mm", img: "abb_irb6700.png" }
    ]
};





// LISTA MODELLI
const robotModels = {
    fanuc: ["M-10iD/12","M-20iD/25","R-2000iC/210F","R-1000iA/80F","CRX-10iA","CR-35iA"],
    kuka: ["KR10 R1420","KR10 R1440-2","KR16","KR60","KR120","KR240","KR360"],
    abb: ["IRB1200","IRB1600","IRB2600","IRB6700"],
    yaskawa: ["GP7","GP12","GP25","GP50"],
    comau: ["Racer 5","Racer 7","Smart5 NJ110","Smart5 NJ220"],
    ur: ["UR3","UR5","UR10","UR20"]
};

// CLICK SU MARCA ROBOT
document.querySelectorAll("button[data-brand]").forEach(btn => {
    btn.addEventListener("click", () => {

        const brand = btn.dataset.brand;
        currentBrand = brand;   // ?? memorizza il brand selezionato

        document.querySelectorAll(".card").forEach(card => {
            card.style.display = (card.dataset.category === brand) ? "block" : "none";
        });

        robotModelMenu.innerHTML = "";
        robotModels[brand].forEach(model => {
            const b = document.createElement("button");
            b.className = "btn";
            b.textContent = model;
            b.dataset.model = model;
            robotModelMenu.appendChild(b);
        });

        robotModelMenu.style.display = "flex";
        robotCatalog.style.display = "none";
        detailPanel.style.display = "none";
    });
});

// CLICK SU MODELLO ROBOT
robotModelMenu.addEventListener("click", e => {
    const btn = e.target.closest("button[data-model]");
    if (!btn) return;

    const model = btn.dataset.model;

    // ?? mostra SOLO le card del brand corrente
    document.querySelectorAll(".card").forEach(card => {
        const category = card.dataset.category;
        card.style.display = (category === currentBrand) ? "block" : "none";
    });

    panelTitle.textContent = "Modello: " + model;
    panelContent.textContent =
        "Informazioni tecniche disponibili:\n\n" +
        "• TCP & Frame\n" +
        "• Quick Mastering\n" +
        "• Segnali di sistema\n" +
        "• Safety (DCS)\n" +
        "• Ethernet/IP Safety\n" +
        "• ProfiNet\n" +
        "• UOP\n" +
        "• PMC\n" +
        "• Vision\n" +
        "• Programmi scaricabili\n" +
        "• Manuali\n\n" +
        "Seleziona una card per aprire la sezione.";

    detailPanel.style.display = "block";
});
