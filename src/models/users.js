const dbPool = require('../config/database')

const getAllUsers = ()=>{
    const SQLQuery = 'SELECT * FROM users'
   
    return dbPool.execute(SQLQuery);
}

const createNewUser = (body)=>{
    const SQLQuery = `INSERT INTO users (name,kelurahan,password)
                      VALUES ('${body.name}','${body.kelurahan}','${body.password}')`
   
    return dbPool.execute(SQLQuery);
}

const updateUserById = (body,idUser)=>{
    const SQLQuery = `UPDATE users
                      SET name='${body.name}',kelurahan='${body.kelurahan}',password='${body.password}'
                      WHERE id=${idUser}`
   
    return dbPool.execute(SQLQuery);
}

const deleteUserById = (idUser)=>{
    const SQLQuery = `DELETE FROM users WHERE id=${idUser}`
   
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById
}