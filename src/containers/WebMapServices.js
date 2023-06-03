import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl, FeatureGroup, WMSTileLayer } from 'react-leaflet';
import L from 'leaflet';
import { featureLayer } from 'esri-leaflet';


const position = [-1.82300, 113.0057]
function WebMapServices() {    
    return (
        <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <WMSTileLayer
                url="http://localhost:8080/geoserver/trickworld/wms?"
                layers="trickworld:Provinsi"
                maxZoom={12}
                transparent={true}
                format='image/png'
                opacity={0.5}
            />

        </MapContainer>
    );
};

export default WebMapServices;