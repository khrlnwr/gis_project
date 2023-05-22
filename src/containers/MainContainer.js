import { Icon } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';

const {BaseLayer, Overlay} = LayersControl
const position = [51.505, -0.09]

function MainContainer() {

    const markers = [
      {
        geocode: [51.505, -0.09],
        popup: "Ini titik lokasi A"
      },
      {
        geocode: [51.505, -0.092],
        popup: "Ini titik lokasi B"
      }
    ];

    const customIcon = new Icon({
      iconUrl: require("../images/ic_location.png"),
      iconSize: [35, 35]
    });

    const earthquakeData = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-0.09, 51.507]
      },
      "properties": {
        "name": "Pusat Gempa"
      } 
    }
  
    const tsunamiData = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-0.09, 51.506]
      },
      "properties": {
        "name": "Pusat Tsunami"
      } 
    }

    return(
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={earthquakeData} style={{color: 'red'}} />
          <GeoJSON data={tsunamiData} style={{color: 'blue'}} /> */}

          <LayersControl position="topright">
            <BaseLayer checked name="Base Map">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="Map data © OpenStreetMap contributors" />
            </BaseLayer>

            <Overlay name="Earthquake Layer" checked>
              <GeoJSON data={earthquakeData} style={{color: 'red'}}></GeoJSON>
            </Overlay>

            <Overlay name="Tsunami Layer" checked>
              <GeoJSON data={tsunamiData} style={{color: 'blue'}}></GeoJSON>
            </Overlay>

          </LayersControl>
        </MapContainer>
    )
}

export default MainContainer;