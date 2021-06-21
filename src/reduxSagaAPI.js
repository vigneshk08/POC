const express = require('express');
const app = express();

const user = {
    name: "vicky",
    age: 24
}


    app.get('/users',(req,res) =>{
        res.json({
          user
        })
     })
     




app.listen(3001,() =>{
    console.log("server listening")
})