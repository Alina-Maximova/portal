

const response = require('../response')
const db = require('../settings/db')

exports.getAllPr = (req,res) => {
    db.query('SELECT `classification`,`description`,`email` FROM `problems`',(error,rows,fields) => {
        if(error) {
            response.status(400,error,res)
        }else{
            response.status(200,rows,res)
        }
    })
}
// exports.getAllUsers = (req,res) => {
    
//     db.query('SELECT `classification`,`description`,`email` FROM `users`',(error,rows,fields) => {
//         if(error) {
//             response.status(400,error,res)
//         }else{
//             response.status(200,rows,res)
//         }
//     })
// }


// exports.getAllUsers = (req,res) => {
//     db.query('SELECT `id`,`nicname`,`login_email`,`role` FROM `problems_users`',(error,rows,fields) => {
//         if(error) {
//             response.status(400,error,res)
//         }else{
//             response.status(200,rows,res)
//         }
//     })
// }