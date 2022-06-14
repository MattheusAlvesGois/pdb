const {sequelize, DataTypes} = require("../connect");

const Usuarios = sequelize.define('Usuarios', {
    nome: DataTypes.STRING,
    senha: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING, 
    rg: DataTypes.NUMBER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
});

// const Funcionarios = sequelize.define('Funcionarios', {
//     idFunc: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//     },
//     nome: DataTypes.STRING,
//     senha: DataTypes.STRING,
//     email: DataTypes.STRING,
//     cpf: DataTypes.STRING,
//     telefone: DataTypes.STRING, 
//     rg: DataTypes.STRING,
//     estado: DataTypes.STRING,
//     cidade: DataTypes.STRING,
//     cnh: DataTypes.DOUBLE,
//     pis: DataTypes.DOUBLE,
//     endereco: DataTypes.STRING,
// });

// const Marcas = sequelize.define({
//     idMarca: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//     },
//     marca: DataTypes.STRING,
// })

// const Veiculos = sequelize.define({
//     idVeic: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//     },
//     modelo: DataTypes.STRING,
//     idmarca: DataTypes.STRING,
//     cor: DataTypes.STRING,
//     ano: DataTypes.STRING,
//     preco: DataTypes.STRING,
//     nchassi: DataTypes.STRING,
//     foto: DataTypes.STRING,
// })

// // const vendas = sequelize.define({

// // })

// const Pecas = sequelize.define({
//     idPecas: {
//         type: DataTypes.UUID,
//         primaryKey: true,
//     },
//     nome: DataTypes.STRING,
//     foto: DataTypes.BOOLEAN,
//     preco: DataTypes.DOUBLE,
//     descricao: DataTypes.STRING,
// })

async function syncAll() {
    await sequelize.sync({ force: true});
    console.log("All models were synchronized successfully.");
}
syncAll();

module.exports = { Usuarios};