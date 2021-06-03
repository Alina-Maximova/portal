const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'portal'
})

connection.connect((error) =>{
    if(error){
        return console.log('Ошибка подключения');
    }else {
        return console.log('Подключение успешно');

    }
})
module.exports = connection