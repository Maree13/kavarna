// HAMBURGER MENU - <DIV CLASS="MENU-ICON">

const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
  if (hamburgerIcon.classList[1] === 'fa-bars') {
    hamburgerIcon.classList.remove('fa-bars');
    hamburgerIcon.classList.add('fa-xmark');
    menuList.style.display = 'block';
    menuList.style.backgroundColor = 'transparent';
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

// API

const getQuote = async () => {
  const response = await fetch('https://type.fit/api/quotes');
  const quotes = await response.json();
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById('quote-text').innerText = quote.text;
  document.getElementById('quote-author').innerText = quote.author || 'Unknown';
};

// Priradenie udalosti kliknutia a volanie funkcie getQuote pri načítaní stránky
document.getElementById('new-quote').addEventListener('click', getQuote);
window.onload = getQuote;
