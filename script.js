const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const y=document.getElementById('year');
if(y)y.textContent=new Date().getFullYear();
