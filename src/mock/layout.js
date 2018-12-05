export default {
    'line': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'line-opacity',
                    'line-color',
                    'line-width',
                    'line-offset',
                    'line-blur',
                    'line-dasharray',
                    'line-pattern',
                    'line-translate',
                    'line-translate-anchor',
                    'line-gap-width'
                ]
            },
            {
                'title': 'Layout properties',
                'type': 'properties',
                'fields': [
                    'line-cap',
                    'line-join',
                    'line-miter-limit',
                    'line-round-limit'
                ]
            }
        ]
    },
    'background': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'background-color',
                    'background-pattern',
                    'background-opacity'
                ]
            }
        ]
    },
    'fill': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'fill-opacity',
                    'fill-color',
                    'fill-antialias',
                    'fill-outline-color',
                    'fill-pattern',
                    'fill-translate',
                    'fill-translate-anchor'
                ]
            }
        ]
    },
    'fill-extrusion': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'fill-extrusion-opacity',
                    'fill-extrusion-color',
                    'fill-extrusion-translate',
                    'fill-extrusion-translate-anchor',
                    'fill-extrusion-pattern',
                    'fill-extrusion-height',
                    'fill-extrusion-base',
                    'fill-extrusion-vertical-gradient'
                ]
            }
        ]
    },
    'circle': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'circle-color',
                    'circle-opacity',
                    'circle-stroke-color',
                    'circle-stroke-opacity',
                    'circle-blur',
                    'circle-radius',
                    'circle-stroke-width',
                    'circle-pitch-scale',
                    'circle-translate',
                    'circle-translate-anchor',
                    'circle-pitch-alignment'
                ]
            }
        ]
    },
    'symbol': {
        'groups': [
            {
                'title': 'General layout properties',
                'type': 'properties',
                'fields': [
                    'symbol-placement',
                    'symbol-spacing',
                    'symbol-avoid-edges',
                    'symbol-z-order'
                ]
            },
            {
                'title': 'Text layout properties',
                'type': 'properties',
                'fields': [
                    'text-field',
                    'text-font',
                    'text-size',
                    'text-line-height',
                    'text-padding',
                    'text-allow-overlap',
                    'text-ignore-placement',
                    'text-pitch-alignment',
                    'text-rotation-alignment',
                    'text-max-width',
                    'text-letter-spacing',
                    'text-justify',
                    'text-anchor',
                    'text-max-angle',
                    'text-rotate',
                    'text-keep-upright',
                    'text-transform',
                    'text-offset',
                    'text-optional'
                ]
            },
            {
                'title': 'Icon layout properties',
                'type': 'properties',
                'fields': [
                    'icon-image',
                    'icon-allow-overlap',
                    'icon-ignore-placement',
                    'icon-optional',
                    'icon-rotation-alignment',
                    'icon-size',
                    'icon-text-fit',
                    'icon-text-fit-padding',
                    'icon-rotate',
                    'icon-padding',
                    'icon-keep-upright',
                    'icon-offset',
                    'icon-anchor',
                    'icon-pitch-alignment'
                ]
            },
            {
                'title': 'Text paint properties',
                'type': 'properties',
                'fields': [
                    'text-color',
                    'text-opacity',
                    'text-halo-color',
                    'text-halo-width',
                    'text-halo-blur',
                    'text-translate',
                    'text-translate-anchor'
                ]
            },
            {
                'title': 'Icon paint properties',
                'type': 'properties',
                'fields': [
                    'icon-color',
                    'icon-opacity',
                    'icon-halo-color',
                    'icon-halo-width',
                    'icon-halo-blur',
                    'icon-translate',
                    'icon-translate-anchor'
                ]
            }
        ]
    },
    'raster': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'raster-opacity',
                    'raster-hue-rotate',
                    'raster-brightness-min',
                    'raster-brightness-max',
                    'raster-saturation',
                    'raster-contrast',
                    'raster-fade-duration',
                    'raster-resampling'
                ]
            }
        ]
    },
    'hillshade': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'hillshade-illumination-direction',
                    'hillshade-illumination-anchor',
                    'hillshade-exaggeration',
                    'hillshade-shadow-color',
                    'hillshade-highlight-color',
                    'hillshade-accent-color'
                ]
            }
        ]
    },
    'heatmap': {
        'groups': [
            {
                'title': 'Paint properties',
                'type': 'properties',
                'fields': [
                    'heatmap-radius',
                    'heatmap-weight',
                    'heatmap-intensity',
                    'heatmap-opacity'
                ]
            }
        ]
    }
};