document.addEventListener("DOMContentLoaded", () => {
    // const params = new URLSearchParams(window.location.search);
    //
    // // Extract pet details from URL parameters
    // const name = params.get("name") || "Unknown Pet";
    // const age = params.get("age") || "Unknown Age";
    // const gender = params.get("gender") || "Unknown Gender";
    // const type = params.get("type") || "Unknown Type";
    // const petLocation = params.get("location") || "Unknown Location";
    // const image = decodeURIComponent(params.get("image")) || "placeholder.jpg";
    //
    // // Create pet card
    // const petCard = document.createElement("div");
    // petCard.classList.add("pet-card");
    //
    // petCard.innerHTML = `
    //     <div class="pet-image">
    //         <img src="${image}" alt="${name}" />
    //     </div>
    //     <div class="pet-info">
    //         <h2>${name}</h2>
    //         <p><strong>Age:</strong> ${age} years</p>
    //         <p><strong>Gender:</strong> ${gender}</p>
    //         <p><strong>Type:</strong> ${type}</p>
    //         <p><strong>Location:</strong> ${petLocation}</p>
    //     </div>
    // `;
    //
    // // Append to container
    // const summaryContainer = document.getElementById("pet-summary");
    // if (summaryContainer) {
    //     summaryContainer.appendChild(petCard);
    // } else {
    //     console.error("Error: summary-container not found!");
    // }

    const petsInCart = JSON.parse(localStorage.getItem("petsInCart")) || [];
    const accessoriesInCart =
        JSON.parse(localStorage.getItem("products")) || [];

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

        const summaryContainer = document.getElementById("buy-summary");
        if (summaryContainer) {
            summaryContainer.appendChild(card);
        } else {
            console.error("Error: summary-container not found!");
        }
    });
});
