const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors()) 

const user = {
    value : 5
}


    app.get('/users',(req,res) =>{
        res.json({
          user
        })
     })
     




app.listen(3001,() =>{
    console.log("server listening")
})