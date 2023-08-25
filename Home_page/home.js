// let lastKnownScrollPosition = 0;
// const header = document.querySelector("header");

// function doSomething(scrollPos) {
//   console.log("Scroller is at:", scrollPos);

//   if (scrollPos > 100) {
//     header.classList.add("onScroll");
//   } else if (scrollPos < 80 || scrollPos === 0) {
//     header.classList.remove("onScroll");
//   }
// }

// document.addEventListener("scroll", (event) => {
//   lastKnownScrollPosition = window.scrollY;

//   doSomething(lastKnownScrollPosition);
// });

// function toggleMenu(){
//     let x= document.getElementById('list');

// }

const heading = document.querySelector('#intersect');
const nav = document.querySelector('header')

const observer = new IntersectionObserver(
    (enteries) => {
        if (enteries[0].isIntersecting) {
            nav.classList.remove('onScroll');
        }
        else {
            nav.classList.add('onScroll');
        }
    },
    {
        root: null,
        rootMargin: "0%",
        threhold: 1,
    }
);
observer.observe(heading);


let menu = document.querySelector('ul');
let btn = document.querySelector('.click');

let visible = false;

btn.addEventListener('click', function() {
    if (!visible)
        menu.style.visibility = 'visible';
    else
        menu.style.visibility = 'hidden';

    visible = !visible;
})