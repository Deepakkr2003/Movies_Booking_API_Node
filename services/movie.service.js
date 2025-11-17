const Movie = require('../models/movie.model');


const createMovie=async(data)=>{
    const movie=Movie.create(data);
    return movie;
}

const deleteMovie=async(id)=>{
    const response=await Movie.findByIdAndDelete(id);
    return response;
}

const getMovieById = async (id) => {
    const movie = Movie.findById(id);
    if(!movie){
        return{
            err:"No movie found for the corresponding id parameter",
            code:404
        }
    }
    return movie;
}

module.exports={
    getMovieById,
    createMovie,
    deleteMovie
}