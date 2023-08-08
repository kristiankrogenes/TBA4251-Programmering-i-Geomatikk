import React from 'react';

import Map, { Layer, Source } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


import {
    MAPBOX_TOKEN,
    mapStyle,
    initialViewState,
    polygon1,
    polygonLayerStyle,
} from './constants';

function MapComponent() {

    return (
        <Map
          initialViewState={initialViewState}
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_TOKEN}
        >
            <Source id="polygon-source" type="geojson" data={polygon1}>
                <Layer {...polygonLayerStyle} />
            </Source>
        </Map>
    );
  }
  
  export default MapComponent;