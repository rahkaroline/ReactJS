function cadastrar(usuarios, ...novosUsuarios){

    var totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalusuarios)
}

var usuarios = ["Matheus", "Joao"];

var novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");
