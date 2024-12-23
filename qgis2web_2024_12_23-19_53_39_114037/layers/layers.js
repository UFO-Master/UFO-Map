var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });
var format_UFO_Observations_Russia_Unique_1 = new ol.format.GeoJSON();
var features_UFO_Observations_Russia_Unique_1 = format_UFO_Observations_Russia_Unique_1.readFeatures(json_UFO_Observations_Russia_Unique_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UFO_Observations_Russia_Unique_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UFO_Observations_Russia_Unique_1.addFeatures(features_UFO_Observations_Russia_Unique_1);
var lyr_UFO_Observations_Russia_Unique_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UFO_Observations_Russia_Unique_1, 
                style: style_UFO_Observations_Russia_Unique_1,
                popuplayertitle: 'UFO_Observations_Russia_Unique',
                interactive: true,
                title: '<img src="styles/legend/UFO_Observations_Russia_Unique_1.png" /> UFO_Observations_Russia_Unique'
            });

lyr_2gisMap_0.setVisible(true);lyr_UFO_Observations_Russia_Unique_1.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_UFO_Observations_Russia_Unique_1];
lyr_UFO_Observations_Russia_Unique_1.set('fieldAliases', {'Название': 'Название', 'Широта': 'Широта', 'Долгота': 'Долгота', 'Фото': 'Фото', 'Описание': 'Описание', });
lyr_UFO_Observations_Russia_Unique_1.set('fieldImages', {'Название': 'TextEdit', 'Широта': 'TextEdit', 'Долгота': 'TextEdit', 'Фото': 'TextEdit', 'Описание': 'TextEdit', });
lyr_UFO_Observations_Russia_Unique_1.set('fieldLabels', {'Название': 'header label - visible with data', 'Широта': 'no label', 'Долгота': 'no label', 'Фото': 'no label', 'Описание': 'inline label - visible with data', });
lyr_UFO_Observations_Russia_Unique_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});