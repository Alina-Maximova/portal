'use strict'
const jwt = require('jsonwebtoken')

const response = require('../response')
const db = require('../settings/db')
const config = require('../config')

exports.staff = (req,res) => {
    const asd = req.headers.authorization
    const decoded = jwt.decode(asd.toString().replace("Bearer ",""))
    if(decoded.role === 'Staff'){
    db.query("select specialty.id, users.FCS, users.Telephone,`name_speciality`,`discharge` FROM specialty LEFT JOIN staff ON staff.id = specialty.id_staff LEFT JOIN users ON users.id = staff.user_id WHERE user_id = '"+decoded.userId+"'",(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
    })}else{
        response.status(401,{message:`Неверная роль`},res)
    }
}