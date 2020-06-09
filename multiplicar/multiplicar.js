//requires
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite = 10) => {
  console.log(`========tabla de ${base}`.red);
  for (let i = 1; i <= limite; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor base introducido ${base} no es un número `);
      return;
    }

    if (!Number(limite)) {
      reject(`El valor limite introducido ${limite} no es un número `);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} x ${i} = ${base * i} \n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
