import { NavLink } from 'react-router-dom';
import '../styles/index.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/org-chart'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Organization
      </NavLink>
      <NavLink
        to='/dashboard'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Employee Dashboard
      </NavLink>
    </nav>
  );
};
export default Navbar;