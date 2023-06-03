import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const ArcGISLayer = () => {
  return (
    <MapContainer center={[-3.3709484126984126, 113.20005952380953]} zoom={10}>
      <TileLayer url="https://gis.bnpb.go.id/server/rest/services/ShakeMap_62SR_Majene/MapServer?f=jsapi" />
    </MapContainer>
  );
};

export default ArcGISLayer;
