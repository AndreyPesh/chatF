import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../6_shared/enums/routes';
import { getIconStyles } from './helpers/iconStyle';


interface IconLinkProps {
  route: ROUTES;
  imageBg: string;
  activeImageBg: string;
}

const IconLink: FC<IconLinkProps> = ({ route, imageBg, activeImageBg }) => {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        getIconStyles({
          isActive,
          imageBg,
          activeImageBg,
        })
      }
    ></NavLink>
  );
};

export default IconLink;
