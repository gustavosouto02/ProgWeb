function adicionarItem() {
    const itemInput = document.getElementById("itemNovo");
    const itemValue = itemInput.value.trim();

    if (itemValue !== "") {
        const tabela = document.getElementById("tabelaItens").getElementsByTagName("tbody")[0];
        const newRow = tabela.insertRow();
        const newCell = newRow.insertCell(0);

        newCell.textContent = itemValue;
        newRow.setAttribute("data-item", itemValue);

        atualizarOpcoes();
        itemInput.value = "";
    } else {
        alert("Por favor, digite um item.");
    }
}

document.getElementById("addItem").addEventListener("click", adicionarItem);
document.getElementById("itemNovo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarItem();
    }
});

document.addEventListener('DOMContentLoaded', atualizarOpcoes);

document.getElementById("marcarDesmarcar").addEventListener("click", function(event) {
    event.preventDefault();
    const selectedItem = document.getElementById("item").value;
    if (selectedItem === "selecioneItem") return;
    
    const tabela = document.getElementById("tabelaItens").getElementsByTagName("tbody")[0];
    let rowFound = false;
    
    for (let row of tabela.rows) {
        if (row.getAttribute("data-item") === selectedItem) {
            rowFound = true;
            if (event.target.innerText === "Marcar") {
                row.style.backgroundColor = "yellow";
            } else if (event.target.innerText === "Desmarcar") {
                if (row.style.backgroundColor === "yellow") {
                    row.style.backgroundColor = "";
                } else {
                    alert("O item já está desmarcado.");
                }
            } else if (event.target.innerText === "Remover") {
                tabela.removeChild(row);
                atualizarOpcoes();
            }
            break;
        }
    }
});

function atualizarOpcoes() {
    const select = document.getElementById("item");
    select.innerHTML = '<option value="selecioneItem">Selecione um item</option>';
    const tabela = document.getElementById("tabelaItens").getElementsByTagName("tbody")[0];

    for (let row of tabela.rows) {
        let itemText = row.cells[0].innerText;
        let option = document.createElement("option");
        option.value = itemText;
        option.text = itemText;
        select.appendChild(option);
    }
}
