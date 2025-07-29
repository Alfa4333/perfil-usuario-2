// Mostrar el año actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Interactividad del perfil
const perfilCard = document.querySelector(".perfil-card");
const nombre = document.getElementById("nombre");
const ocupacion = document.getElementById("ocupacion");

let esMasculino = true;

perfilCard.addEventListener("click", () => {
  if (esMasculino) {
    nombre.textContent = "Carla Martínez";
    ocupacion.textContent = "Desarrolladora Web";
    alert("Ahora el perfil es femenino.");
  } else {
    nombre.textContent = "Carlos Martínez";
    ocupacion.textContent = "Desarrollador Web";
    alert("Ahora el perfil es masculino.");
  }

  esMasculino = !esMasculino;
});