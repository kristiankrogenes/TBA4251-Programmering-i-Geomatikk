import React from 'react';

import Map, { Layer, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


import {
    MAPBOX_TOKEN,
    mapStyle,
    initialViewState,
    // polygon1,
    polygonLayerStyle,
} from './constants';


import geojsonData from '../../data/buildings_trondheim.geojson';

function MapComponent() {

    return (
        <Map
          initialViewState={initialViewState}
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_TOKEN}
        >
            <Source id="polygon-source" type="geojson" data={geojsonData}>
                <Layer {...polygonLayerStyle} />
            </Source>
        </Map>
    );
  }
  
  export default MapComponent;