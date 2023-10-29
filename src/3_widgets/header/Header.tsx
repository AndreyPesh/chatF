import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          stylesIcon({
            isActive,
            imageBg: 'bg-profile',
            activeImageBg: 'bg-profile_active',
          })
        }
      ></NavLink>
      <NavLink
        to="/messages"
        className={({ isActive }) =>
          stylesIcon({
            isActive,
            imageBg: 'bg-messages',
            activeImageBg: 'bg-messages_active',
          })
        }
      ></NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          stylesIcon({
            isActive,
            imageBg: 'bg-contacts',
            activeImageBg: 'bg-contacts_active',
          })
        }
      ></NavLink>
    </header>
  );
};

export default Header;

const stylesIcon = ({
  isActive,
  imageBg,
  activeImageBg,
}: {
  isActive: boolean;
  imageBg: string;
  activeImageBg: string;
}) => {
  const base_styles = `inline-flex w-[52px] h-[52px] rounded-full ${imageBg} bg-no-repeat bg-center hover:bg-grayish`;
  return isActive ? base_styles + ` ${activeImageBg} bg-grayish` : base_styles;
};
