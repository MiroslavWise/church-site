import Button from "../button";
import {Link} from "react-router-dom";
import {pagesLinks} from './links'

const Navbar = () => {

        return(
                <>
                        <nav className="navbar navbar-expand-lg">
                        {
                                pagesLinks.map(item => {
                                        return(
                                                <Link to={item.path} className="link" key={item.path}>{item.name}</Link>
                                        )
                                })
                        }
                        </nav>
                </>
        )
}

export default Navbar;