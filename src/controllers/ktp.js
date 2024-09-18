const ktpModel = require('../models/ktp')

// Create New Koordinator
const createKTPRecord = async (req,res) =>{
    const {body} = req
    try{
        await ktpModel.createKTPRecord(body);
        res.status(201).json({
            message: 'Create new KTP record success',
        })
    }
    catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

// Get All KTP Record
const getAllKTPRecord = async (req,res) =>{
    try{
        const [rows,field] = await ktpModel.getAllKTPRecord()
        res.status(200).json({
            message: 'get All KTP Record Success',
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


// Get All KTP Record
const getKTPRecordByKtpId = async (req,res) =>{
    const {idKtp} = req.params
    try{
        const [rows,field] = await ktpModel.getKTPRecordByKtpId(idKtp)
        res.status(200).json({
            message: 'get All KTP Record Success',
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

// Update KTP Record
const updateKTPById = async (req,res) =>{
    const {idKtp} = req.params
    const {body} = req
    try{
        await ktpModel.updateKTPById(body,idKtp);
        res.status(200).json({
            message: 'update KTP Record success',
            data:{
                id:idKtp,
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

const deleteKTPRecordById = async (req,res) =>{
    const {idKtp} = req.params;
    try{
        await ktpModel.deleteKTPRecordById(idKtp);
        res.status(200).json({
            message: 'delete KTP Record success',
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
    createKTPRecord, 
    getAllKTPRecord,
    updateKTPById,
    deleteKTPRecordById,
    getKTPRecordByKtpId
}