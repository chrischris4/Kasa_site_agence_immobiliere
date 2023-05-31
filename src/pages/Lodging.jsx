import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import Star from '../assets/Star.png';
import StarG from '../assets/StarG.png';
import '../styles/LodgingPage.css';

function Lodging() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [lodgingData, setLodgingData] = useState([]);

    const getStarRating = (note) => {
        const starCount = parseInt(note);
        if (starCount >= 1 && starCount <= 5) {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= starCount) {
                    stars.push(
                        <img className="star" key={i} src={Star} alt="star" />
                    );
                } else {
                    stars.push(
                        <img className="starG" key={i} src={StarG} alt="star" />
                    );
                }
            }
            return stars;
        }
    };

    useEffect(() => {
        fetch(`/lodgings.json`)
            .then((response) => response.json())
            .then((json) => {
                const lodging = json.find((item) => item.id === id);
                console.log(lodging);
                if (lodging === undefined) {
                    return navigate('/404');
                } else {
                    setLodgingData(lodging);
                }
            })
            .catch((error) => console.log(error));
    }, [id, navigate]);

    return (
        <div className="page-container-lodging">
            <Gallery pictures={lodgingData.pictures} />
            <div className="info">
                <div className="title-tag">
                    <h1>{lodgingData.title}</h1>
                    <h2>{lodgingData.location}</h2>
                    <div className="tags">
                        {lodgingData['tags'] &&
                            lodgingData['tags'].map((keyword, index) => (
                                <div className="tag" key={index}>
                                    {keyword}
                                </div>
                            ))}
                    </div>
                </div>
                <div className="heberger-rate">
                    <div className="heberger">
                        <div className="heberger-nom">
                            <h2>
                                {lodgingData.host &&
                                    lodgingData.host.name.split(' ')[0]}{' '}
                            </h2>
                            <h2>
                                {lodgingData.host &&
                                    lodgingData.host.name.split(' ')[1]}{' '}
                            </h2>
                        </div>
                        <img
                            className="heberger-pic"
                            src={lodgingData.host && lodgingData.host.picture}
                            alt={lodgingData.host && lodgingData.host.name}
                        />
                    </div>
                    <div className="rate">
                        {getStarRating(lodgingData.rating)}
                    </div>
                </div>
            </div>
            <div className="collapse-lodging">
                <div className="collapse2">
                    <Collapse
                        title={'Description'}
                        content={lodgingData.description}
                    />
                </div>
                <div className="collapse2">
                    <Collapse
                        title={'Équipements'}
                        content={
                            lodgingData.equipments &&
                            lodgingData.equipments.length > 0 &&
                            lodgingData.equipments.map((equipment, index) => {
                                return <li key={index}>{equipment}</li>;
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Lodging;
