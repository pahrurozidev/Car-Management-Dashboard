const { cars } = require('../../models');

function createCar(car) {
    return cars.create({
        name: car.name,
        image: car.image,
        price: car.price,
        size: car.size,
    })
}

module.exports = { createCar };