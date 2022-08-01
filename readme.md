# geojson.rocks 🪨

I always use GeoJSON.io to inspect my GeoJSONs and make sure the data is right.

The problem is: It's really really slow, so I made my own replacement.

- Drag & drop a GeoJSON or TopoJSON
- Preview it on top of a real-world map.
- Gives you an error message if it doesn't import
- Much, much faster

I can't believe I managed to make this so quickly. Credit goes to MapLibre and ViteJs.

If you need to reproject, run `-proj "EPSG:4326"` in the Mapshaper console.
