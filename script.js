// HAMBURGER MENU - <DIV CLASS="MENU-ICON">

const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
  if (hamburgerIcon.classList[1] === 'fa-bars') {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark');
    menuList.style.display = 'block';
  } else {
    hamburgerIcon.classList.add('fa-bars');
    hamburgerIcon.classList.remove('fa-xmark');
    menuList.style.display = 'none';
  }

  // VIEM, ZE BY SOM MALA UPREDNOSTNIT CSS, ALE FUNGUJE MI TO LEPSIE V JAVASCRIPTU. NERADA POUZIVAM V CSS !IMPORTANT, MAM POCIT ZE MI TO ROZHODI CELE CSS
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      menuList.style.display = '';
      hamburgerIcon.classList.replace('fa-xmark', 'fa-bars');
    }
  });
});
