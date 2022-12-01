import '../assets/stylesheets/menu.css'
import dummy from '../assets/images/dummy.jpeg'

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
                <a className='navlinks' href="">Home</a>
                <a className='navlinks' href="">Recomendaciones</a>
                <a className='navlinks' href="">Localizaciones</a>
                <a className='navlinks' href="">Me Gusta</a>
                <hr />
                <a className='navlinks' href="">Configuraciones</a>
                <a className='navlinks' href="">Cerrar Sesión</a>
            </div>
            <div className="section-social">
                <a href="" className="social-link">Facebook</a>
                <a href="" className="social-link">Instagram</a>
                <a href="" className="social-link">Twitter</a>
            </div>
        </nav>
    );
}

export default Menu;