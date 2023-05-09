const menu_bar_cont = document.querySelector('.menu_bar_cont');
const open_menu = document.querySelector('.open_menu');
const close_menu = document.querySelector('.close_menu');

open_menu.addEventListener('click',()=>{
     open_menu.style.display = 'none';
     close_menu.style.display = 'block';

     menu_bar_cont.style.width = '50%';
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
     showcarts.style.height = '500px';
     showcartbtn.style.color = '#fff';
     counter.style.background = '#fff';
     counter.style.color = 'crimson';
     closeCartbtn.style.display = 'block';
     sidebar.style.display = 'block';
});
closeCartbtn.addEventListener('click',()=>{
     showcarts.style.height = '0px';
     showcartbtn.style.color = 'crimson';
     counter.style.background = 'crimson';
     counter.style.color = '#fff';
     closeCartbtn.style.display = 'none';
     sidebar.style.display = 'none';
});

const feature_products = [
     {
          id: 0,
          productLink: '',
          image: 'images/abaya4.jpg',
          producer: 'Adidas',
          productName: 'Bag & shoe',
          price:180,
     },
     {
          id: 1,
          productLink: 'round-neck1-products.html',
          image: 'images/round1.jpeg',
          producer: 'Adidas',
          productName: 'Round Neck',
          price:150,
     },
     {
          id: 2,
          productLink: 'Tshirt1-single-project.html',
          image: 'images/T-shirt.jpeg',
          producer: 'Adidas',
          productName: 'T-Shirt',
          price:75,
     },
     {
          id: 3,
          productLink: 'face-cap4-single-product.html',
          image: 'images/Face-Cap4.jpeg',
          producer: 'Adidas',
          productName: 'Face Cap',
          price:55,
     },
     {
          id: 4,
          productLink: 'bag7-single-products.html',
          image: 'images/bag_shoe4.jpg',
          producer: 'Adidas',
          productName: 'Bag Show',
          price:150,
     },
     {
          id: 5,
          productLink: 'abaya5-single-products.html',
          image: 'images/abaya5.jpg',
          producer: '',
          productName: 'Abaya',
          price:250,
     },
     {
          id: 6,
          productLink: 'mens-wear1-single-products.html',
          image: 'images/mens_wear_1.jpeg',
          producer: 'Adidas',
          productName: 'Mens Wear',
          price:170,
     },
     {
          id: 7,
          productLink: '',
          image: 'images/girls_shoe2.jpg',
          producer: 'Adidas',
          productName: 'Girls Show',
          price:140,
     },
]
// const feat_product = document.querySelector('.feat_product')

const product_categories_1 = [...new Set(feature_products.map((feature_product)=>{
     return feature_product;
}))]

let i = 0;

document.querySelector('.feat_product').innerHTML = product_categories_1.map((feature_product)=>{
     let {productLink,image,producer,productName,price} = feature_product;
     return (
          `
          <div class="product">
               <div class="img">
                    <a href=${productLink}>
                         <img src=${image} alt=""></img>
                    </a>
               </div>
               <p>${producer}</p>
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
          `    </div>
          </div>`
     )
}).join('');


let carts = [];

function addtocart1(a){
     carts.push({...product_categories_1[a]});
     displayCart1();
}
function deletecart(a){
     carts.splice(a,1)
     displayCart2();
}

function displayCart1(a){
     let j = 0, total = 0;
     document.querySelector('.count').innerHTML = carts.length;
     if(carts.length == 0){
          document.querySelector('.cartItem').innerHTML = 'Your Cart Is Empty';
          document.getElementById('total').innerHTML = "$ "+0+".00";
     }else{
          document.querySelector('.cartItem').innerHTML = carts.map((feature_product)=>{
               let {image,producer,productName,price} = feature_product;
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
                         "<i class='fas fa-trash' onclick='deletecart("+(j++)+")'></i>" +
                    `</div>
               </div>`
               )
          }).join('');
     }
}
/*  */

const new_arrival_products = [
     {
          id: 0,
          productLink: 'abaya1-single-product.html',
          image: 'images/abaya1.jpg',
          producer: 'Adidas',
          productName: 'Abaya',
          price:200,
     },
     {
          id: 1,
          productLink: '',
          image: 'images/abaya3.jpg',
          producer: 'Adidas',
          productName: 'Abaya',
          price:220,
     },
     {
          id: 2,
          productLink: '',
          image: 'images/bag_shoe1.jpg',
          producer: 'Adidas',
          productName: 'Bag & Shoe',
          price:105,
     },
     {
          id: 3,
          productLink: '',
          image: 'images/bag_shoe16.jpg',
          producer: 'Adidas',
          productName: 'Bag & Shoe',
          price:115,
     },
     {
          id: 4,
          productLink: '',
          image: 'images/girls_shoe1.jpg',
          producer: 'Adidas',
          productName: 'Manolo Balhnik',
          price:200,
     },
     {
          id: 5,
          productLink: '',
          image: 'images/girls_shoe4.jpg',
          producer: '',
          productName: 'Stiletto',
          price:250,
     },
     {
          id: 6,
          productLink: '',
          image: 'images/Face-Cap5.jpeg',
          producer: 'Adidas',
          productName: 'Face Cap',
          price:160,
     },
     {
          id: 7,
          productLink: '',
          image: 'images/bag2.jpg',
          producer: 'Adidas',
          productName: 'Bag',
          price:190,
     },
     {
          id: 8,
          productLink: '',
          image: 'images/bag_shoe14.jpg',
          producer: 'Adidas',
          productName: 'Bag Shoe',
          price:170,
     },
     {
          id: 9,
          productLink: '',
          image: 'images/bag_shoe11.jpg',
          producer: 'Adidas',
          productName: 'Bag Shoe',
          price:170,
     },
]


const product_categories_2 = [...new Set(new_arrival_products.map((new_arrival_product)=>{
     return new_arrival_product;
}))]
function addtocart2(c){
     carts.push({...product_categories_2[c]});
     displayCart2();
}

let b = 0;

document.querySelector('.feat_product2').innerHTML = product_categories_2.map((new_arrival_product)=>{
     let {productLink,image,producer,productName,price} = new_arrival_product;
     return (
          `
          <div class="product">
               <div class="img">
                    <a href=${productLink}>
                         <img src=${image} alt=""></img>
                    </a>
               </div>
               <p>${producer}</p>
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
                    ` + "<i class='fas fa-cart-plus' onclick='addtocart2("+(b++)+")'></i>" + 
          `    </div>
          </div>`
     )
}).join('');

function displayCart2(c){
     let k = 0, total = 0;
     document.querySelector('.count').innerHTML = carts.length;
     if(carts.length == 0){
          document.querySelector('.cartItem').innerHTML = 'Your Cart Is Empty';
          document.getElementById('total').innerHTML = "$ "+0+".00";
     }else{
          document.querySelector('.cartItem').innerHTML = carts.map((new_arrival_product)=>{
               let {image,producer,productName,price} = new_arrival_product;
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
                         "<i class='fas fa-trash' onclick='deletecart("+(k++)+")'></i>" +
                    `</div>
               </div>`
               )
          }).join('');
     }
}