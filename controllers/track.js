const Track = require('../models/track.model');
const fs = require('fs')

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

// exports.getAllSongs = async(req, res)=>{
//     try{
//         const songs = await Track.find()
//         res.status(200).send(songs)
//     } catch(err){
//         res.status(500).json({err: "Internal Server Error"})
//     }
// }
exports.getAllSongs = (req, res) => {
  
  // const directoryPath = __basedir + "/uploads/";
  
  // fs.readdir(directoryPath, function (err, files){
  //     if(err){
  //         res.status(500).send({
  //             message: "Unable to scan files ",
  //         });
  //     }
  
  //     let filesInfos = [];
  //     let baseUrl = 'http://localhost:3000';

  //     files.forEach((file) =>{
  //         filesInfos.push({
  //             name: file,
  //             url : baseUrl + file,
  //         });
  //     });

  //     res.status(200).send(filesInfos)
  // });
 Track.find()
.then(data => {
  // console.log(data)
  res.send(data)
})


};

exports.getASong = async(req, res) => {

   


  try{
    const id = req.params.id;
    const ttrack = await Track.findById({id});
    
    res.status(200).send(ttrack);
}
catch(error){
    res.status(500).json({error: error.message});
}
}