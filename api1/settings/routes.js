'use strict'

module.exports = (app) => {
    const adminsController = require('../controller/AdminsController')
    const usersController = require('../controller/UsersController')
    const usersAutController = require('../controller/UsersAutController')
    const  map = require('../controller/Map')
    // const passport = require('passport')
    


    app
        .route('/admin/getAllUsers')
        .post(adminsController.getAllPr)
    
    app
        .route('/authorization/signup')
        .post(usersController.signup)

    app  
        .route('/authorization/signin')
        .post(usersController.signin)
    app  
        .route('/estimation')
        .post(usersAutController.addEx)
    app
        .route('/map')
        .post(map.getDataGoogleNap)
    app
        .route('/users')
        .post(map.getAllMark)

}