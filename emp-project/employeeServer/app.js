require('dotenv').config({path: './db/mysql.env'})
const express = require('express');
const app = express();
app.use(express.json({
    limit: '50mb'
}))
const mysql = require('./db.js');
const { employeeDelete } = require('./db/sql.js');


app.listen(3000, ()=>{
    console.log('서버시작')
})
app.use(express.json({
    limit: '50mb'
}))

app.get('/api/emps', async (req,res)=>{
    const list = await mysql.query('employeeList')
    res.send(list);
})

app.get('/api/emps/:no',async (req,res)=>{
    let num = req.params.no
    let list = await mysql.query('employeeGet',num)
    res.send(list[0]);
})

const empTable = ['emp_no', 'first_name', 'last_name', 'gender', 'hire_date']
const deptEmpTable =['emp_no', 'dept_no','from_date','to_date'] //쿼리문과 순서가 같아야함
const salaries =['emp_no', 'salary','from_date','to_date']

app.post('/api/emps', async (req,res)=>{
    let empInfo = req.body.param;

    let empData = {}; //set절로 넘어오니까 객채로 무조건 넘기기
    for(let column of empTable){ //let column = 'emp_no'
        let value = empInfo[column];//let value = empInfo['emp_no']
        if(value == '')continue;
        empData[column] = value //empData['emp_no']
    }
       let result = await mysql.query('InsertE', empData)

    let deptEmpData =[]; //?가 세개 이상일때
    for(let column of deptEmpTable){
        let value = empInfo[column]
        if(value == '')continue;
         deptEmpData.push(value)
    }
        result = await mysql.query('InsertD', deptEmpData)

        let salData = {}
        for(let column of salaries){
            let value = empInfo[column]
            if(value == '') continue;
            salData[column] = value;
        }
        salData.to_date = '9999-01-01';
        result = await mysql.query('InsertS', salData);

        res.send(result);
       // res.end();
})



// app.post('/emps', async (req,res)=>{
//     let data =req.body.param;
//     let listE = await mysql.query('InsertE',data.e)
//     let listD = await mysql.query('InsertD',data.d)
//     let listS = await mysql.query('InsertS',data.s)
//     let list = [listE, listD, listS]
//     console.log(list)
//     res.send(list)
// })

app.put('/api/emps/:no',async(req,res)=>{  
    let datas = [req.body.param, req.params.no];
    let result = await mysql.query('employeeUpdate',datas)
    res.send(result)
})

app.delete('/api/emps/:no',async (req,res)=>{
    let datas = [req.body.param.to_date, req.params.no];
    let result = await mysql.query('employeeDelete',datas)
    res.send(result)
})
