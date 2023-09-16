document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  const titulo = document.getElementById("title");
  const navIcon = document.querySelector(".nav__icon");
  const sections = document.querySelectorAll("section");
  const barrauno = document.querySelector(".barras");
  const menuButton = document.querySelector(".boton");
  const dropdown = document.querySelector(".dropdown");

  //----------------------------- Animacion Barras----------------

  document.querySelector(".bars__menu").addEventListener("click", animateBars);

  var line1__bars = document.querySelector(".line1__bars-menu");
  var line2__bars = document.querySelector(".line2__bars-menu");
  var line3__bars = document.querySelector(".line3__bars-menu");

  function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
  }

  //----------------------------- Animacion Barras----------------

  //----------------------------- Animacion Barras----------------

  menuButton.addEventListener("click", function () {
    dropdown.classList.toggle("XshowDropdown");
    menuButton.classList.toggle("clickeado");
  });

  menuButton.addEventListener("mouseenter", function () {
    // Verificamos si barrauno tiene background negro
    const computedStyles = getComputedStyle(barrauno);
    const backgroundColor = computedStyles.backgroundColor;

    if (backgroundColor === "rgb(0, 0, 0)" || backgroundColor === "#000") {
      // Aplicar la escala solo si el fondo es negro
      barrauno.style.transform = "scale(0.7)";
    }
  });

  menuButton.addEventListener("mouseleave", function () {
    // Revertir la escala cuando el mouse sale del botón
    barrauno.style.transform = "scale(1)";
  });

  //------------------SECCIONES------------------

  sections.forEach((section) => {
    section.addEventListener("wheel", function (e) {
      e.preventDefault();
      const deltaY = e.deltaY;
      const currentIndex = Array.from(sections).indexOf(section);

      if (deltaY > 0 && currentIndex < sections.length - 1) {
        sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
      } else if (deltaY < 0 && currentIndex > 0) {
        sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  //------------------SECCIONES------------------

  //----------------------------- Scroll  ----------------

  // Función para cambiar el color de fondo del nav al hacer scroll
  function changeNavBackground() {
    if (window.scrollY > 100) {
      nav.style.backgroundColor = "rgba(0, 0, 0,1)"; // Cambia el color de fondo a tu elección
      titulo.style.color = "rgba(255, 255, 255, 1)";
      line1__bars.background = "rgba(255, 255, 255, 1)";
      line2__bars.background = "rgba(255, 255, 255, 1)";
      line3__bars.background = "rgba(255, 255, 255, 1)";
    } else {
      navIcon.src = "./assets/menuu.png";
      nav.style.backgroundColor = "transparent";
      line1__bars.background = "rgba(0, 0, 0,1)";
      line2__bars.background = "rgba(0, 0, 0,1)";
      line3__bars.background = "rgba(0, 0, 0,1)";
      title.style.color = "rgba(0, 0, 0,1)"; // Vuelve al fondo transparente si el scroll está arriba
    }
  }

  window.addEventListener("scroll", changeNavBackground);

  //-----------------------------SCroll----------------

  //----------------------------- CLick sobre titulo----------------
  if (titulo) {
    titulo.addEventListener("click", function () {
      window.location.href = "#"; // Redirige al usuario a "#menu"
    });
  }

  //-----------------------------Click sobre titulo----------------
});
