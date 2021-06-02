import {Link} from 'react-router-dom'
const Menu=()=>{
    return (<div className="col-sm-4">
<Link to="/createsurvey">
        <button className="btn btn-warning ">Create Survey</button>
        </Link>
        <br/><br/>
        <Link to="/takesurvey">
        <button className="btn btn-warning">Take Survey</button>
        </Link>
    </div>);
}
export default Menu;