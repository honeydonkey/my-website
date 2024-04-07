// MENU SHOW & HIDE
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// SHOW
toggleMenu.addEventListener('click', () => {
  navMenu.classList.add('show');
})

// HIDE
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show');
})

// CLOSE MENU
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('show');
}))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active');
    }
  })
}

// SEND EMAIL

// function sendEmail() {
//   Email.send({
//     SecureToken: "48e2deee-1b69-4d3f-a6a2-e03318e00677",
//     To : 'mariannewong23000@gmail.com',
//     From : document.getElementById('email').value,
//     Subject : "New Inquiry!",
//     Body : "Name :" + document.getElementById('username').value
//             + "<br/> Email: " + document.getElementById('email').value
//             + "<br> Subject: " + document.getElementById('subject').value
//             + "<br> Message: " + document.getElementById('message').value
// }).then(
//   message => alert("Email sent successfully! I'll get back to you soon!")
// );
// }
