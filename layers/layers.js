var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Geology_1 = new ol.format.GeoJSON();
var features_Geology_1 = format_Geology_1.readFeatures(json_Geology_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geology_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geology_1.addFeatures(features_Geology_1);
var lyr_Geology_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Geology_1, 
                style: style_Geology_1,
                interactive: true,
    title: 'Geology<br />\
    <img src="styles/legend/Geology_1_0.png" /> Biotite granite<br />\
    <img src="styles/legend/Geology_1_1.png" /> Hornblende- biotite granodiotite<br />\
    <img src="styles/legend/Geology_1_2.png" /> Slates, phyllite ashes and subordinate greywacke<br />\
    <img src="styles/legend/Geology_1_3.png" /> SB: Argillite / volcaniclastic facies<br />'
        });
var format_Concession_2 = new ol.format.GeoJSON();
var features_Concession_2 = format_Concession_2.readFeatures(json_Concession_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concession_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concession_2.addFeatures(features_Concession_2);
var lyr_Concession_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concession_2, 
                style: style_Concession_2,
                interactive: true,
                title: '<img src="styles/legend/Concession_2.png" /> Concession'
            });
var format_Stream_3 = new ol.format.GeoJSON();
var features_Stream_3 = format_Stream_3.readFeatures(json_Stream_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_3.addFeatures(features_Stream_3);
var lyr_Stream_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stream_3, 
                style: style_Stream_3,
                interactive: true,
                title: '<img src="styles/legend/Stream_3.png" /> Stream'
            });
var format_Contours_4 = new ol.format.GeoJSON();
var features_Contours_4 = format_Contours_4.readFeatures(json_Contours_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_4.addFeatures(features_Contours_4);
var lyr_Contours_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contours_4, 
                style: style_Contours_4,
                interactive: true,
    title: 'Contours<br />\
    <img src="styles/legend/Contours_4_0.png" /> 600-900<br />\
    <img src="styles/legend/Contours_4_1.png" /> 750 & 1000 ft<br />'
        });
var format_Fault_5 = new ol.format.GeoJSON();
var features_Fault_5 = format_Fault_5.readFeatures(json_Fault_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fault_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fault_5.addFeatures(features_Fault_5);
var lyr_Fault_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Fault_5, 
                style: style_Fault_5,
                interactive: true,
    title: 'Fault<br />\
    <img src="styles/legend/Fault_5_0.png" /> Fault<br />\
    <img src="styles/legend/Fault_5_1.png" /> Probable fault<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Geology_1.setVisible(true);lyr_Concession_2.setVisible(true);lyr_Stream_3.setVisible(true);lyr_Contours_4.setVisible(true);lyr_Fault_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Geology_1,lyr_Concession_2,lyr_Stream_3,lyr_Contours_4,lyr_Fault_5];
lyr_Geology_1.set('fieldAliases', {'UNIT': 'UNIT', 'descriptio': 'descriptio', });
lyr_Concession_2.set('fieldAliases', {'id': 'id', });
lyr_Stream_3.set('fieldAliases', {'DESCRIPTIO': 'DESCRIPTIO', 'HYDRO_ID': 'HYDRO_ID', 'FCODE': 'FCODE', 'Nami': 'Nami', });
lyr_Contours_4.set('fieldAliases', {'DESCRIPTIO': 'DESCRIPTIO', 'LENGTH_m': 'LENGTH_m', 'CONTOUR_ID': 'CONTOUR_ID', 'FCODE': 'FCODE', 'ZVAL_ft': 'ZVAL_ft', });
lyr_Fault_5.set('fieldAliases', {'TYPE': 'TYPE', });
lyr_Geology_1.set('fieldImages', {'UNIT': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Concession_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Stream_3.set('fieldImages', {'DESCRIPTIO': 'TextEdit', 'HYDRO_ID': 'TextEdit', 'FCODE': 'Range', 'Nami': 'TextEdit', });
lyr_Contours_4.set('fieldImages', {'DESCRIPTIO': 'TextEdit', 'LENGTH_m': 'TextEdit', 'CONTOUR_ID': 'TextEdit', 'FCODE': 'Range', 'ZVAL_ft': 'Range', });
lyr_Fault_5.set('fieldImages', {'TYPE': 'TextEdit', });
lyr_Geology_1.set('fieldLabels', {'UNIT': 'no label', 'descriptio': 'no label', });
lyr_Concession_2.set('fieldLabels', {'id': 'no label', });
lyr_Stream_3.set('fieldLabels', {'DESCRIPTIO': 'no label', 'HYDRO_ID': 'no label', 'FCODE': 'no label', 'Nami': 'no label', });
lyr_Contours_4.set('fieldLabels', {'DESCRIPTIO': 'no label', 'LENGTH_m': 'no label', 'CONTOUR_ID': 'no label', 'FCODE': 'no label', 'ZVAL_ft': 'no label', });
lyr_Fault_5.set('fieldLabels', {'TYPE': 'no label', });
lyr_Fault_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});