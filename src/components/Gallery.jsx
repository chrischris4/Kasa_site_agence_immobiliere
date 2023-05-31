import { useState } from 'react';
import '../styles/Gallery.css';
import VectorL from '../assets/VectorL.png';
import VectorR from '../assets/VectorR.png';

function Gallery(props) {
    const [pictureIndex, setPictureIndex] = useState(0);

    const prevPicture = () => {
        let newIndex;
        if (pictureIndex !== 0) {
            newIndex = pictureIndex - 1;
        } else {
            newIndex = props.pictures.length - 1;
        }
        setPictureIndex(newIndex);
    };

    const nextPicture = () => {
        let newIndex;
        if (pictureIndex !== props.pictures.length - 1) {
            newIndex = pictureIndex + 1;
        } else {
            newIndex = 0;
        }
        setPictureIndex(newIndex);
    };

    return (
        <div className="gallery">
            <div className="carousel">
                {props.pictures &&
                    props.pictures.length > 0 &&
                    props.pictures.map((picture, index) => (
                        <img
                            key={index}
                            className={
                                index === pictureIndex
                                    ? `carousel-img show`
                                    : `carousel-img`
                            }
                            src={picture}
                            alt={props.title}
                        />
                    ))}
                {props.pictures && props.pictures.length > 1 && (
                    <div className="prev" onClick={prevPicture}>
                        <img className="vectorl" src={VectorL} alt="vectorl" />
                    </div>
                )}
                {props.pictures && props.pictures.length > 1 && (
                    <div className="next" onClick={nextPicture}>
                        <img className="vectorr" src={VectorR} alt="vectorr" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Gallery;
