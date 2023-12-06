const multer = require('multer');
const cloudModel = require('../Models/model');
const cloudinary = require('cloudinary').v2;

// cloudinary code

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.originalname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

const uploadFile = {
  addData: async (req, res) => {
    try {     
      const { name, description, category, price } = req.body;
      const file = req.file;

      if (!file) {
        return res.status(400).send({ message: 'No file uploaded' });
      }
      const result = await cloudinary.uploader.upload(file.path);
      const newProduct = new cloudModel({
        name, description, category, price, imageUrl: result.secure_url
      });

      const response = await newProduct.save();
      return res.status(201).send({ message: 'Data posted successfully', data: response });
          
    } catch (err) {
      return res.status(500).send({ message: 'Server error', error: err.message });
    }
  }
};

module.exports = { uploadFile, upload };
