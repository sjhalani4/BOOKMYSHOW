import React from 'react';
//component
import Poster from '../../poster/poster.component';
import Slider from 'react-slick';

//configs
import PosterCarouselSettings from '../../config/PosterCarousel.config';


const PosterSlider = (props) => {
    return (
        <>
         
      <div className="flex flex-col items-start my-2 ">
        <h3 className={` text-2xl font-bold ${props.isDark ? "text-white" : "text-gray-800"}`}>{props.title}</h3>
        <p className= {`text-sm ${props.isDark ? "text-white" : "text-gray-800"}`} >{props.subtitle}</p>
      </div>
        <Slider {...PosterCarouselSettings}>
          {props.images.map((image) => (
            <Poster {...image} isDark={props.isDark} />
          ))}
        </Slider>
      </> 
    );   
    
};

export default PosterSlider;