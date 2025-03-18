const products = [
    {
        name: "Dog Collar",
        image: "images/coller.png",
        description:
            "Keep your dog safe, stylish, and comfortable with our premium-quality collars.",
    },
    {
        name: "Dog Food",
        image: "images/food.png",
        description:
            "Give your furry friend the nutrition they deserve with our wholesome, delicious, and balanced dog food.",
    },
    {
        name: "Dog Food",
        image: "images/food.png",
        description:
            "Give your furry friend the nutrition they deserve with our wholesome, delicious, and balanced dog food.",
    },
    {
        name: "Dog Bowl",
        image: "images/bowl.png",
        description:
            "A durable, easy-to-clean food and water bowl for your pet's everyday needs.",
    },
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
                        <button type="button" class="btn btn-sm btn-outline-secondary">Add To Cart</button>
                        <button type="button" class="btn btn-sm btn-outline-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    productContainer.appendChild(card);

    localStorage.setItem("products", JSON.stringify(products));
});
