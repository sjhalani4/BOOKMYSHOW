import React,{useContext} from 'react';
import { MovieContext } from '../../context/movie.context';



const MovieInfo = () => {
    const {movie} = useContext(MovieContext) ;
    //optional chaining
    const genres = movie.genres?.map(({ name }) => name).join(", ")
    // without optional chaining -> movie.genres && movie.genres.map(({ name }) => name).join(", ")
    return (
    <> 
    <div className="flex flex-col gap-3  lg:gap- 8 "> 
     <div className="flex items-center  gap-3 md:px-4">
         <div className="w-40 h-8">
       <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
        alt="premier"
        className="w-full h-full"
        /> 
       </div> 
       <span className=" bg-bms-700 p-1 text-xs text-white rounded-md">Streaming now</span>
         </div>   
     <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">{movie.original_title}</h1>
      <div className="text-white font-light flex flex-col gap-2 md:px-4">
         <h4>4k &bull; {movie.original_language} &bull; Action</h4>
         <h4>{(movie.runtime/60).toFixed(2)} h &bull; {genres}  &bull; 16+</h4>
     </div>
     
         <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
         <button className="bg-prem-700 w-full py-3 font-semibold rounded-lg text-white">
             Rent ₹149
         </button>
         <button className="bg-prem-700 w-full py-3 font-semibold rounded-lg text-white">
             Buy ₹149
         </button>
         </div>
         
     
    </div>
    
    </>
    );
    
};

export default MovieInfo;
