import dummy from '../assets/images/dummy-2.jpeg'
import '../assets/stylesheets/extCard.css'
import { FaGreaterThan} from "react-icons/fa";

function ExtendedCard() {
    return (
        <div className="extended-card">
            <div className="post">
                <div className="head-card">
                    <img className="profile-picture-min" src={dummy} />
                    <span className='username-card'>Sandra Cruise</span>
                </div>
                <div className="content-post">
                    <div className="controller"><FaGreaterThan className={"svg1"}></FaGreaterThan></div>
                    <div className="card">
                        <h1 className="title-card">Título de la publicación</h1>
                        <p className="card-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor est sint perferendis dolore perspiciatis odit! Maiores excepturi aliquam sequi amet accusantium explicabo nisi modi dicta, minima veritatis, quam enim?
                        </p>
                    </div>
                    <div className="controller"><FaGreaterThan></FaGreaterThan></div>
                </div>
            </div>
            <div className="comment-section">
                <h1 className="comment-header">Comentarios</h1>
                <span className="comment">
                    Hola soy un  comentario :)
                </span>
                <span className="comment">
                    Hola soy un  comentario :)
                </span>
                <span className="comment">
                    Hola soy un  comentario :)
                </span>
                <span className="comment">
                    Hola soy un  comentario :)
                </span>
                <input type="text" name="" id="" className="commentype" placeholder='Escribe un comentario'/>
            </div>
        </div>
    );
}

export default ExtendedCard;