const otps = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', otps)
    .command('Crear', 'Crea archivo de la tabla de multiplicar', otps)
    .help()
    .argv;

module.exports = {
    argv
}