export const SOURCES = [
    {
        'name': 'TerraScope (WMTS)',
        'description': 'VITO WMTS based on GeoTrellis',
        'url': 'https://services.terrascope.be/wmts?service=WMTS&request=GetCapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/935755572972007424/ggPzGIgG.jpg'
    },
    {
        'name': 'TerraScope (WMTS - V2)',
        'description': 'VITO WMTS based on GeoTrellis',
        'url': 'https://services.terrascope.be/wmts/v2/wmts?service=wmts&request=GetCapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/935755572972007424/ggPzGIgG.jpg'
    },
    {
        'name': 'GeoTrellis (WMTS - Dev)',
        'description': 'VITO WMTS based on GeoTrellis',
        'url': '/proxy/vito-wmts/service/wmts?REQUEST=getcapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/935755572972007424/ggPzGIgG.jpg',
        'headers': {
            'base_url': '/proxy/vito-wmts/service/wmts'
        },
        'contrastLayers': [{
            layer: 'CGS_S2_RADIOMETRY',
            type: 'sigmoid',
            params: {
                alpha: {
                    value: 0.50,
                },
                beta: {
                    value: 5
                }
            }
        }, {
            layer: 'CGS_S2_NIR',
            type: 'sigmoid',
            params: {
                alpha: {
                    value: 0.5,
                },
                beta: {
                    value: 5
                }
            }
        }]
    },
    {
        'name': 'PROBA-V MEP (WMTS)',
        'description': 'The  PROBA-V Mission Exploitation Platform (MEP), as an ESA pathfinder project, complements the PROBA-V user segment by offering an operational Exploitation Platform on the PROBA-V data, correlative data and derived products. ',
        'url': 'https://proba-v-mep.esa.int/applications/geo-viewer/app/mapcache/wmts?service=WMTS&request=GetCapabilities',
        'infoUrl': 'https://proba-v-mep.esa.int/',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
    },
    {
        'name': 'MAPS - CECN (WMS)',
        'description': 'VITO TAP Maps Cluster',
        'url': 'http://maps.vgt.vito.be/geoserver/CECN/ows?service=wms&version=1.3.0&request=getcapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
    },
    {
        'name': 'MAPS - DCS4COP (WMS)',
        'description': 'VITO TAP Maps Cluster',
        'url': 'http://maps.vgt.vito.be/geoserver/DCS4COP/ows?service=wms&version=1.3.0&request=getcapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
    },
    {
        'name': 'MAPS - DATABIO (WMS)',
        'description': 'VITO TAP Maps Cluster',
        'url': 'http://maps.vgt.vito.be/geoserver/DATABIO/ows?service=wms&version=1.3.0&request=getcapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
    },
    {
        'name': 'MAPS - BCGMS (WMS)',
        'description': 'VITO TAP Maps Cluster',
        'url': 'http://maps.vgt.vito.be/geoserver/BCGMS/ows?service=wms&version=1.3.0&request=getcapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
    },
    {
        'name': 'MAPS (Geowebcache)',
        'description': 'VITO TAP Maps Cluster',
        'url': 'http://maps.vgt.vito.be/geowebcache/service/wmts?REQUEST=getcapabilities',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png'
    },
    /*{
        'name': 'LOCALHOST',
        'description': 'VITO TAP Maps Cluster',
        'url': '/proxy/wmts-local/service/wmts?REQUEST=getcapabilities&amp;VERSION=1.0.0',
        'infoUrl': '',
        'imageUrl': 'https://pbs.twimg.com/profile_images/641168186897858560/PI1QimyT_400x400.png',
    }*/
];
