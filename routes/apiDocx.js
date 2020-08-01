const express = require('express');
const routerDocx = express.Router();
const multer = require('multer');
const File = require('../models/file')
const EasyDocx = require('node-easy-docx')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './docx');
    },
    filename: function(req, file, cb){
        cb(null, 'uploadedFile.docx')
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'application/msword' || file.mimetype === 'text/plain' || file.mimetype === 'application/vnd.ms-word.document.macroenabled.12' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
        cb(null, true)
    }
    else{
        cb('Upload FAILED...! Upload only MS Word/Text file', false)       
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});


routerDocx.post('/docx', upload.single('docx'), function(req,res,next){
        var filePath = req.file.path;

     const easyDocx = new EasyDocx({
        path: 'C:/Users/user/Desktop/Project/REST_API_PLAYLIST/docx/uploadedFile.docx'
        })
        easyDocx.parseDocx().then(data => {
            for(var i = 0; i < data.length; i = i+1){
                var content = new String()
                for(var j = 0; j < data[i].items.length; j++){
                    content = content.concat(data[i].items[j].text)
                }
                console.log(content)
            }
            res.json(data)
        })
        .catch(err => {
            console.error(err)
        })
})

module.exports = routerDocx