const Track = require('../models/track.model');
const fs = require('fs')


exports.uploadSong = async (req, res) => {
  try {
    const { title, artist, genre, album } = req.body;
    const url = req.file.path
    

    const song = new Track({ title, artist, genre, album, url  });
    await song.save();

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(201).json({ message: 'Song uploaded successfully', song });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllSongs = (req, res) => {

        Track.find()
        .then(data => {
          res.send(data)
})


};

exports.getASong = async(req, res) => {

  try{
    const id = req.params.id;
    const ttrack = await Track.findById(id);
    
    res.status(200).send(ttrack);
}
catch(error){
    res.status(500).json({error: error.message});
}


}

exports.deleteOne = async(req, res) => {
  try 
  {
      const id = req.params.id;
      
      const ttrack = await Track.deleteOne(id);
      res.status(200).json(ttrack);
    } 
    catch (error) 
    {
      res.status(500).json({ error: "Could not delete song" });
    }
}