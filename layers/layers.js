var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Точки наблюдения НЛО',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Точки наблюдения НЛО'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr__1];
lyr__1.set('fieldAliases', {'Название': 'Название', 'Широта': 'Широта', 'Долгота': 'Долгота', 'Фото': 'Фото', 'Описание': 'Описание', });
lyr__1.set('fieldImages', {'Название': 'TextEdit', 'Широта': 'TextEdit', 'Долгота': 'TextEdit', 'Фото': 'TextEdit', 'Описание': 'TextEdit', });
lyr__1.set('fieldLabels', {'Название': 'hidden field', 'Широта': 'hidden field', 'Долгота': 'hidden field', 'Фото': 'inline label - visible with data', 'Описание': 'inline label - visible with data', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});