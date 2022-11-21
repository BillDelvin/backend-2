const multer = require("multer");
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "public/images");
  },
  filename: (_, file, cb) => {
    cb(null, new Date().getTime().toString() + "-" + file.originalname);
  },
});

module.exports = multer({
  storage,
  fileFilter: (_, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    }

    return cb(new Error("Only jpg, png, and jpeg are allowed!"), false);
  },
}).single("images");
