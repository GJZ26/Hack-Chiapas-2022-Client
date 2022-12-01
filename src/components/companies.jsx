import '../assets/stylesheets/companie.css'
import img1 from '../assets/images/companie-1.jpg'
import img2 from '../assets/images/companie-2.jpg'
import img3 from '../assets/images/companie-3.png'
import img4 from '../assets/images/companie-4.png'

function Companies() {
    return (
        <div className="companies">
            <a href="/companie">
                <div className="card-companie">
                    <img src={img1} className="companie" />
                    <span className="companie-name">LKL</span>
                </div>
            </a>
            <div className="card-companie">
                <img src={img2} className="companie" />
                <span className="companie-name">Evolution</span>
            </div>
            <div className="card-companie">
                <img src={img4} className="companie" />
                <span className="companie-name">Santa Cruz</span>
            </div>
            <div className="card-companie">
                <img src={img3} className="companie" />
                <span className="companie-name">AllXtreme News</span>
            </div>
        </div>
    );
}

export default Companies;