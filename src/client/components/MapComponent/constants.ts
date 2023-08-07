export const MAPBOX_TOKEN = "pk.eyJ1Ijoia3Jpc3RpYW5rcm9nZW5lcyIsImEiOiJja3pmZzZ4M3gwdGJwMnVwZG4ycnZldHp1In0.YESDjJx0SDppzlJw2MDn4A";
export const mapStyle = "mapbox://styles/mapbox/streets-v11";

const nidaros = {
    lng: 10.396894582667136,
    lat: 63.42702966229281, 
};

export const initialViewState = {
    longitude: nidaros.lng,
    latitude: nidaros.lat,
    zoom: 12,
    width: '100%',
    height: 600,
};