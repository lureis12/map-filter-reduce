const lista = [
    {
        name: 'sabao',
        preco: 12,
    },
    {
        name: 'detergente',
        preco:  2,
    },
    {
        name: 'amaciante',
        preco: 20,
    },
];

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('rodada:', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
};

console.log(calculaSaldo(saldoDisponivel, lista));