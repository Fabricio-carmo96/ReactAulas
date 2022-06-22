const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
const bodyparser = require("body-parser");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

var conString = config.urlConnection;
var client = new Client(conString);

var conString = config.urlConnection;
var client = new Client(conString);
client.connect(function (err) {
  if (err) {
    return console.error("Não foi possível conectar ao banco.", err);
  }
  client.query("SELECT NOW()", function (err, result) {
    if (err) {
      return console.error("Erro ao executar a query.", err);
    }
    console.log(result.rows[0]);
  });
});

app.get("/", (req, res) => {
  console.log("Response ok.");
  res.send("OK");
});

app.listen(config.port, () =>
  console.log("Servidor funcionando na porta " + config.port)
);

app.get ("/allUsers", (req, res) =>{
    try {
        client.query('SELECT * FROM Usuarios', function (err,result){
            if(err){
                return console.log ('Erro ao executar a qry', err);
            }
            res.send (result.rows);
            console.log("Chammou allUsers")
        });
    } catch (error){
        console.log(error);
    }
});