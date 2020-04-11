window.onload=function(){

const second = document.querySelector(".second"),
    first = document.querySelector(".first"),
    next = document.querySelector(".next"),
    back = document.querySelector(".back"),
    modalHome = document.querySelector(".modal-home"),
    modalCar = document.querySelector(".modal-car"),
    modalOffice = document.querySelector(".modal-office"),
    priceHome = document.querySelector(".price-home"),
    priceCar = document.querySelector(".price-car"),
    priceOffice = document.querySelector(".price-office"),
    modalHomeBtn = document.querySelector(".home"),
    modalCarBtn = document.querySelector(".car"),
    modalOfficeBtn = document.querySelector(".office");

// Слайдер
next.addEventListener('click', () => {
    second.style.display = 'flex';
    first.style.display = 'none';
});

back.addEventListener('click', () => {
    first.style.display = 'flex';
    second.style.display = 'none';
});

// Открываю модалки
priceHome.addEventListener('click', () => {
    modalHome.style.display = 'flex';
});

priceCar.addEventListener('click', () => {
    modalCar.style.display = 'flex';
});

priceOffice.addEventListener('click', () => {
    modalOffice.style.display = 'flex';
    
});

// Закрываю модалки
modalHome.addEventListener('click', () => {
    modalHome.style.display = 'none';
});

modalCar.addEventListener('click', () => {
    modalCar.style.display = 'none';
});

modalOffice.addEventListener('click', () => {
    modalOffice.style.display = 'none';
});

// Кнопка в модалке
modalHomeBtn.addEventListener('click', () => {
    modalHome.style.display = 'none';
});

modalCarBtn.addEventListener('click', () => {
    modalCar.style.display = 'none';
});

modalOfficeBtn.addEventListener('click', () => {
    modalOffice.style.display = 'none';
});

}