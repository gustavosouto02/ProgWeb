let contadorClique = 0;

// Função para incrementar o contador de cliques
function incrementar() {
    document.getElementById("count").innerHTML = ++contadorClique;
}

// Função para decrementar o contador de cliques
function decrementar() {
    if (contadorClique > 0) {
        document.getElementById("count").innerHTML = --contadorClique;
    } else {
        alert("O contador está em zero.");
    }
}

// Adicionar texto dinâmico ao pressionar "Enter"
let textoInput = document.getElementById("texto");
let textoDinamico = document.getElementById("texto-dinamico");

textoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let texto = textoInput.value.trim(); // Remove espaços em branco no início e no fim
        if (texto !== "") {
            let paragrafo = document.createElement("p");
            paragrafo.textContent = texto;
            textoDinamico.appendChild(paragrafo);
            textoInput.value = ""; // Limpa o campo de texto
        }
    }
});

// Contador de caracteres em tempo real
let contadorCaractere = document.getElementById("contador");

textoInput.addEventListener("input", function () {
    let texto = textoInput.value.replace(/\s/g, ""); // Remove todos os espaços
    contadorCaractere.textContent = `Contador de caracter: ${texto.length}`;
});

// Adicionar novo item à lista
function adicionarItem() {
    let tipoLista = document.getElementById("tipo-lista").value; // Pega o valor selecionado (ul ou ol)
    let lista = document.querySelector(tipoLista);

    // Se a lista não existe, cria uma nova
    if (!lista) {
        lista = document.createElement(tipoLista);
        document.body.appendChild(lista);
    }

    // Cria um novo item da lista
    let item = document.createElement("li");
    item.textContent = `Item ${lista.children.length + 1}`;
    lista.appendChild(item);
}

// Botão de reset
function reset() {
    // Zera o contador de cliques
    contadorClique = 0;
    document.getElementById("count").innerHTML = contadorClique;

    // Limpa o texto dinâmico
    textoDinamico.innerHTML = "";

    // Limpa o campo de texto e o contador de caracteres
    textoInput.value = "";
    contadorCaractere.textContent = "Contador de caracter: 0";

    // Remove todas as listas (ul e ol)
    let listas = document.querySelectorAll("ul, ol");
    listas.forEach(lista => lista.remove());
}