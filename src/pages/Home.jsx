import Banner from '../components/Banner';
import LodgingList from '../components/LodgingList';
import bannerImage from '../assets/kasa-homepage.webp';
import '../styles/Home.css';

function Home() {
    return (
        <div className="page-container">
            <Banner
                title="Chez vous, partout et ailleurs"
                cover={bannerImage}
            />
            <div className="card-container">
                <LodgingList />
            </div>
        </div>
    );
}

export default Home;
