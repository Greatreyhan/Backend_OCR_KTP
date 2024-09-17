const usersModel = require('../models/users')
const getAllUsers = async (req,res) =>{
    try{
        const [rows,field] = await usersModel.getAllUsers()
        res.json({
            message: 'get All Users Success',
            data: rows
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

// Create New Koordinator
const createNewUser = (req,res) =>{
    console.log(req.body)
    res.json({
        message: 'create new User Success',
        data: req.body
    })
}

const updateUser = (req,res) =>{
    const {idUser} = req.params;
    console.log(idUser)
    res.json({
        message: 'Berhasil update user',
        data : idUser
    })
}

const deleteUser = (req,res) =>{
    const {idUser} = req.params;
    console.log(idUser)
    res.json({
        message: 'Berhasil menghapus User',
        data: idUser
    })
}

module.exports = {
    getAllUsers, 
    createNewUser,
    updateUser,
    deleteUser
}