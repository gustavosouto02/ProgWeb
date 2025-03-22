// Preços dos combustíveis
const precoGasolina = 5.79;
const precoEtanol = 4.29;
const precoDiesel = 6.79;

// Função principal
function atualizarValor() {
    const tipo = document.getElementById("combustivel").value;
    const litros = document.getElementById("litros").value; 
    let precoPorLitro;

    if (isNaN(litros)) {
        document.getElementById("resultado").textContent = "Quantidade inválida";
        return;
    }

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            document.getElementById("resultado").textContent = "Tipo inválido";
            return;
    }

    calcValorAbastecimento(precoPorLitro, litros);
}

function calcValorAbastecimento(precoCombustivel, litros) {
    const valorTotal = precoCombustivel * litros;
    if (litros < 0) {
        document.getElementById("resultado").textContent = "A quantidade não pode ser negativa.";
        alert("A quantidade deve ser maior que zero.");
        return;
    }

    document.getElementById("resultado").textContent = valorTotal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        maximumFractionDigits: 2, 
    });
}

document.getElementById("litros").addEventListener("input", atualizarValor);
document.getElementById("combustivel").addEventListener("change", atualizarValor);

document.getElementById("litros").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        atualizarValor();
    }
})