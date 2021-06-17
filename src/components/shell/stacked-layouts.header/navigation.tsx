import { Link } from 'react-router-dom';
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
            <Link
              key={item}
              to={href}
              // active: className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              className="flex flex-row text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {IconComponent && <IconComponent className="inline" />}
              <div className="w-min pl-3 inline">{item}</div>
            </Link>
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
        <Link
          key={item}
          to={href}
          className="flex-1 flex-row text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {IconComponent && <IconComponent className="inline" />}
          <span className="w-min pl-3">{item}</span>
        </Link>
      );
    })}
  </div>
);

export const Navigation: Media = {
  Desktop,
  Mobile
};
