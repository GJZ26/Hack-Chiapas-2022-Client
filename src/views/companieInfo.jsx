import '../assets/stylesheets/general.css'
import CompaDetails from '../components/compaDetails';
import Content from '../components/content';
import Menu from '../components/navbar';
function CompanieInfo() {
    return (
        <div className="display">
            <Menu />
            <Content child={<CompaDetails />} />
        </div>
    );
}

export default CompanieInfo;