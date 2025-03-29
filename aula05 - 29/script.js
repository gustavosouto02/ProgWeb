function adicionarItem(){
    const itemInput = document.getElementById("itemNovo")
    const itemValue = itemInput.value.trim();

    if (itemValue !== " "){
        const tabela = document.getElementById("tabelaItens").getElementsByTagName("tbody")[0];

        const newRow = tabela.insertRow();
        const newCell = newRow.insertCell(0);

        newCell.textContent = itemValue;

        itemInput.value = "";
    }else{
        alert("Por favor, digite um item.")
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a tabela e o select
    const table = document.getElementById('tabelaItens');
    const select = document.getElementById('item');

    // Itera sobre as linhas da tabela
    for (let row of table.rows) {
        // Obtém o texto da célula
        let itemText = row.cells[0].innerText;

        // Cria uma nova opção
        let option = document.createElement('option');
        option.value = itemText;
        option.text = itemText;

        // Adiciona a opção ao select
        select.appendChild(option);
    }
});
