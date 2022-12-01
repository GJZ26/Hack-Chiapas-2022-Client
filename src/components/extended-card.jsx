import dummy from '../assets/images/dummy-2.jpeg'
import '../assets/stylesheets/extCard.css'

function ExtendedCard() {
    return (
        <div className="extended-card">
            <div className="head-card">
                <img className="profile-picture-min" src={dummy} />
                <span className='username-card'>Pamela Chu</span>
            </div>
            <div className="content-post">
                <div className="card">
                    <h1 className="title-card">Título de la publicación</h1>
                    <p className="card-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor est sint perferendis dolore perspiciatis odit! Maiores excepturi aliquam sequi amet accusantium explicabo nisi modi dicta, minima veritatis, quam enim?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ExtendedCard;