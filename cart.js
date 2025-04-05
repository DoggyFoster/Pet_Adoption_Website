document.addEventListener('DOMContentLoaded', () => {
    const buyNowCart = JSON.parse(localStorage.getItem('buyNow')) || [];
    const summaryContainer = document.getElementById('buy-summary');

    if (Array.isArray(buyNowCart) && buyNowCart.length > 0) {
        DisplayBuyNowItem(summaryContainer, buyNowCart);
        localStorage.removeItem('buyNow'); // Clear after use
    } else {
        // Show normal cart pets
        DisplayCartItems(summaryContainer);
    }
});

function DisplayCartItems(container) {
    const petsInCart = JSON.parse(localStorage.getItem('petsInCart')) || [];
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

    petsInCart.forEach(pet => {
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');

        petCard.innerHTML = `
      <div class="pet-image">
        <img src="${pet.image}" alt="${pet.name}" />
      </div>
      <div class="pet-info">
        <h2>${pet.name}</h2>
        <p><strong>Age:</strong> ${pet.age} years</p>
        <p><strong>Gender:</strong> ${pet.gender}</p>
        <p><strong>Type:</strong> ${pet.type}</p>
        <p><strong>Location:</strong> ${pet.location}</p>
        <button class="remove-from-cart-btn">Remove from Cart</button>
      </div>
    `;

        petCard.querySelector('.remove-from-cart-btn').addEventListener('click', () => {
            RemoveFromCart(pet.id);
            petCard.remove();
        });

        container.appendChild(petCard);
    });

    productsInCart.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
      <div class="pet-image">
        <img src="${product.image}"  />
      </div>
      <div class="pet-info">
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
        <button class="remove-from-cart-btn">Remove from Cart</button>
      </div>
    `;

        // card.innerHTML = `
        //     <div class="pet-image">
        //         <img src="${element.image}" />
        //     </div>
        //     <div class="pet-info">
        //         <h2>${element.name}</h2>
        //         <p><strong>Price:</strong> $ ${element.price}</p>
        //     </div>
        // `;

        productCard.querySelector('.remove-from-cart-btn').addEventListener('click', () => {
            RemoveProductFromCart(product.id);
            productCard.remove();
        });

        container.appendChild(productCard);
    });
}

function DisplayBuyNowItem(summaryContainer, buyNowCart) {
    const buyNowType = localStorage.getItem('buyNowType');

    if (buyNowType == 'pet') {
        buyNowCart.forEach(element => {
            const card = document.createElement('div');
            card.className = 'accessories-card';

            card.innerHTML = `
            <div class="pet-image">
                <img src="${element.image}" />
            </div>
            <div class="pet-info">
                <h2>${element.name}</h2>
                <p><strong>Age:</strong> ${element.age} years</p>
                <p><strong>Gender:</strong> ${element.gender}</p>
                <p><strong>Type:</strong> ${element.type}</p>
                <p><strong>Location:</strong> ${element.location}</p>
            </div>
        `;

            summaryContainer.appendChild(card);
        });
    } else if (buyNowType == 'product') {
        buyNowCart.forEach(element => {
            const card = document.createElement('div');
            card.className = 'accessories-card';

            card.innerHTML = `
            <div class="pet-image">
                <img src="${element.image}" />
            </div>
            <div class="pet-info">
                <h2>${element.name}</h2>
                <p><strong>Price:</strong> $ ${element.price}</p>
            </div>
        `;

            summaryContainer.appendChild(card);
        });
    }
}

function RemoveFromCart(id) {
    const petsInCart = JSON.parse(localStorage.getItem('petsInCart')) || [];
    const newCart = petsInCart.filter(pet => pet.id !== id);
    localStorage.setItem('petsInCart', JSON.stringify(newCart));
}

function RemoveProductFromCart(id) {
    let productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    productsInCart = productsInCart.filter(product => product.id !== id);
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
}

// document.addEventListener("DOMContentLoaded", () => {
//     const buyNowCart = JSON.parse(localStorage.getItem("buyNow")) || [];
//     summaryContainer = document.getElementById("buy-summary");
//
//     if (Array.isArray(buyNowCart) && buyNowCart.length > 0) {
//         DisplayBuyNowItem();
//     } else {
//         console.log("cart items");
//         DisplayCartItems();
//     }
// });
//
// function DisplayCartItems() {
//     const petsInCart = JSON.parse(localStorage.getItem("petsInCart")) || [];
//     const accessoriesInCart =
//         JSON.parse(localStorage.getItem("productsInCart")) || [];
//
//     petsInCart.forEach((element) => {
//         // Create pet card
//         const petCard = document.createElement("div");
//         petCard.classList.add("pet-card");
//
//         petCard.innerHTML = `
//             <div class="pet-image">
//                 <img src="${element.image}" alt="${element.name}" />
//             </div>
//             <div class="pet-info">
//                 <h2>${element.name}</h2>
//                 <p><strong>Age:</strong> ${element.age} years</p>
//                 <p><strong>Gender:</strong> ${element.gender}</p>
//                 <p><strong>Type:</strong> ${element.type}</p>
//                 <p><strong>Location:</strong> ${element.petLocation}</p>
//             </div>
//         `;
//
//         // Append to container
//         const summaryContainer = document.getElementById("buy-summary");
//         if (summaryContainer) {
//             summaryContainer.appendChild(petCard);
//         } else {
//             console.error("Error: summary-container not found!");
//         }
//     });
//
//     accessoriesInCart.forEach((product) => {
//         const card = document.createElement("div");
//         card.className = "accessories-card";
//
//         card.innerHTML = `
//             <div class="pet-image">
//                 <img src="${product.image}" />
//             </div>
//             <div class="pet-info">
//                 <h2>${product.name}</h2>
//             </div>
//         `;
//
//         if (summaryContainer) {
//             summaryContainer.appendChild(card);
//         } else {
//             console.error("Error: summary-container not found!");
//         }
//     });
// }
//
// function DisplayBuyNowItem() {
//     const card = document.createElement("div");
//     card.className = "accessories-card";
//
//     const buyNowCart = JSON.parse(localStorage.getItem("buyNow")) || [];
//
//     buyNowCart.forEach((element) => {
//         card.innerHTML = `
//             <div class="pet-image">
//                 <img src="${element.image}" />
//             </div>
//             <div class="pet-info">
//                 <h2>${element.name}</h2>
//             </div>
//         `;
//     });
//
//     summaryContainer.appendChild(card);
//
//     // Clear buyNow storage after showing it on checkout page
//     localStorage.removeItem("buyNow");
// }
