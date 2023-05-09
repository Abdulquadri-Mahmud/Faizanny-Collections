const mainImage = document.querySelector('#mainImage');

const smallImages = Array.from(document.querySelectorAll('.small-img'));

smallImages.map(smallImage =>{
     smallImage.addEventListener('click',()=>{
          if(smallImage.classList.contains('img1')){
               mainImage.src = smallImage.src;
          }
          if(smallImage.classList.contains('img2')){
               mainImage.src = smallImage.src;
          }
          if(smallImage.classList.contains('img3')){
               mainImage.src = smallImage.src;
          }
          if(smallImage.classList.contains('img4')){
               mainImage.src = smallImage.src;
          }
          if(smallImage.classList.contains('img5')){
               mainImage.src = smallImage.src;
          }
     });
});
