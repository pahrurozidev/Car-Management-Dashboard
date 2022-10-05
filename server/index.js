const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const axios = require('axios').default;
const methodOverriding = require('method-override');

const { createCar } = require('../backend/cars/create');
const { getCars, getCar } = require('../backend/cars/read');
const { updateCar } = require('../backend/cars/update');
const { deleteCar } = require('../backend/cars/delete');
const upload = require('../src/upload');

app
    // configuration
    .set('view engine', 'ejs')
    .use(express.urlencoded())
    .use(expressLayouts)
    .use(express.static('public'))
    .use(methodOverriding('_method'))
    .use(express.json())

    // ===================
    // BACKEND
    // ===================

    // get cars
    .get('/api/v1/cars', (req, res) => {
        getCars().then((cars) => res.status(200).json({
            "status": true,
            "data": cars
        }));
    })

    // get car
    .get('/api/v1/cars/:id', (req, res) => {
        getCar(req.params.id).then((car) => res.status(200).json(car));
    })

    // create car
    .post('/api/v1/cars', (req, res) => {
        createCar(req.body)
            .then((car) => {
                res.status(200).json({
                    status: true,
                    data: car
                })
            })
    })

    // update car
    .put('/api/v1/cars/:id', (req, res) => {
        updateCar(req.body, req.params.id)
            .then((car) => {
                res.status(201).json({
                    status: true,
                    message: "Car has been successfully updated"
                })
            })
    })

    // delete car
    .delete('/api/v1/cars/:id', (req, res) => {
        deleteCar(req.params.id).then(() => {
            res.status(201).json({
                message: "Car has been successfully deleted"
            })
        })
    })

    // ===================
    // FRONTEND
    // ===================

    // get cars
    .get('/cars', (req, res) => {
        axios.get('http://localhost:5000/api/v1/cars')
            .then((response) => {
                res.render('index', {
                    layout: 'layout/main-layouts',
                    cars: response.data,
                })
            });
    })

    // form create__car
    .get('/create', (req, res) => {
        res.render('create', {
            layout: 'layout/main-layouts'
        })
    })

    // create car
    .post('/cars', upload.single("image"), (req, res) => {
        axios.post('http://localhost:5000/api/v1/cars', {
            name: req.body.name,
            image: req.file.originalname,
            size: req.body.size,
            price: req.body.price,
        })

        res.redirect('/cars');
    })

    // form update__car
    .get('/update', (req, res) => {
        axios.get('http://localhost:5000/api/v1/cars/' + req.query.id)
            .then((car) => {
                res.render('update', {
                    layout: 'layout/main-layouts',
                    car: car.data,
                })
            })
    })

    // update car
    .put('/cars', upload.single("image"), (req, res) => {
        axios.put('http://localhost:5000/api/v1/cars/' + req.body.id, {
            name: req.body.name,
            image: req.file.originalname,
            size: req.body.size,
            price: req.body.price
        })

        res.redirect('/cars');
    })

    // delete car
    .delete('/cars', (req, res) => {
        axios.delete('http://localhost:5000/api/v1/cars/' + req.body.id)

        res.redirect('/cars');
    })

    // listen
    .listen(5000, () => {
        console.log(`API access on url (http://localhost:5000/api/v1/cars)`);
        console.log(`Frontend access on url (http://localhost:5000/cars)`);
    });