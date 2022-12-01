import '../assets/stylesheets/content.css'
import ExtendedCard from './extended-card';
import MenuSecond from './secondMenu';
import backSk from '../assets/images/back-skate.jpeg'

function Content() {
    return (

        <main style={{ backgroundImage: `url(${backSk})` }}>
            <div className="filter">
                <MenuSecond />
                <ExtendedCard />
            </div>
        </main>

    );
}

export default Content;