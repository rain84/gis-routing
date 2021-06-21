import { useState, useEffect } from 'react';
import { SVGOverlay } from 'react-leaflet';
import { LatLngBoundsLiteral } from 'leaflet';
import { MAP } from '../config';

const bounds: LatLngBoundsLiteral = [
  [MAP.DEFAULT_COORDS[0], -0.08],
  [MAP.DEFAULT_COORDS[1], -0.06]
];

export const LocateMe = () => {
  return (
    <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
      <rect x="0" y="0" width="100%" height="100%" fill="blue" />
      <circle r="5" cx="10" cy="10" fill="red" />
      <text x="50%" y="50%" stroke="white">
        text
      </text>
    </SVGOverlay>
  );
};
