document.addEventListener("DOMContentLoaded", function () {
  const toggleInput = document.getElementById("darkmode-toggle");
  const body = document.body;

  // Verificar si el usuario tiene una preferencia guardada en localStorage
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    toggleInput.checked = true;
  }

  // Evento para detectar cambios en el estado del checkbox
  toggleInput.addEventListener("change", () => {
    if (toggleInput.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});
