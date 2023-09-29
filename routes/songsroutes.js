const express = require("express")
const router = express.Router();
const songController = require("../controllers/track")
const upload = require("../middlewares/multer")

<<<<<<< HEAD
router.post('/songs/uploads', upload.single('url'), songController.uploadSong);
=======
router.post('/uploads', upload.single('url'), songController.uploadSong)

>>>>>>> 69fbf3facd62f98b43eec4bba7d27c258b8f4108
router.get('/songs', songController.getAllSongs )
router.get("/files/:name", songController.getAllSongs);

// router.delete('/songs/:id', songController.deleteSong);

module.exports = router;