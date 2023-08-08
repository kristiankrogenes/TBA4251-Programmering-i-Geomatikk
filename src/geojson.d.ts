declare module "*.geojson" {
    const value: GeoJSON.FeatureCollection<any>;
    export default value;
};