import '../assets/stylesheets/general.css'
import Companies from '../components/companies';
import Content from '../components/content';
import Menu from "../components/navbar.jsx";

function Suggest() {
    return (
        <div className="display">
            <Menu/>
            <Content child={<Companies/>}/>
        </div>
    );
}

export default Suggest;