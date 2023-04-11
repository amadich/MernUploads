const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(express.static('public'))

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads/'); // directory where uploaded files will be stored
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // unique file name
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), function(req, res) {
   res.send('File uploaded successfully');
 });
 

app.listen(PORT, () => {console.log("Server Worked ! ");})