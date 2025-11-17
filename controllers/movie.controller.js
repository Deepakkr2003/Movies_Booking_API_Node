const Movie = require('../models/movie.model');
const movieService = require('../services/movie.service');
const {errorResponseBody,successResponseBody} = require('../utils/responseBody')




const createMovie = async(req,res)=>{
    try {
        const movie = await movieService.createMovie(req.body);
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

const deleteMovie = async(req,res)=>{
    try {
        const response = await movieService.deleteMovie(req.params.id);
        return res.status(200).json({
            success:true,
            error:{},
            message:'Successfully deleted a movie',
            data:response
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

const getMovie = async(req,res)=>{
    try {
        const response = await movieService.getMovieById(req.params.id);
        if(response.err){
            errorResponseBody.err=response.err;
            return res.status(response.code).json(errorResponseBody);
        }
        successResponseBody.data=response;
        return res.status(200).json(successResponseBody);
    } catch (error) { // <-- The error object is named 'error'
        console.log(error); // <-- Use 'error' instead of 'err'
        return res.status(500).json(errorResponseBody)
    }
}

module.exports={
    createMovie,
    deleteMovie,
    getMovie
}