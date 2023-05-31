import { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import bannerImage from '../assets/kalen-emsley.webp';
import '../styles/About.css';

function About() {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        fetch(`/about.json`)
            .then((response) => response.json())
            .then((json) => {
                setAboutData(json);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="page-container">
            <Banner title="" cover={bannerImage} />
            <div className="about-main">
                {aboutData &&
                    aboutData.length > 0 &&
                    aboutData.map((data, index) => (
                        <Collapse
                            index={index}
                            title={data.title}
                            content={data.content}
                            open={false}
                        />
                    ))}
            </div>
        </div>
    );
}

export default About;
