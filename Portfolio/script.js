//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function selectioned(link) {
    var options = document.querySelectorAll('#links  a');
    options[0].className = "";
    options[1].className = "";
    options[2].className = "";
    options[3].className = "";
    options[4].className = "";
    link.className = "selctioned";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectSkills() };

//funcion que aplica la animación de la barra de habilidades
function efectSkills() {
    var skills = document.getElementById("skills");
    var distance_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distance_skills >= 300) {
        document.getElementById("html").classList.add("bars-progress1");
        document.getElementById("js").classList.add("bars-progress2");
        document.getElementById("bd").classList.add("bars-progress3");
        document.getElementById("c#").classList.add("bars-progress4");
        document.getElementById("py").classList.add("bars-progress5");
    }

}