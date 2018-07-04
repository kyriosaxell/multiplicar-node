const fs = require('fs');
const colors = require('colors');

let listar =(base, limite=10) =>{
    return new Promise( (resolve, reject) => {
        if(!Number(base) && !Number(limite)){
            reject('Para el límite y base sólo son números'.red)
        }
        
        console.log(`Se muestra la tabla del ${base}\n`);
        for(let i=1; i<=limite; i++){
            console.log(`${base} * ${i} = ${base * i}`.blue);
        }
    });
}

let crearArchivo =(base) =>{
    let data='';

    return new Promise( (resolve, reject) =>{

        if(!Number(base)){
            reject('No es número'.red);
            return;
        }
        
        for (let i=1; i<11; i++){
            data +=` ${base} * ${i} = ${base*i} ` ;
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err)=>{
            if(err) 
                reject (err)
            else 
                resolve(`tabla-${base}.txt`.green)
        });
    });

}

module.exports = {
    crearArchivo,
    listar
}