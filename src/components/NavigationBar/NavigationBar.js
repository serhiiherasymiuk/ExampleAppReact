import { Time } from '../Time/Time';
import './NavigationBar.css';
import { Link, useLocation  } from "react-router-dom";

export function NavigationBar() {
  const location = useLocation();
  return (
    <div className="NavigationBar">
      <nav className="menu">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Biography</Link>
        <Link to="/collection" className={location.pathname === '/collection' ? 'active' : ''}>Collection</Link>
        <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>Add painting</Link>
      </nav>
      <Time></Time>
    </div>
  );
}