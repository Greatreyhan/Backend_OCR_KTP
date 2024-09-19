const ktpModel = require('../models/ktp')
const Tesseract = require('tesseract.js');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const extractor = require('../utils/extractKTP.js')
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

const extractKTPPhoto = async (req, res) => {
    const imagePath = req.file.path;
    const processedImagePath = `./uploads/processed_${req.file.filename}`;

    // Resize dan konversi gambar ke grayscale menggunakan sharp
    sharp(imagePath)
        .resize({ width: 800 })
        .greyscale()
        .toFile(processedImagePath)
        .then(() => {
            // Jalankan OCR menggunakan Tesseract
            Tesseract.recognize(processedImagePath, 'ind', {
                logger: info => {
                    // console.log(info)
                } // Info proses OCR
            })
                .then(result => {
                    // Hapus gambar yang sudah diproses
                    fs.unlinkSync(imagePath);
                    fs.unlinkSync(processedImagePath);

                    // Ekstrak data dari teks hasil OCR
                    const { data, cleanedText } = extractor.extractKTPData(result.data.text);

                    // Kirim data ke klien
                    res.json({ message: 'Extract data Success',data });
                })
                .catch(error => {
                    // Tangani kesalahan OCR
                    res.status(500).json({ message: 'Error during OCR process.', error: error.message });
                });
        })
        .catch(error => {
            // Tangani kesalahan saat memproses gambar
            res.status(500).json({ message: 'Error processing image.', error: error.message });
        });
}

module.exports = {
    createKTPRecord, 
    getAllKTPRecord,
    updateKTPById,
    deleteKTPRecordById,
    getKTPRecordByKtpId,
    extractKTPPhoto
}