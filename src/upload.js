const multer = require("multer");
const path = require("path");

// Menentukan tempat penyimpanan file
const publicDirectory = path.join(__dirname, "public");
const uploadDirectory = path.join(publicDirectory, "uploads");

// Mendefinisikan gimana cara nyimpen file-nya
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const setDir = uploadDirectory + "\\..\\..\\..\\public\\uploads\\";
        cb(null, setDir);
    },

    filename: function (req, file, cb) {
        const getFileName = file.originalname.slice(0, -4);
        cb(null, getFileName + path.extname(file.originalname));
    },
});

// Membuat upload middleware
module.exports = multer({ storage });

