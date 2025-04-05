const products = [
    {
        id: 'collar',
        name: 'Dog Collar',
        price: 20,
        image: 'images/accessories/coller.png',
        description:
            'Keep your dog safe, stylish, and comfortable with our premium-quality collars.',
        cart: false,
    },
    {
        id: 'food',
        name: 'Dog Food',
        price: 50,
        image: 'images/accessories/dogfood2.png',
        description:
            'Give your furry friend the nutrition they deserve with our wholesome, delicious, and balanced dog food.',
        cart: false,
    },
    {
        id: 'bowl',
        name: 'Dog Bowl',
        price: 80,
        image: 'images/accessories/bowl2.png',
        description:
            'Stylish and durable feeding bowls that make mealtime more enjoyable for your canine companion.',
        cart: false,
    },
    {
        id: 'medicine',
        name: 'Dog Medicine',
        price: 40,
        image: 'images/accessories/medicine2.png',
        description:
            'Keep your pup healthy and happy with our trusted, vet-approved dog medicines for every need.',
        cart: false,
    },
    {
        id: 'rope',
        name: 'Dog Leash',
        price: 120,
        image: 'images/accessories/leash2.png',
        description:
            'Keep your dog secure and comfortable with our strong, durable, and tangle-free dog rope.',
        cart: false,
    },
    {
        id: 'house',
        name: 'Pet Kennel',
        price: 300,
        image: 'images/accessories/kennel2.png',
        description:
            'Give your furry friend a cozy and secure retreat with our durable, weatherproof dog houses.',
        cart: false,
    },
    {
        id: 'conditioner',
        name: 'Dog Conditioner',
        price: 50,
        image: 'images/accessories/conditioner2.png',
        description:
            "Keep your dog's coat soft, shiny, and healthy with our nourishing dog conditioner.",
        cart: false,
    },
    {
        id: 'biscuit',
        name: 'Treats',
        price: 10,
        image: 'images/accessories/treats2.png',
        description:
            "Treat your pup to crunchy, delicious, and nutritious dog biscuits they'll love!",
        cart: false,
    },
    {
        id: 'mask',
        name: 'Dog Muzzle',
        price: 20,
        image: 'images/accessories/muzzle2.png',
        description:
            'Protective and comfortable masks designed specially for your canine companions.',
        cart: false,
    },
];

Init();

function Init() {
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="card-content">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="price">$${product.price.toFixed(2)}</div>
        </div>
        <div class="button-container">
          <button class="buy-button" data-name="${product.name}">Buy Now</button>
          <button class="cart-button" data-name="${product.name}">Add to Cart</button>
        </div>
      `;

        productsContainer.appendChild(card);
    });

    AddListenerstoButtons();
    UpdateCartButtons();
}

function AddListenerstoButtons() {
    // buy-button
    let buyButtons = document.getElementsByClassName('buy-button');
    [...buyButtons].forEach(button => {
        button.addEventListener('click', function () {
            BuyItem(button.dataset.name);
        });
        console.log('1');
    });

    // add to cart button
    let cartButtons = document.getElementsByClassName('cart-button');
    [...cartButtons].forEach(button => {
        button.addEventListener('click', function () {
            AddItemToCart(button.dataset.name, this);
            console.log('2');
        });
    });
}

function BuyItem(name) {
    const product = products.find(prod => prod.name === name);
    const list = [];
    list.push(product);

    // store the product in storage
    localStorage.setItem('buyNow', JSON.stringify(list));
    localStorage.setItem('buyNowType', 'product');

    console.log('test');

    // redirect to checkout page
    window.location.href = 'cart.html';
}

// add an item to cart and store it
function AddItemToCart(name, btn) {
    let product = products.find(product => product.name === name);
    product.cart = !product.cart;

    if (product.cart) {
        btn.innerText = 'Remove from Cart';
    } else {
        btn.innerText = 'Add To Cart';
    }

    let productsInCart = products.filter(product => product.cart);
    localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
}

function UpdateCartButtons() {
    const storedCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

    products.forEach(product => {
        product.cart = storedCart.some(item => item.name === product.name);
    });

    let cartButtons = document.getElementsByClassName('cart-button');
    [...cartButtons].forEach(element => {
        let product = products.find(p => element.dataset.name === p.name);

        if (product.cart) {
            element.innerHTML = 'Remove from Cart';
        }
    });
}
