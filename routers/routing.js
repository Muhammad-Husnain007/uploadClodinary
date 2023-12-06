const express = require('express');
const { uploadFile, upload } = require('../controller/uploadFile');
const router = express.Router();

router.post('/image', upload.single('photo'), uploadFile.addData);

module.exports = router;




