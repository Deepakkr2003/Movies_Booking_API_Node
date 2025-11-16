const Movie = require('../models/movie.model')

const createMovie = async(req,res)=>{
    try {
        const movie = await Movie.create(req.body);
        return res.status(201).json({
            success:true,
            error:{},
            data:movie,
            message:'Successfully created anew movie',
        })
    } catch (error) { // <-- The error object is named 'error'
        console.log(error); // <-- Use 'error' instead of 'err'
        return res.status(500).json({
            success:false, // It's better to set success to false for an error response
            error:error, // <-- Use 'error' instead of 'err'
            data:{},
            message:'Something went wrong'
        })
    }
}

module.exports=createMovie;