const { cars } = require('../../models');

function getCars() {
    return cars.findAll();
}

function getCar(id) {
    return cars.findOne({ where: { id: id } });
}

module.exports = {
    getCars,
    getCar,
}