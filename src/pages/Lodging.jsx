import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import Star from '../assets/Star.png';
import '../styles/LodgingPage.css';

function Lodging() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [lodgingData, setLodgingData] = useState([]);

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
    }, []);

    return (
        <div className="page-container-lodging">
            <Gallery carousel={lodgingData.cover} />
            <div className="info">
                <div className="title-tag">
                    <h1>{lodgingData.title}</h1>
                    <h2>{lodgingData.location}</h2>
                    <div className="tags">
                        <div className="tag">lalala</div>
                        <div className="tag">lala</div>
                        <div className="tag">la</div>
                    </div>
                    <p>...</p>
                </div>
                <div className="heberger-rate">
                    <div className="heberger">
                        <h2>{lodgingData.nom}</h2>
                    </div>
                    <div className="heberger-pic">
                        <img src={lodgingData.image} alt={lodgingData.nom} />
                    </div>
                    <div className="rate">
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                        <img src={Star} alt="star" />
                    </div>
                </div>
            </div>
            <div className="collapse-lodging">
                <Collapse
                    title={'Description'}
                    content={lodgingData.description}
                />
                <Collapse
                    title={'Équipements'}
                    content={lodgingData.équipements}
                />
            </div>
        </div>
    );
}

export default Lodging;

/*


<div className="allInfo">
	<div className="infoTag">
		<div className="nomLieu">
			<h1>l</h1>
			<h2>lieu</h2>
		</div>
		<div className="tagLogement">
			<Tag />
			<Tag />
			<Tag />
		</div>
	</div>
	<div className="nomImgNote">
		<div className="nomImg">
			<p>John</p>
			<img
				src={portrait}
				alt=""
				className="imgPortrait"
			/>
		</div>
		<div className="note">
			<img src={portrait} alt="" className="star" />
			<img src={portrait} alt="" className="star" />
			<img src={portrait} alt="" className="star" />
			<img src={portrait} alt="" className="star" />
			<img src={portrait} alt="" className="star" />
		</div>
	</div>
</div>
<div className="collapseLogement">
	<Collapse />
	<Collapse />
</div>

*/
