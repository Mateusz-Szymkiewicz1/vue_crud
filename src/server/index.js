const express = require('express')
const app = express()
const cors = require('cors')
const bcrypt = require('bcryptjs')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vue_crud'
})

connection.connect()

app.use(cors()).use(express.json())

app.post('/login', function(req, res){
  let username = req.body.username;
  let password = req.body.password;
  connection.query(`SELECT * FROM users WHERE login = ${mysql.escape(username)}`, (err, rows, fields) => {
    if(!rows || rows.length < 1){
      res.json({status: 0, reason: "Incorrect username or password!"})
    }else if(rows.length == 1){
      bcrypt.compare(password, rows[0].password, function(err, response) {
        if (response) {
          res.json({status: 1, reason: "Logged"})
        } else {
          res.json({status: 0, reason: "Incorrect username or password!"})
        }
      });
    }
  })
})

app.listen(3000)