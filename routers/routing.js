const express = require('express');
const { uploadFile, upload } = require('../controller/uploadFile');
const router = express.Router();

router.post('/image', upload.single('photo'), uploadFile.addData);

module.exports = router;




//   try {
    //     const file = req.file;
    //     console.log(file);
    //     const result = await cloudinary.uploader.upload(file.path);
//     console.log(result); 

//     res.send(result); // Send uploaded file information back as response
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error uploading file");
//   }





    // const cloudinary = require('cloudinary').v2;
    // const multer = require('multer');
    
    // cloudinary.config({ 
    //   cloud_name: 'drj6zra5d', 
    //   api_key: '735237695617333', 
    //   api_secret: 'hSEMn5dn61HZgPT3CWEN_kwr-YE' 
    // });
    
    // const storage = multer.diskStorage({
    //   destination: function (req, file, cb) {
    //     cb(null, './upload'); // Define your upload directory here
    //   },
    //   filename: function (req, file, cb) {
    //     cb(null, file.originalname);
    //   }
    // });
    
    // const upload = multer({ storage: storage });
