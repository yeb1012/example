module.exports={
    tUsersList:`select*from t_users`,
    tUsersInfo : `select * from t_users where user_id=?`,
    tUsersInsert:`insert into t_users set?`,
    tUsersUpdate:`update t_users set ? where user_id=?`,
    tUsersDelete:`delete from t_users where user_id=?`
}