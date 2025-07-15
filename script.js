const materias = [
  { semestre: 1, materias: ["Cálculo I", "Álgebra lineal I", "Química Básica", "Vida y Cultura Universitaria", "Inglés I"] },
  { semestre: 2, materias: ["Matemáticas II", "Diseño II", "Comunicación"] },
  // Agrega más...
];

const malla = document.getElementById("malla");

materias.forEach((s) => {
  const box = document.createElement("div");
  box.className = "semestre";
  box.innerHTML = `<h3>Semestre ${s.semestre}</h3><ul>${s.materias.map(m => `<li>${m}</li>`).join('')}</ul>`;
  malla.appendChild(box);
});
