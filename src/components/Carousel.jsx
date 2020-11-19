import React from 'react';
import Slider from 'infinite-react-carousel';

const Carousel = props => (
    <Slider dots>
       {props.children} 
    </Slider>
);

export default Carousel;


