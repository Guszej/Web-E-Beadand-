// A Web Worker futtatja ezt a kódot
onmessage = function(event) {
    if (event.data === "start") {
        let result = loop(); // Hosszú futású feladat
        postMessage(result); // Eredmény visszaküldése a fő szálra
    }
};

// Egy hosszú futású feladat szimulálása
function loop() {
    let total = 0;
    for (let i = 0; i < 10000000000; i++) {
        total += i; // Számítás (szimulálva)
    }
    return "A számítás eredménye: " + total;
}