const dbPool = require('../config/database')

/*
    Kurang -> Gambar & Date pembuatan data(record) & siapa koordinatornya
    Improve -> Handler untuk data kosong
*/

const createKTPRecord = (body)=>{
    const SQLQuery = `INSERT INTO ktp (nik, nama, tempat_lahir, tanggal_lahir, jenis_kelamin, golongan_darah, alamat, rt_rw, kelurahan, kecamatan, agama, status_perkawinan, pekerjaan, kewarganegaraan)
                      VALUES ('${body.nik}','${body.nama}','${body.tempat_lahir}','${body.tanggal_lahir}','${body.jenis_kelamin}','${body.golongan_darah}','${body.alamat}','${body.rt_rw}','${body.kelurahan}','${body.kecamatan}','${body.agama}','${body.status_perkawinan}','${body.pekerjaan}','${body.kewarganegaraan}')`
   
    return dbPool.execute(SQLQuery);
}

const getAllKTPRecord = ()=>{
    const SQLQuery = 'SELECT * FROM ktp'
   
    return dbPool.execute(SQLQuery);
}

const getKTPRecordByKtpId = (idKtp)=>{
    const SQLQuery = `SELECT * FROM ktp WHERE idktp=${idKtp}`
   
    return dbPool.execute(SQLQuery);
}

const updateKTPById = (body,idKtp)=>{
    const SQLQuery = `UPDATE ktp
                      SET nik='${body.nik}',nama='${body.nama}',tempat_lahir='${body.tempat_lahir}',tanggal_lahir='${body.tanggal_lahir}',jenis_kelamin='${body.jenis_kelamin}',golongan_darah='${body.golongan_darah}',alamat='${body.alamat}',rt_rw='${body.rt_rw}',kelurahan='${body.kelurahan}',kecamatan='${body.kecamatan}',agama='${body.agama}',status_perkawinan='${body.status_perkawinan}',pekerjaan='${body.pekerjaan}',kewarganegaraan='${body.kewarganegaraan}'
                      WHERE idktp=${idKtp}`
   
    return dbPool.execute(SQLQuery);
}

const deleteKTPRecordById = (idKtp)=>{
    const SQLQuery = `DELETE FROM ktp WHERE idktp=${idKtp}`
   
    return dbPool.execute(SQLQuery);
}

module.exports = {
    createKTPRecord,
    getAllKTPRecord,
    updateKTPById,
    deleteKTPRecordById,
    getKTPRecordByKtpId
}