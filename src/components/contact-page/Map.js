import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet'in varsayılan işaretçisinin görünmemesi durumunu düzeltmek için bu import'ları yapın
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Leaflet varsayılan simge ayarları
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const position = [41.015137, 28.979530]; // Londra merkezli koordinatlar

  return (
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        dragging={false}
        style={{ height: '500px', width: '500px' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Standart lokasyon: Londra</Popup>
        </Marker>
      </MapContainer>
  );
};

export default Map;
