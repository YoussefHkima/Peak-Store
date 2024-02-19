const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [{
        id: 1,
        title: "CITY STRIDE",
        price: 329,
        colors: [{
                code: "black",
                img: "./img/lifestyle.png",
            },
            {
                code: "white",
                img: "./img/lifestyle2.png",
            },
        ],
    },
    {
        id: 2,
        title: "PEAK AW",
        price: 439,
        colors: [{
                code: "black",
                img: "./img/peakaw2noir.png",
            },
            {
                code: "pink",
                img: "./img/peakaw.png",
            },
        ],
    },
    {
        id: 3,
        title: "AEROFEET",
        price: 225,
        colors: [{
                code: "black",
                img: "./img/running.png",
            },
            {
                code: "white",
                img: "./img/running2.png",
            },
        ],
    },
    {
        id: 4,
        title: "TAICHI 4.0 PRO",
        price: 299,
        colors: [{
                code: "white",
                img: "./img/outdoor.png",
            },
            {
                code: "black",
                img: "./img/outdoor2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price + " TND";
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex"
});
close.addEventListener("click", () => {
    payment.style.display = "none"
});