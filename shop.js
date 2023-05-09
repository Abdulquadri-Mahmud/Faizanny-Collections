const menu_bar_cont = document.querySelector('.menu_bar_cont');
const open_menu = document.querySelector('.open_menu');
const close_menu = document.querySelector('.close_menu');

open_menu.addEventListener('click',()=>{
     open_menu.style.display = 'none';
     close_menu.style.display = 'block';

     menu_bar_cont.style.width = '200px';
});
close_menu.addEventListener('click',()=>{
     open_menu.style.display = 'block';
     close_menu.style.display = 'none';

     menu_bar_cont.style.width = '0px';
});

const showcartbtn = document.querySelector('.showcart');
const closeCartbtn = document.querySelector('.closeCart');
const showcarts = document.querySelector('.showcarts');
const sidebar = document.querySelector('.sidebar');
const counter = document.querySelector('.count');

showcartbtn.addEventListener('click',()=>{
     showcarts.style.height = '500px'
     closeCartbtn.style.display = 'block';
     sidebar.style.display = 'block';
     showcartbtn.style.color = '#fff';
     counter.style.background = '#fff';
     counter.style.color = 'crimson';
});
closeCartbtn.addEventListener('click',()=>{
     showcarts.style.height = '0px'
     closeCartbtn.style.display = 'none';
     sidebar.style.display = 'none';
     showcartbtn.style.color = 'crimson';
     counter.style.background = 'crimson';
     counter.style.color = '#fff';
});


const abaya_products = [
     {
          id: 0,
          productLink: 'abaya1-single-product.html',
          image: 'images/abaya1.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:250,
     },
     {
          id: 1,
          productLink: 'abaya2-single-products.html',
          image: 'images/abaya2.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:250,
     },
     {
          id: 2,
          productLink: 'Tshirt1-single-project.html',
          image: 'images/T-shirt.jpeg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'T-Shirt',
          price:75,
     },
     {
          id: 3,
          productLink: 'abaya3-single-products.html',
          image: 'images/abaya3.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:250,
     },
     {
          id: 4,
          productLink: 'abaya4-single-products.html',
          image: 'images/abaya4.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Bag Show',
          price:250,
     },
     {
          id: 5,
          productLink: 'abaya5-single-products.html',
          image: 'images/abaya5.jpg',
          alt: 'Abaya',
          producer: '',
          productName: 'Abaya',
          price:250,
     },
     {
          id: 6,
          productLink: 'abaya6-single-products.html',
          image: 'images/abaya6.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:170,
     },
     {
          id: 7,
          productLink: 'abaya7-single-products.html',
          image: 'images/abaya7.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:250,
     },
     // {
     //      id: 8,
     //      productLink: 'abaya8-single-products.html',
     //      image: 'images/abaya8.jpg',
     //      alt: 'Abaya',
     //      producer: 'Adidas',
     //      productName: 'Abaya',
     //      price:250,
     // },
     {
          id: 9,
          productLink: 'abaya9-single-products.html',
          image: 'images/abaya9.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:250,
     },
     {
          id: 10,
          productLink: 'abaya10-single-products.html',
          image: 'images/abaya10.jpg',
          alt: 'Abaya',
          producer: 'Adidas',
          productName: 'Abaya',
          price:250,
     },
]

const abaya = [...new Set(abaya_products.map((abaya_product)=>{
     return abaya_product;
}))]

let i = 0;

document.querySelector('.product_wrap').innerHTML = abaya_products.map((abaya_product)=>{
     let {productLink,image,alt,producer,productName,price} = abaya_product;

     return (
          `<div class='product'>
               <div class="img">
                    <a href=${productLink}>
                         <img src=${image} alt="${alt}"></img>
                    </a>
               </div>
               <p class='producer'>${producer}</p>
               <h3>${productName}</h3>
               <div class="rate">
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
               </div>
               <div class="price_cart">
                    <h3 class="price">$ ${price}.00</h3>
                    ` + "<i class='fas fa-cart-plus' onclick='addtocart1("+(i++)+")'></i>" + 
               `</div>
          </div>`
     )
}).join('');

let carts = [];

function addtocart1(f){
     carts.push({...abaya[f]});
     displayCart1();
}
function deletecart1(f){
     carts.splice(f,1)
     displayCart1();
}

