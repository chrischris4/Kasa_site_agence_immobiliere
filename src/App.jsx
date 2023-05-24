import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Lodging from './pages/Lodging';
import Error404 from './pages/Error404';

console.log('hey');

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/a-propos" element={<About />} />
				<Route path="/logement/:id" element={<Lodging />} />
				<Route path="/*" element={<Error404 />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App;
