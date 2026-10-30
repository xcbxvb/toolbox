

const data = {  


		manuali_fanuc: {
		    title: "Manuali FANUC",
		    content: `
		<h3>Manuali FANUC</h3>

		`,
		},  
		
		manuali_kuka: {
		    title: "Manuali KUKA",
		    content: `
		<h3>Manuali KUKA</h3>

		`,
		}, 
		
		manuali_abb: {
		    title: "Manuali ABB",
		    content: `
		<h3>Manuali ABB</h3>

		`,
		},



    fanuc_cpc: {
    title: "FANUC – DCS Cartesian Position Check (CPC)",
    sub: "Monitoraggio posizione tool e zone di sicurezza.",
    tag: "FANUC",
    content: `
CPC – FUNZIONE
────────────────────────
Il CPC controlla che il TCP del robot rimanga:
• Dentro una zona consentita
• Fuori da una zona proibita
• Con tool specifico
• Con orientamento controllato

Usato per:
• Protezione operatori
• Protezione attrezzature
• Limitazione area di lavoro

────────────────────────
CONFIGURAZIONE CPC
────────────────────────
MENU → SYSTEM → DCS → Cartesian Position Check

Parametri:
• Tool number
• Base frame
• Tipo zona:
  – Inside
  – Outside
• Forma:
  – Box
  – Sphere
  – Cylinder
• Limiti XYZ
• Orientamento ABC (opzionale)

────────────────────────
USCITE SICURE
────────────────────────
CPC può scrivere:
• CSO (uscite sicure)
• UO standard (se configurato)

Esempio:
• CPC1 → CSO2 (uscita sicura verso PLC)

────────────────────────
NOTE
────────────────────────
• Ogni modifica richiede APPLY + riavvio
• Zone multiple possono essere combinate
`
},
    anuc_speedcheck: {
    title: "FANUC – DCS Speed/Zone Check",
    sub: "Limitazione velocità e controllo zone di sicurezza.",
    tag: "FANUC",
    content: `
SPEED CHECK
────────────────────────
Limita la velocità massima del robot in:
• Zone specifiche
• Condizioni specifiche
• Con tool specifico

Parametri:
• Max speed (mm/s)
• Tool
• Base
• Zona geometrica

────────────────────────
ZONE CHECK
────────────────────────
Controlla che il robot:
• Non entri in zone proibite
• Resti dentro zone consentite

Forme disponibili:
• Box
• Sphere
• Cylinder

────────────────────────
USCITE SICURE
────────────────────────
Esempi:
• SpeedCheck1 → CSO3
• ZoneCheck1 → CSO4

────────────────────────
NOTE
────────────────────────
• APPLY + riavvio obbligatorio
• Zone e speed check possono essere combinati
`
},
    fanuc_profinet: {
    title: "FANUC – ProfiNet (Slave)",
    sub: "Configurazione FANUC come dispositivo Profinet.",
    tag: "FANUC",
    content: `
REQUISITI
────────────────────────
• Opzione Profinet attiva
• File GSDML FANUC
• PLC Siemens (TIA Portal)

────────────────────────
CONFIGURAZIONE ROBOT
────────────────────────
MENU → I/O → Profinet
• Impostare IP
• Impostare nome dispositivo
• Abilitare Profinet Device

────────────────────────
CONFIGURAZIONE PLC
────────────────────────
TIA Portal:
• Aggiungere dispositivo Profinet
• Importare GSDML FANUC
• Assegnare IP e nome
• Configurare I/O:
  – Input robot → Output PLC
  – Output robot → Input PLC

────────────────────────
DIAGNOSTICA
────────────────────────
Robot:
• Profinet Status → RUN
PLC:
• Device reachable
• No diagnostics

────────────────────────
NOTE
────────────────────────
• Profinet NON è safety (solo standard)
• Per safety usare CIP Safety (Ethernet/IP)
`
},
    fanuc_uop: {
    title: "FANUC – UOP Signals",
    sub: "Segnali di controllo remoto del robot.",
    tag: "FANUC",
    content: `
UOP – FUNZIONE
────────────────────────
Permette controllo remoto del robot:
• Avvio
• Stop
• Reset
• Hold
• Fault
• Stato programma

────────────────────────
SEGNALI PRINCIPALI
────────────────────────
IMSTP – Arresto immediato  
HOLD – Pausa  
SFSPD – Velocità sicura  
START – Avvio programma  
RESET – Reset allarmi  
ENBL – Abilitazione movimento  
RSR1–RSR8 – Avvio programmi automatici  
CMDENBL – Comandi abilitati  
SYSRDY – Sistema pronto  
PROGRUN – Programma in esecuzione  
PAUSED – Programma in pausa  
FAULT – Allarme presente  

────────────────────────
NOTE
────────────────────────
• UOP è la base per automazione con PLC
• RSR1 è usato nel tuo impianto per avviare il CELL
`
},
    fanuc_pmc: {
    title: "FANUC – PMC (Ladder interno)",
    sub: "PLC interno FANUC per logiche personalizzate.",
    tag: "FANUC",
    content: `
PMC – FUNZIONE
────────────────────────
Il PMC è un PLC interno FANUC:
• Logiche personalizzate
• Interfaccia con I/O
• Sequenze
• Interblocchi

────────────────────────
ACCESSO
────────────────────────
MENU → 0 NEXT → 6 SYSTEM → PMC

Funzioni:
• Monitor ladder
• Forzare bit
• Diagnostica
• Timer / Counter

────────────────────────
USO TIPICO
────────────────────────
• Interblocchi sicurezza
• Sequenze di processo
• Logiche di handshake con PLC
• Gestione segnali digitali

────────────────────────
NOTE
────────────────────────
• Modifiche PMC richiedono password integratore
• PMC può leggere UOP e I/O standard
`
},
    fanuc_quickmaster: {
    title: "FANUC – Quick Mastering",
    sub: "Procedura tecnica per riallineare gli zero dei giunti.",
    tag: "FANUC",
    content: `
PANORAMICA
────────────────────────
Quick Mastering permette di riallineare gli zero dei giunti quando:
• Le tacche meccaniche 0° sono allineate
• Il riferimento quick master è stato registrato
• Gli assi sono entro ±1 giro motore dal riferimento
• Il robot è in T1 e TP ON

────────────────────────
ABILITARE IL MASTERING
────────────────────────
MENU → 0 NEXT → 6 SYSTEM → Variables
• Cercare: $MASTER_ENB
• Impostare a TRUE

────────────────────────
PREPARAZIONE
────────────────────────
• Jog ogni asse fino ad allineare le tacche 0°
• Eliminare eventuali servo fault

────────────────────────
RESET VALORI DI RIFERIMENTO
────────────────────────
SYSTEM → Variables → $DMR_GRP → DETAIL
• $REF_POS → impostare linee 1–9 a 0

SYSTEM → Variables → $MASTER_COUN → DETAIL
• Annotare valori asse 1–6

SYSTEM → Variables → $REF_COUNT → DETAIL
• Copiare i valori annotati

Impostare:
• $MASTER_DONE → TRUE
• $REF_DONE → TRUE

────────────────────────
ESEGUIRE QUICK MASTER
────────────────────────
MENU → 0 NEXT → 6 SYSTEM → Master/Cal
• QUICK MASTER → ENTER → YES
• CALIBRATE → ENTER → YES
• DONE

────────────────────────
SE DCS È ATTIVO
────────────────────────
SYSTEM → DCS → Mastering Parameters
• APPLY
• Inserire codice mastering
• Cycle Power

────────────────────────
VERIFICA
────────────────────────
SELECT → Program ZERO
SHIFT+COORD → TOOL=1 → USER=0
SHIFT+FWD → portare robot in ZERO

Verificare:
• Tacche 0° allineate
• POSN → JOINT → tutti gli assi = 0°
`
},
    fanuc_signals: {
    title: "FANUC – Segnali di Sistema (UI/UO)",
    sub: "Segnali di controllo FANUC per avvio, stop, sicurezza e stato.",
    tag: "FANUC",
    content: `
SEGNALI DI INGRESSO (UI)
────────────────────────
UI[1] *IMSTP – Arresto immediato  
• Deve essere ON  
• OFF → servo power OFF + stop immediato

UI[2] *HOLD – Pausa programma  
• Deve essere ON  
• OFF → pausa con decelerazione

UI[3] *SFSPD – Velocità di sicurezza  
• Deve essere ON  
• OFF → pausa + override velocità sicura

UI[4] CSTOPI – Stop ciclo  
• Termina programma (configurabile)

UI[5] RESET – Reset allarmi  
• Ripristina servo power

UI[8] ENBL – Abilitazione movimento  
• Deve essere ON

UI[9–16] RSR1–RSR8 – Avvio automatico programmi RSR  
• Nel tuo impianto: RSR1 avvia il CELL

UI[6] START – Avvio esterno  
• Continua o avvia programma (configurabile)

────────────────────────
SEGNALI DI USCITA (UO)
────────────────────────
UO[1] CMDENBL – Comandi abilitati  
UO[2] SYSRDY – Sistema pronto  
UO[3] PROGRUN – Programma in esecuzione  
UO[4] PAUSED – Programma in pausa  
UO[5] HELD – Stato HOLD  
UO[6] FAULT – Allarme presente  
UO[7] ATPERCH – Posizione di riferimento raggiunta  
UO[8] TPENBL – Teach pendant ON  
UO[9] BATALM – Batteria encoder bassa  
UO[10] BUSY – Robot occupato  
UO[11–18] ACK1–ACK8 – Eco segnali RSR

────────────────────────
NOTE
────────────────────────
• IMSTP, HOLD, SFSPD devono essere ponticellati se non usati
• RSR è usato per avvio automatico da PLC
`
},
    fanuc_cipsafety: {
    title: "FANUC – Ethernet/IP Safety (Slave)",
    sub: "Configurazione CIP Safety, DCS e mapping I/O sicuri.",
    tag: "FANUC",
    content: `
CONFIGURAZIONE IP
────────────────────────
MENU → 6 SETUP → HOST COMM → TCP/IP
• Impostare IP porta CD38B (consigliata)
• Subnet mask
• Router (se necessario)

────────────────────────
DCS – CIP SAFETY
────────────────────────
MENU → 0 NEXT → 6 SYSTEM → DCS → CIP Safety

Parametri:
• Enable/Bypass → ENABLE
• Input size (byte) → es. 2 / 4
• Output size (byte) → es. 2 / 4
• Signature Date/Time → ACTUAL

Dopo modifiche:
• APPLY
• Inserire codice mastering DCS
• Cycle Power

────────────────────────
DIAGNOSTICA SAFETY
────────────────────────
MENU → I/O → Ethernet/IP → F3 Safety

Verificare:
• Safety I/F Status → RUNNING
• CIP Safety Operation → ENABLE
• Input/Output Size coerenti con PLC
• SNN (Safety Network Number)
• TX/RX Count incrementano

────────────────────────
MAPPING I/O SICURI (DCS Safe I/O Connect)
────────────────────────
CSI = ingressi sicuri (PLC → robot)  
CSO = uscite sicure (robot → PLC)

Esempi:
• CSI1 → SSO2 (Fence)
• CSI2 → SSO3 (Emergency)
• SSI5 → CSO1 (Deadman)
• CPC1 → CSO2 (Cartesian Position Check)

Ogni modifica richiede:
• APPLY
• Riavvio controllore

────────────────────────
MANUALI DI RIFERIMENTO
────────────────────────
• R-30iB Plus EIP Operator Manual  
• R-30iB Plus DCS Manual  
• File EDS: fanucrobot_eip_safety_v900.eds
`
},
    kuka_download: {
    title: "KUKA – Download TOOL_PREPARE",
    sub: "File originali del programma TOOL_PREPARE (src + dat).",
    tag: "KUKA",
    content: `
DOWNLOAD FILE TOOL_PREPARE
──────────────────────────

Qui puoi scaricare i file originali del programma TOOL_PREPARE
utilizzato per la procedura di allineamento laser e calcolo del tool.

Assicurati di posizionare i file nella stessa cartella del file TOOLBOX_TECNICO.html.

──────────────────────────
FILE DISPONIBILI
──────────────────────────

📄 TOOL_PREPARE.src  
→ Programma KRL principale

📄 TOOL_PREPARE.dat  
→ File dati associato

──────────────────────────
PULSANTI DI DOWNLOAD
──────────────────────────
`,
},
    plc: {
    title: "PLC – Siemens / Allen-Bradley / Omron / Beckhoff",
    sub: "Indirizzi, diagnostica, backup e messa in servizio PLC.",
    tag: "PLC",
    content: `
SIEMENS (TIA Portal)
────────────────────
• IP PLC: verificare in Device & Networks.
• Online & Diagnostics → Stato, errori, buffer diagnostico.
• Backup:
  – Upload progetto dal PLC.
  – Esportare progetto su NAS.

ALLEN-BRADLEY (RSLogix / Studio 5000)
──────────────────────────────────────
• RSLinx → Configurazione driver Ethernet/IP.
• Who Active → Selezione PLC.
• Upload progetto → salvataggio su NAS.

OMRON
─────
• CX-Programmer / Sysmac Studio.
• Connessione IP / FINS.
• Upload programma e parametri.

BECKHOFF (TwinCAT)
──────────────────
• Scansione rete → rilevamento IPC/PLC.
• Backup:
  – Esportare progetto.
  – Salvare configurazione I/O e route.`
},
    fieldbus: {
    title: "Networking Industriale (Fieldbus)",
    sub: "Profinet, EtherCAT, Ethernet/IP, CANopen, Modbus TCP.",
    tag: "Fieldbus",
    content: `
PROFINET
────────
• Indirizzi IP + nome dispositivo.
• Diagnostica:
  – TIA Portal → Online & Diagnostics.
  – Errori di IO-Device, lost connection.

EtherCAT
────────
• Topologia a linea/anello.
• Diagnostica:
  – Master log.
  – Stato slave, errori di sync.

Ethernet/IP
───────────
• IP statici.
• Scanner ↔ Adapter.
• Diagnostica:
  – RSLogix → I/O status.

CANopen
───────
• Node ID.
• Baud rate.
• Diagnostica:
  – Error frame, bus off.

Modbus TCP
──────────
• IP server.
• Porta 502.
• Mapping registri (holding/input).`
},
    safety: {
    title: "Safety – Barriere, Laser, PLC Sicurezza",
    sub: "Principi di validazione safety e test dispositivi.",
    tag: "Safety",
    content: `
BARREIRE FOTOELETTRICHE
───────────────────────
• Verifica:
  – Allineamento.
  – Tempo di risposta.
  – Muting (se presente).

LASER SAFETY
────────────
• Classe laser.
• Occhiali certificati.
• Zone di rischio.

PLC DI SICUREZZA (Pilz, Sick, ABB Jokab)
────────────────────────────────────────
• Verifica ingressi:
  – E-stop.
  – Interlock porte.
  – Barriere.
• Verifica uscite:
  – Contattori.
  – Safe torque off.

TEST PERIODICI
──────────────
• Simulare E-stop.
• Simulare apertura porta.
• Verificare arresto sicuro.`
},
    cnc: {
    title: "CNC – Fanuc / Siemens 840D",
    sub: "Parametri, zero pezzo, backup e diagnostica.",
    tag: "CNC",
    content: `
FANUC CNC
─────────
• Zero pezzo:
  – G54…G59.
• Backup:
  – Parametri.
  – Programmi.
  – Offsets.

SIEMENS 840D
────────────
• Zero pezzo:
  – Workpiece coordinate.
• Backup:
  – Archive.
  – NC/PLC.
• Diagnostica:
  – Alarms.
  – Trace.`
},
    backup_suite: {
    title: "Backup Suite – Robot / PLC / Router",
    sub: "Strategia di backup centralizzata su NAS.",
    tag: "Backup",
    content: `
ROBOT
─────
• FANUC:
  – All of Above.
• KUKA:
  – Archive.
• ABB:
  – Backup File System.

PLC
───
• Siemens:
  – Upload progetto.
• AB:
  – Upload.
• Beckhoff:
  – Esportare progetto.

ROUTER TELTONIKA
────────────────
• System → Backup → Download.
• Salvare su NAS.

STRUTTURA NAS
─────────────
• /Backup/Robot/<Brand>/<Impianto>/<Data>
• /Backup/PLC/<Brand>/<Impianto>/<Data>
• /Backup/Router/<Impianto>/<Data>`
},
    klrs_test: {
    title: "Collaudo Impianto Laser KLRS",
    sub: "Check list di collaudo per sistema laser KLRS.",
    tag: "KLRS",
    content: `
CHECK LIST
──────────
• Verifica prima calibrazione robot.
• Verifica Tool_1 Laser:
  – Lunghezza focale.
  – Orientamento.
• Verifica basi:
  – Base1 segmenti.
  – Base2/3 sidewall.
  – Base4 sottosquadri.
• Verifica punti di riferimento:
  – Sidewall.
  – Segmenti.
  – Sottosquadri.

TEST LINEA LASER
────────────────
• Uniformità.
• Allineamento con piastra.
• Tolleranza ±0.5 mm.

SAFETY
──────
• Barriere.
• PLC sicurezza.
• Interlock porte.

DOCUMENTAZIONE
──────────────
• Report collaudo.
• Backup finale robot/PLC/router.
• Salvataggio su NAS.`
},
    fanuc_vision: {
    title: "FANUC – Vision Calibration",
    sub: "Setup iRVision 2D/3D, grid calibration, offset e tracking.",
    tag: "iRVision",
    content: `
CALIBRAZIONE 2D
────────────────
1) Installare la griglia di calibrazione.
2) iRVision → SETUP → 2D Calibration.
3) Scattare immagine.
4) Verificare distorsione.
5) Salvare modello.

CALIBRAZIONE 3D
────────────────
1) Posizionare target 3D.
2) iRVision → SETUP → 3D Calibration.
3) Registrare punti.
4) Verificare offset Z.

TRACKING
────────
1) Vision Process → Tracking.
2) Configurare conveyor.
3) Impostare frame di tracking.

OFFSET
──────
1) Vision → Offset.
2) Associare processo al movimento robot.
`
},
    fanuc_tcp: {
    title: "FANUC – TCP & Frame Calibration",
    sub: "Calibrazione UTOOL, UFRAME, TCP 3‑Point, 6‑Point e Direct Entry.",
    tag: "FANUC",
    content: `
CALIBRAZIONE TCP (UTOOL)
────────────────────────
METODO 3‑POINT:
1) Puntare la punta del tool sullo stesso punto da 3 orientamenti diversi.
2) MENU → SETUP → TCP SETUP → 3‑POINT.
3) Registrare i 3 punti.
4) FANUC calcola XYZ + orientamento.

METODO 6‑POINT:
1) Puntare la punta del tool sullo stesso punto da 6 orientamenti.
2) MENU → SETUP → TCP SETUP → 6‑POINT.
3) Registrare i punti.
4) Maggiore precisione rispetto al 3‑Point.

DIRECT ENTRY:
Inserire manualmente XYZ + orientamento del tool.

────────────────────────
CALIBRAZIONE UFRAME
────────────────────────
METODO 3‑POINT:
1) Definire origine.
2) Definire X+.
3) Definire Y+.
4) FANUC calcola il frame.

METODO 4‑POINT:
Usato per superfici non ortogonali.

────────────────────────
CALIBRAZIONE TOOL OFFSET
────────────────────────
1) MENU → SETUP → TOOL OFFSET.
2) Usato per saldatura, laser, taglio, applicazioni con offset dinamici.
`
},
    kuka_setup: {
    title: "KUKA – Messa in Funzione, Calibrazione & Tool Laser",
    sub: "Procedura completa: prima calibrazione, tool laser, basi e punti di riferimento.",
    tag: "KUKA KR10 R1420",
    content: `
MESSA IN FUNZIONE ROBOT KUKA
────────────────────────────
Manuale operativo per setup robot antropomorfo KUKA KR10 R1420 e superiori.

Include:
• Prima calibrazione (Mastering)
• Calcolo Tool_1 Laser (preliminare)
• Calcolo Tool_1 Laser (finalizzazione)
• Calcolo Tool_1 Laser (orientamento)
• Calcolo Tool_2 Punta
• Calcolo Basi (Base1, Base2, Base3, Base4)
• Apprendimento punti di riferimento
• Correzione programmi di servizio

────────────────────────────
1. PRIMA CALIBRAZIONE (MASTERING)
────────────────────────────
Scopo:
Allineare gli zero elettrici (resolver) con gli zero meccanici del robot.

Kit EMD:
• Cavo robot → trasduttore
• Cavo trasduttore → calibratore
• Calibratore digitale

Procedura:
1) Jog robot vicino agli zero meccanici (tacche bianche su ogni giunto).
2) Collegare EMD alla porta X32.
3) Menu → Start-up → Master → EMD → Standard.
4) Portare asse in posizione corretta finché “EMD in master range” diventa verde.
5) Premere:
   • Accensione motori
   • Master
   • Start (hardware)
6) Ripetere per assi 1 → 5.
7) Asse 6: calibrazione visiva tramite tacche (usare lente di ingrandimento).
8) Menu → Start-up → Master → Reference → Master asse 6.

Risultato:
Nessun asse richiede più la prima calibrazione.

────────────────────────────
2. CALCOLO TOOL_1 LASER (PRELIMINARI)
────────────────────────────
Dati ottica:
• Lunghezza focale nominale: 330 mm
• Working distance: 390 mm
• Lunghezza nominale tool laser: ~587 mm (vettore Z)

Procedura:
1) Login Expert/Administrator.
2) Avviare programma TOOL_PREPARE.
3) Linea 6 → P1: piano ottico parallelo a Base 0.
4) Linea 9 → LIN Nominal: distanza 390 mm dal portalente alla piastra sidewall.
5) Attivare:
   • BASE 0 ($NULLFRAME)
   • TOOL 0 ($NULLFRAME)
6) Riposizionare laser SOLO in X/Y sul foro di riferimento.
7) Touch-up del punto LIN Nominal (linea 16).
8) Jog incrementale 100 mm → Z+:
   • Laser deve restare centrato.
9) Se non resta centrato:
   • Correggere orientamento ottica (0.1° → 1°)
   • Ripetere fino a stabilità.

Verifica:
Ruotare attorno a Z (A) → laser deve restare nel foro (tolleranza ±0.5 mm).

────────────────────────────
3. INSERIMENTO VALORI NOMINALI TOOL_1
────────────────────────────
Menu → Start-up → Tool/Base Management → Tool_1 Laser

Inserire:
• X = 100
• Y = -20
• Z = 587

Salvare.

────────────────────────────
4. CALCOLO TOOL_1 LASER (FINALIZZAZIONE)
────────────────────────────
1) Portare robot all’ultima istruzione del TOOL_PREPARE.
2) Disattivare programma.
3) Start-up → Tool/Base Management → Tool_1 Laser.
4) Avviare calibrazione XYZ 4‑Point.
5) Attivare:
   • Tool_1
   • Base 0
6) Touch-up punto 1 (posizione corrente).
7) Movimento in Tool:
   • Ruotare 90° attorno a Z (A).
8) Movimento in Base:
   • Riposizionare laser in X/Y sul foro.
9) Touch-up punto 2.
10) Ripetere rotazione 90° per punti successivi.

────────────────────────────
5. CALCOLO TOOL_1 LASER (ORIENTAMENTO)
────────────────────────────
Il sistema KLRS utilizza un tool laser con vettore X uscente dall’ottica.

Angoli di Eulero:
• A = -180°
• B = -90°
• C = 180°

────────────────────────────
6. CALCOLO TOOL_1 LASER (PAYLOAD)
────────────────────────────
Inserire massa e baricentro dell’ottica laser.

────────────────────────────
7. CALCOLO TOOL_2 PUNTA
────────────────────────────
Tool utilizzato per calcolo basi robot.

Procedura:
• Puntare tool su riferimento meccanico.
• Calibrazione XYZ 4‑Point.

────────────────────────────
8. CALCOLO BASI ROBOT
────────────────────────────
BASE 1 – Segmenti
BASE 2 – Sidewall 1
BASE 3 – Sidewall 2
BASE 4 – Sottosquadri

Metodo:
• Origine
• X+
• Y+
• Touch-up punti di riferimento

────────────────────────────
9. APPRENDIMENTO PUNTI DI RIFERIMENTO
────────────────────────────
• Punti sidewall
• Punti segmenti
• Punti sottosquadri
• Punti di centraggio

────────────────────────────
10. CORREZIONE PROGRAMMI DI SERVIZIO
────────────────────────────
• Aggiornare tool
• Aggiornare basi
• Verificare offset
• Validare traiettorie

────────────────────────────
NOTE FINALI
────────────────────────────
• Leggere sempre il manuale prima della messa in funzione.
• Tutte le operazioni devono essere eseguite da personale formato.
• La precisione del laser dipende dalla correttezza del TOOL_PREPARE.
`
},
    kuka_mykuka: {
    title: "KUKA – Registrazione & Upload File su my.KUKA",
    sub: "Procedura ufficiale per account, KRCDiag e caricamento file su Case.",
    tag: "KUKA",
    content: `
INTRODUZIONE
────────────────────────
my.KUKA permette di:
• Gestire il parco robot
• Accedere alla documentazione Xpert
• Aprire e monitorare Case di supporto
• Caricare file (KRCDiag, WoV, backup)
• Gestire licenze e parti di ricambio

Email utili:
• Service: service.italy@kuka.com
• Ricambi: parts.italy@kuka.com
• Training: college.italy@kuka.com
• Pre-vendita/licenze: robotsupport.italy@kuka.com
• RSPP: rspp.italy@kuka.com
• Manutenzione: cs-consulting.italy@kuka.com
• Amministrazione: amministrazione.italy@kuka.com

NOTE:
• Allegati ammessi: immagini, PDF, Word, Excel.
• Allegati > 2GB NON accettati.
• Ogni richiesta genera un Case → arriva SEMPRE una mail di conferma.

────────────────────────
CREAZIONE KRCDIAG
────────────────────────
1) Inserire chiavetta USB nel KRC4/KRC5.
2) Menu principale → File.
3) Archiviazione → USB (armadio).
4) Selezionare: **KrcDiag**.
5) Il file viene salvato sulla USB.
6) Caricarlo nel Case su my.KUKA.

Percorso:
File → Archiviazione → USB (armadio) → KrcDiag

────────────────────────
REGISTRAZIONE SU my.KUKA
────────────────────────
1) Aprire: https://my.kuka.com/s/login
2) Se non registrato → cliccare **Register**.
3) Inserire email aziendale.
4) Attendere validazione account.

────────────────────────
ACCESSO AI CASE
────────────────────────
1) Login → Training & Support.
2) Selezionare: **My Support Cases**.
3) Aprire il Case desiderato.
4) Entrare nella sezione **Related**.

────────────────────────
UPLOAD FILE SU CASE
────────────────────────
1) Dentro il Case → cliccare **Add Files**.
2) Cliccare **Upload Files**.
3) Selezionare file (KRCDiag, WoV, backup).
4) Confermare con **Open**.
5) Attendere upload.
6) Cliccare **Done**.

Il file apparirà nella lista allegati del Case.

────────────────────────
NOTE FINALI
────────────────────────
• Ogni file deve essere < 2GB.
• KRCDiag e WoV accelerano la diagnosi.
• Il caricamento corretto genera notifica automatica a KUKA.
`
},
    kuka_tcp: {
    title: "KUKA – TCP & Base Calibration",
    sub: "Calibrazione TCP tramite XYZ 4‑Point, XYZABC e Base tramite 3‑Point.",
    tag: "KUKA",
    content: `
CALIBRAZIONE TCP – XYZ 4‑POINT
──────────────────────────────
1) Puntare la punta del tool sullo stesso punto da 4 orientamenti.
2) MENU → Setup → Tool → XYZ 4‑Point.
3) Registrare i punti.
4) KUKA calcola XYZ + orientamento.

CALIBRAZIONE TCP – XYZABC
──────────────────────────
Inserimento manuale di:
• X Y Z
• A B C

CALIBRAZIONE BASE – 3‑POINT
────────────────────────────
1) Definire origine.
2) Definire X+.
3) Definire Y+.
4) KUKA calcola la base.

CALIBRAZIONE LASER (TOOL_PREPARE)
─────────────────────────────────
Procedura avanzata per allineamento laser:
• Posizionamento P1
• Avvicinamento 390 mm
• Allineamento manuale in BASE 0
• Verifica linearità asse Z
• Touch-up punto corretto
`
},
    kuka_laser: {
    title: "KUKA – Correzione Tool Laser",
    sub: "Procedura TOOL_PREPARE() per allineamento ottica laser e correzione tool.",
    tag: "KUKA KRL",
    content: `
PROGRAMMA TOOL_PREPARE() – KUKA KRL
────────────────────────────────────

SCOPO:
Allineare il laser pointer del robot KUKA rispetto al riferimento meccanico,
correggere il tool e verificare la linearità lungo l'asse Z in BASE 0 / TOOL 0.

────────────────────────────────────
1. INIZIALIZZAZIONE
────────────────────────────────────
• Attivazione interrupt STOPMESS
• BAS(#INITMOV) per inizializzare parametri movimento

Esempio:
GLOBAL INTERRUPT DECL 3 WHEN $STOPMESS==TRUE DO IR_STOPM()
INTERRUPT ON 3
BAS(#INITMOV,0)

────────────────────────────────────
2. RITORNO IN HOME
────────────────────────────────────
SPTP XHOME con:
• Velocità PTP 50%
• TOOL e BASE del punto HOME
• Collision monitor attivo

────────────────────────────────────
3. POSIZIONE DI PARTENZA (P1)
────────────────────────────────────
PTP XP1
HALT
→ Il robot si ferma per permettere all’operatore di verificare l’orientamento del laser.

────────────────────────────────────
4. AVVICINAMENTO DI 390 mm
────────────────────────────────────
LIN XNominal
HALT

L’operatore deve verificare:
→ distanza piastra ↔ bordo lente = 390 mm

────────────────────────────────────
5. ISTRUZIONI OPERATORE
────────────────────────────────────
• Parcheggiare specchi laser
• Attivare guida laser
• Muovere manualmente in BASE 0 (X/Y)
• Portare il laser nel foro di riferimento
• Touch-up del punto Nominal corretto

────────────────────────────────────
6. TOUCH-UP DEL PUNTO NOMINAL CORRETTO
────────────────────────────────────
LIN XNominal (CPDAT2)
HALT

────────────────────────────────────
7. VERIFICA LINEARITÀ ASSE Z
────────────────────────────────────
• Impostare jogging incrementale a 100 mm
• Jog Z+ BASE 0 / TOOL 0
→ Il laser deve rimanere nel foro di riferimento

Se NON rimane centrato:
• Jog a 0.1 mm
• Ruotare in direzione opposta all’errore
• Correggere metà dello scostamento
• Ripetere fino a stabilità

────────────────────────────────────
8. TOUCH-UP DEL PUNTO CORRETTO
────────────────────────────────────
LIN XCorrected (CPDAT4)
HALT

────────────────────────────────────
9. FINE PROCEDURA
────────────────────────────────────
• NON muovere più il robot
• Procedere alla TOOL CALCULATION (Tool 1)
• Consultare manuale per dettagli aggiuntivi

────────────────────────────────────
NOTE:
Il programma TOOL_PREPARE() è una procedura di manutenzione avanzata
per allineamento ottico laser su robot KUKA KRC4/KRC5.
`
},
    abb_tcp: {
    title: "ABB – TCP & WorkObject Wizard",
    sub: "Wizard completo per TCP, WorkObject e calibrazioni 3/6 punti.",
    tag: "ABB",
    content: `
TCP WIZARD
──────────
1) Jog tool sul punto di riferimento.
2) Scegliere metodo:
   • 3‑Point
   • 6‑Point
   • Auto
3) Registrare punti.
4) RobotStudio calcola il TCP.

WORKOBJECT
──────────
1) Definire origine.
2) Definire X+.
3) Definire Y+.
4) ABB calcola il WorkObject.

AUTO TCP
────────
Usa un target sferico per calcolo automatico.
`
},
    yaskawa_tcp: {
    title: "Yaskawa – Tool Data Set",
    sub: "Calibrazione tool XYZ + orientamento tramite Data Set.",
    tag: "Yaskawa",
    content: `
TOOL DATA SET
──────────────
1) MENU → Robot → Tool Data.
2) Selezionare Tool.
3) Metodo:
   • XYZ
   • Orientation
4) Registrare punti.
5) Motoman calcola il tool.

VERIFICA
────────
Jog in TOOL coordinate:
→ La punta deve rimanere sul punto di riferimento.
`
},
    comau_tcp: {
    title: "Comau – TCP Wizard",
    sub: "Procedura guidata per la calibrazione del TCP.",
    tag: "Comau",
    content: `
TCP WIZARD
──────────
1) MENU → Setup → TCP Wizard.
2) Puntare tool sul punto di riferimento.
3) Registrare:
   • Punto 1
   • Punto 2
   • Punto 3
4) Comau calcola XYZ + orientamento.

VERIFICA
────────
Jog in TOOL coordinate.
`
},
    ur_tcp: {
        title: "Universal Robots – TCP & Base Wizard",
        sub: "Wizard completo per TCP e Base su UR.",
        tag: "UR",
        content: `
TCP WIZARD
──────────
1) Installation → TCP.
2) Puntare tool sul punto di riferimento.
3) Registrare:
   • Punto 1
   • Punto 2
   • Punto 3
4) UR calcola il TCP.

BASE WIZARD
───────────
1) Installation → Base.
2) Registrare:
   • Origine
   • X+
   • Y+
3) UR calcola la base.

VERIFICA
────────
Jog in Base coordinate.
`
},
    win: {
        title: "Windows – Scorciatoie e Funzioni",
        sub: "Scorciatoie di sistema, diagnostica rapida e strumenti nativi.",
        tag: "Sistema Windows",
        content: `
SCORCIATOIE DI SISTEMA
──────────────────────
CTRL + SHIFT + WIN + B     → Riavvia il driver video (utile per blocchi schermo)
CTRL + SHIFT + WIN + ALT   → Accede a Microsoft 365 (hai a disposizione outlook, Teams, Word, Excel, ecc.)
CTRL + ALT + DEL           → Menu sicurezza (Task Manager, blocco, cambio utente)
WIN + L                    → Blocca immediatamente il PC
WIN + D                    → Mostra il desktop
WIN + E                  	 → Apre Esplora File
WIN + I                  	 → Apre Impostazioni
WIN + X                    → Menu avanzato (PowerShell, Gestione dispositivi, ecc.)
ALT + TAB                  → Cambia finestra attiva
WIN + TAB                  → Vista attività

SCORCIATOIE DIAGNOSTICA
───────────────────────
WIN + R → "mrt"          → Strumento rimozione malware Microsoft
WIN + R → "msinfo32"     → Informazioni di sistema
WIN + R → "perfmon"      → Monitoraggio prestazioni
WIN + R → "eventvwr"     → Visualizzatore eventi
WIN + R → "devmgmt.msc"  → Gestione dispositivi
WIN + R → "temp"     		 → File inutili - seleziona tutto e elimina
WIN + R → "%temp%"       → File inutili - seleziona tutto e elimina 
WIN + R → "cleanmgr"     → Pulizia disco`
 
    },
    diag: {
        title: "Diagnostica PC Completa",
        sub: "Riparazione file di sistema, dischi e analisi rete.",
        tag: "Salute sistema",
        content: `
RIPARAZIONE FILE DI SISTEMA
───────────────────────────
sfc /scannow
    → Analizza e ripara i file di sistema corrotti.

DISM /Online /Cleanup-Image /RestoreHealth
    → Ripara l'immagine di Windows utilizzando i file di origine.

CONTROLLO DISCO
───────────────
chkdsk /f
    → Controlla e ripara errori logici sul disco selezionato.

ANALISI RETE
────────────
ping <IP> -t
    → Test continuo della stabilità della connessione verso un host.

tracert <IP>
    → Traccia il percorso dei pacchetti verso un host.

netstat -ano
    → Elenco porte aperte e PID associati.

STRUMENTI GRAFICI
─────────────────
Monitoraggio risorse
Gestione attività
Visualizzatore eventi
Gestione dispositivi
Pulizia disco`
    },
    net: {
        title: "Networking (VPN, Teltonika, Ubiquiti, Routing)",
        sub: "Comandi rete, router industriali e gestione infrastruttura.",
        tag: "Rete & Routing",
        content: `
COMANDI RETE WINDOWS
────────────────────
ipconfig /all
    → Informazioni complete su tutte le interfacce di rete.

arp -a
    → Tabella ARP (associazione IP ↔ MAC).

route print
    → Visualizza la tabella di routing.

route add <IP> mask <MASK> <GATEWAY>
    → Aggiunge una route statica.

route delete <IP>
    → Rimuove una route.

TELTONIKA (RUT901, RUT240, RUTX)
────────────────────────────────
192.168.1.1 → Status → Network
    → Stato WAN/LAN.

Services → VPN → OpenVPN / WireGuard
    → Configurazione tunnel VPN.

Network → Firewall → Port Forwarding
    → Apertura porte verso dispositivi interni.

Troubleshoot → Logs
    → Log di sistema e diagnostica.

System → Reboot
    → Riavvio router.

UBIQUITI UNIFI
──────────────
Devices
    → Stato Access Point e Switch.

Clients
    → Elenco client connessi.

Networks
    → VLAN, DHCP, routing.

Tools → Ping / Trace
    → Diagnostica integrata.

Port Manager
    → Stato porte degli switch.`
    }, 
    
    
    telto: {
        title: "Configurazione Router Teltonika",
        sub: "Procedura completa di prima configurazione (SIM, LAN, APN, Wi‑Fi, RMS, Backup).",
        tag: "Teltonika RUT",
        content: `
PRIMA CONFIGURAZIONE ROUTER TELTONIKA
─────────────────────────────────────

1) Inserire la SIM nello slot SIM1.
2) Collegare antenna MOBILE e antenna Wi‑Fi sul lato SIM1.
3) Alimentare il router.
4) Collegare il PC alla porta LAN1 tramite cavo Ethernet.
5) Aprire il browser e digitare: http://192.168.1.1/login
6) Accedere con username e password presenti sul retro del router.
7) Al primo accesso viene richiesto il cambio password → usare: Assistenza25

ROUTER GIÀ CONFIGURATO
──────────────────────
IP: 172.31.1.1
User: Assistenza25
Pass: Assistenza.25

─────────────────────────────────────
1. SEZIONE GENERAL
─────────────────────────────────────
Language: English
Configuration mode: Basic
Time zone: UTC

→ Premere NEXT

─────────────────────────────────────
2. SEZIONE LAN
─────────────────────────────────────
IPv4 address: 172.31.1.1
IPv4 netmask: 255.255.0.0

DHCP:
• Enable DHCP → ON
• Start IP → 172.31.1.1
• End IP → 172.31.1.249
• Lease time → 12 Hours

→ Premere NEXT

─────────────────────────────────────
3. SEZIONE MOBILE (APN + PIN SIM)
─────────────────────────────────────
Auto APN: OFF
APN: Custom
Custom APN: globalnet
Authentication: None
PIN SIM: 9398

→ Premere NEXT

─────────────────────────────────────
4. SEZIONE WIRELESS
─────────────────────────────────────
Enable Wi‑Fi: ON
ESSID: GLM_ + NOME_COMMESSA
Password: Assistenza25

→ Premere NEXT

─────────────────────────────────────
5. SEZIONE RMS
─────────────────────────────────────
Connection type: Standby
Hostname: rms.teltonika-networks.com
Port: 15009

→ Premere FINISH

─────────────────────────────────────
6. BACKUP CONFIGURAZIONE
─────────────────────────────────────
System → Backup → Backup configuration
• Premere DOWNLOAD
• Salvare il file nella cartella dedicata sul NAS

Procedura completata.`
    },  
    
    
   telto_sms: {
    title: "Teltonika – Comandi SMS Router (RUT/TRB)",
    tag: "Teltonika",
    content: `
<h3>Comandi SMS Teltonika (Router RUT / TRB)</h3>

<h4>🔄 Sistema</h4>
• reboot — Riavvia router  
• restore — Ripristino fabbrica  
• userdefaults — Ripristino configurazione utente  
• fw_upgrade — Aggiornamento firmware da server  

<h4>📡 Mobile Data</h4>
• mobileon — Attiva dati mobili  
• mobileoff — Disattiva dati mobili  
• reset_conn — Reset connessione mobile  
• cellular or cellcfg — Cambia impostazioni mobile   

<h4>📶 Wi‑Fi</h4>
• wifion — Attiva Wi‑Fi  
• wifioff — Disattiva Wi‑Fi  

<h4>🔐 Accesso</h4>
• sshon — Abilita SSH  
• sshoff — Disabilita SSH  
• webon — Abilita WebUI  
• weboff — Disabilita WebUI  

<h4>🔗 OpenVPN</h4>
• vpnon — Avvia OpenVPN  
• vpnoff — Ferma OpenVPN  
• vpnstatus — Stato OpenVPN  

<h4>🧩 Profili</h4>
• profiles — Lista profili  
• pr <nome> or pr — Cambia profilo  
• profdisp — Mostra profili disponibili  

<h4>📡 RMS</h4>
• rms_status — Stato RMS  
• rms_connect — Connessione RMS  
• rms_on — Attiva RMS  
• rms_off — Disattiva RMS  

<h4>📟 I/O</h4>
• iostatus — Stato I/O  
• ioset — Cambia stato I/O  

<h4>🛡 Sicurezza / Blocco</h4>
• ip_unblock — Sblocca IP bloccati  

<h4>🧰 API / UCI</h4>
• api — API via SMS  
• uci — Comandi UCI  

<h4>📲 SIM</h4>
• switch_sim — Cambia SIM fisica   

<h4>📋 Altro</h4>
• status — Stato router
• monitoring_status — Monitoraggio Stato router
• more — Informazioni aggiuntive

<br>
<b>Autorizzazione:</b> tutti i comandi richiedono password admin del router.
`
}, 


 telto_sim: {
    title: "SIM Clienti – Telecom26",
    tag: "Telecom26",
    content: ` 
<h2>SIM Telecom26 – Dettagli</h2>

<b>Contatti:</b><br>
WhatsApp: <a href="https://wa.me/41763626974" target="_blank">+41 763626974</a><br>
Email: <a href="mailto:francescod@telecom26.ch">francescod@telecom26.ch</a><br>
Email: <a href="mailto:alerts@telecom26.ch">alerts@telecom26.ch</a><br>
Email: <a href="mailto:help@telecom26.ch">help@telecom26.ch</a><br>

<h2>APN="globalnet"</h2>

<h2>SIM Registrate</h2>

<table>
<tr><th>Tipo</th><th>Alias</th><th>ICC</th><th>PIN</th><th>PUK</th><th>PRIMARY MSISDN (numero tel)</th><th>Password Router</th></tr>
<tr><td>SIM</td><td>SIM_C01_KLRS_2019_BARI</td><td>8988306002411703817</td><td>1546</td><td>18575269</td><td>+8832100004988</td><td>Assistenza.25</td></tr>
<tr><td>SIM</td><td>SIM_C02_KLS+R_2020_POZNAN_POLONIA</td><td>8988306002411714541</td><td>7778</td><td>22447049</td><td>+8832100020018</td><td>Assistenza_25</td></tr>
<tr><td>SIM</td><td>SIM_C03_KLS+R_2020_TATABANYA</td><td>8988306002411703809</td><td>9398</td><td>83886426</td><td>+8832100001872</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C04_KLRS_2022_PUNE</td><td>8988306002411714525</td><td>6238</td><td>88416615</td><td>+8832100011402</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C05_KLS+R_2022_BURGOS</td><td>8988306002411714558</td><td>7001</td><td>71547702</td><td>+8832100004484</td><td>Assistenza.25</td></tr>
<tr><td>SIM</td><td>SIM_C06_KRS_2024_SUMITOMO_GIAPPONE</td><td>8988306002411714566</td><td>5311</td><td>05956819</td><td>+8832100004694</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C07_KRS_2022_TOKYO_GIAPPONE</td><td>8988306002411714574</td><td>9804</td><td>04843773</td><td>+8832100005109</td><td>Assistenza25</td></tr>  
<tr><td>SIM</td><td>SIM_C08_KRS_2022_TATABANYA</td><td>8988306002411703825</td><td>8865</td><td>6573813</td><td>+8832100003293</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C09_KRS_2023_NOKIAN</td><td>8988306002411714582</td><td>6576</td><td>87754084</td><td>+8832100010222</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_TEST_INTERNI</td><td>8988306002411714509</td><td>5001</td><td>13843538</td><td>+8832100004681</td><td>Fl4v14n0!</td></tr>
<tr><td>SIM</td><td>SIM_C11_KRS_2023_SUMITOMO_TURCHIA</td><td>8988306002411714590</td><td>7388</td><td>31973450</td><td>+8832100004891</td><td>Assistenza25</td></tr>
                    
<tr><td>SIM</td><td>SIM_C13_KLRS_2024_ROMANIA</td><td>8900124071001741417</td><td>0960</td><td>85502311</td><td>+8832100005613</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C14_MEM_2024_POZNAN</td><td>8988306002411703775</td><td>6539</td><td>99002993</td><td>+8832100004940</td><td>Assistenza25</td></tr>

<tr><td>SIM</td><td>SIM_C16_KLS+R_2023_MEXICO</td><td>8988306002411714517</td><td>9825</td><td>85288806</td><td>+8832100006159</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C17_1_KLRS_2023_AIKEN_USA</td><td>8988306002411714533</td><td>0530</td><td>47675166</td><td>+8832100005142</td><td>Assistenza_25</td></tr>
<tr><td>SIM</td><td>GREENTECH_WIFI_HOME_GLM</td><td>8988306002411703791</td><td>8153</td><td>87229682</td><td>+8832100008159</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C19_KLRS_2023_JOILIETTE_CANADA</td><td>8988306002411703833</td><td>2410</td><td>8439553</td><td>+8832100003401</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C20_KRS_2024_JAPAN</td><td>8988306002411703841</td><td>9814</td><td>40815402</td><td>+8832100007355</td><td>Assistenza25</td></tr>

<tr><td>SIM</td><td>SIM_C22_Laboratorio</td><td>8988306002411703783</td><td>4242</td><td>53252892</td><td>+8832100010511</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>SIM_C23_KRS_2026_THAILANDIA</td><td>8988306002411703858</td><td>7602</td><td>83610519</td><td>+8832100012117</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>GREENTECH_ORDER-1003_SIM06</td><td>8988306002411703866</td><td>7605</td><td>65956421</td><td>+8832100012273</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>GREENTECH_ORDER-1003_SIM07</td><td>8988306002411703874</td><td>9352</td><td>66196253</td><td>+8832100007347</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>GREENTECH_ORDER-1003_SIM08</td><td>8988306002411703882</td><td>7490</td><td>64456135</td><td>+8832100008175</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>GREENTECH_ORDER-1003_SIM09</td><td>8988306002411703890</td><td>4664</td><td>50752606</td><td>+8832100005590</td><td>Assistenza25</td></tr>
<tr><td>SIM</td><td>GREENTECH_ORDER-1003_SIM10</td><td>8988306002411703924</td><td>6751</td><td>62695905</td><td>+8832100008136</td><td>Assistenza25</td></tr>
</table>
<br><br>
<table> 
<tr><th>Tipo</th><th>Alias</th><th>ICC</th><th>PIN</th><th>PUK</th><th>PRIMARY MSISDN (numero tel)</th><th>Stato</th></tr>          
<tr><td>eSIM</td><td>eSIM1_Tommaso</td><td>8900424101001818993</td><td>7950</td><td>74287680</td><td>+8832100012203</td><td>ASSOCIATA</td></tr>
<tr><td>eSIM</td><td>eSIM1_Michele</td><td>8900424101001819975</td><td>9842</td><td>79030419</td><td>+8832100006634</td><td>DISATTIVATA</td></tr>
<tr><td>eSIM</td><td>eSIM2_Michele</td><td>8900424101001819983</td><td>3973</td><td>76981296</td><td>+8832100007510</td><td>DISATTIVATA</td></tr>
<tr><td>eSIM</td><td>eSIM3_Michele</td><td>8900424101001819991</td><td>1393</td><td>85575097</td><td>+8832100005461</td><td>ASSOCIATA</td></tr>
<tr><td>eSIM</td><td>eSIM4_Alias</td><td>8900424101001820007</td><td>9999</td><td>03138505</td><td>+8832100005584</td><td>ATTIVA e NON ASSOCIATA</td></tr>
<tr><td>eSIM</td><td>eSIM5_Alias</td><td>8900424101001820015</td><td>3223</td><td>31919297</td><td>+8832100005822</td><td>ATTIVA e NON ASSOCIATA</td></tr>
</table>
<br><br>
<table>
<tr><th>Alias</th><th>Link Installazione per Android</th><th>QR Code</th></tr>
<tr>
  <td>eSIM4_Android_Alias</td>
  <td>
    <a href="https://esimsetup.android.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$B728-F9PH$1.3.6.1.4.1.53460.7.5.1.1">
      Apri_Link_eSIM4_Android
    </a> 
    <a href="https://www.telecom26.ch/resources/telecom26-short-user-manual-android-may-25.pdf">
      QuickStart_Guide_eSIM_Android
    </a>
  </td>
  <td>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://esimsetup.android.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$B728-F9PH$1.3.6.1.4.1.53460.7.5.1.1" width="40">
  </td>
</tr> 

<tr>
  <td>eSIM5_Android_Alias</td>
  <td>
    <a href="https://esimsetup.android.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$1RLY-6I2C$1.3.6.1.4.1.53460.7.5.1.1">
      Apri_Link_eSIM5_Android
    </a> 
    <a href="https://www.telecom26.ch/resources/telecom26-short-user-manual-android-may-25.pdf">
      QuickStart_Guide_eSIM_Android
    </a>
  </td>
  <td>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://esimsetup.android.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$1RLY-6I2C$1.3.6.1.4.1.53460.7.5.1.1" width="40">
  </td>
</tr>
</table>
<br><br>
<table>
<tr><th>Alias</th><th>Link Installazione per Iphone</th><th>QR Code</th></tr>
<tr>
  <td>eSIM4_Iphone_Alias</td>
  <td>
    <a href="https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$B728-F9PH$1.3.6.1.4.1.53460.7.5.1.1">
      Apri_Link_eSIM4_Iphone
    </a>  
    <a href="https://www.telecom26.ch/resources/telecom26-short-user-manual-ios-may-25.pdf">
      QuickStart_Guide_eSIM_Iphone
    </a>
  </td>
  <td>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$B728-F9PH$1.3.6.1.4.1.53460.7.5.1.1" width="40">
  </td>
</tr>

<tr>
  <td>eSIM5_Iphone_Alias</td>
  <td>
    <a href="https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$1RLY-6I2C$1.3.6.1.4.1.53460.7.5.1.1">
      Apri_Link_eSIM5_Iphone
    </a>  
    <a href="https://www.telecom26.ch/resources/telecom26-short-user-manual-ios-may-25.pdf">
      QuickStart_Guide_eSIM_Iphone
    </a>
  </td>
  <td>
    <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://esimsetup.apple.com/esim_qrcode_provisioning?carddata=LPA:1$dp-plus-par07-01.oasis-smartsim.com$1RLY-6I2C$1.3.6.1.4.1.53460.7.5.1.1" width="40">
  </td>
</tr>
</table>  
<br><br>
<table>
<tr><th>Link Configurazione APN per Iphone</th></tr>
<tr>
  <td>
	 <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://t26.ch/APN-globalnet" 
	     width="40" 
	     alt="QR APN globalnet">
  </td>
</tr>
</table>

<h2>Note</h2>
• APN unico: globalnet  
• Alias usati per identificare impianti laser  
• PIN/PUK forniti da Telecom26  
`
},




    auto: {
        title: "Automazione Industriale (Fanuc, KUKA, ABB, Yaskawa, Comau, UR)",
        sub: "Funzioni chiave per robot industriali multi-brand.",
        tag: "Robotica",
        content: `
FANUC
─────
MENU → 0 → 6
    → Backup completo (All of Above).

MENU → 0 → 3
    → Gestione file TP/KAREL.

I/O → UOP
    → Stato segnali di ciclo (IMSTP, HOLD, SFSPD).

SHIFT + FWD
    → Avvio ciclo in modalità passo-passo.

FCTN → Abort All
    → Stop immediato di tutti i task.

KUKA (KRC4/KRC5)
────────────────
Display → Variable → Single
    → Monitor variabili in tempo reale.

Configuration → Inputs/Outputs
    → Stato I/O digitali.

Menu → Start-up → Archive
    → Backup completo del controller.

Menu → Diagnosis → Message
    → Log errori KSS.

CTRL + ESC
    → Passaggio rapido tra HMI e Windows Embedded.

ABB
───
PP to Main
    → Reset del programma principale.

Backup → File System → Backup
    → Backup completo.

I/O → Digital I/O
    → Stato ingressi/uscite.

Jogging → Coordinate
    → Cambio sistema di riferimento.

YASKAWA MOTOMAN
───────────────
F1 + F2
    → Menu manutenzione.

Utility → Backup/Restore
    → Backup e ripristino.

INTERLOCK + TEST START
    → Avvio ciclo in sicurezza.

COMAU
─────
CTRL + F12
    → Diagnostica avanzata.

System → Backup
    → Archivio completo.

I/O Monitor
    → Stato segnali.

UNIVERSAL ROBOTS (UR)
─────────────────────
Log → Errors
    → Ultimi errori.

Installation → I/O Setup
    → Configurazione I/O.

Move → Freedrive
    → Movimento manuale del robot.

Program → Structure
    → Visualizzazione gerarchica del programma.`
    },
    batch: {
        title: "Batch Scripting Toolbox",
        sub: "Menu, log, popup, beep e gestione cartelle.",
        tag: "Automazione .BAT",
        content: `
MENU INTERATTIVO BASE
─────────────────────
@echo off
:MENU
cls
echo 1) Backup
echo 2) Log Viewer
echo 3) Exit
set /p choice=Seleziona:
if %choice%==1 goto BACKUP
if %choice%==2 goto LOG
if %choice%==3 exit
goto MENU

LOG CON TIMESTAMP
──────────────────
echo [%date% %time%] Operazione completata >> log.txt

POPUP WINDOWS (via PowerShell)
──────────────────────────────
powershell -command "Add-Type -AssemblyName PresentationFramework;[System.Windows.MessageBox]::Show('Operazione completata')"

BEEP DI NOTIFICA
────────────────
powershell -c "[console]::beep(1000,300)"

CARTELLE CON TIMESTAMP
──────────────────────
set ts=%date:~-4%%date:~3,2%%date:~0,2%_%time:~0,2%%time:~3,2%
mkdir Backup_%ts%`
    },
    ps: {
        title: "PowerShell Toolbox Avanzato",
        sub: "Moduli per rete, sistema, file e diagnostica hardware.",
        tag: "PowerShell",
        content: `
RETE
────
Get-NetIPAddress
    → Mostra gli indirizzi IP configurati.

Test-NetConnection <IP> -Port <PORT>
    → Test di connettività e porta.

Get-NetRoute
    → Tabella di routing.

Get-DnsClientCache
    → Cache DNS.

SISTEMA
───────
Get-Process
    → Elenco processi attivi.

Get-Service
    → Elenco servizi.

Restart-Service <nome>
    → Riavvio di un servizio.

Get-EventLog -LogName System -Newest 50
    → Ultimi eventi di sistema.

FILE
────
Get-ChildItem -Recurse
    → Elenco ricorsivo dei file.

Copy-Item -Recurse
    → Copia cartelle e contenuti.

Compress-Archive
    → Crea archivi ZIP.

DIAGNOSTICA HARDWARE
────────────────────
Get-WmiObject Win32_LogicalDisk
    → Stato dei dischi.

Get-WmiObject Win32_ComputerSystem
    → Informazioni hardware del sistema.

Get-WmiObject Win32_NetworkAdapter
    → Informazioni sulle schede di rete.`
    },
    prod: {
        title: "Office / Browser / Produttività",
        sub: "Scorciatoie per documenti, web e workflow quotidiano.",
        tag: "Produttività",
        content: `
OFFICE (Word, Excel, PowerPoint)
───────────────────────────────
CTRL + S
    → Salva documento.

CTRL + P
    → Stampa.

CTRL + Z / CTRL + Y
    → Annulla / Ripristina.

CTRL + SHIFT + L
    → Applica elenco puntato.

CTRL + F
    → Cerca nel documento.

BROWSER (Edge, Chrome)
──────────────────────
CTRL + T
    → Nuova scheda.

CTRL + SHIFT + T
    → Riapri l'ultima scheda chiusa.

CTRL + L
    → Vai alla barra indirizzi.

CTRL + SHIFT + N
    → Modalità incognito.

CTRL + J
    → Download.

PRODUTTIVITÀ WINDOWS
────────────────────
WIN + V
    → Cronologia appunti.

WIN + SHIFT + S
    → Strumento cattura schermata.

WIN + .
    → Emoji.

WIN + M
    → Minimizza tutte le finestre.

WIN + 1 / 2 / 3…
    → Avvia app fissate sulla barra delle applicazioni.`
    }
};

