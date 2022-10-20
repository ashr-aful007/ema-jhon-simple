import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import UserContext, { AuthContext } from '../Context/UserContext';
import './Header.css'

const Header = () => {
     const {user, logOut} = useContext(AuthContext)
     return (
          <nav className='header'>
               <img src={logo} alt="" />
               <div>
                    <Link to="/">Shop</Link>
                    <Link to="/Orders">Orders</Link>
                    <Link to="/Inventory">Inventory</Link>
                    <Link to="/About">About</Link>
                    {
                         user?.uid ? 
                         <button className='btn-logOut' onClick={logOut}>Log out</button>                  
                
                         :
                         <>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">Sign Up</Link> 
                         </>
                    }                 
               </div>
          </nav>
     );
};

export default Header;