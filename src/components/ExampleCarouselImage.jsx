import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ text, imageSrc }) => {
    return (
        <div className="carousel-image-container">
            <img src={imageSrc} alt={text} className="d-block w-100" />
            <div className="overlay-text">{text}</div>
        </div>
    );
};

ExampleCarouselImage.propTypes = {
    text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;