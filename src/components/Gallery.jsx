import '../styles/Gallery.css';
import VectorL from '../assets/VectorL.png';
import VectorR from '../assets/VectorR.png';
import { Link } from 'react-router-dom';

function Gallery(props) {
    return (
        <div className="gallery">
            <div className="carousel">
                <Link className="prev" to={`#`}>
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

// function Gallery(props) {
//     const [photoIndex, setPhotoIndex] = useState(0);
//     const photos = props.('des photos');

//     const prevPhoto = () => {
//         setPhotoIndex((prevIndex) =>
//             prevIndex === 0 ? photos.length - 1 : prevIndex - 1
//         );
//     };

//     const nextPhoto = () => {
//         setPhotoIndex((prevIndex) =>
//             prevIndex === photos.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const photo = photos[photoIndex];

//     return (
//         <div className="gallery">
//             <div className="carousel">
//                 <Link className="prev" onClick={prevPhoto} >
//                     <img className="vectorl" src={VectorL} alt="vectorl" />
//                 </Link>
//                 <Link className="next" onClick={nextPhoto} >
//                     <img className="vectorr" src={VectorR} alt="vectorr" />
//                 </Link>
//                 <img
//                     className="carousel-img"
//                     src={photo.url}
//                     alt={photo.title}
//                 />
//             </div>
//         </div>
//     );
// }
