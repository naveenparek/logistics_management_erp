const multer = require("multer");

/**
 * Multer Configuration for Image Upload
 * Stores uploaded files in the 'uploads/' directory
 * Generates unique filenames using timestamp
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

module.exports = upload;