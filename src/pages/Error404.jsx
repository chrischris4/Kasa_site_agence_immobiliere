import '../styles/Error404.css';
import { Link } from 'react-router-dom';

function Error404() {
	return (
		<div className="page-container">
			<div id="error-main">
				<h2 className="error-404">404</h2>
				<p>Oups! La page que vous demandez n'existe pas.</p>
				<nav className="nav-error">
					<Link to="/" className="error-link">
						Retournez sur la page d'accueil
					</Link>
				</nav>
			</div>
		</div>
	);
}

export default Error404;
