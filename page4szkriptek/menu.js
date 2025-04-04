class MenuItem {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    render() {
      const option = document.createElement("option");
      option.value = this.price;
      option.text = `${this.name} - ${this.price} Ft`;
      return option;
    }
  }
  
  const menu = [
    new MenuItem("Húsleves", 1200, "leves"),
    new MenuItem("Gulyásleves", 1400, "leves"),
    new MenuItem("Zöldségleves", 1000, "leves"),
  
    new MenuItem("Rántott hús", 2500, "foetel"),
    new MenuItem("Grillezett csirke", 2700, "foetel"),
    new MenuItem("Tojásos nokedli", 2200, "foetel"),
  
    new MenuItem("Ásványvíz", 500, "ital"),
    new MenuItem("Kóla", 600, "ital"),
    new MenuItem("Narancslé", 700, "ital")
  ];
  
  function populateSelects() {
    const soupSelect = document.getElementById("soup");
    const mainSelect = document.getElementById("main");
    const drinkSelect = document.getElementById("drink");
  
    menu.forEach(item => {
      if (item.category === "leves") {
        soupSelect.appendChild(item.render());
      } else if (item.category === "foetel") {
        mainSelect.appendChild(item.render());
      } else if (item.category === "ital") {
        drinkSelect.appendChild(item.render());
      }
    });
  }
  
  function calculateTotal() {
    const soupPrice = parseInt(document.getElementById("soup").value) || 0;
    const mainPrice = parseInt(document.getElementById("main").value) || 0;
    const drinkPrice = parseInt(document.getElementById("drink").value) || 0;
    const total = soupPrice + mainPrice + drinkPrice;
  
    document.getElementById("total").innerText = `Összesen: ${total} Ft`;
  }
  
  window.onload = populateSelects;
  