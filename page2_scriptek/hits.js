document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.hits) {
      localStorage.hits = Number(localStorage.hits) + 1;
    } else {
      localStorage.hits = 1;
    }
    const localHits = document.getElementById("localHits");
    if (localHits) {
      localHits.textContent = "Total Hits: " + localStorage.hits;
    }

    if (sessionStorage.hits) {
      sessionStorage.hits = Number(sessionStorage.hits) + 1;
    } else {
      sessionStorage.hits = 1;
    }
    const sessionHits = document.getElementById("sessionHits");
    if (sessionHits) {
      sessionHits.textContent = "Total Hits: " + sessionStorage.hits;
    }
  });