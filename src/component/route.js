const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express();
app.use(bodyParser.json({ type: 'application/json' }))
app.use(bodyParser.urlencoded({ extended: true }))

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Thinh2001!',
    database: 'doantotnghiep'
})
connection.connect(function(error){
    if (error) console.log(error)
    else console.log("connected")
})

// app.get('/', function (req, res) {
//         conn.query('SELECT * FROM category', function (error, results, fields) {
//             if (error) throw error;
//             res.send(results)
//         });
// });

// Starting our server.
// app.listen(3000, () => {
//     console.log('Go to http://192.168.1.6:3000/ so you can see the data.');
// });




// app.get("/categorys", function(request, response) {
//     connection.getConnection(function (error, connection) {
//         connection.query("SELECT * FROM category", function (error,results, fields){
//             if (error) throw error;

//             response.send(results)
//         })
//     })
// }) 
