





var globallayer;
var globalcontrol;
var globaltemp;
var input;

function get(layer){
    return layer;
}

var timeDimensionControlOptions = {
        timeSliderDragUpdate: true,
        loopButton: false,
        autoPlay: false,
        limitSliders: true,
        minSpeed: 0.5,
        maxSpeed: 5,
        timeZones: ["Local"],
        playerOptions: {
            transitionTime: 2000,
            loop: false,
            startOver: true,
        }};


var greenIcon = L.icon ({
  iconUrl: "/assets/marker-icon-green.png",
  shadowUrl: "/assets/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var redIcon = L.icon ({
  iconUrl: "/assets/marker-icon-red.png",
  shadowUrl: "/assets/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var yellowIcon = L.icon ({
  iconUrl: "/assets/marker-icon-yellow.png",
  shadowUrl: "/assets/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
}); 
 console.log("anda");


var data = $.getJSON("http://192.168.0.10:3001/v1/geojson", function( json ) {
  console.log("anda");
   var dengueL= L.geoJSON(null,{
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon: redIcon});
    },
    onEachFeature: function (feature, layer) {
      if(feature['properties']['estado'] === false ){
        layer.options.opacity = 0.7;
    }
    layer.bindPopup(
      "Arbo: "+feature.properties.arbo+" Tipo: "+feature.properties.serotipo+" Edad: "+feature.properties.edad+ " Sexo: "+feature.properties.sexo+"</br>"+
      " Fecha: "+feature.properties.time+" Estado: "+feature.properties.estado+"<br>"+
      " Barrio: "+feature.properties.barrio+" Distrito: "+feature.properties.distrito+" Cuidad: "+feature.properties.cuidad
    );
  }
  });

  var zikaL= L.geoJSON(null,{
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon: greenIcon});
    },
    onEachFeature: function (feature, layer) {
      if(feature['properties']['estado'] === false ){
        layer.options.opacity = 0.7;
    }
    layer.bindPopup(
      "Arbo: "+feature.properties.arbo+" Tipo: "+feature.properties.serotipo+" Edad: "+feature.properties.edad+ " Sexo: "+feature.properties.sexo+"</br>"+
      " Fecha: "+feature.properties.time+" Estado: "+feature.properties.estado+"<br>"+
      " Barrio: "+feature.properties.barrio+" Distrito: "+feature.properties.distrito+" Cuidad: "+
      feature.properties.cuidad
      );
    }
    });

  var chikungunyaL = L.geoJSON(null,{
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon: yellowIcon});
    },
    onEachFeature: function (feature, layer) {
      if(feature['properties']['estado'] === false ){
        layer.options.opacity = 0.7;
    }
    layer.bindPopup(
      "Arbo: "+feature.properties.arbo+" Tipo: "+feature.properties.serotipo+" Edad: "+feature.properties.edad+ " Sexo: "+feature.properties.sexo+"</br>"+
      " Fecha: "+feature.properties.time+" Estado: "+feature.properties.estado+"<br>"+
      " Barrio: "+feature.properties.barrio+" Distrito: "+feature.properties.distrito+" Cuidad: "+
      feature.properties.cuidad
      );
    }
    });
    $.each(json, function(feature,latLng) {
      if(latLng['properties']['arbo'] === 'Dengue'){
       
          dengueL.addData(latLng);
    }
      if(latLng['properties']['arbo'] === 'Zika'){
        
          zikaL.addData(latLng);
    }
      if(latLng['properties']['arbo'] === 'Chikungunya'){
      
          chikungunyaL.addData(latLng);
         
    }
    
    });
