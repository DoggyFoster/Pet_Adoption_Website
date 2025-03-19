document.addEventListener("DOMContentLoaded", () => {
    const buyNowCart = JSON.parse(localStorage.getItem("buyNow")) || [];
    summaryContainer = document.getElementById("buy-summary");

    if (Array.isArray(buyNowCart) && buyNowCart.length > 0) {
        DisplayBuyNowItem();
    } else {
        console.log("cart items");
        DisplayCartItems();
    }
});

function DisplayCartItems() {
    const petsInCart = JSON.parse(localStorage.getItem("petsInCart")) || [];
    const accessoriesInCart =
        JSON.parse(localStorage.getItem("productsInCart")) || [];

    petsInCart.forEach((element) => {
        // Create pet card
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");

        petCard.innerHTML = `
            <div class="pet-image">
                <img src="${element.image}" alt="${element.name}" />
            </div>
            <div class="pet-info">
                <h2>${element.name}</h2>
                <p><strong>Age:</strong> ${element.age} years</p>
                <p><strong>Gender:</strong> ${element.gender}</p>
                <p><strong>Type:</strong> ${element.type}</p>
                <p><strong>Location:</strong> ${element.petLocation}</p>
            </div>
        `;

        // Append to container
        const summaryContainer = document.getElementById("buy-summary");
        if (summaryContainer) {
            summaryContainer.appendChild(petCard);
        } else {
            console.error("Error: summary-container not found!");
        }
    });

    accessoriesInCart.forEach((product) => {
        const card = document.createElement("div");
        card.className = "accessories-card";

        card.innerHTML = `
            <div class="pet-image">
                <img src="${product.image}" />
            </div>
            <div class="pet-info">
                <h2>${product.name}</h2>
            </div>
        `;

        if (summaryContainer) {
            summaryContainer.appendChild(card);
        } else {
            console.error("Error: summary-container not found!");
        }
    });
}

function DisplayBuyNowItem() {
    const card = document.createElement("div");
    card.className = "accessories-card";

    const buyNowCart = JSON.parse(localStorage.getItem("buyNow")) || [];

    buyNowCart.forEach((element) => {
        card.innerHTML = `
            <div class="pet-image">
                <img src="${element.image}" />
            </div>
            <div class="pet-info">
                <h2>${element.name}</h2>
            </div>
        `;
    });

    summaryContainer.appendChild(card);

    // Clear buyNow storage after showing it on checkout page
    localStorage.removeItem("buyNow");
}
