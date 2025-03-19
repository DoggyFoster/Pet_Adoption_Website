const products = [
    {
        name: "Collar",
        image: "images/coller.png",
        description:
            "Keep your dog safe, stylish, and comfortable with our premium-quality collars.",
        cart: false,
    },
    {
        name: "Food",
        image: "images/food.png",
        description:
            "Give your furry friend the nutrition they deserve with our wholesome, delicious, and balanced dog food.",
        cart: false,
    },
    {
        name: "Bowl",
        image: "images/bowl.png",
        description:
            "A durable, easy-to-clean food and water bowl for your pet's everyday needs.",
        cart: false,
    },
    {
        name: "Medicine",
        image: "images/medicine.jpeg",
        description:
            "Keep your pup healthy and happy with our trusted, vet-approved dog medicines for every need.",
        cart: false,
    },
    {
        name: "Rope",
        image: "images/rope.jpg",
        description:
            "Keep your dog secure and comfortable with our strong, durable, and tangle-free dog rope.",
        cart: false,
    },
    {
        name: "Mask",
        image: "images/mask.jpg",
        description:
            "Stay protected in style with our comfortable, breathable, and high-quality masks",
        cart: false,
    },
    {
        name: "House",
        image: "images/house.png",
        description:
            "Give your furry friend a cozy and secure retreat with our durable, weatherproof dog houses.",
        cart: false,
    },
    {
        name: "Biscuit",
        image: "images/biscuit.webp",
        description:
            "Treat your pup to crunchy, delicious, and nutritious dog biscuits they’ll love!",
        cart: false,
    },
    {
        name: "Conditioner",
        image: "images/conditioner.jpeg",
        description:
            "Keep your dog's coat soft, shiny, and healthy with our nourishing dog conditioner!",
        cart: false,
    },
];

Init();
AddListenerstoButtons();
UpdateCartButtons();

function Init() {
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
                        <button type="button" data-name=\"${product.name}\" class="btn btn-sm btn-outline-secondary cart-button">Add To Cart</button>
                        <button type="button" data-name=\"${product.name}\" class="btn btn-sm btn-outline-primary buy-button">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    `;
        productContainer.appendChild(card);
    });
}

function AddListenerstoButtons() {
    // buy-button
    let buyButtons = document.getElementsByClassName("buy-button");
    [...buyButtons].forEach((button) => {
        button.addEventListener("click", function () {
            BuyItem(button.dataset.name);
        });
        console.log("1");
    });

    // add to cart button
    let cartButtons = document.getElementsByClassName("cart-button");
    [...cartButtons].forEach((button) => {
        button.addEventListener("click", function () {
            AddItemToCart(button.dataset.name, this);
            console.log("2");
        });
    });
}

function BuyItem(name) {
    const product = products.find((prod) => prod.name === name);
    const list = [product];

    // store the product in storage
    localStorage.setItem("buyNow", JSON.stringify(list));

    // redirect to checkout page
    window.location.href = "checkout.html";
}

// add an item to cart and store it
function AddItemToCart(name, btn) {
    let product = products.find((product) => product.name === name);
    product.cart = !product.cart;

    if (product.cart) {
        btn.innerText = "Remove from Cart";
    } else {
        btn.innerText = "Add To Cart";
    }

    let productsInCart = products.filter((product) => product.cart);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

function UpdateCartButtons() {
    const storedCart = JSON.parse(localStorage.getItem("productsInCart")) || [];

    products.forEach((product) => {
        product.cart = storedCart.some((item) => item.name === product.name);
    });

    let cartButtons = document.getElementsByClassName("cart-button");
    [...cartButtons].forEach((element) => {
        let product = products.find((p) => element.dataset.name === p.name);

        if (product.cart) {
            element.innerHTML = "Remove from Cart";
        }
    });
}
