import {BodyStyled} from "./BodyStyled";
import AboutImg from "../../../assets/images/about-img.svg"
import "./Landing.css"

export function BodyLanding() {
    return (
        <>
            <BodyStyled>
                <div className="main">
                    <div className="main-text">
                        <h1>ambar</h1>
                        <h2>SocialWeb</h2>
                    </div>
                </div>
                 <div className="about">
                    <div className="about-img">
                        <img src={AboutImg}/>
                        <div className="text-about">Somos una SocialWeb dirigida al publico en el cual quiere descurbir contenido sobre sus paciones y sobre su actividades que mas le gusta dandole herramientas para que se le facilite la inclusion a un mundo mas extenso de lo que le apasiona.</div>
                    </div>
                </div>

            </BodyStyled>

        </>
    )
}