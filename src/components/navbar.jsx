import '../assets/stylesheets/menu.css'
import dummy from '../assets/images/dummy.jpeg'
import { FaHome,FaMagic,FaMapMarkedAlt, FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom";

function Menu() {
    return (
        <nav>
            <div className="section-info">
                <img className='profile-picture' src={dummy} />
                <div className="info">
                    <span className="username">Abraham</span>
                    <span className="interes">Skater</span>
                </div>
            </div>
            <hr />
            <div className="section-nav">
                <Link to={"/"} className='navlinks'><FaHome></FaHome> Home</Link>
                <Link to={"/suggest"} className='navlinks'><FaMagic></FaMagic> Recomendaciones</Link>
                <Link to={"/"} className='navlinks'><FaMapMarkedAlt></FaMapMarkedAlt> Localizaciones</Link>
                <Link to={"/"} className='navlinks'><FaHeart></FaHeart> Me Gusta</Link>
                <hr />
                <Link to={"/"} className='navlinks' >Configuraciones</Link>
                <Link to={"/"} className='navlinks' >Cerrar Sesión</Link>
            </div>
            <div className="section-social">
                <Link to={"/"} className="social-link">Facebook</Link>
                <Link to={"/"} className="social-link">Instagram</Link>
                <Link to={"/"} className="social-link">Twitter</Link>
            </div>
        </nav>
    );
}

export default Menu;