function displayCart1(f){
     let e = 0, total = 0;
     document.querySelector('.count').innerHTML = carts.length;
     if(carts.length == 0){
          document.querySelector('.cartItem').innerHTML = 'Your Cart Is Empty';
          document.getElementById('total').innerHTML = "$ "+0+".00";
     }else{
          document.querySelector('.cartItem').innerHTML = carts.map((abaya_product)=>{
               let {image,producer,productName,price} = abaya_product;
               total = total + price;
               document.getElementById('total').innerHTML = "$ " + total + ".00";
               
               return (
                    `<div class="cart-item-cont">
                    <div class="cart-item">
                         <div class="row-img">
                              <img class='rowing' src=${image}></img>
                         </div>
                         <h4>${producer}</h4>
                         <h4>${productName}</h4>
                         <h4>${price}.00</h4>` +
                         "<i class='fas fa-trash' onclick='deletecart1("+(e++)+")'></i>" +
                    `</div>
               </div>`
               )
          }).join('');
     }
}

// Mens Wear

const mens_products = [
     {
          id: 0,
          productLink: 'round-neck1-products.html',
          image: 'images/round1.jpeg',
          alt: 'Shirt',
          producer: 'Adidas',
          productName: 'Shirt',
          price:150,
     },
     {
          id: 1,
          productLink: '',
          image: 'images/givenchy4.avif',
          alt: '',
          producer: 'Givenchy',
          productName: '',
          price:250,
     },
     {
          id: 2,
          productLink: '',
          image: 'images/Amiri-Trouser1.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:75,
     },
     {
          id: 3,
          productLink: '',
          image: 'images/Amiri3.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:250,
     },
     {
          id: 4,
          productLink: '',
          image: 'images/Amiri-Trouser2.webp',
          alt: '',
          producer: '',
          productName: '',
          price:250,
     },
     {
          id: 5,
          productLink: '',
          image: 'images/Amiri5.avif',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:250,
     },
     {
          id: 6,
          productLink: '',
          image: 'images/Amiri7.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:170,
     },
     {
          id: 7,
          productLink: '',
          image: 'images/Amiri-Trouser1.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:250,
     },
     {
          id: 8,
          productLink: '',
          image: 'images/Amiri2.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:0,
     },
     {
          id: 9,
          productLink: '',
          image: 'images/Amiri4.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:0,
     },
     {
          id: 10,
          productLink: '',
          image: 'images/Amiri-Trouser4.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:250,
     },
     {
          id: 11,
          productLink: '',
          image: 'images/Amiri-Trouser5.webp',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:0,
     },
     {
          id: 12,
          productLink: '',
          image: 'images/Amiri-Trouser3.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:0,
     },
     {
          id: 13,
          productLink: '',
          image: '',
          alt: '',
          producer: '',
          productName: '',
          price:0,
     },
     {
          id: 14,
          productLink: '',
          image: '',
          alt: '',
          producer: '',
          productName: '',
          price:250,
     },
     {
          id: 15,
          productLink: '',
          image: '',
          alt: '',
          producer: '',
          productName: '',
          price:0,
     },
     {
          id: 16,
          productLink: '',
          image: '',
          alt: '',
          producer: '',
          productName: '',
          price:0,
     },
]

const mens_wear = [...new Set(mens_products.map((men_wear)=>{
     return men_wear
}))];

let d = 0;

document.querySelector('.product_wrap2').innerHTML = mens_wear.map((men_wear)=>{
     let {productLink,image,alt,producer,productName,price} = men_wear;

     return (
          `<div class='product'>
               <div class="img">
                    <a href=${productLink}>
                         <img class='img' src=${image} alt="${alt}"></img>
                    </a>
               </div>
               <p class='producer'>${producer}</p>
               <h3 class='productName'>${productName}</h3>
               <div class="rate">
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
               </div>
               <div class="price_cart">
                    <h3 class="price">$ ${price}.00</h3>
                    ` + "<i class='fas fa-cart-plus' onclick='addtocart2("+(d++)+")'></i>" + 
               `</div>
          </div>`
     )
}).join('');

function addtocart2(m){
     carts.push({...mens_wear[m]});
     displayMensWear();
}
function deletecart2(m){
     carts.splice(m,1)
     displayMensWear();
}

