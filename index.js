const express = require('express');
const mongoose = require('mongoose');
const tackRoutes = require('./routes/songsroutes');
const PORT = process.env.PORT || 3000;
const app = express();
const cors= require("cors")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://127.0.0.1:27017/newMusic', 
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=> console.log("connected to DB"))
    .catch((e)=> console.log("Couldn't connect to DB: ", e));


app.use('/api', tackRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
