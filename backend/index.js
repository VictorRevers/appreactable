const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const connection = require('./database/db');
const Functionary = require('./models/Functionary');

app.use(cors());

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

connection.authenticate().then(()=>{
    console.log('DB conectada!');
}).catch((err)=>{
    console.log(err);
});

 app.get('/functionary', (req, res)=>{
     Functionary.findAll().then((functionaries)=>{
        res.json({
            functionaries: functionaries
        });
        res.status(200);
    }).catch(error=>{
        res.json(error);
        res.status(404);
    });
        
});

app.post('/functionary', (req, res)=>{
    var{name, register, cost} = req.body;
    
    if(name == undefined || register == undefined || cost == undefined){
        res.sendStatus(406);
    }else{
      Functionary.create({
          name,
          register,
          cost
      }).then(()=>{
          res.status(200); 
      }).catch(error =>{
          res.json(error);
          res.status(400);
      });
        
    }
    
});


app.listen(8080, ()=>{
    console.log('App rodando!');
})


