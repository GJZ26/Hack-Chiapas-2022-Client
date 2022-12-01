import '../assets/stylesheets/secondarymenu.css'
import {Link} from "react-router-dom";

function MenuSecond() {
    return ( 
        <div className="secondary-menu">
            <span className="link-second-menu logo">&lt; &gt;</span>
            <Link to={"/"} className='link-second-menu'>Home</Link>
            <Link to={"suggest"} className='link-second-menu'>Recomendaciones</Link>
            <Link to={"/"} className='link-second-menu'>Localizaciones</Link>
        </div>
     );
}

export default MenuSecond