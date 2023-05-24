import logo from '../assets/LOGO (1).png'
import '../styles/Footer.css'

function Footer() {
    return(
        <div className='footer'>
            <img src={logo} alt='kasa' className='kasa-logo-sombre'/>
            <p className='pfooter'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer