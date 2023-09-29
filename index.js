const express = require('express');
const mongoose = require('mongoose');
<<<<<<< HEAD
const songRoutes = require('./routes/songsroutes');
=======
const trackRoutes = require('./routes/songsroutes');
>>>>>>> 69fbf3facd62f98b43eec4bba7d27c258b8f4108
const PORT = process.env.PORT || 3000;
const app = express();
const cors= require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

global.__basedir = __dirname;


mongoose.connect('mongodb://127.0.0.1:27017/newMusic', 
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=> console.log("connected to DB"))
    .catch((e)=> console.log("Couldn't connect to DB: ", e));


<<<<<<< HEAD
app.use('/api', songRoutes);
=======
app.use('/api', trackRoutes);
>>>>>>> 69fbf3facd62f98b43eec4bba7d27c258b8f4108

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
