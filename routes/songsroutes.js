const express = require("express")
const router = express.Router();
const songController = require("../controllers/track")
const upload = require("../middlewares/multer")

router.post('/songs/uploads', upload.single('url'), songController.uploadSong);
router.get('/songs', songController.getAllSongs )
router.get("/files/:name", songController.getAllSongs);

// router.delete('/songs/:id', songController.deleteSong);

module.exports = router;