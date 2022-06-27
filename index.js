const menu = document.getElementById('menu');
const navCover = document.getElementById('menuList');
const icon = document.querySelector('.menuIcon');

// console.log(openMobileNav)
menu.addEventListener("click", () => {
      navCover.classList.toggle("active");
      icon.classList.toggle("bx-x");
});

navCover.addEventListener("click", () => {
      navCover.classList.remove("active");
      icon.classList.remove("bx-x");
})



// console.log(openNav())
