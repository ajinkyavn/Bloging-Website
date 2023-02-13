import React from 'react';
import logo from '../Images/saturn.png';
import '../Style/Header.css';
import Searchbox  from './Searchbox.js';

class Header extends React.Component {
    render() {
      return(<div className='HeadWrap'>
        <img className='myLogo' src={logo} />
        <Searchbox />
        <h1>Saturn</h1>
        <div className='btnWrap'>
        <button type="submit" class="myBtn">Login</button>
        <button type="submit" class="myBtn">Sign Up</button>
        </div>
      </div>);
    }
  }
export default Header;
