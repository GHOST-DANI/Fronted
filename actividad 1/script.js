function toggleh1(tecnologia) {
  const div = document.getElementById("info");

  if (div.style.display === "none" || div.innerHTML === "") {
    let contenido = "";

    if (tecnologia === "HTML") {
      contenido = `
        <h2>HTML</h2>
        <p>HTML es el lenguaje de marcado que estructura el contenido de la web.</p>
      `;
    } else if (tecnologia === "CSS") {
      contenido = `
        <h2>CSS</h2>
        <p>CSS se usa para dar estilo, color y diseño a las páginas web.</p>
      `;
    } else if (tecnologia === "JS") {
      contenido = `
        <h2>JavaScript</h2>
        <p>JavaScript agrega interactividad y dinamismo a las páginas web.</p>
      `;
    }

    div.innerHTML = contenido;
    div.style.display = "block";
  } else {
    div.style.display = "none";
    div.innerHTML = "";
  }
}
