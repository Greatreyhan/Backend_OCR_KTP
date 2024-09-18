const multer = require('multer')
const path = require('path');


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'public/images');
    },
    filename: (req,file,cb) =>{
        const timestamp = new Date().getTime()
        const ext = path.extname(file.originalname);
        cb(null, `${timestamp}${ext}`);
    }
})

const upload = multer({
    storage:storage,
    limits : {
        fileSize: 5 * 1000 * 1000 // 5Mb
    }})

module.exports = upload;