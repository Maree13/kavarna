// HAMBURGER MENU - <DIV CLASS="MENU-ICON">

const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
  if (hamburgerIcon.classList[1] === 'fa-bars') {
    hamburgerIcon.classList.add('fa-xmark');
    hamburgerIcon.classList.remove('fa-bars');
    menuList.style.display = 'block';
  } else {
    hamburgerIcon.classList.add('fa-bars');
    hamburgerIcon.classList.remove('fa-xmark');
    menuList.style.display = 'none';
  }
});

// window.addEventListener('resize', () => {
//   if (window.innerWidth > 600) {
//     menuList.style.display = '';
//     hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
//   }
// });
