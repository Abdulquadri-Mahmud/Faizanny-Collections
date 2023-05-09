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

console.log('hello ')