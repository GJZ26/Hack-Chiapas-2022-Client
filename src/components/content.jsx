import '../assets/stylesheets/content.css'
import MenuSecond from './secondMenu';
import backSk from '../assets/images/back-skate.jpeg'

function Content({child}) {
    return (

        <main style={{ backgroundImage: `url(${backSk})` }}>
            <div className="filter">
                <MenuSecond />
                {child}
            </div>
        </main>

    );
}

export default Content;