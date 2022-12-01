import Menu from "../components/navbar.jsx";
import Content from "../components/content.jsx";
import '../assets/stylesheets/general.css'
import ExtendedCard from "../components/extended-card.jsx";

function Unique() {
    return (
        <div className="display">
            <Menu />
            <Content child={<ExtendedCard/>} />
        </div>
    );
}

export default Unique;