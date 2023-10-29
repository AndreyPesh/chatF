import IconLink from './link/IconLink';
import { ROUTES } from '../../6_shared/enums/routes';

const listLink = [
  {
    route: ROUTES.MAIN,
    imageBg: 'bg-profile',
    activeImageBg: 'bg-profile_active',
  },
  {
    route: ROUTES.MESSAGES,
    imageBg: 'bg-messages',
    activeImageBg: 'bg-messages_active',
  },
  {
    route: ROUTES.CONTACTS,
    imageBg: 'bg-contacts',
    activeImageBg: 'bg-contacts_active',
  },
];

const Header = () => {
  return (
    <header className="p-2">
      {listLink.map(({ route, imageBg, activeImageBg }) => (
        <IconLink
          key={route}
          route={route}
          imageBg={imageBg}
          activeImageBg={activeImageBg}
        />
      ))}
    </header>
  );
};

export default Header;
