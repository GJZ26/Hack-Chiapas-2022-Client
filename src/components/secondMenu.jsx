import '../assets/stylesheets/secondarymenu.css'

function MenuSecond() {
    return ( 
        <div className="secondary-menu">
            <span className="link-second-menu logo">&lt; &gt;</span>
            <a className='link-second-menu' href="/">Home</a>
            <a className='link-second-menu' href="/suggest">Recomendaciones</a>
            <a className='link-second-menu' href="">Localizaciones</a>
        </div>
     );
}

export default MenuSecond