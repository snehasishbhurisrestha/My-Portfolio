const heder = document.querySelector("header");
const nav = document.querySelector("navlist");
window.addEventListener('scroll',function(){
    heder.classList.toggle("sticky", this.window.scrollY > 0);
    heder.classList.toggle("sticky-color", this.window.scrollY > 658);
});

var typed = new Typed(".typing", {
    strings: ["Front-End Developer.", "Competitive Programmer.", "Photographer."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// owl carousel script
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});


let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    nav.classList.toggle("col", this.window.scrollY > 658);
}