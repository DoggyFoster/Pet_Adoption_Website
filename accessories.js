const products = [
    {
        name: "Dog Collar",
        image: "images/coller.png",
        description:
            "Keep your dog safe, stylish, and comfortable with our premium-quality collars.Comfortable for your pet to wear",
        price: 20,
    },
    {
        name: "Dog Food",
        image: "images/food.png",
        description:
            "Give your furry friend the nutrition they deserve with our wholesome, delicious, and balanced dog food.",
        price: 30,
    },
    {
        name: "Dog biscut",
        image: "images/biscut.webp",
        description: "Treat your pup to crunchy, delicious, and nutritious dog biscuits they’ll love! the biscut our dog need",
        price: 30,
    },
    {
        name: "Dog Bowl",
        image: "images/bowl.png",
        description:
            "A durable, easy-to-clean food and water bowl for your pet's everyday needs.",
        price: 70,
    },
    {
        name: "Dog Medicine",
        image: "images/medicine.jpeg",
        description: "Keep your pup healthy and happy with our trusted, vet-approved dog medicines you need.",
        price: 50,
    },
    {
        name: "Dog Rope",
        image: "images/rope.jpg",
        description: "Keep your dog secure and comfortable with our strong, durable, and tangle-free dog rope.",
        price: 15,
    },
    {
        name: "Dog Mask",
        image: "images/mask.jpg",
        description: "Stay protected in style with our comfortable, breathable, high-quality masks.",
        price: 10,
    },
    {
        name: "Dog House",
        image: "images/house.png",
        description: "Give your furry friend a cozy and secure retreat with our durable, weatherproof dog houses.",
        price: 150,
    },
    {
        name: "Dog Conditioner",
        image: "images/conditioner.jpeg",
        description: "Keep your dog's coat soft, shiny, and healthy with our nourishing dog conditioner.",
        price: 25,
    }
];

const productContainer = document.querySelector(".row");

products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "col";

    card.innerHTML = `
        <div class="card shadow-sm">
            <img src="${product.image}" alt="${product.name}" height="225" width="100%" />
            <div class="card-body">
                <p class="card-text">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="kart">Add To Cart</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Buy Now</button>
                    </div>
                    <div class="price">
                        <span>$${product.price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    productContainer.appendChild(card);
});

localStorage.setItem("products", JSON.stringify(products));