/* ===========================
         MODEL
=========================== */

let usuarios = [];

function modelAdicionar(nome, email) {
    usuarios.push({ nome, email });
}

function modelRemover(index) {
    usuarios.splice(index, 1);
}

function modelObterTodos() {
    return usuarios;
}


/* ===========================
          VIEW
=========================== */

const lista = document.getElementById("listaUsuarios");

function viewMostrar(usuarios) {
    lista.innerHTML = "";

    usuarios.forEach((user, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${user.nome} — ${user.email}</span>
            <button onclick="controllerRemover(${index})">Excluir</button>
        `;

        lista.appendChild(li);
    });
}

function viewLimparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}


/* ===========================
        CONTROLLER
=========================== */

function controllerAdicionar() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        alert("Preencha todos os campos.");
        return;
    }

    modelAdicionar(nome, email);
    viewMostrar(modelObterTodos());
    viewLimparCampos();
}

function controllerRemover(index) {
    modelRemover(index);
    viewMostrar(modelObterTodos());
}

// Inicializar
viewMostrar(modelObterTodos());
