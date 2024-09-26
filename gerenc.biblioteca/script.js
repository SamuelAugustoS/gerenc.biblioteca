class Livro {
    constructor(titulo, autor, anoPublicacao, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.exibirLivros();
    }

    removerLivro(titulo) {
        const index = this.livros.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (index !== -1) {
            this.livros.splice(index, 1);
            this.exibirLivros();
        } else {
            alert(`Livro "${titulo}" não encontrado.`);
        }
    }

    exibirLivros() {
        const listaLivros = document.getElementById('listaLivros');
        listaLivros.innerHTML = '';

        if (this.livros.length === 0) {
            listaLivros.innerHTML = '<li>Nenhum livro cadastrado.</li>';
            return;
        }

        this.livros.forEach(livro => {
            const li = document.createElement('li');
            li.textContent = `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}, Gênero: ${livro.genero}`;
            listaLivros.appendChild(li);
        });
    }
}

const minhaBiblioteca = new Biblioteca();

function adicionarLivro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const anoPublicacao = document.getElementById('anoPublicacao').value;
    const genero = document.getElementById('genero').value;

    if (titulo && autor && anoPublicacao && genero) {
        const livro = new Livro(titulo, autor, anoPublicacao, genero);
        minhaBiblioteca.adicionarLivro(livro);

        // Limpar os campos
        document.getElementById('titulo').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('anoPublicacao').value = '';
        document.getElementById('genero').value = '';
    } else {
        alert('Preencha todos os campos!');
    }
}

function removerLivro() {
    const titulo = document.getElementById('tituloRemover').value;
    if (titulo) {
        minhaBiblioteca.removerLivro(titulo);
        document.getElementById('tituloRemover').value = '';
    } else {
        alert('Digite o título do livro a ser removido.');
    }
}
