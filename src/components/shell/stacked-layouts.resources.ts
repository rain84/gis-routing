import { URLS } from 'routing/urls';
import { IconTypes } from 'components/icons';

export type Entity = {
  item: string;
  href: URLS.LEVEL1_VALUES;
  isEnabled?: boolean;
  icon?: IconTypes;
};

export const navigation: Entity[] = [
  {
    item: 'Карта',
    href: '/show-map',
    isEnabled: true,
    icon: 'Map'
  },
  {
    item: 'Поделиться позицией',
    href: '/share-position',
    isEnabled: false,
    icon: 'Share'
  },
  {
    item: 'Достопримечательности',
    href: '/show-sights',
    isEnabled: false,
    icon: 'Sight'
  },
  {
    item: 'Планировщик прогулок',
    href: '/walking-scheduler',
    isEnabled: false,
    icon: 'Calendar'
  },
  {
    item: 'Найти друга',
    href: '/find-a-friend',
    isEnabled: false,
    icon: 'Friends'
  },
  {
    item: 'Чат',
    href: '/chat',
    isEnabled: false,
    icon: 'ChatAlt'
  }
];

export const profile: Entity[] = [
  {
    // item: 'Your Profile',
    item: 'Аккаунт',
    href: '/profile',
    isEnabled: true,
    icon: 'UserCircle'
  },
  {
    // item: 'Settings',
    item: 'Настройки',
    href: '/settings',
    isEnabled: true,
    icon: 'Cog'
  },
  {
    // item: 'Sign out',
    item: 'Выйти',
    href: '/logout',
    isEnabled: true,
    icon: 'Logout'
  }
];
