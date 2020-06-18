const fs = require('fs');
const colors = require('colors');



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);
        })
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('==============='.green);
    console.log('======Tabla===='.red);
    console.log('==============='.green);

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor base ingresado ${base} no es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor limite ingresado ${limite} no es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            console.log(`${base} * ${index} = ${base*index}`);
        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}