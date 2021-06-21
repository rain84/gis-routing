import { Coords } from './types';

export const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoicmFpbjg0IiwiYSI6ImNrcTBqcXdpMzAwenAyb29ldWVzampjcnoifQ.evtsvobBshUN-_hIP636dw';

type TMap = {
  DEFAULT_COORDS: Coords;
  ZOOM: number;
  SCROLL_WHEEL_ZOOM: boolean;
};

export const MAP: TMap = {
  DEFAULT_COORDS: [55.744903, 37.611575], //  Moscow
  ZOOM: 4,
  SCROLL_WHEEL_ZOOM: true
};
