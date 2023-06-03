import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { featureLayer } from 'esri-leaflet';
import L from 'leaflet';

const position = [39.50684, -99.36035];

class MapComponent extends React.Component {
    // Custom function to determine the fill color based on a category attribute
    
    render() {
    return (
      <div id="map" style={{ height: '100vh' }}>
        <MapContainer
          center={position}
          zoom={10}
          whenCreated={(map) => {
            // Example usage of esri-leaflet
            const layer = featureLayer({
              url: 'https://gis.bnpb.go.id/server/rest/services/OSM_Sulbar_unduh_15_Jan_Polygon/MapServer/0',
              style: (feature) => ({
                fillColor: 'red', // Call a custom function to determine the fill color
                color: 'white',
                weight: 2,
                opacity: 0.8,
              }),
            }).addTo(map);
          }}
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png" />
        </MapContainer>
      </div>
    );
  }
}

export default MapComponent;



