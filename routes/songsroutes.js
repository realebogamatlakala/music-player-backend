const express = require("express")
const router = express.Router();
const songController = require("../controllers/track")
const upload = require("../middlewares/multer")

router.post('/songs/uploads', upload.single('url'), songController.uploadSong);

router.get('/songs', songController.getAllSongs )

module.exports = router;