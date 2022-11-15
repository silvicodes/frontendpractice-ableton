<script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></script>
const plus = document.getElementById('plus');
const extendedNav = document.querySelector('.extended-nav');

plus.addEventListener('click', ()=> {
    extendedNav.classList.toggle('show');
})

const accept = document.getElementById('accept');
const modal = document.querySelector('.modal');

accept.addEventListener('click', ()=> {
    modal.classList.toggle('none');
})

const close = document.getElementById('close');

close.addEventListener('click', ()=> {
    modal.classList.toggle('none');
})

const downArrow = document.querySelector('.down-arrow');
const mobileNavExtended = document.querySelector('.mobile-nav-extended');
const nav = document.querySelector('nav');

downArrow.addEventListener('click', ()=> {
    mobileNavExtended.classList.toggle('show');
    nav.classList.toggle('blue-bg')
})


/*
let parent = document.querySelector('.sticky').parentElement;
while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}
*/

/*
const secondLevel = document.querySelector('.second-level');
window.addEventListener('scroll', bodyScroll)
var scrollTimer = -1;
function bodyScroll() {
  secondLevel.style.position = 'fixed';
  if (scrollTimer != -1)
    clearTimeout(scrollTimer);
  scrollTimer = window.setTimeout("scrollFinished()", 500);
}
function scrollFinished() {
  secondLevel.style.position = 'montserrat';
}
*/