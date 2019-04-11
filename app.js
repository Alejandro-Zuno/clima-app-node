const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// clima.getClima(40.750134, -73.997009)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${ direccion } es de ${ temp }`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);