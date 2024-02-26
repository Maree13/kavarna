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

document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      // Menu se skryje pouze na malých obrazovkách
      menuList.style.display = 'none';
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

// ARROW UP

const arrowIcon = document.querySelector('.fa-arrow-up-from-bracket');

window.addEventListener('scroll', () => {
  // Vypočítam výšku okna (viewportu)
  const viewportHeight = window.innerHeight;
  // Zistím, ako ďaleko sme scroll-ovali
  const scrollDistance = window.scrollY;

  if (scrollDistance >= viewportHeight) {
    arrowIcon.style.display = 'block';
  } else {
    arrowIcon.style.display = 'none';
  }
});

// Pridanie 'click' event listener na arrowIcon
arrowIcon.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// FORM - PASSWORD CHECK

const verifyRegistration = () => {
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;
  let message = document.getElementById('message');

  // Ceknem, ci je aplikovany dark mode
  const isDarkMode = document.body.classList.contains('dark-mode');

  // Nastavim farbu textu podla aktualneho modu
  const textColor = isDarkMode ? 'var(--light)' : 'var(--font-dark)';

  if (password === confirmPassword) {
    if (password.length >= 8) {
      message.textContent = '— Registrace byla úspěšná.';
      message.style.color = textColor; // Použití dynamicky zvolené barvy
    } else {
      message.textContent = '— Heslo musí mít alespoň 8 znaků.';
      message.style.color = 'var(--font-red)';
    }
  } else {
    message.textContent = '— Hesla se neshodují.';
    message.style.color = 'var(--font-red)';
  }

  // Aplikujem dalšie styly
  message.style.fontSize = '18px';
  message.style.textTransform = 'lowercase';
  message.style.letterSpacing = '0.4rem';
};

// TOGGLE LIGHT MODE - DARK MODE

const toggleThemeBtn = document.querySelector('.button-mode');

toggleThemeBtn.addEventListener('click', () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  toggleThemeBtn.textContent = isDarkMode ? 'Back to Light' : 'Try It Dark';

  // Změna textu tlačítka zároveň s přepínáním tématu
  const buttonElm = document.querySelectorAll('.button');

  buttonElm.forEach((button) => {
    button.classList.toggle('dark-theme-button');
  });

  const footerElm = document.querySelector('.footer');
  footerElm.style.backgroundColor = isDarkMode ? '#111' : '#f7f7f7';

  const contactHeading = document.querySelector('.contact-heading');
  const githubIcon = document.querySelector('.fa-github');

  if (isDarkMode) {
    contactHeading.style.color = 'var(--light)';
    githubIcon.style.color = 'var(--light)';
  } else {
    contactHeading.style.color = 'var(--font-dark)';
    githubIcon.style.color = 'var(--font-dark)';
  }

  const showMessage = (text) => {
    message.textContent = text;

    const isDarkMode = document.body.classList.contains('dark-mode');

    message.style.color = isDarkMode ? 'var(--light)' : 'var(--font-dark)';
  };
});
