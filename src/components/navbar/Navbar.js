import { Link, Outlet } from "react-router-dom";
import './index.css';
import Nav from './Nav.module.css';

function Navbar() {
    return (
        <div className={Nav.nav}>
            <nav>
                <ul>
                    <li>
                       <Link to="/" className={Nav.ang}>Home </Link>
                    </li>
                    <li>
                       <Link to="/reviews" className={Nav.ang}>Reviews </Link>
                    </li>
                    <li>
                       <Link to="/prices" className={Nav.ang}>Prices </Link>
                    </li>
                    <li>
                       <Link to="/apple" className={Nav.ang}>Apple</Link>
                    </li>
                    <li>
                       <Link to="/videos" className={Nav.ang}>Videos</Link>
                    </li>

                    <li>
                       <Link to="/more" className={Nav.ang}>More</Link>
                    </li>
                </ul>
            </nav>

            <div className="content">
        <Outlet />
      </div>
            
        </div>
    );
}

export default Navbar;