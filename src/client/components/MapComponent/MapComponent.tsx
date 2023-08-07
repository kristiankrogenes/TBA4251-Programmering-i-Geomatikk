import React from 'react';

import ReactMapboxGl from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import {
    MAPBOX_TOKEN,
    mapStyle,
    initialViewState,
} from './constants';

function MapComponent() {

    const Map = ReactMapboxGl({
        accessToken: MAPBOX_TOKEN
    });

    return (
        <Map
            style={mapStyle}
            containerStyle={{
                height: '90vh',
                width: '100vw'
            }}
            zoom={[initialViewState.zoom]}
            center={[initialViewState.longitude, initialViewState.latitude]}
        >
        </Map>
    );
  }
  
  export default MapComponent;