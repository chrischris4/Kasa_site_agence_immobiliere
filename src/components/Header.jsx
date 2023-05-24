import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png';
import '../styles/Header.css';

function Header() {
	return (
		<div className="header">
			<img src={logo} alt="kasa" className="kasa-logo" />
			<nav>
				<Link to="/" className="link">Accueil</Link>
				<Link to="/a-propos" className="link">À propos</Link>
			</nav>
		</div>
	);
}

export default Header;
