
var greenIcon = L.icon ({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var redIcon = L.icon ({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var yellowIcon = L.icon ({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
}); 



var data = $.getJSON( "positivos.json", function( json ) {

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
    var sliderFunc = function(layer){
            var temp = L.control.sliderControl({position: "topright",
        layer: layer,
        range: true,
        timeStrLength:  19,
        alwaysShowDate: true,
        showPopups: false});
           
            return temp;
        }
  var slider;
  var slidertiempo;

    var toggletiempo = L.easyButton({
      states: [{
      stateName: 'add-tiempo',
      icon: 'fa-calendar-alt',
      title: 'Añadir Slider tiempo',
      onClick: function(control) {
         if(document.getElementById("slider-timestamp") !== null){
                map.removeControl(slidertiempo);
          }
        map.removeLayer(dengueL);
        map.removeLayer(zikaL);
        map.removeLayer(chikungunyaL);

        var  testlayer1= L.geoJSON(json,{ pointToLayer: function (feature,latLng) {
          if(feature['properties']['arbo'] === 'Dengue' && toggledengue.state()==='remove-dengue'){
            return L.marker(latLng,{icon: redIcon});
          }
          if(feature['properties']['arbo'] === 'Zika'&& togglezika.state()==='remove-zika'){
            return L.marker(latLng,{icon: greenIcon});
          }
          if(feature['properties']['arbo'] === 'Chikungunya'&& togglechikugunya.state()==='remove-chikugunya'){
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
          );}});   

    

      slidertiempo= sliderFunc(testlayer1);
      map.addControl(slidertiempo);
      slidertiempo.startSlider();
      toggledengue.disable();
      togglezika.disable();
      togglechikugunya.disable();


      control.state('remove-tiempo');
      }
      }, {
      icon: 'fa-undo',
      stateName: 'remove-tiempo',
      title: 'Sacar Slider Tiempo',
      onClick: function(control) {

        map.removeControl(slidertiempo);
        toggledengue.enable();
        togglezika.enable();
        togglechikugunya.enable();
      if(toggledengue.state()==='remove-dengue'){
        map.addLayer(dengueL);
      }
      if(togglezika.state()==='remove-zika'){
        map.addLayer(zikaL);
      }
      if(togglechikugunya.state()==='remove-chikugunya'){
        map.addLayer(chikungunyaL);
      }
      control.state('add-tiempo');
      }}]});

    var input = L.DomUtil.create('input','form-control');
    input.id = 'daterange';        
    input.style.width = '200px';
    



    var togglerango = L.easyButton({
      states: [{
      stateName: 'add-rango',
      icon: 'fa-map-marker text-danger',
      title: 'Añadir rango de fecha',
      onClick: function(control) {

        toggletiempo.disable();
        toggledengue.disable();
        togglezika.disable();
        togglechikugunya.disable();       

        
        L.Control.rango = L.Control.extend({
          onAdd: function(map) {
            $(input).daterangepicker({
            opens: 'left',
            locale: {
            format: 'YYYY/MM/DD'
            }}, function(start, end, label) {
            if(document.getElementById("slider-timestamp") !== null){
                map.removeControl(slider);
            }
            map.eachLayer(function (layer) { 
              if(layer.options.id != 'osm'){
                map.removeLayer(layer);
            }});

            var datestart =  start.format('YYYY-MM-DD');
            var dateend = end.format('YYYY-MM-DD');

            var layerdate= L.geoJSON(json,{ pointToLayer: function (feature,latLng) {
              if(feature['properties']['arbo'] === 'Dengue' && toggledengue.state()==='remove-dengue' && feature['properties']['time'] >  datestart   && feature['properties']['time']<dateend ){
                return L.marker(latLng,{icon: redIcon});
              }
              if(feature['properties']['arbo'] === 'Zika'&& togglezika.state()==='remove-zika' && feature['properties']['time'] >  datestart   && feature['properties']['time']<dateend ){
                return L.marker(latLng,{icon: greenIcon});
              }
              if(feature['properties']['arbo'] === 'Chikungunya'&& togglechikugunya.state()==='remove-chikugunya' && feature['properties']['time'] >  datestart   && feature['properties']['time']<dateend ){
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

            slider = sliderFunc(layerdate);
            map.addControl(slider);
            slider.startSlider();
            map.addLayer(layerdate);

            });
          return input;
          },
          onRemove: function(map) {
          }});

        rango = function(opts) {
          return new L.Control.rango(opts);
        }

  
        map.addControl(  rango({ position: 'topleft' }));
      
        control.state('remove-rango');
      }
      }, {
      icon: 'fa-undo text-danger',
      stateName: 'remove-rango',
      title: 'Sacar Rango de fecha',
      onClick: function(control) {

        $(input).remove();
        $(".slider.ui-slider.ui-corner-all.ui-slider-horizontal.ui-widget.ui-widget-content").remove();
        $("#slider-timestamp").remove();
        map.eachLayer(function (layer) {
          if(layer.options.id != 'osm'){
            map.removeLayer(layer);
          }});

        if(toggledengue.state()==='remove-dengue'){
          map.addLayer(dengueL);
        }
        if(togglezika.state()==='remove-zika'){
          map.addLayer(zikaL);
        }
        if(togglechikugunya.state()==='remove-chikugunya'){
          map.addLayer(chikungunyaL);
        }

        toggletiempo.enable();
        toggledengue.enable();
        togglezika.enable();
        togglechikugunya.enable();      
        control.state('add-rango');

        }}]});





        togglerango.addTo(map);    
        toggledengue.addTo(map);
        togglezika.addTo(map);
        togglechikugunya.addTo(map);
        toggletiempo.addTo(map);

        var baseOverlay = {
        "OSM Standar": osm

        };

        L.control.layers(baseOverlay, null).addTo(map);  
        });




