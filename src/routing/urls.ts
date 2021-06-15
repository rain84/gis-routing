export namespace URLS {
  export enum LEVEL1 {
    'home' = '/',
    'show-map' = '/show-map',
    'share-position' = '/share-position',
    'show-sights' = '/show-sights',
    'walking-scheduler' = '/walking-scheduler',
    'find-a-friend' = '/find-a-friend',
    'chat' = '/chat',
    'profile' = '/profile',
    'settings' = '/settings',
    'signout' = '/signout'
  }

  export type LEVEL1_KEYS = keyof typeof LEVEL1;
  export type LEVEL1_VALUES = `${LEVEL1}`;
}
