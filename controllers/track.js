const Track = require('../models/track.model');

exports.uploadSong = async (req, res) => {
  try {
    const { title, artist, genre } = req.body;
    const url = req.file.path
    

    const song = new Track({ title, artist, genre, url  });
    await song.save();

    res.status(201).json({ message: 'Song uploaded successfully', song });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSongs = async(req, res)=>{
    try{
        const songs = await Track.find()
        res.status(200).send(songs)
    } catch(err){
        res.status(500).json({err: "Internal Server Error"})
    }
}
