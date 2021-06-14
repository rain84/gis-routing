import { Fragment } from 'react';
import { Location } from 'components/icons';
import { navigation } from '../stacked-layouts.resources';
import { Media } from '../types';

const Desktop = () => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <Location className="stroke-current text-green-500" />
    </div>

    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map(({ item, href }, itemIdx) =>
          itemIdx === 0 ? (
            <Fragment key={item}>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a href={href} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                {item}
              </a>
            </Fragment>
          ) : (
            <a
              key={item}
              href={href}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  </div>
);

const Mobile = () => (
  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    {navigation.map(({ item, href }, itemIdx) =>
      itemIdx === 0 ? (
        <Fragment key={item}>
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a href={href} className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
            {item}
          </a>
        </Fragment>
      ) : (
        <a
          key={item}
          href={href}
          className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
        >
          {item}
        </a>
      )
    )}
  </div>
);

export const Navigation: Media = {
  Desktop,
  Mobile
};
