const { cars } = require('../../models');

function updateCar(car, id) {
    return cars.update({
        name: car.name,
        image: car.image,
        size: car.size,
        price: car.price
    }, { where: { id: id } });
}

module.exports = { updateCar }