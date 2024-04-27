const themeButton = document.querySelector('.change-theme');
const lightTheme = 'light-theme';

const icons = ['fa-sun', 'fa-moon'];
let i = 1;
themeButton.addEventListener('click', () => {
  if (i>=2) {i=0}
  themeButton.classList.remove(icons[0]);
  themeButton.classList.remove(icons[1]);
  themeButton.classList.add(icons[i]);
  i++;

  if (themeButton.classList.contains(icons[1])) {
    document.body.classList.add(lightTheme);
  } else {
    document.body.classList.remove(lightTheme);
  }
})

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute('id'),
      navClass = document.querySelector('.nav-item a[href*=' + sectionId + ']');
      homeActive = document.querySelector('#home-active');
      aboutActive = document.querySelector('#about-active');
      contactActive = document.querySelector('#contact-active');
    
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      navClass.classList.add('active-link');
    } else {
      navClass.classList.remove('active-link');
    }

    if (scrollDown > 2400) {
      contactActive.classList.add('active-link');
      homeActive.classList.remove('active-link');
      aboutActive.classList.remove('active-link');
    } else {
      contactActive.classList.remove('active-link');
    }
  })
}

window.addEventListener('scroll', scrollActive);
