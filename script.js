const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
let btn = document.querySelector('.btn-3');


// smooth scroll to element and align it at the bottom
btn.addEventListener('click',function scrol(){
   const service = document.querySelector(".services");
   service.scrollIntoView({ behavior: 'smooth', block: 'start'});
})


