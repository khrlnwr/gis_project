import { Icon } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl } from 'react-leaflet';
import L from 'leaflet';

const {BaseLayer, Overlay} = LayersControl
const position = [-7.536064, 112.238402]

function MainContainer() {

    //

    // const markers = [
    //   {
    //     geocode: [51.505, -0.09],
    //     popup: "Ini titik lokasi A"
    //   },
    //   {
    //     geocode: [51.505, -0.092],
    //     popup: "Ini titik lokasi B"
    //   }
    // ];

    // const customIcon = new Icon({
    //   iconUrl: require("../images/ic_location.png"),
    //   iconSize: [35, 35]
    // });


    const listTsunamiPrones = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [111.809712, -8.264921]
          },
          "properties": {
            "name": "Daerah rawan tsunami Besole Besuki Tulungagung Jatim. Titik 111.809712, -8.264921"
          } 
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [112.870984, -7.587658]
          },
          "properties": {
            "name": "Daerah rawan tsunami Semare Kraton Pasuruan Jatim. Titik 112.870984, -7.587658"
          } 
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [113.000318, -7.655538]
          },
          "properties": {
            "name": "Daerah rawan tsunami Lekok Pasuruan Jatim. Titik 113.000318, -7.655538"
          } 
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [113.493570, -7.698960]
          },
          "properties": {
            "name": "Daerah rawan tsunami, Paiton, Probolinggo Jawa Timur. Titik 113.493570, -7.698960"
          } 
        },
      ]
    };

    const listEarthquakePrones = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [112.015662, -7.864498]
          },
          "properties": {
            "name": "Daerah rawan gempa. Ngadiluwih Kediri Jatim. Titik 112.015662, -7.864498",
            "radius": 5000
          } 
        },

        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [112.115662, -7.964498]
          },
          "properties": {
            "name": "Daerah rawan gempa, Ngancar Kediri Jatim. Titik 112.115662, -7.964498",
            "radius": 2000
          } 
        },

        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [112.190242, -7.776154]
          },
          "properties": {
            "name": "Daerah rawan gempa, daerah Gedangsewu Pare Kediri Jatim. Titik 112.190242, -7.776154",
            "radius": 3000
          } 
        },

        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [112.201266, -7.866988]
          },
          "properties": {
            "name": "Daerah rawan gempa RW.Rt4 Rw5, Rejomulyo, Wonorejo Trisulo, Kec. Plosoklaten, Kabupaten Kediri, Jawa Timur 64175",
            "radius": 2400
          } 
        },

        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [112.139744, -7.925356]
          },
          "properties": {
            "name": "Daerah rawan gempa Jagul I, Jagul, Ngancar, Kediri, Jatim. Titik 112.139744, -7.925356",
            "radius": 1400
          } 
        },

        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [111.793419, -7.865225]
          },
          "properties": {
            "name": "Daerah rawan gempa Area Hutan, Geger, Sendang, Tulungagung, Jatim. Titik 111.793419, -7.865225",
            "radius": 2800
          } 
        },

        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [111.907411, -8.212423]
          },
          "properties": {
            "name": "Daerah rawan gempa Ngresah, Kresikan, Tanggunggunung, Tulungagung, Jawa timur. Titik 111.907411, -8.212423",
            "radius": 2100
          } 
        },

      ]
    };

    const pointToLayer = (feature, latlng) => {
      const radius = feature.properties.radius;
      return L.circle(latlng, { radius });
    };

    const onEachFeature = (feature, layer) => {
      if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
      }
    };

    var tileLayerUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer';

    /*
    const earthquakeData = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [112.015662, -7.864498]
      },
      "properties": {
        "name": "Pusat Gempa",
        "radius": 1000

      } 
    }
    */
  
    const tsunamiData = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [112.025558, -7.858983]
      },
      "properties": {
        "name": "Pusat Tsunami"
      } 
    }

    return(
        <MapContainer center={position} zoom={9} scrollWheelZoom={true}>
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={earthquakeData} style={{color: 'red'}} />
          <GeoJSON data={tsunamiData} style={{color: 'blue'}} /> */}

          <LayersControl position="topright">
            
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri"/>

            <Overlay name="Earthquake Layer" checked>
              <GeoJSON data={listEarthquakePrones} style={{color: 'red'}} pointToLayer={pointToLayer} onEachFeature={onEachFeature}></GeoJSON>
            </Overlay>

            <Overlay name="Tsunami Layer" checked>
              <GeoJSON data={listTsunamiPrones} style={{color: 'blue'}} onEachFeature={onEachFeature}></GeoJSON>
            </Overlay>

          </LayersControl>
        </MapContainer>
    )
}

export default MainContainer;