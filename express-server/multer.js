const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/');
    },
    filename : function(req, file, cb){
        cb(null, new Date().valueOf() + path.basename(file.originalname));//유니크한 값 줄때 시간이나 랜덤으로 줘서 사용하자
    }
})

const upload = multer({storage : storage });

app.post('/profile', upload.single('avatar'),(req,res)=>{
    console.log(req.file);
    console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req,res)=>{ //12가 최대크기 설정한거
    for(let file of req.files){
        console.log(file);
    }
});

app.listen(5000, ()=>{
    console.log("start!!")
});