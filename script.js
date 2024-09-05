// Función que aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function selected(link) {
    var options = document.querySelectorAll('#links a');
    options.forEach(option => option.classList.remove('select'));
    link.classList.add('select');
    var x = document.getElementById('nav');
    x.classList.remove('responsive');
}

// Función que muestra el menú responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    x.classList.toggle("responsive");
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() { efectSkills() };

// Función que aplica la animación de la barra de habilidades
function efectSkills() {
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distance_skills >= 300) {
        document.getElementById("html").classList.add("bars-progress1");
        document.getElementById("js").classList.add("bars-progress2");
        document.getElementById("bd").classList.add("bars-progress3");
        document.getElementById("Java").classList.add("bars-progress4");
        document.getElementById("py").classList.add("bars-progress5");
        document.getElementById("sb").classList.add("bars-progress6");
        document.getElementById("dj").classList.add("bars-progress7");
        // Desactivar el evento onscroll si la animación solo debe ejecutarse una vez
        // window.onscroll = null;
    }
}

// Función para mostrar/ocultar el submenú
function toggleSubMenu(event) {
    event.preventDefault();
    const submenu = event.currentTarget.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

let currentSlide = 0;

function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.project-item');
  const totalSlides = items.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const slideWidth = items[0].clientWidth;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
