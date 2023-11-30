module.exports = {
    customerList : `SELECT * FROM customers`,
    customerSome : `SELECT phone, name from customers where id=? `,
    customerInfo : `SELECT * FROM customers where id=?`,
    customerInsert : `INSERT INTO customers SET ?`, 
    customerUpdate : `UPDATE customers SET? where id=?`,
    // customerUpdateId : `UPDATE customers set id=id+100, set? where id=?`,
    customerDelete : `DELETE FROM customers where id=?`
}

// alias필드명때문에 쿼리문이 4개여도 하나만써서 가능
//물음표를 해결해줘야 db.js의 values로 해결함 //그러니까 set경우엔 객체로 넘어감!! 하나만 특정한게 아니니까 정보가 다량으로 넘어가기 때문 
//대소문자 구분 안해도 가능 , data도 대소문자 구분하지 않음 mysql에서만