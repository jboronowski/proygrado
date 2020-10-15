
var dengueL = {
  max: 10,
  data: []
};
var chikungunyaL = {
  max: 10,
  data: []
};

var zikaL = {
  max: 10,
  data: []
};
var empty = {
  max: 10,
  data: [{lat: 1,lng: 1}]
};

var cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 0.00070,
  "maxOpacity": .7,
  "blur": 1,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,

  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count'
};
var heatmapLayer = new HeatmapOverlay(cfg);
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



var request = $.getJSON( "http://localhost:3001/v1/geojson", function( json ) {

 $.each(json, function(feature,latLng) {
     			//tempd["data"].push({lat: latLng.geometry.coordinates[1],lng: latLng.geometry.coordinates[0],1});

           var temp = {
            lat: (latLng.geometry.coordinates[1]),
            lng: (latLng.geometry.coordinates[0])
          }
          if(latLng.properties['arbo']==='Dengue'){
           dengueL["data"].push(temp)

         } 
         if(latLng.properties['arbo']==='Zika'){
          zikaL["data"].push(temp)

        } 
        if(latLng.properties['arbo']==='Chikungunya'){
          chikungunyaL["data"].push(temp)
        } 

      });

 var toggledengue = L.easyButton({
  states: [{
    stateName: 'add-dengue',
    icon: 'fa-map-marker text-danger',
    title: 'Añadir Dengue',
    onClick: function(control) {
      heatmapLayer.setData(dengueL);
      map.addLayer(heatmapLayer);
      togglezika.disable();
      togglechikugunya.disable(); 
      control.state('remove-dengue');
    }},{
      icon: 'fa-undo text-danger',
      stateName: 'remove-dengue',
      title: 'Sacar Dengue',
      onClick: function(control) {
       heatmapLayer.setData(empty);
       togglezika.enable();
       togglechikugunya.enable(); 
       control.state('add-dengue');
     }}]});

 var togglezika = L.easyButton({
  states: [{
    stateName: 'add-zika',
    icon: 'fa-map-marker  text-success',
    title: 'Añadir Zika',
    onClick: function(control) {
      heatmapLayer.setData(zikaL);
      map.addLayer(heatmapLayer);
      toggledengue.disable();
      togglechikugunya.disable(); 
      control.state('remove-zika');
    }},{
      icon: 'fa-undo  text-success',
      stateName: 'remove-zika',
      title: 'Sacar Zika',
      onClick: function(control) {
        heatmapLayer.setData(empty);

        toggledengue.enable();
        togglechikugunya.enable(); 
        control.state('add-zika');
      }}]});

 var togglechikugunya = L.easyButton({
  states: [{
    stateName: 'add-chikungunya',
    icon: 'fa-map-marker text-warning',
    title: 'Añadir Chikungunya',
    onClick: function(control) {
     heatmapLayer.setData(chikungunyaL);
     map.addLayer(heatmapLayer);
     toggledengue.disable();
     togglezika.disable();
     control.state('remove-chikugunya');
   }}, {
    icon: 'fa-undo text-warning',
    stateName: 'remove-chikugunya',
    title: 'Sacar Chikungunya',
    onClick: function(control) {
     heatmapLayer.setData(empty);
     toggledengue.enable();
     togglezika.enable(); 
     control.state('add-chikungunya');
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
      toggledengue.disable();
      togglezika.disable();
      togglechikugunya.disable(); 

      L.Control.rango = L.Control.extend({

        onAdd: function(map) {
          $(input).daterangepicker({

            opens: 'left',
            parentEl: '#datepicker',
            locale: {
              format: 'DD-MM-YYYY'
            }}, function(start, end, label) {
              var datestart =  start.format('YYYY-MM-DD');
              var dateend = end.format('YYYY-MM-DD');
              var layerrango = {
                max: 10,
                data: []
              };
              $.each(json, function(feature,latLng) {

                var temp = {
                  lat: (latLng.geometry.coordinates[1]),
                  lng: (latLng.geometry.coordinates[0])
                };


                if(latLng.properties['arbo']==='Dengue' && toggledengue.state()==='remove-dengue'  && latLng.properties['time'] >=  datestart && latLng.properties['time']<= dateend){
                  console.log("dengue");
                  layerrango["data"].push(temp);

                };
                if(latLng.properties['arbo']==='Zika' && toggledengue.state()==='remove-zika' && latLng.properties['time'] >=  datestart && latLng.properties['time']<= dateend){
                  console.log("zika");
                  layerrango["data"].push(temp);

                };
                if(latLng.properties['arbo']==='Chikungunya' && toggledengue.state()==='remove-chikugunya' && latLng.properties['time'] >=  datestart && latLng.properties['time']<= dateend){
                 console.log("chik");
                 layerrango["data"].push(temp);
               };

             });
              heatmapLayer.setData(layerrango);
              map.addLayer(heatmapLayer);

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
    }},
    {
      icon: 'fa-undo',
      stateName: 'remove-rango',
      title: 'Sacar Rango',
      onClick: function(control) {
        heatmapLayer.setData(empty);
        if(toggledengue.state()==='remove-dengue'){
          heatmapLayer.setData(dengueL);
          map.addLayer(heatmapLayer);
        }
        $(input).remove();
        
        if(togglezika.state()==='remove-zika'){
          heatmapLayer.setData(zikaL);
          map.addLayer(heatmapLayer);
        }
        if(togglechikugunya.state()==='remove-chikugunya'){
          heatmapLayer.setData(chikungunyaL);
          map.addLayer(heatmapLayer);
        }
        toggledengue.enable();
        togglezika.enable();
        togglechikugunya.enable(); 
        control.state('add-rango');
      }}]});








 toggledengue.addTo(map);
 togglezika.addTo(map);
 togglechikugunya.addTo(map);
 togglerango.addTo(map);           

});




