import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from 'react-leaflet';
import { LatLngBoundsLiteral } from 'leaflet';
// import { LocateMe } from './controls';
import { MAP } from './config';
import { Coords } from './types';
import './preflight';

const bounds: LatLngBoundsLiteral = [
  [MAP.DEFAULT_COORDS[0], -0.08],
  [MAP.DEFAULT_COORDS[1], -0.06]
];

export const Map = () => {
  const [userCoords, setCoords] = useState<Coords>(MAP.DEFAULT_COORDS);

  const isDebug = useLocation().search.includes('debug');

  useEffect(() => {
    navigator.geolocation.watchPosition(({ coords }) => {
      if (!coords.latitude || !coords.longitude) return;
      setCoords([coords.latitude, coords.longitude]);
      console.log('watchPosition', coords);
    });
  }, []);

  if (!userCoords) return <p>!coords</p>;
  if (isDebug) return <pre>{JSON.stringify(userCoords, null, '  ')}</pre>;

  return (
    <MapContainer center={userCoords} zoom={MAP.ZOOM} scrollWheelZoom={MAP.SCROLL_WHEEL_ZOOM}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        detectRetina
      />
      {/* <LocateMe /> */}
      <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
          text
        </text>
      </SVGOverlay>
      <Marker position={userCoords}>
        <Popup>Вы находитесь здесь</Popup>
      </Marker>
    </MapContainer>
  );
};
