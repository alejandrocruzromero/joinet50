import logo from './logo.svg';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from 'react-router-dom'
function NavBar() {
  return (
    <section >
      <header className="navbar header">        
          
          <li><NavLink activeClassName = 'active' to = '/'> <img src={logo} className="App-logo" alt="logo" width = "80"/> </NavLink></li>
          <li><NavLink activeClassName = 'active' to = '/Audio'>Audio</NavLink></li>          
          <li><NavLink activeClassName = 'active' to = '/Computo'>Computo</NavLink></li>
          <li><NavLink activeClassName = 'active' to = '/Electronica'>Electronica</NavLink></li>
          <li><NavLink activeClassName = 'active' to = '/category'>Ver Todas</NavLink></li>
          {/* <li><NavLink activeClassName = 'active' to = '/'>Quienes Somos?</NavLink></li> */}
          <CartWidget />
      </header>    
      
    </section>
  );
} 

export default NavBar;