var customPopup = "Mapa de Arbovirus: <br>"+
"Para seleccionar un arbovirus utiliza el icono <i class='fa fa-map-marker' aria-hidden='true'></i><br>"+
"Para buscar por rango de fecha utiliza el icono <i class='fa fa-calendar' aria-hidden='true'></i> y selecciona el rango de fecha  <br>"+
"El boton de Play <i class='fa fa-play' aria-hidden='true'></i> funciona para ver el orden de aparicion en un rango de tiempo <br>"+
"Para la funcionalidad de rango de tiempo, primeramente debe seleccionar un rango"       

    
var helpPopup = L.popup().setContent(customPopup);
    var togglehelp= L.easyButton({
      states: [{
      stateName: 'add-help',
      icon: 'fa fa-question-circle-o',
      title: "Ayuda",
      onClick: function(control) {
        toggledengue.disable();
        togglezika.disable();
        togglechikugunya.disable();
        toggletiempo.disable();
        togglerango.disable();    
        helpPopup.setLatLng(map.getCenter()).openOn(map);
        control.state('remove-help'); 
      }},{
      icon: 'fa-undo',
      stateName: 'remove-help',
      title: 'Sacar ayuda',
      onClick: function(control) {
        helpPopup.remove();
        togglerango.enable();
        togglezika.enable();
        togglechikugunya.enable();
        toggledengue.enable();
        control.state('add-help'); 
      }}]});





    var toggledengue = L.easyButton({
      states: [{
      stateName: 'add-dengue',
      icon: 'fa-map-marker text-danger',
      title: 'Añadir Dengue',
      onClick: function(control) {
        map.addLayer(dengueL);
        control.state('remove-dengue');
      }},{
      icon: 'fa-undo text-danger',
      stateName: 'remove-dengue',
      title: 'Sacar Dengue',
      onClick: function(control) {
        map.removeLayer(dengueL);
        control.state('add-dengue');
      }}]});

    var togglezika = L.easyButton({
      states: [{
      stateName: 'add-zika',
      icon: 'fa-map-marker  text-success',
      title: 'Añadir Zika',
      onClick: function(control) {
        map.addLayer(zikaL);
        control.state('remove-zika');
      }},{
      icon: 'fa-undo  text-success',
      stateName: 'remove-zika',
      title: 'Sacar Zika',
      onClick: function(control) {
        map.removeLayer(zikaL);
        control.state('add-zika');
      }}]});

    var togglechikugunya = L.easyButton({
      states: [{
      stateName: 'add-chikungunya',
      icon: 'fa-map-marker text-warning',
      title: 'Añadir Chikungunya',
      onClick: function(control) {
        map.addLayer(chikungunyaL);
        control.state('remove-chikugunya');
      }}, {
      icon: 'fa-undo text-warning',
      stateName: 'remove-chikugunya',
      title: 'Sacar Chikungunya',
      onClick: function(control) {
        map.removeLayer(chikungunyaL);
        control.state('add-chikungunya');
      }}]});
   

    var toggletiempo = L.easyButton({
      states: [{
      stateName: 'add-tiempo',
      icon: 'fa fa-play',
      title: 'Añadir transicion de tiempo',
      onClick: function(control) {
        map.eachLayer(function (layer) { 
              if(layer.options.id != 'osm'){
                map.removeLayer(layer);
            }}); 
        globaltemp = L.timeDimension.layer.geoJson(globallayer, {updateTimeDimension: true,
        updateTimeDimensionMode: 'replace',
        addlastPoint: true});
        globaltemp.addTo(map);
        globalcontrol.addTo(map);

      control.state('remove-tiempo');
      }
      }, {
      icon: 'fa-undo',
      stateName: 'remove-tiempo',
      title: 'Sacar Transicion de tiempo',
      onClick: function(control) {
         map.eachLayer(function (layer) { 
              if(layer.options.id != 'osm'){
                map.removeLayer(layer);
            }});
        map.removeControl(globalcontrol);
        map.addLayer(globallayer);
      control.state('add-tiempo');
      }}]});

    
   
    input = L.DomUtil.create('input','form-control');
    input.id = 'daterange';        
    input.style.width = '200px';

    var togglerango = L.easyButton({
      states: [{
      stateName: 'add-rango',
      icon: 'fa-calendar',
      title: 'Añadir rango de fecha',
      onClick: function(control) {
        toggletiempo.enable();
        toggledengue.disable();
        togglezika.disable();
        togglechikugunya.disable(); 
          
        L.Control.rango = L.Control.extend({

          onAdd: function(map) {
            $(input).daterangepicker({

            opens: 'right',
            parentEl: '#datepicker',
            locale: {
            format: 'DD-MM-YYYY'
            }}, function(start, end, label) {
            console.log("work");
            map.eachLayer(function (layer) { 
              if(layer.options.id != 'osm'){
                map.removeLayer(layer);
            }});

            var datestart =  start.format('YYYY-MM-DD');
            var dateend = end.format('YYYY-MM-DD');
            
            globallayer= L.geoJSON(json,{ pointToLayer: function (feature,latLng) {
             if(feature['properties']['arbo'] === 'Dengue' && toggledengue.state()==='remove-dengue' && feature['properties']['time'] >=  datestart && feature['properties']['time']<= dateend)  { 
       
             return L.marker(latLng,{icon: redIcon});
              }
              if(feature['properties']['arbo'] === 'Zika'&& togglezika.state()==='remove-zika' && feature['properties']['time'] >=  datestart  && feature['properties']['time']<=dateend ){
              
                return L.marker(latLng,{icon: greenIcon});
              }
              if(feature['properties']['arbo'] === 'Chikungunya'&& togglechikugunya.state()==='remove-chikugunya' && feature['properties']['time'] >= datestart  && feature['properties']['time']<=dateend ){
           
                return L.marker(latLng,{icon: yellowIcon});
              }
              },
              onEachFeature: function (feature, layer) {
                if(feature['properties']['estado'] === false ){
                  layer.options.opacity = 0.7;
                }
              layer.bindPopup(
                "Arbo: "+feature.properties.arbo+" Tipo: "+feature.properties.serotipo+" Edad: "+feature.properties.edad+ " Sexo: "+feature.properties.sexo+"</br>"+
                " Fecha: "+feature.properties.time+" Estado: "+feature.properties.estado+"<br>"+
                " Barrio: "+feature.properties.barrio+" Distrito: "+feature.properties.distrito+" Cuidad: "+
                feature.properties.cuidad
              );
            }});   

        globalcontrol =L.control.timeDimension(timeDimensionControlOptions); 
        map.addLayer(globallayer);
        
            });
          return input;
          },
          onRemove: function(map) {
          }});

        rango = function(opts) {
          return new L.Control.rango(opts);
        }

  
        map.addControl(rango({ position: 'topleft' }));
      
        control.state('remove-rango');
      }
      }, {
      icon: 'fa-undo',
      stateName: 'remove-rango',
      title: 'Sacar Rango de fecha',
      onClick: function(control) {

        $(input).remove();
        
      map.eachLayer(function (layer) {
          if(layer.options.id != 'osm'){
            map.removeLayer(layer);
          }});
        if((document.getElementsByClassName("leaflet-bar leaflet-bar-horizontal leaflet-bar-timecontrol leaflet-control")).length > 0){
          console.log("entor");
        map.removeControl(globalcontrol); }
        if(toggledengue.state()==='remove-dengue'){
          map.addLayer(dengueL);
        }
        if(togglezika.state()==='remove-zika'){
          map.addLayer(zikaL);
        }
        if(togglechikugunya.state()==='remove-chikugunya'){
          map.addLayer(chikungunyaL);
        }
        toggletiempo.disable();
        toggledengue.enable();
        togglezika.enable();
        togglechikugunya.enable();
        toggletiempo.state('add-tiempo');    
        control.state('add-rango');

        }}]});





        togglehelp.addTo(map);  
        toggledengue.addTo(map);
        togglezika.addTo(map);
        togglechikugunya.addTo(map);
        toggletiempo.addTo(map);
        toggletiempo.disable();
        togglerango.addTo(map);    
        var baseOverlay = {
        "OSM Standar": osm

        };

        L.control.layers(baseOverlay, null).addTo(map);  
        });




