const burger = document.querySelector('.burger'),
      menu = document.querySelector('.header__row');
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});