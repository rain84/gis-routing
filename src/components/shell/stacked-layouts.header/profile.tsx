import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
import { Icons } from 'components/icons';
import { profile } from '../stacked-layouts.resources';
import { Media } from '../types';

const Desktop = () => (
  <div className="hidden md:block">
    <div className="ml-4 flex items-center md:ml-6">
      <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">Посмотреть нотификации</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Profile dropdown */}
      <Menu as="div" className="ml-3 relative">
        {({ open }) => (
          <>
            <div>
              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span className="sr-only">Открыть меню пользователя</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                {profile.map(({ item, href, icon }) => {
                  const IconComponent = icon ? Icons[icon] : null;

                  return (
                    <Menu.Item key={item}>
                      <NavLink
                        to={href}
                        activeClassName="active-color"
                        className="flex flex-row px-4 py-2 text-sm text-gray-700"
                      >
                        {IconComponent && <IconComponent className="inline-block" />}
                        <div className="w-min pl-3 inline-block">{item}</div>
                      </NavLink>
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  </div>
);

const Mobile = () => (
  <div className="pt-4 pb-3 border-t border-gray-700">
    <div className="flex items-center px-5">
      <div className="flex-shrink-0">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="ml-3">
        <div className="text-base font-medium leading-none text-white">Tom Cook</div>
        <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
      </div>
      <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span className="sr-only">Посмотреть нотификации</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="mt-3 px-2 space-y-1">
      {profile.map(({ item, href, icon }) => {
        const IconComponent = icon ? Icons[icon] : null;
        return (
          <NavLink
            key={item}
            to={href}
            activeClassName="active-color"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
          >
            {IconComponent && <IconComponent className="inline-block" />}
            <div className="w-min pl-3 inline-block">{item}</div>
          </NavLink>
        );
      })}
    </div>
  </div>
);

export const Profile: Media = {
  Desktop,
  Mobile
};
