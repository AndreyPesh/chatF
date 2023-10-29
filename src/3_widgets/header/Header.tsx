import IconLink from '../../4_features/iconLink/IconLink';
import Avatar from '../../4_features/avatar/Avatar';
import { ROUTES } from '../../6_shared/enums/routes';
import Logout from '../../4_features/iconButtons/Logout';

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
    <header className="px-[22px] py-[32px] flex flex-col justify-between min-h-[100vh] border-r border-light">
      <Avatar />
      <div className='flex flex-col pt-[48px] grow'>
        {listLink.map(({ route, imageBg, activeImageBg }) => (
          <IconLink
            key={route}
            route={route}
            imageBg={imageBg}
            activeImageBg={activeImageBg}
          />
        ))}
      </div>
      <Logout />
    </header>
  );
};

export default Header;
