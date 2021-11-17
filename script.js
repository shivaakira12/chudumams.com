const navbar=document.querySelector('.menu');
const ham=document.querySelector('.hamburger')
const searchicon=document.querySelector('#searchhere');
const s=document.querySelector('.fas fa-search')
ham.addEventListener('click',()=>{
ham.classList.toggle('active');
navbar.classList.toggle('active');
searchicon.classList.toggle('active');
s.classList.toggle('active');
})