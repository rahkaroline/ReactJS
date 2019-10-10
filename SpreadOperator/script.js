function CadastroPessoa(info) {
    var novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '847838'
    }
    return novosDados;
}

console.log(CadastroPessoa({
    nome:'Pedro', 
    sobrenome: 'Alves', 
    anoInicio: 2019
}))