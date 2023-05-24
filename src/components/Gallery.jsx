import '../styles/Gallery.css';
import VectorL from '../assets/VectorL.png';
import VectorR from '../assets/VectorR.png';
import { Link } from 'react-router-dom';

function Gallery(props) {
    return (
        <div className="gallery">
            <div className="carousel">
                <Link className="prev" to={`/logement/${props.id - 1}`}>
                    <img className="vectorl" src={VectorL} alt="vectorl" />
                </Link>
                <Link className="next" to={'#'}>
                    <img className="vectorr" src={VectorR} alt="vectorr" />
                </Link>
                <img
                    className="carousel-img"
                    src={props.carousel}
                    alt={props.title}
                />
            </div>
        </div>
    );
}

export default Gallery;

// ${currentIndex + 1}/${data.length}
