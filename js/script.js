$(document).ready(function(){
    L.mapbox.accessToken = 'pk.eyJ1IjoiYWRzY2huZWlkZXIiLCJhIjoiSlcxbGd0NCJ9.9iU2iiEVRUSxpiQXkV_zFg';

    var map = L.mapbox.map('map', 'mapbox.outdoors', {
            maxZoom: 13,
        }).setView([60.675, -130.25], 8);

    L.tileLayer('https://liard-map-tiles.s3.amazonaws.com/{z}/{x}/{y}.png', {
        minZoom: 6,
        maxZoom: 13,
        tms: true
    }).addTo(map);

    var featureLayer = L.mapbox.featureLayer()
        .loadURL('route.json')
        .addTo(map);

});