const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('회원정보조회');

});

router.post('/insert', (req,res)=>{
    res.send('회원등록');
})

router.post('/update', (req,res)=>{
    res.send('회원 정보 수정');
})

router.post('/delete', (req,res)=>{
    res.send('회원삭제');
})





//얘 뒤에 코드하면 안됨 얘가 마지막이여야
//반드시 들어가야하는 부분 리턴할때 미리 아래쪽에 추가해놓고 중간에 코드 삽입하는게 편함
module.exports = router;