import './NavigationBar.css';
import { Link, useLocation  } from "react-router-dom";

export function NavigationBar() {
  const location = useLocation();
  return (
    <div className="NavigationBar">
      <nav className="menu">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Biography</Link>
        <Link to="/painting" className={location.pathname === '/painting' ? 'active' : ''}>Painting</Link>
      </nav>
    </div>
  );
}