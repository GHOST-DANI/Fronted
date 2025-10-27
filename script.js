// Galería turística
const lugares = [
  {
    nombre: "Plazoleta Jairo Varela",
    imagen: "Imagen de WhatsApp 2025-08-18 a las 21.44.38_ec804056.jpg",
    descripcion: "Un homenaje al maestro de la salsa, con esculturas de trompetas gigantes y un museo musical.",
    ubicacion: "https://maps.app.goo.gl/k8rfez9a7iJpMzWs8",
  },
  {
    nombre: "Iglesia de San Antonio",
    imagen: "san-antonio-jpg.webp",
    descripcion: "Ubicada en una colina con vista panorámica, esta iglesia colonial es uno de los sitios más emblemáticos.",
    ubicacion: "https://maps.app.goo.gl/Rq1pUbx48wK4EKhg7",
  },
  {
    nombre: "El Gato del Río",
    imagen: "gato-del-rio-.jpg.webp",
    descripcion: "Escultura de bronce creada por Hernando Tejada, rodeada por otras 'gatas' intervenidas por artistas.",
    ubicacion:"https://maps.app.goo.gl/ToHRVh2yjGC5KpQz5", 
  },
  {
    nombre: "Museo La Tertulia",
    imagen: "museo-tertulia.webp",
    descripcion: "Centro cultural moderno con exposiciones de arte contemporáneo y cine independiente.",
    ubicacion:"https://maps.app.goo.gl/eFDMVyYhyfS9nGAt5",
  },
  {
    nombre: "Monumento Sebastián de Belalcázar",
    imagen: "jairo-varela.jpg",
    descripcion: "Mirador con una estatua del fundador de Cali y vistas espectaculares de la ciudad.",
    ubicacion: "https://maps.app.goo.gl/MtUebLxHhTdjqKeG8",
  },
  {
    nombre: "Parque del Perro",
    imagen: "perro.webp",
    descripcion: "Zona gastronómica y de vida nocturna con bares, cafés y una escultura canina iluminada.",
    ubicacion: "https://maps.app.goo.gl/3ia9vfLmt9jNLaPy5",
  },
  {
    nombre: "Parque Artesanal Loma de La Cruz",
    imagen: "la-loma.jpg",
    descripcion: "Espacio bohemio con venta de artesanías, presentaciones culturales y ambiente juvenil.",
    ubicacion: "https://maps.app.goo.gl/DXxrjSkaD4SFx2Di9",
  }
];

const quienesSomos = document.getElementById("quienes-somos");

quienesSomos.innerHTML = `
  <section>
    <h2>¿Quiénes Somos?</h2>
    <p>
      Somos un equipo apasionado por compartir lo mejor de Cali 🇨🇴.<br>
      Nuestra misión es ayudarte a descubrir los rincones más especiales de la ciudad y planificar tu viaje con facilidad.
    </p>
  </section>
`;

function toggleQuienesSomos() {
  const div = document.getElementById("quienes-somos");

  if (div.innerHTML === "") {
    div.innerHTML = `
      <section>
        <h2>¿Quiénes Somos?</h2>
        <p>
          Somos un equipo comprometido con mostrar lo mejor de Cali 🇨🇴.<br>
          Esta guía ha sido creada para ayudarte a descubrir lugares increíbles y organizar tu viaje fácilmente.
        </p>
      </section>
    `;
    div.style.display = "block";
  } else {
    div.innerHTML = "";
    div.style.display = "none";
  }
};
const galeria = document.getElementById("galeria");

lugares.forEach(lugar => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${lugar.imagen}" alt="${lugar.nombre}">
    <div class="card-content">
      <h3>${lugar.nombre}</h3>
      <p>${lugar.descripcion}</p>
      <a href="${lugar.ubicacion}" target="_blank" class="ubicacion-link"> Ir </a>
    </div>
  `;
  galeria.appendChild(card);
});

// Lista de tareas
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    addTask(text);
    input.value = "";
  }
});

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏️";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Editar tarea:", span.textContent);
    if (newText) span.textContent = newText;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);
}   