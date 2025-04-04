// Alap étel osztály
class Food {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    render() {
        const item = document.createElement('div');
        item.className = 'menu-item';
        item.innerHTML = `<strong>${this.name}</strong>: ${this.price.toFixed(2)} Ft`;
        return item;
    }
}

// Ital osztály, amely örökli a Food osztályt
class Drink extends Food {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }
    
    render() {
        const item = super.render();
        item.innerHTML += ` (${this.size} ml)`;
        return item;
    }
}

// Menü osztály
class Menu {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    render() {
        const menuContainer = document.createElement('div');
        menuContainer.className = 'menu';
        
        this.items.forEach(item => {
            menuContainer.appendChild(item.render());
        });
        
        document.body.appendChild(menuContainer);
    }
}

// Menü példányosítása és feltöltése
const menu = new Menu();
menu.addItem(new Food('Margherita Pizza', 2500));
menu.addItem(new Food('Húsimádó Burger', 3200));
menu.addItem(new Drink('Coca Cola', 600, 500));
menu.addItem(new Drink('Narancslé', 700, 400));

// Menü megjelenítése
document.addEventListener('DOMContentLoaded', () => {
    menu.render();
});
