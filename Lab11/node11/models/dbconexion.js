var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"lista"
});
conn.connect(function(error){
    if(!!error){
        console.log(error);
    }else{
        console.log('Conectado!');
    }
});
module.exports = conn;