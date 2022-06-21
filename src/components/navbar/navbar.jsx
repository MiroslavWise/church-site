
import {NavLink} from "react-router-dom";
import {pagesLinks} from './links'

const Navbar = () => {
        const activeStyle = { 
                fontWeight: 'bold'
        }
        return(
                        <nav className="navbar navbar-expand-lg">
                        {
                                pagesLinks.map(item => {
                                        return(
                                                <NavLink 
                                                        to={item.path} 
                                                        className="link" 
                                                        key={item.path} 
                                                        style={({ isActive }) => isActive ? activeStyle : undefined}
                                                >
                                                        {item.name}
                                                </NavLink>
                                        )
                                })
                        }
                        </nav>
        )
}

export default Navbar;