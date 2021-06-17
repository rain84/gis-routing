import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { defaultCoords } from './resources';
import { Coords } from './types';
import { useLocation } from 'react-router-dom';
import './preflight';

export const Map = () => {
  const [coords, setCoords] = useState<Coords>(defaultCoords);

  const isDebug = useLocation().search.includes('debug');

  useEffect(() => {
    navigator.geolocation.watchPosition(({ coords }) => setCoords([coords.latitude, coords.longitude]));
  }, []);

  if (!coords) return <p>!coords</p>;
  if (isDebug) return <pre>{JSON.stringify(coords, null, '  ')}</pre>;

  return (
    <MapContainer center={coords} zoom={10} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords}>
        <Popup>
          A pretty CSS3 popup.
          <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
