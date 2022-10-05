import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import './index.css';
import Nav from './Nav.module.css';

function Navbar() {
   const [toggleMenu, setToggleMenu] = useState(false)
   const [screenWidth ,setScreenWidth] = useState(window.innerWidth)

   const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
    useEffect(() => {

      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', changeWidth)
      
      return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, [])

   
    return (
        <div className={Nav.nav}>
          <li className={Nav.font}><FontAwesomeIcon onClick={toggleNav}   icon={faBars}/></li>

   
            <nav>
           

                  {(toggleMenu || screenWidth>767) && (<ul className={Nav.items}>
                 

               <li>
                       <Link to="/" className={Nav.ang}>Home </Link>
                    </li>
                    <li>
                       <Link to="/top" className={Nav.ang}>Top Deals </Link>
                    </li>
                    <li>
                       <Link to="/service" className={Nav.ang}>Service </Link>

                       <ul className={Nav.subitems}>
                        <li>
                           <a href="#">Dinner</a>
                        </li>
                        <li>
                           <a href="#">Lunch</a>
                        </li>
                        <li>
                           <a href="#">Breakfast</a>
                        </li>
                        <li>
                           <a href="#">Leavein</a>
                        </li>
                        <li>
                           <a href="#s">Swimingful</a>
                        </li>
                       </ul>
                    </li>
                    <li>
                       <Link to="/gellary" className={Nav.ang}>Gellary</Link>
                    </li>
                    <li>
                       <Link to="/package" className={Nav.ang}>Package</Link>
                    </li>

                    <li>
                       <Link to="/blog" className={Nav.ang}>Blog</Link>
                    </li>

                    <li>
                       <Link to="/contact" className={Nav.ang}>Contacts</Link>


                    </li>
               
                </ul>
                  )}
            </nav>

            <div className="content">
        <Outlet />
      </div>
            
        </div>
    );
}

export default Navbar;