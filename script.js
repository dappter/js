const desconto = 0.1;

let headphone = {
    nome: "Headphone Super Sound",
    valor: 150,
    codigo: "987654",
};

let monitor = {
    nome: "Monitor 4K Ultra",
    valor: 1200,
    codigo: "876543",
};

function compraParcelada(prod, numparc) {
    const juros = 0.02;
    if (numparc == 0 || numparc == 1) {
        let valorDesconto = prod.valor * desconto;
        let valorDescontado = prod.valor - valorDesconto;
        console.log("Compra à vista");
        console.log(prod.nome, "Valor do Desconto: ", valorDesconto);
        console.log(prod.nome, "Valor Descontado: ", valorDescontado);
    } else {
        if (numparc <= 12 && numparc >= 1) {
            if (numparc >= 11) {
                let valorJuros = prod.valor * juros;
                let valorParcelado = (prod.valor + valorJuros) / numparc;
                console.log(prod.nome, "Valor das Parcelas com juros: ", valorParcelado);
            } else {
                let valorParcelado = prod.valor / numparc;
                console.log(prod.nome, "Valor das Parcelas: ", valorParcelado);
            }
        } else {
            console.log("Número de parcelas inválido, só trabalhamos com 12x");
        }
    }
}

compraParcelada(headphone, 13);
compraParcelada(monitor, -2);
compraParcelada(headphone, 12);
compraParcelada(monitor, 5);
compraParcelada(headphone, 0);
