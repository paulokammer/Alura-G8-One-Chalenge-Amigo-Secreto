let amigos = [];

function limparCampo() {
    let amigo = document.getElementById("amigo");
    amigo.value = "";
}

function adicionarAmigo() {

    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(amigo);
    atualizarLista();
    limparCampo();
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de nomes está vazia. Adicione pelo menos um nome.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `<li>Amigo Secreto: ${amigoSorteado}</li>`;
}

document.addEventListener("DOMContentLoaded", atualizarLista);