
const multer = require('multer');


// Set up the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
<<<<<<< HEAD
    cb(null, './uploads');
    // cb(null, __basedir + './uploads');
=======
    // cb(null, './uploads');
    cb(null, __basedir + './uploads');
>>>>>>> 1b601e9b08ad78ca20dc90c742695b06473ff176
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload

