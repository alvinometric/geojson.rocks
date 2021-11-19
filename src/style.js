const style = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      // List of other good-looking carto basemaps https://carto.com/help/building-maps/basemap-list/
      tiles: [
        'https://cartodb-basemaps-b.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png',
      ],
      tileSize: 256,
      attribution: '&copy; CARTO | &copy; OpenStreetMap Contributors',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      source: 'osm', // This must match the source key above
    },
  ],
};

export default style;