function displayMensWear(m){
     let e = 0, total = 0;
     document.querySelector('.count').innerHTML = carts.length;
     if(carts.length == 0){
          document.querySelector('.cartItem').innerHTML = 'Your Cart Is Empty';
          document.getElementById('total').innerHTML = "$ "+0+".00";
     }else{
          document.querySelector('.cartItem').innerHTML = carts.map((men_wear)=>{
               let {image,producer,productName,price} = men_wear;
               total = total + price;
               document.getElementById('total').innerHTML = "$ " + total + ".00";
               
               return (
                    `<div class="cart-item-cont">
                    <div class="cart-item">
                         <div class="row-img">
                              <img class='rowing' src=${image}></img>
                         </div>
                         <h4>${producer}</h4>
                         <h4>${productName}</h4>
                         <h4>${price}.00</h4>` +
                         "<i class='fas fa-trash' onclick='deletecart2("+(e++)+")'></i>" +
                    `</div>
               </div>`
               )
          }).join('');
     }
}


// Bags And Shoes Sections

const bag_shoes_products = [
     {
          id: 0,
          productLink: 'bag1-single-products.html',
          image: 'images/bag1.jpg',
          alt: 'Bag',
          producer: '',
          productName: '',
          price:220,
     },
     {
          id: 1,
          productLink: 'bag-sandal-2-single-product.html',
          image: 'images/bag_shoe13.jpg',
          alt: '',
          producer: 'Givenchy',
          productName: '',
          price:220,
     },
     {
          id: 2,
          productLink: 'bag2-single-products.html',
          image: 'images/bag_shoe9.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:180,
     },
     {
          id: 3,
          productLink: 'bag3-single-products.html',
          image: 'images/bag_shoe7.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:200,
     },
     {
          id: 4,
          productLink: '',
          image: 'images/bag_shoe17.jpg',
          alt: '',
          producer: '',
          productName: '',
          price:250,
     },
     {
          id: 5,
          productLink: 'bag5-single-products.html',
          image: 'images/bag_shoe18.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:180,
     },
     {
          id: 6,
          productLink: 'bag4-single-products.html',
          image: 'images/bag_shoe16.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:250,
     },
     {
          id: 7,
          productLink: 'bag6-single-products.html',
          image: 'images/bag_shoe19.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:200,
     },
     {
          id: 8,
          productLink: 'bag7-single-products.html',
          image: 'images/bag_shoe4.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:200,
     },
     {
          id: 9,
          productLink: '',
          image: 'images/bag_shoe16.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:0,
     },
     {
          id: 10,
          productLink: '',
          image: 'images/bag_shoe12.jpg',
          alt: '',
          producer: 'Amiri',
          productName: '',
          price:250,
     },
]

const bags_shoes = [...new Set(bag_shoes_products.map((bag_shoe)=>{
     return bag_shoe;
}))]

let g = 0;

document.querySelector('.product_wrap3').innerHTML = bags_shoes.map((bag_shoe)=>{
     let {productLink,image,alt,producer,productName,price} = bag_shoe;
     
     return (
          `<div class='product'>
               <div class="img">
                    <a href=${productLink}>
                         <img class='img' src=${image} alt="${alt}"></img>
                    </a>
               </div>
               <p class='producer'>${producer}</p>
               <h3 class='productName'>${productName}</h3>
               <div class="rate">
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
               </div>
               <div class="price_cart">
                    <h3 class="price">$ ${price}.00</h3>
                    ` + "<i class='fas fa-cart-plus' onclick='addtocart3("+(g++)+")'></i>" + 
               `</div>
          </div>`
     )
}).join('');

function addtocart3(n){
     carts.push({...bags_shoes[n]});
     displayBagsShoes();
}
function deletecart3(n){
     carts.splice(n,1)
     displayBagsShoes();
}

function displayBagsShoes(n){
     let h = 0, total = 0;
     document.querySelector('.count').innerHTML = carts.length;
     if(carts.length == 0){
          document.querySelector('.cartItem').innerHTML = 'Your Cart Is Empty';
          document.getElementById('total').innerHTML = "$ "+0+".00";
     }else{
          document.querySelector('.cartItem').innerHTML = carts.map((bag_shoe)=>{
               let {image,producer,productName,price} = bag_shoe;
               total = total + price;
               document.getElementById('total').innerHTML = "$ " + total + ".00";
               
               return (
                    `<div class="cart-item-cont">
                    <div class="cart-item">
                         <div class="row-img">
                              <img class='rowing' src=${image}></img>
                         </div>
                         <h4>${producer}</h4>
                         <h4>${productName}</h4>
                         <h4>${price}.00</h4>` +
                         "<i class='fas fa-trash' onclick='deletecart3("+(h++)+")'></i>" +
                    `</div>
               </div>`
               )
          }).join('');
     }
}

// Face Caps Section

