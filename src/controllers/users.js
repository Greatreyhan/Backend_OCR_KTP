const usersModel = require('../models/users')
const getAllUsers = async (req,res) =>{
    try{
        const [rows,field] = await usersModel.getAllUsers()
        res.status(200).json({
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
const createNewUser = async (req,res) =>{
    const {body} = req
    try{
        await usersModel.createNewUser(body);
        res.status(201).json({
            message: 'create new user success',
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const updateUser = async (req,res) =>{
    const {idUser} = req.params
    const {body} = req
    try{
        await usersModel.updateUserById(body,idUser);
        res.status(200).json({
            message: 'update user success',
            data:{
                id:idUser,
                ...body
            }
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteUser = async (req,res) =>{
    const {idUser} = req.params;
    try{
        await usersModel.deleteUserById(idUser);
        res.status(200).json({
            message: 'delete user success',
            data:null
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers, 
    createNewUser,
    updateUser,
    deleteUser
}