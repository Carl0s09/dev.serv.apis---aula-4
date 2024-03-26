let listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        categoria: "Alimento",
        preço: 5.50
    },
    {
        id: 2,
        nome: "Leite",
        categoria: "Bebida",
        preço: 4.25
    }
];


function listar() {
    return listaProdutos;
}

function main() {
    console.log(listaProdutos);
}

main();