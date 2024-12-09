

// const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const response = require('../response')
const db = require('../settings/db')
const config = require('../config')
// const decodedToken = require('../middleware/decoded')

const salt = bcrypt.genSaltSync(15)
exports.signup = (req,res) => {
    db.query("SELECT `id`,`login_email`,`role` from `users` WHERE `login_email` = '"+ req.body.login_email +"'",(error,rows,fields) => {
        if(error) {
            response.status(400, error, res)
        } else if(typeof rows !== 'undefined' && rows.length > 0) {
            const row = JSON.parse(JSON.stringify(rows))
            row.map(rw => {
                response.status(302, {message: `Пользователь с таким login - ${rw.login_email} уже зарегeстрирован!`}, res)
                return true
            })
        }else{
            const login_email = req.body.login_email
           
            const password = bcrypt.hashSync(req.body.password, salt)
            const nickname = req.body.nickname
            // const role =req.body.role
       

            const sql = "INSERT INTO `users`(`nickname`,`login_email`, `password`, `salt`) VALUES('"+ nickname +"','"+ login_email +"','"+ password +"','"+salt+"')";
            db.query(sql,(error,result) => {
                if(error){
                    response.status(400,error,res);
                }else {

                    // response.status(200,{message:`Регистрация прошла успешна`,result},res)
                    db.query("SELECT `id`, `role` from `users` WHERE `login_email` = '"+login_email+"'",(error,rows,fields) =>{
                        if(error){
                            response.status(400,error,res)
                        }else{
                            const row = JSON.parse(JSON.stringify(rows))
                            row.map(rw =>{
                
                         
                                        const token = jwt.sign({
                                            userId: rw.id,
                                            login_email: login_email,
                                            role: rw.role
                                        }, config.jwt, { expiresIn: 120 * 120 })
                    
                                        response.status(200, {token: `Bearer ${token}`, role: rw.role}, res)
                               
                             
                            })
                        }        
                    })

                    // console.log(result)

                    // const token = jwt.sign({
                    //     userId: rw.id,
                    //     login_email: rw.login_email,
                    //     role: rw.role
                    // }, config.jwt, { expiresIn: 120 * 120 })

                    // response.status(200, {token: `Bearer ${token}`}, res)
                }
            })

        }
    })
}
exports.signin = (req, res) => {
    db.query("SELECT `id`, `login_email`, `password`,`salt`,`role` from `users` WHERE `login_email` = '"+req.body.login_email+"'",(error,rows,fields) =>{
        if(error){
            response.status(400,error,res)
        }else if(rows.length <= 0){
            response.status(401,{message:`Пользователь с login - ${req.body.login_email} не найден, пройдите регистрацию`},res)
        } else{
            const row = JSON.parse(JSON.stringify(rows))
            console.log(row)
            row.map(rw =>{
            
                const password = bcrypt.hashSync(req.body.password, rw.salt)

                if(password.indexOf(rw.password) === 0){
                    //если тру генерируем токен
                        const token = jwt.sign({
                            userId: rw.id,
                            login_email: rw.login_email,
                            role: rw.role
                        }, config.jwt, { expiresIn: 120 * 120 })
    
                        response.status(200, {token: `Bearer ${token}`, role:rw.role}, res)
                }else{
                   //ошибка
                   response.status(401,{message:`Пароль не верный`},res) 
                }
                return true
            })
        }        
    })
}
