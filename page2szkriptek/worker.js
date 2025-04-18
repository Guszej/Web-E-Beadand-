let worker;

function startWorker() {
  if (typeof(Worker) !== "undefined") {
    if (typeof(worker) === "undefined") {
      const workerCode = `
        onmessage = function(event) {
          if (event.data === "start") {
            let result = loop(); 
            postMessage(result); 
          }
        };
        
        function loop() {
          let total = 0;
          for (let i = 0; i < 10000000000; i++) {
            total += i;
          }
          return "A számítás eredménye: " + total;
        }
      `;

      const blob = new Blob([workerCode], { type: "application/javascript" });
      const workerURL = URL.createObjectURL(blob);
      worker = new Worker(workerURL);

      worker.onmessage = function(event) {
        document.getElementById("result").textContent = event.data;
      };

      worker.onerror = function(error) {
        console.error("Web Worker hiba: " + error.message);
      };

      worker.postMessage("start");
    }
  } else {
    alert("A Web Workers nem támogatott a böngésződben.");
  }
}

function stopWorker() {
  if (worker) {
    worker.terminate();
    worker = undefined;
    document.getElementById("result").textContent = "Számítás leállítva.";
  }
}