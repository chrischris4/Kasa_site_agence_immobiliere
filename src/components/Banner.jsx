import '../styles/Banner.css';

function Banner(props) {
    return (
        <div className="banner">
            <img className="banner-image" src={props.cover} alt={props.title} />
            <h2 className="banner-title">{props.title}</h2>
        </div>
    );
}

export default Banner;
