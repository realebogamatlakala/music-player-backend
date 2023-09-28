const Track = require('../models/track.model');

exports.uploadSong = async (req, res) => {
  try {
    const { title, artist, genre, album } = req.body;
    const url = req.file.path
    

    const song = new Track({ title, artist, genre, album, url  });
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

exports.getAudioById = async(req, res) => {
  const audioId = req.file.path

  try{
    const audio = await Track.findById(audioId);
    if(!audio){
      return res.status(404).json({err: "Audio not found!"})
    }else{
      res.set('Content-Type', audio/mp3)
      res.send(audio.AudioData);
    }
  }catch(error){
    res.status(500).json({error: "Could not recieve audio"})
  }

  }


// exports.deleteOne = async(req, res) => {
//   const id = req.file.path
//   songs
//       .remove({ _id: id })
//       .then(result => {
//           res.status(200).json(result);
//       })
//       .catch(err => {
//           console.log(err);
//           res.status(500).json({"Error deleting the song" : err});
//       });
// };
