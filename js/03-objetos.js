// Exemplo 1: objeto com dados de uma pessoa 
let pessoa = {
    nome: "Dona Clotilde",
    idade: 71,
    cidade: "São Paulo",
    estado: "SP"
};

// Exibindo a estrutura do objeto
console.log(pessoa);

// A Dona Clotilde está na cidade de São Paulo
console.log(
    `A ${pessoa.nome} está na cidade de ${pessoa.cidade}`
);

// Exemplo 2: objeto com array
let livro = { 
    titulo: "Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

console.log(livro);

// Senhor dos Anéis
console.log( livro.titulo );

// A Sociedade do Anel
console.log( livro.volumes[0] );


// Exemplo 3: array com objetos
let livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },
    {
        titulo: "Instrumentos Mortais",
        autor: "Cassandra Clare"
    },
    {
        titulo: "O Iluminado",
        autor: "Stephen King"
    },
];

console.log(livros);

// Stephen King
console.log(livros[2].autor);

/*  Exercícios 
1) Crie um objeto chamado "aluno" contendo
os seguintes dados: 

- Nome Completo
- Data de Nascimento
- Lista de telefones de contato (fixo e celular)
- Endereço (deve ser um objeto contendo Rua, Número e Bairro)

2) Monte uma Frase mostrando o nome do aluno, o telefone
celular e o bairro em que mora.
*/ 

/* LEMBRETES! 

() PARÊNTESES -> indica lidar com funções 

[] COLCHETES -> indica lidar com arrays

{} CHAVES -> indica lidar com objetos
obs.: chaves também usadas em outros recursos
*/

let aluno = {
        nome_completo: "Victor Hugo Mota Bueno",
        data_de_nascimento: "27/10/2006",
        telefones: ["(11) 963721-9278", "(11) 9xxxx-xxxx"],
        endereco: {
            rua: "Monsenhor Emilio Teixeira",
            numero: "286",
            bairro: "Vila Laís"
        }
}

console.log(`O telefone do aluno ${aluno.nome_completo} é ${aluno.telefones[1]}, e ele mora na ${aluno.endereco.bairro}.`);



