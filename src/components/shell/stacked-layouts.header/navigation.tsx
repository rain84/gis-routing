import { Link, NavLink } from 'react-router-dom';
import { Location, Icons } from 'components/icons';
import { URLS } from 'routing/urls';
import { navigation } from '../stacked-layouts.resources';
import { Media } from '../types';

const Desktop = () => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <Link to={URLS.LEVEL1.home}>
        <Location className="stroke-current text-green-500" />
      </Link>
    </div>

    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map(({ item, href, icon }) => {
          const IconComponent = icon ? Icons[icon] : null;

          return (
            <NavLink
              key={item}
              to={href}
              activeClassName="active-color"
              className="flex flex-row hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
            >
              {IconComponent && <IconComponent className="inline" />}
              <div className="w-min pl-3 inline">{item}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  </div>
);

const Mobile = () => (
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    {navigation.map(({ item, href, icon }) => {
      const IconComponent = icon ? Icons[icon] : null;

      return (
        <NavLink
          key={item}
          to={href}
          activeClassName="active-color"
          className="flex-1 flex-row text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {IconComponent && <IconComponent className="inline" />}
          <span className="w-min pl-3">{item}</span>
        </NavLink>
      );
    })}
  </div>
);

export const Navigation: Media = {
  Desktop,
  Mobile
};
