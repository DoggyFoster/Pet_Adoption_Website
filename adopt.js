const pets = [
    {
        name: "Leo",
        age: 5.5,
        gender: "Male",
        type: "Senior",
        location: "Pune",
        owner: "Nikita",
        image: "images/karman.jpg",
        cart: false,
    },
    {
        name: "Max",
        age: 3,
        gender: "Male",
        type: "Adult",
        location: "Mumbai",
        owner: "Rohan",
        image: "images/cat.jpg",
        cart: false,
    },
    {
        name: "Bella",
        age: 2,
        gender: "Female",
        type: "Young",
        location: "Delhi",
        owner: "Simran",
        image: "images/busky.jpg",
        cart: false,
    },
    {
        name: "akdjfaldfkj ;",
        age: 2,
        gender: "Female",
        type: "Young",
        location: "Delhi",
        owner: "Simran",
        image: "images/busky.jpg",
        cart: false,
    },
];

const container = document.getElementById("container");

pets.forEach((pet) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}" />
        <div class="card-content">
          <h2>${pet.name} - ${pet.age} years old</h2>
          <p>${pet.gender}, ${pet.type}</p>
          <p>${pet.location}</p>

          <div class="contact-details">
            <p><span>Name:</span> ${pet.owner}</p>
            <p><span>Number:</span> Contact Now</p>
          </div>

          <a href="larger-card.html?${new URLSearchParams(pet)}" target="_blank" class="details-link">See more details ↗</a>

            <button class="cart-button" data-name=${pet.name}>Add To Cart</button>

            <!-- <button class="buy-button" data-name=${pet.name}>Buy Now</button> -->
            <a href="checkout.html?${new URLSearchParams(pet)}" target="_blank"><button class="buy-button">Buy Now</button></a>
        </div>
      `;
    container.appendChild(card);
});

// buy-now button
let buyButtons = document.getElementsByClassName("buy-button");
[...buyButtons].forEach((element) => {
    element.addEventListener("click", checkout);
});

// function to happend with buy-now is clicked
function checkout() {
    const cartPets = pets.filter((pet) => pet.cart);
    console.log(cartPets);
}

// add to cart button
let cartButtons = document.getElementsByClassName("cart-button");
document.querySelectorAll(".cart-button").forEach((button) => {
    button.addEventListener("click", function () {
        cart(button.dataset.name, this);
    });
});

// function to add a pet to cart
function cart(name, btn) {
    let pet = pets.find((pet) => pet.name === name);
    pet.cart = !pet.cart;

    if (pet.cart) {
        btn.innerText = "Remove from Cart";
    } else {
        btn.innerText = "Add To Cart";
    }

    console.log(pet.cart);

    // find all pets in cart
    let petsInCart = pets.filter((pet) => pet.cart);
    localStorage.setItem("petsInCart", JSON.stringify(petsInCart));
}
