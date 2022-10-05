const { cars } = require('../../models');

function deleteCar(id) {
    return cars.destroy({ where: { id: id } });
}

module.exports = { deleteCar };