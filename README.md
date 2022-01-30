# Geotoolkit 

A EO-dataset viewer with some additional features! The GeoToolkit is Angular based application that supports the visualisation and exploration of Earth Observation datasets.
The viewer supports the following features:
* Visualisation of WM(T)S based sources
* Different background layers
* Calendar support for datasets with a time dimension
* Style selection if applicable
* Visualisation of WMTS tile grid
* Drawing of geometries in different projection systems
* Location based searching

## Try it out!
The viewer is currently available at [https://janssenbrm.github.io/geotoolkit/](https://janssenbrm.github.io/geotoolkit/) for testing and demo purposes.

![](https://github.com/JanssenBrm/geotoolkit/blob/master/screenshots/viewer.png?raw=true)

## Configuring your data sources
It is possible to configure a set of predefined data sources. This could be very useful in case you are always working with the same WM(T)S sources. 
The different sources can be defined in the `sources.config.ts` file.

## Using the code

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
