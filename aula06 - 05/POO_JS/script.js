class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }


    descricao() {
        return `${this.nome} - ${this.idade} anos`;
    }
}


class GerenciadorPessoas {
    constructor() {
        this.pessoas = [];
    }


    adicionar(nome, idade) {
        const novaPessoa = new Pessoa(nome, idade);
        this.pessoas.push(novaPessoa);
        this.atualizarDOM();
    }


    atualizarDOM() {
        const lista = document.getElementById("listaPessoas");
        lista.innerHTML = "";

        this.pessoas.forEach((pessoa, index) => {
            const li = document.createElement("li");
            li.textContent = pessoa.descricao();


            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => this.remover(index);

            li.appendChild(botaoRemover);
            lista.appendChild(li);
        });
    }

    remover(index) {
        this.pessoas.splice(index, 1);
        this.atualizarDOM();
    }
}

const gerenciador = new GerenciadorPessoas();


function adicionarPessoa() {
    const nome = document.getElementById("nome").value.trim();
    const idade = document.getElementById("idade").value.trim();

    if (nome && idade) {  // Só adiciona se ambos estiverem preenchidos
        gerenciador.adicionar(nome, idade);
        document.getElementById("nome").value = "";
        document.getElementById("idade").value = "";
    } else {
        alert("Por favor, preencha nome e idade!");
    }
}

// enter
document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar se ambos campos estão preenchidos
    function camposValidos() {
        const nome = document.getElementById("nome").value.trim();
        const idade = document.getElementById("idade").value.trim();
        return nome !== "" && idade !== "";
    }

    // Adiciona evento de Enter no campo "nome"
    document.getElementById("nome").addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && camposValidos()) {
            adicionarPessoa();
        }
    });

    // Adiciona evento de Enter no campo "idade"
    document.getElementById("idade").addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && camposValidos()) {
            adicionarPessoa();
        }
    });
});