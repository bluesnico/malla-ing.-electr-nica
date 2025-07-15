const materias = [
  { id: "calculo1", nombre: "Cálculo I", prereq: [] },
  { id: "calculo2", nombre: "Cálculo II", prereq: ["calculo1"] },
  { id: "calculo3", nombre: "Cálculo III", prereq: ["calculo2"] },
  { id: "ecuaciones", nombre: "Ecuaciones Diferenciales", prereq: ["calculo3"] },
  { id: "fisica1", nombre: "Física I", prereq: [] },
  { id: "fisica2", nombre: "Física II", prereq: ["fisica1"] },
  { id: "fisica3", nombre: "Física III", prereq: ["fisica2"] },
  

let completadas = JSON.parse(localStorage.getItem("materiasHechas")) || [];

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  materias.forEach(m => {
    const bloque = document.createElement("div");
    bloque.className = "materia";
    bloque.textContent = m.nombre;
    bloque.dataset.id = m.id;

    const prereqCumplido = m.prereq.every(p => completadas.includes(p));
    if (!prereqCumplido && m.prereq.length > 0) {
      bloque.classList.add("bloqueada");
    }

    if (completadas.includes(m.id)) {
      bloque.classList.add("hecha");
    }

    bloque.addEventListener("click", () => {
      if (completadas.includes(m.id)) {
        completadas = completadas.filter(id => id !== m.id);
      } else {
        completadas.push(m.id);
      }
      localStorage.setItem("materiasHechas", JSON.stringify(completadas));
      renderMalla();
    });

    contenedor.appendChild(bloque);
  });
}

renderMalla();
