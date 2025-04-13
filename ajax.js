const API_URL = "http://gamf.nhely.hu/ajax2/";
const CODE = "MG7V5Jsec174";

function validateInputs(...inputs) {
  return inputs.every(i => i.trim() !== "" && i.length <= 30);
}

function readData() {
  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({ op: "read", code: CODE })
  })
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("data");
    container.innerHTML = "";
    let heights = [];
    data.list.forEach(item => {
      container.innerHTML += `ID: ${item.id}, Név: ${item.name}, Magasság: ${item.height}, Súly: ${item.weight}<br>`;
      heights.push(parseInt(item.height));
    });

    const stat = document.getElementById("stat");
    const sum = heights.reduce((a, b) => a + b, 0);
    const avg = sum / heights.length;
    const max = Math.max(...heights);
    stat.innerHTML = `<br>Magasságok összeg: ${sum}, átlag: ${avg.toFixed(2)}, legnagyobb: ${max}`;
  });
}

function createData() {
  const name = document.getElementById("createName").value;
  const height = document.getElementById("createHeight").value;
  const weight = document.getElementById("createWeight").value;

  if (!validateInputs(name, height, weight)) {
    document.getElementById("createMsg").innerText = "Hibás bevitel!";
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({ op: "create", name, height, weight, code: CODE })
  })
  .then(res => res.text())
  .then(result => {
    document.getElementById("createMsg").innerText = `Válasz: ${result}`;
    readData();
  });
}

function getDataForId() {
  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({ op: "read", code: CODE })
  })
  .then(res => res.json())
  .then(data => {
    const id = document.getElementById("updateId").value;
    const item = data.list.find(i => i.id === id);
    if (item) {
      document.getElementById("updateName").value = item.name;
      document.getElementById("updateHeight").value = item.height;
      document.getElementById("updateWeight").value = item.weight;
    } else {
      alert("Nem található ilyen ID!");
    }
  });
}

function updateData() {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const height = document.getElementById("updateHeight").value;
  const weight = document.getElementById("updateWeight").value;

  if (!validateInputs(name, height, weight)) {
    document.getElementById("updateMsg").innerText = "Hibás bevitel!";
    return;
  }

  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({ op: "update", id, name, height, weight, code: CODE })
  })
  .then(res => res.text())
  .then(result => {
    document.getElementById("updateMsg").innerText = `Válasz: ${result}`;
    readData();
  });
}

function deleteData() {
  const id = document.getElementById("deleteId").value;

  fetch(API_URL, {
    method: "POST",
    body: new URLSearchParams({ op: "delete", id, code: CODE })
  })
  .then(res => res.text())
  .then(result => {
    document.getElementById("deleteMsg").innerText = `Válasz: ${result}`;
    readData();
  });
}