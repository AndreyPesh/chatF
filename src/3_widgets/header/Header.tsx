import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </header>
  );
};

export default Header;
