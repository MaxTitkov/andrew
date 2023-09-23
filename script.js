const isMobile = window.matchMedia("(max-width: 600px)").matches;

const preventScroll = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
}

function disableScroll() {
    document.body.addEventListener('wheel', preventScroll, {passive: false});
}

function enableScroll() {
    document.body.removeEventListener('wheel', preventScroll, {passive: false});
}

const burger = document.querySelector('.burger');
const menu = document.querySelector('#'+burger.dataset.target);
let userPosition = window.pageYOffset;

const burgerToggler = () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');

    if(menu.classList.contains('is-active') & isMobile){
        disableScroll()
    }else{
        enableScroll()
    }
}
burger.addEventListener('click', burgerToggler);

const navbarItems = document.querySelectorAll('.navbar-item')
navbarItems.forEach(e => {
    e.addEventListener('click', burgerToggler)
})

const burgerBtn = document.querySelector('.burger');
const topPosition = burgerBtn.offsetTop;

const fixPosition = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= topPosition) {
        burgerBtn.style.position = 'fixed';
        burgerBtn.style.top = 0;
        burgerBtn.style.right = 0;
    } else {
        burgerBtn.style.position = 'fixed';
    }

}

window.addEventListener('scroll', fixPosition);

// const scrollTo = (element) => {
//     const target = document.getElementById('elem1');
//     target.scrollIntoView({ behavior: 'smooth' });
// }

const scrollTo = (element) => {
    const target = document.getElementById(element);
    target.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('toElem1')
    .addEventListener('click', function(){
        scrollTo('elem1')
})

document.getElementById('toElem2')
    .addEventListener('click', function(){
        scrollTo('elem2')
})

document.getElementById('toElem3')
    .addEventListener('click', function(){
        scrollTo('elem3')
})

document.getElementById('toElem4')
    .addEventListener('click', function(){
        scrollTo('elem4')
})