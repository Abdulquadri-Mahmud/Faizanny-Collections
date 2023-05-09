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
function deletecart(f){
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
                         "<i class='fas fa-trash' onclick='deletecart("+(e++)+")'></i>" +
                    `</div>
               </div>`
               )
          }).join('');
     }
}