import { useEffect, useState } from 'react';
import Lodging from '../components/Lodging';
import '../styles/LodgingList.css';

function LodgingList() {

	const [lodgings, setLodgings] = useState([]);

	useEffect(() => {
		fetch(`/lodgings.json`)
			.then((response) => response.json())
			.then((json) => {
				setLodgings(json);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="lodging-list">
			{ lodgings && lodgings.length > 0 && lodgings.map((lodging, index) =>
				<Lodging
					key={index}
					id={lodging.id}
					title={lodging.title}
					cover={lodging.cover}
				/>
			)}
		</div>
	);
}

export default LodgingList;
