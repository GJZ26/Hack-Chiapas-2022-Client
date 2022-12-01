import Menu from "../components/navbar.jsx";
import Content from "../components/content.jsx";
import '../assets/stylesheets/general.css'

function Unique() {
    return (
        <div className="display">
            <Menu />
            <Content />
        </div>
    );
}

export default Unique;