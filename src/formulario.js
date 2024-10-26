// Liz, termine todas as funções completas, pra quando eu voltar estilizar tudinho. Att, David.

document.addEventListener("DOMContentLoaded", () => {
  const prioridades = {
    "Global Care": [
      "Voluntários Médicos",
      "Doação Financeira para Medicamentos",
    ],
    AAARS: ["Frango", "Carne", "Arroz"],
    ONG3: ["teste"],
  };

  const urlParams = new URLSearchParams(window.location.search);
  const nomeOng = urlParams.get("ong").replace(/"/g, "");

  const listaPrioridades = document.getElementById("lista-prioridades");

  if (nomeOng && prioridades[nomeOng]) {
    prioridades[nomeOng].forEach((prioridade) => {
      const listItem = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("name", "prioridades");
      checkbox.setAttribute("value", prioridade);

      const label = document.createElement("label");
      label.innerText = prioridade;
      label.prepend(checkbox);

      listItem.appendChild(label);
      listaPrioridades.appendChild(listItem);
    });
  } else {
    const ongPrioridadesDiv = document.getElementById("ong-prioridades");
    ongPrioridadesDiv.innerText = "ONG sem prioridades definidas.";
  }

  const formulario = document.getElementById("priority-form");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const checkboxes = formulario.querySelectorAll(
      'input[name="prioridades"]:checked'
    );
    if (checkboxes.length === 0) {
      alert("Por favor, selecione pelo menos uma prioridade.");
    } else {
      alert("Obrigada por doar!");
    }
  });
});
