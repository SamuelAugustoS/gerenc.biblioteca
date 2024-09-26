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
        console.log(`Livro "${livro.titulo}" adicionado com sucesso.`);
    }

    removerLivro(titulo) {
        const index = this.livros.findIndex(livro => livro.titulo === titulo);
        if (index !== -1) {
            this.livros.splice(index, 1);
            console.log(`Livro "${titulo}" removido com sucesso.`);
        } else {
            console.log(`Livro "${titulo}" não encontrado.`);
        }
    }

    exibirLivros() {
        if (this.livros.length === 0) {
            console.log("Nenhum livro cadastrado.");
            return;
        }
        
        console.log("Livros cadastrados:");
        this.livros.forEach(livro => {
            console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.anoPublicacao}, Gênero: ${livro.genero}`);
        });
    }
}

// Criar instância da biblioteca
const minhaBiblioteca = new Biblioteca();

// Criar alguns livros
const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
const livro2 = new Livro("1984", "George Orwell", 1949, "Ficção Científica");
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 1899, "Literatura Brasileira");

// Adicionar livros à biblioteca
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);

// Exibir livros cadastrados
minhaBiblioteca.exibirLivros();

// Remover um livro
minhaBiblioteca.removerLivro("1984");

// Exibir livros novamente
minhaBiblioteca.exibirLivros();
