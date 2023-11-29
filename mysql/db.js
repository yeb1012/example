const mysql = require('mysql');
const sql = require('./db/sql.js'); //sql쿼리문이 작성되어져 있는 파일

//트랜잭션과 커넥션의 차이
//트랜잭션은 명령어가 실행되면서
//커넥션은 길-> sql문이 실행되면서 트랜잭션 발생


//pool을 만드는 이유
const pool = mysql.createPool({ //pool생성
 host: process.env.MYSQL_HOST, //process.env 환경변수에 접근할수 있게
 port:process.env.MYSQL_PORT,
 user:process.env.MYSQL_USER,
 password:process.env.MYSQL_PWD,
 database:process.env.MYSQL_DB,
 connectionLimit : process.env.MYSQL_LIMIT 

});

// pool.query('sql문', '값', (err, results)=>{ //두번째 매개변수는 mybatis의 ?로 동적인 값 주는거라 생각하면 된다

// })

const query = async(alias,values) => { //values는 있어도 없어도 됨 전체조회할땐 //alias는 필드명이라 생각하면 됨 다른거 써도됨
    return new Promise((resolve, reject) =>{
         pool.query(sql[alias],values, (err,results)=>{ //alias란? //대괄호를 쓰는 이유 : 값을 동적으로 alias필드명으로 전달하고 있다는 뜻
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        }) 
    })
}

const getData = async()=>{
    console.log(await query('customerList'));
};

getData();

module.exports ={
    query
};
