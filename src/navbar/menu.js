export default function Menu() {
    const menuItems = {
        'ramen.jpg': { name: 'Ramen', price: 500 },
        'soba.jpg': { name: 'Soba', price: 200 },
        'udon.jpg': { name: 'Udon', price: 150 },
        'yobisoba.jpg': { name: 'Yobisoba', price: 100 }
    };

    let html = '';

    for (let item of Object.keys(menuItems)) {
        const menuItem = menuItems[item];
        html += `
            <div class="dish">
                <img src="./assets/img/${item}" alt="${menuItem.name}">
                <span class="name">${menuItem.name}</span>
                <span class="price">₹${menuItem.price}</span>
            </div>
        `;
    }

    content.classList.add('menu');
    return html;
}
