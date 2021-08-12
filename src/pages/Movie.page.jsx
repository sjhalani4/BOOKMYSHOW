import {FaCcVisa, FaCcApplePay} from "react-icons/fa";
import React, {useContext,useState,useEffect} from "react";
import { MovieContext } from "../context/movie.context";
import axios from "axios";
import { useParams } from "react-router";
import Slider from "react-slick";
//component
import Cast from "../components/Cast/Cast.component";
import MovieHero from '../components/MovieHero/MovieHero.component';

//components
import EntertainmentCardSlider from '../components/Entertainment/Entertainmentcard.component';
import PosterSlider from '../components/PosterSlider/PosterSlider.component';
//config
import TempPosters from "../config/TempPosters.config";

 


const Movie = () => {
  const {id}= useParams();

  const {movie}=useContext(MovieContext);
  const [cast, setCast]= useState([]);
  const [similarMovies, setSimilarMovies ]= useState([]);
  const [recommended, setRecommended]= useState([]);
  useEffect(()=> {
    const requestCast = async() => {

      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast (getCast.data.cast);
    };
    requestCast();
  },[id]);

    useEffect(()=> {

    const requestSimilarMovies = async() =>{
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  },[id]);

    useEffect(()=> {

    const requestRecommendedMovies = async() =>{
      const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommended(getRecommendedMovies.data.results);
    };
    requestRecommendedMovies();


  },[id]);


    const settings = {
    
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              //infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };
    const settingsCast = {
    
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              //infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
      
    return (<>
    <MovieHero/>
    <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
        <h2 className="text-grey-800 font-bold text-2xl"> About the Movies </h2>
        <p>{movie.overview}
             </p>
            </div>
            <div className="my-8">
            <hr />
            </div>
           <div className="my-8">
               <h2 className="text-grey-800 font-bold text-2xl mb-3">Applicable Offers</h2>
               <div className="flex flex-col gap-3 lg:flex-row">
               <div className="flex items-start gap-2 bg-prem-800 px-2 py-3 border-2 border-prem-900 border-dashed rounded-md">
                  <div className="w-8 h-8">
                      <FaCcVisa className="w-full h-full" />
                      </div> 
                  <div className="flex flex-col items-start">
                      <h3 className="text-gray-700 text-xl font-bold">Visa Stream Offer</h3>
                      <p className="text-gray-600">Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                  </div>
               </div><div className="flex items-start gap-2 bg-prem-800 px-2 py-3 border-2 border-prem-900 border-dashed rounded-md">
                  <div className="w-8 h-8">
                      <FaCcApplePay className="w-full h-full" />
                      </div> 
                  <div className="flex flex-col items-start">
                      <h3 className="text-gray-700 text-xl font-bold">Filmy Pass Stream Offer</h3>
                      <p className="text-gray-600">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
                  </div>
               </div>

               </div>
               </div> 
         <div className="my-8">
         <div className="my-8">
            <hr />
            </div> 
         <h2 className="text-grey-800 font-bold text-2xl mb-4"> Cast & Crew </h2>
         

             
               <Slider {...settingsCast}>
               {cast.map((castdata)=>
               <Cast image={`https://image.tmdb.org/t/p/original${castdata.profile_path}`}
               castName={castdata.original_name} role={castdata.character}/> )}
             </Slider>
             {/* <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg"
             castName="Henry Cavill" role="Superman"/>
             <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg"
             castName="Gal Gadot" role="Wonder woman"/>
             <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/amy-adams-148-24-03-2017-12-40-00.jpg"
             castName="Amy Adams" role="Lois Lane"/>  */}
              
               <div className="my-8">
                <hr />
                </div>
                <div className="my-8 ">
                <PosterSlider config={settings} images={similarMovies} title="You might also like " isDark={false}  />
                </div>
                <div className="my-8">
                <hr />
                </div>
                <div className="my-8 ">
                <PosterSlider config={settings} images={recommended} title="BMS XCLUSIV " isDark={false}  />
                </div>
              </div>
    </div>
    </>
    );
    
};

export default Movie;
