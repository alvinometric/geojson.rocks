# 🪨 Geojson.rocks 

<p align="center">
  <a href="http://www.openstreetmap.org/"><img src="https://img.shields.io/badge/source-OSM-2ecc71.svg" alt="maps source" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/alvinometric/geojson.rocks.svg" alt="software license" /></a>
  <a href="https://opendatacommons.org/licenses/odbl/1.0/"><img src="https://img.shields.io/badge/license-ODbL-2980b9.svg" alt="data license" /></a>
</p>

Preview your GeoJSON and TopoJSON files on a real-world map. It's ⚡ fast and supports 🪨 large files.

I would always use GeoJSON.io to inspect my GeoJSONs and make sure the data is right. The problem is: It's really really slow, so I made my own replacement. Enter https://geojson.rocks

- 🪟 Drag & drop a GeoJSON or TopoJSON
- 🗺️ Preview it on top of a real-world map
- 👀 Gives you an error message if it doesn't import
- ⚡ Much, much faster

I can't believe I managed to make this so quickly. Credit goes to [MapLibre](https://maplibre.org) and [ViteJs](https://vitejs.dev).

If you need to reproject, run `-proj "EPSG:4326"` in the [Mapshaper console](https://mapshaper.org).
