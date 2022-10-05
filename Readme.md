# # Car Management Dashboard

## Entity Relationship Diagram
<p align="center">
  <img width="460" height="300" src="https://github.com/pahrurozidev/Car-Management-Dashboard/blob/master/public/assets/card-erd.png">
</p>

## Get All Cars
```[ENDPOINT] /api/v1/cars```
```url
[GET] http://localhost:5000/api/v1/cars
```

#### Sample Response
```json
{
  "data": [
    {
      "id": 1,
      "name": "Avanza",
      "image": "avanza-pic.png",
      "price": 1,
      "size": "small",
      "createdAt": "2022-10-05T00:34:58.950Z",
      "updatedAt": "2022-10-05T00:34:58.950Z"
    },
    ...
  ]
}
```

## get One Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[GET] http://localhost:5000/api/v1/cars/1
```

#### Sample Response
```json
{
  "id": 60,
  "name": "dfdf",
  "image": "profile-pic (1).png",
  "price": 1,
  "size": "small",
  "createdAt": "2022-10-05T00:07:26.083Z",
  "updatedAt": "2022-10-05T00:42:20.579Z"
}
```

## Create Car
```[ENDPOINT] /api/v1/cars```
```url
[POST] http://localhost:5000/api/v1/cars
```

#### Sample Response
```json
{
  "status": true,
  "data": {
      "id": 2,
      "name": "Avanza X",
      "image": "avanza-pic-x.png",
      "price": 1,
      "size": "small",
      "createdAt": "2022-10-05T00:34:58.950Z",
      "updatedAt": "2022-10-05T00:34:58.950Z"
  }
}
```

## Update Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[PUT] http://localhost:5000/api/v1/cars/1
```

#### Sample Response
```json
{
  "status": true,
  "message": "Car has been successfully updated"
}
```

## Delete Car
```[ENDPOINT] /api/v1/cars/{id}```
```url
[DELETE] http://localhost:5000/api/v1/cars/1
```

#### Sample Response
```json
{
  "message": "Car has been successfully deleted"
}
```

<br/>

#### Created by @pahrurozi
Lombok - Indonesia

