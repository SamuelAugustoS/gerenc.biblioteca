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
        this.livros = this.carregarLivros();
    }

    carregarLivros() {
        const livrosSalvos = localStorage.getItem('livros');
        return livrosSalvos ? JSON.parse(livrosSalvos) : [];
    }

    salvarLivros() {
        localStorage.setItem('livros', JSON.stringify(this.livros));
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        this.salvarLivros();
        this.exibirLivros();
    }

    removerLivro(titulo) {
        const index = this.livros.findIndex(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (index !== -1) {
            this.livros.splice(index, 1);
            this.salvarLivros();
            this.exibirLivros();
        } else {
            alert(`Livro "${titulo}" não encontrado.`);
        }
    }

    exibirLivros() {
        const listaLivrosModal = document.getElementById('listaLivrosModal');
        listaLivrosModal.innerHTML = ''; // Limpa a lista antes de exibir

        if (this.livros.length === 0) {
            listaLivrosModal.innerHTML = '<li>Nenhum livro cadastrado.</li>';
            return;
        }

        this.livros.forEach(livro => {
            const liModal = document.createElement('li');
            liModal.textContent = `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}, Gênero: ${livro.genero}`;
            listaLivrosModal.appendChild(liModal);
        });
    }
}

const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.exibirLivros(); // Exibir livros ao carregar a página

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

// Funções do Modal
function abrirModal() {
    minhaBiblioteca.exibirLivros(); // Atualiza a lista ao abrir o modal
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}
