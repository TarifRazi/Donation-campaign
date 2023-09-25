import { NavLink } from 'react-router-dom';
import image from '../Resources/Logo.png';
import Home from './../Home/Home';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="text-xl"><img src={image} alt="" /></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/donation">Donation</NavLink></li>
                        <li><NavLink to="/statistics">Statistics</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;