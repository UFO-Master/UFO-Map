var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_2_1 = new ol.format.GeoJSON();
var features_2_1 = format_2_1.readFeatures(json_2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_1.addFeatures(features_2_1);
var lyr_2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_1, 
                style: style_2_1,
                popuplayertitle: 'тест2',
                interactive: true,
                title: '<img src="styles/legend/2_1.png" /> тест2'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_2_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_2_1];
lyr_2_1.set('fieldAliases', {'Название': 'Название', 'Широта': 'Широта', 'Долгота': 'Долгота', 'Фото': 'Фото', 'Описание': 'Описание', });
lyr_2_1.set('fieldImages', {'Название': 'TextEdit', 'Широта': 'TextEdit', 'Долгота': 'TextEdit', 'Фото': 'TextEdit', 'Описание': 'TextEdit', });
lyr_2_1.set('fieldLabels', {'Название': 'inline label - visible with data', 'Широта': 'no label', 'Долгота': 'no label', 'Фото': 'inline label - visible with data', 'Описание': 'header label - visible with data', });
lyr_2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});