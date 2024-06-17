const multer = require("multer");
const path = require("path")

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"public/images");
    },
    filename: (req, file, cb) => {
        const upldatename = Date.now() + path.extname(file.originalname);
        cb(null,upldatename);

    },
});
const upload = multer({
storage: Storage,

});
module.exports = upload;