const express = require('express')
const bodyParser = require('body-parser')
const env = require('dotenv')
const mongoose = require('mongoose')

const MovieRoutes = require('./routes/movie.routes')

env.config();
const app = express()  // express app object

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

MovieRoutes(app);

app.get('/home',(req,res)=>{
    return res.json({
        success:true
    })
})

app.listen(process.env.PORT, async () => {
    // This callback gets executed once we successfully start the server on the given port
    console.log(`Server started on port ${process.env.PORT}`);

    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Connected to mongo");

        // await Movie.create({
        //     name:"Bacchan Pandey",
        //     description:"Comedy masala movie",
        //     casts:["Akshay Kumar","Kriti Sanon","Jaqueline Fernandiz"],
        //     director:"Farhad samji",
        //     trailerUrl:"https://bacchanpandey/trailer/1",
        //     language:"Hindi",
        //     realeaseDate:"18-03-2022",
        //     releaseStatus:"RELEASED"
        // })

    } catch (err) {
        console.error("Not able to connect to mongo:", err.message);
    }
});