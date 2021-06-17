import { Disclosure } from '@headlessui/react';
import { Navigation } from './navigation';
import { Profile } from './profile';
import { Button } from './button';

export const Header = ({ className }: FCProps) => (
  <Disclosure as="nav" className={`bg-gray-800 ${className}`}>
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Navigation.Desktop />
            <p className="md:hidden active-color uppercase font-medium">GIS - маршрутизация</p>
            <Profile.Desktop />
            <Button open={open} />
          </div>
        </div>

        <Disclosure.Panel className="md:hidden">
          <Navigation.Mobile />
          <Profile.Mobile />
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
);
