const materias = [
  {
    id: "calculo1",
    nombre: "Cálculo I",
    semestre: 1,
    prerequisitos: []
  },
  {
    id: "calculo2",
    nombre: "Cálculo II",
    semestre: 2,
    prerequisitos: ["calculo1"]
  },
  {
    id: "calculo3",
    nombre: "Cálculo III",
    semestre: 3,
    prerequisitos: ["calculo2"]
  },
  {
    id: "ecuaciones",
    nombre: "Ecuaciones Diferenciales",
    semestre: 4,
    prerequisitos: ["calculo3"]
  },
  {
    id: "fisica1",
    nombre: "Física I",
    semestre: 2,
    prerequisitos: []
  },
  {
    id: "fisica2",
    nombre: "Física II",
    semestre: 3,
    prerequisitos: ["fisica1"]
  },
  {
    id: "fisica3",
    nombre: "Física III",
    semestre: 4,
    prerequisitos: ["fisica2"]
  }
];

let completadas = JSON.parse(localStorage.getItem("materiasHechas")) || [];

function render() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  materias.forEach((mat) => {
    const div = document.createElement("div");
    div.classList.add("materia");

    const cumplio = mat.prerequisitos.every(p => completadas.includes(p));
    const hecha = completadas.includes(mat.id);

    if (!cumplio) div.classList.add("bloqueada");
    if (hecha) div.classList.add("completada");

    div.innerText = `${mat.nombre}`;
    div.addEventListener("click", () => {
      if (hecha) {
        completadas = completadas.filter(id => id !== mat.id);
      } else {
        completadas.push(mat.id);
      }
      localStorage.setItem("materiasHechas", JSON.stringify(completadas));
      render();
    });

    malla.appendChild(div);
  });
}

render();
