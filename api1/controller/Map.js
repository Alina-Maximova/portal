// AIzaSyCm82tTaWBLQm6pS36oeuxRViSc_2EN7bM
const superagent = require("superagent")
const response = require('../response')
const db = require('../settings/db')

async function getDataGoogleNap(req,res){
    const address= req.body.address
    console.log(req.body.address)
    let result = {}
    result = await superagent
    .get("https://geocode-maps.yandex.ru/1.x/")
    .query({
        apikey:"7f66d4c8-981a-4b98-b4b0-8bef0dae0b1c",
        format:"json",
        geocode:`${address}`

    }).then(result => {return result}).catch(err=>{console.log(err)})
    const coor = result.body.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
    const lon = coor.split(" ")[0]
    const lat = coor.split(" ")[1]

    console.log(lat)
    db.query("SELECT * from `PROBLEMS` ",(error,row,fields) => {
        if(error) {
            console.log(error)
            response.status(400,error,res);
        }else{
            const email = req.body.email
            const classification = req.body.classification
            const description = req.body.description
            const longitude = lon
            const latitude = lat

            const sql = "INSERT INTO `problems`(`classification`,`description`, `longitude`,`latitude`,`email`) VALUES('"+ classification +"','"+ description +"','"+ longitude +"','"+latitude+"','"+email+"')";
            db.query(sql,(error,result) => {
                if(error){
                    console.log(error)
                    response.status(400,error,res);
                }else {
                    response.status(200,{message:`Вы постовили метку`,result},res)
                            }
                        }   )   
                          
                    }

                    
                })

}
exports.getDataGoogleNap =getDataGoogleNap;
exports.getAllMark = (req,res) => {
db.query('SELECT `longitude`,`latitude` FROM `problems`',(error,rows,fields) => {
    if(error) {
        console.log(error)
        response.status(400,error,res)
    }else{
        response.status(200,rows,res)
        return rows
    }
})
}
// получение координат с гугл ари
// длбавление данных в бд
// отправить обратно обЪект 
// 
