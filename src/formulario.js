document.addEventListener("DOMContentLoaded", () => {
  const prioridades = {
    "Global Care": [
      "Voluntários Médicos",
      "Doação Financeira para Medicamentos",
    ],

    AAARS: [
      "Frango", 
      "Carne", 
      "Arroz",
      "Feijão"
    ],

    "Roupas que Transformam": [
      "Calçados",
      "Voluntários para ajudar no transporte",
    ],
  };

  const urlParams = new URLSearchParams(window.location.search);
  const nomeOng = urlParams.get("ong")?.replace(/"/g, "");

  const nomeOngDiv = document.querySelector(".nome-ong");
  const listaPrioridades = document.getElementById("lista-prioridades");
  const mensagemFinalDiv = document.querySelector(".mensagem-final");

  if (nomeOng && prioridades[nomeOng]) {
    nomeOngDiv.innerText = `Você doará para ${nomeOng}`;
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
    const nome = formulario.querySelector('#name').value;
    const email = formulario.querySelector('#email').value;
    const phone = formulario.querySelector('#phone').value;

    if (!nome || !email || !phone || checkboxes.length === 0) {
      mensagemFinalDiv.innerText = "Selecione uma opção para doar.";
      mensagemFinalDiv.classList.add("mensagem-erro");
      mensagemFinalDiv.classList.remove("mensagem-sucesso");
    } else {
      mensagemFinalDiv.innerText = "Obrigada por doar!";
      mensagemFinalDiv.classList.add("mensagem-sucesso");
      mensagemFinalDiv.classList.remove("mensagem-erro");
    }
  });
});