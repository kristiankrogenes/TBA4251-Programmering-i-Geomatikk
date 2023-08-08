import { FeatureCollection } from "geojson";
import type { FillLayer} from 'react-map-gl';

export const MAPBOX_TOKEN = "pk.eyJ1Ijoia3Jpc3RpYW5rcm9nZW5lcyIsImEiOiJjbGwyNnZ4NGsweTc2M29wM3BvcjUwdjN1In0.-Zjx2NOg599W_2MimvrsyQ";
export const mapStyle = "mapbox://styles/mapbox/streets-v9";

const nidaros = {
    lng: 10.396894582667136,
    lat: 63.42702966229281, 
};

export const initialViewState = {
    longitude: nidaros.lng,
    latitude: nidaros.lat,
    zoom: 12,
};

export const polygonCoordinates = [
    [10.396894582667136, 63.42702966229281],
    [10.406894582667136, 63.40702966229281],
    [10.416894582667136, 63.41702966229281],
    [10.396894582667136, 63.42702966229281],
];

export const polygonLayerStyle: FillLayer = {
    id: "polygon",
    type: "fill",
    source: "polygon-source",
    paint: {
        "fill-color": "#ff0000",
        "fill-opacity": 0.3,
        "fill-outline-color": "#ff0000",
    },
};

export const polygon1: FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [[
                    [10.396894582667136, 63.42702966229281],
                    [10.394594582667136, 63.42702966229281],
                    [10.394594582667136, 63.42652966229281],
                    [10.396894582667136, 63.42652966229281],
                ]],
            },
            properties: {}
        },
    ]
};