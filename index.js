const botonMostrar = document.querySelector("#descargar");
botonMostrar.addEventListener("click", () => {
  const password = document.querySelector("#password").value;

  if (password === "contraseña") {
    const modal = document.querySelector("#modal");
    const imagen1 = modal.querySelector("#imagen1");
    const imagen2 = modal.querySelector("#imagen2");
    const imagenTitulo = modal.querySelector("#imagen-titulo");
    const imagenId = botonMostrar.dataset.imagenId; // Valor dinámico obtenido del atributo data del botón
    // const imagenNombre = botonMostrar.getAttribute("data-imagen-id");
    // document.querySelector("#imagen-nombre").textContent = imagenNombre;
    const url = new URL(window.location.href);
    url.searchParams.set("imagen", imagenId);
    window.history.pushState({}, "", url);
    imagen1.src = `https://sisivey.com/apiobraivey/imagenes/${imagenId}.JPG`;
    imagen2.src = `https://sisivey.com/apiobraivey/imagenes/${
      imagenId + ".2"
    }.JPG`;
    imagenTitulo.textContent = imagenId; // Asignar el valor dinámico al h2
    modal.style.display = "block";
  } else {
    alert("Contraseña incorrecta");
  }
});

const imagenId = new URLSearchParams(window.location.search).get("imagen");
if (imagenId) {
  const botonMostrar = document.querySelector("#descargar");
  const passwordInput = document.querySelector("#password");
  let attempts = 0; // Contador de intentos
  botonMostrar.addEventListener("click", () => {
    const password = passwordInput.value;
    if (password === "contraseña") {
      const modal = document.querySelector("#modal");
      const imagen1 = modal.querySelector("#imagen1");
      const imagen2 = modal.querySelector("#imagen2");
      const imagenTitulo = modal.querySelector("#imagen-titulo");
      botonMostrar.dataset.imagenId = imagenId;
      imagen1.src = `https://sisivey.com/apiobraivey/imagenes/${imagenId}.JPG`;
      imagen2.src = `https://sisivey.com/apiobraivey/imagenes/${
        imagenId + ".2"
      }.JPG`;
      imagenTitulo.textContent = imagenId;
      modal.style.display = "block";
    } else {
      attempts++; // Incrementar el contador de intentos
      if (attempts === 1) {
        alert("Le quedan 2 intentos.");
      } else if (attempts === 2) {
        alert("Le queda 1 intento.");
      } else {
        alert("Intentos excesivos. Intente nuevamente más tarde.");
        window.history.pushState({}, "", "/");
      }
    }
  });
}


const botonCerrar = document.querySelector("#cerrar");
botonCerrar.addEventListener("click", () => {
  const modal = document.querySelector("#modal");
  modal.style.display = "none";
  const imagen1 = modal.querySelector("#imagen1");
  const imagen2 = modal.querySelector("#imagen2");
  imagen1.src = "";
  imagen2.src = "";
});
