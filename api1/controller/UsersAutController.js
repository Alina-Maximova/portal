

const response = require('../response')
const db = require('../settings/db')
const config = require('../config')



  
            exports.addEx = (req,res) => {
   
                db.query("SELECT * from `estimation` ",(error,rows,fields) => {
                    if(error) {
                        response.status(400,error,res);
                    }else{
                        const value  = req.body.value
                        const city = req.body.city
                        const district  = req.body.dictrict
                        const descption  = req.body.descption
                        
                   
            
                        const sql = "INSERT INTO `estimation`(`value`,`city`, `district`,`descption`) VALUES('"+ value +"','"+ city +"','"+ district +"','"+descption+"')";
                        db.query(sql,(error,result) => {
                            if(error){
                                response.status(400,error,res);
                            }else {
            
                                response.status(200,{message:`Вы постовили оценку`,result},res)
                               
                                         
                                        }
                                    }   )     
                                }
            
                                
                            })
                        }
              