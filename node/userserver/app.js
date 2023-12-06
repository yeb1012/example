require('dotenv').config({path: './db/mysql.env'});
const express = require("express");
const mysql = require("./db.js");

const app = express();
app.listen(3000, ()=>{
    console.log("server start");
}) //위치 

app.use(express.json({
    limit : '50mb'
}))

app.use(express.static('dist'));
app.get('/', (req, res)=>{
    res.sendFile('/dist/index.html');
})


app.get('/api/tusers', async(req, res)=>{
    let list = await mysql.query('tUsersList');
    res.send(list)
})
app.get('/api/tusers/:id', async(req, res)=>{
    let id = req.params.id
    let list = await mysql.query('tUsersInfo',id);
    res.send(list[0])
})

app.post('/api/tusers', async(req,res)=>{
    let data = req.body.param;
    let list = await mysql.query('tUsersInsert', data)
    res.send(list)
})

app.put('/api/tusers/:id', async(req,res)=>{
    let datas=[req.body.param, req.params.id]
    let result =await mysql.query('tUsersUpdate', datas);
    res.send(result)
})

app.delete('/api/tusers/:id', async(req,res)=>{
    let id = req.params.id
    let result = await mysql.query('tUsersDelete', id);
    res.send(result)
})