const face_caps_products = [
     {
          id: 0,
          productLink: 'face-cap1-single-product.html',
          image: 'images/face_cap.jpg',
          alt: 'Face Cap',
          producer: 'Adidas',
          productName: 'Face Cap',
          price:32,
     },
     {
          id: 1,
          productLink: 'face-cap8-single-product.html',
          image: 'images/Face-Cap1.jpeg',
          alt: 'Face Cap',
          producer: 'Givenchy',
          productName: 'Face cap',
          price:28,
     },
     {
          id: 2,
          productLink: 'face-cap4-single-product.html',
          image: 'images/Face-Cap4.jpeg',
          alt: 'Face Cap',
          producer: 'Amiri',
          productName: 'Face Cap',
          price:55,
     },
     {
          id: 3,
          productLink: 'face-cap3-single-product.html',
          image: 'images/Face-Cap3.jpeg',
          alt: 'Face Cap',
          producer: 'Amiri',
          productName: 'Face Cap',
          price:35,
     },
     {
          id: 4,
          productLink: 'face-cap5-single-product.html',
          image: 'images/Face-Cap5.jpeg',
          alt: 'Face Cap',
          producer: 'Adidas',
          productName: 'Face Cap',
          price:20,
     },
     {
          id: 5,
          productLink: 'face-cap7-single-product.html',
          image: 'images/Face-Cap7.jpeg',
          alt: 'Face Cap',
          producer: 'Amiri',
          productName: 'Face Cap',
          price:45,
     },
     // {
     //      id: 6,
     //      productLink: '',
     //      image: '',
     //      alt: '',
     //      producer: 'Amiri',
     //      productName: '',
     //      price:250,
     // },
     // {
     //      id: 7,
     //      productLink: '',
     //      image: '',
     //      alt: '',
     //      producer: 'Amiri',
     //      productName: '',
     //      price:200,
     // },
     // {
     //      id: 8,
     //      productLink: '',
     //      image: 'images',
     //      alt: '',
     //      producer: 'Amiri',
     //      productName: '',
     //      price:200,
     // },
     // {
     //      id: 9,
     //      productLink: '',
     //      image: 'images',
     //      alt: '',
     //      producer: 'Amiri',
     //      productName: '',
     //      price:0,
     // },
     // {
     //      id: 10,
     //      productLink: '',
     //      image: 'images',
     //      alt: '',
     //      producer: 'Amiri',
     //      productName: '',
     //      price:250,
     // },
]

const face_caps = [...new Set(face_caps_products.map((face_cap)=>{
     return face_cap;
}))]

let faceCap = 0;

document.querySelector('.product_wrap4').innerHTML = face_caps.map((face_cap)=>{
     let {productLink,image,alt,producer,productName,price} = face_cap;
     
     return (
          `<div class='product'>
               <div class="img">
                    <a href=${productLink}>
                         <img class='img' src=${image} alt="${alt}"></img>
                    </a>
               </div>
               <p class='producer'>${producer}</p>
               <h3 class='productName'>${productName}</h3>
               <div class="rate">
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
                    <div><i class="fas fa-star"></i></div>
               </div>
               <div class="price_cart">
                    <h3 class="price">$ ${price}.00</h3>
                    ` + "<i class='fas fa-cart-plus' onclick='addtocart4("+(faceCap++)+")'></i>" + 
               `</div>
          </div>`
     )
}).join('');

function addtocart4(s){
     carts.push({...face_caps[s]});
     displayFace_Caps();
}
function deletecart4(s){
     carts.splice(s,1)
     displayFace_Caps();
}

function displayFace_Caps(s){
     let o = 0, total = 0;
     document.querySelector('.count').innerHTML = carts.length;

     if(carts.length === 0){
          document.querySelector('.cartItem').innerHTML = 'Your cart is empty.';
          document.querySelector('.total').innerHTML = "$ "+0+".00";
     }else{
          document.querySelector('.cartItem').innerHTML = carts.map((face_cap)=>{
               let {productLink,image,producer,productName,price} = face_cap;

               total = total + price;
               document.getElementById('total').innerHTML = "$ " + total + ".00";

               return (
                    `<div class="cart-item-cont">
                         <div class="cart-item">
                              <div class="row-img">
                                   <img class='rowing' src=${image}></img>
                              </div>
                              <h4>${producer}</h4>
                              <h4>${productName}</h4>
                              <h4>${price}.00</h4>` +
                              "<i class='fas fa-trash' onclick='deletecart4("+(o++)+")'></i>" +
                         `</div>
                    </div>
                    `
               )
          }).join('');
     }
}