import '../styles/Lodging.css';
import { Link } from 'react-router-dom';

function Lodging(props) {
    return (
        <div className="lodging-card">
            <Link className="lodging-link" to={`/logement/${props.id}`}>
                <div className="lodging-item">
                    <img
                        className="lodging-img"
                        src={props.cover}
                        alt={props.title}
                    />
                    <h2 className="lodging-title">{props.title}</h2>
                </div>
            </Link>
        </div>
    );
}

export default Lodging;
