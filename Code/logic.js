
//create function to calculate circle color based on depth of earthquake 
function circleColor(feature){
  score = feature.properties.results
  
  if(score === "Pass"){
      color = "green"
  }
  else {
    color = "red"
  }
  return color
  };
      
  


// Define streetmap and darkmap layers
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1
});

// Define a baseMaps object to hold our base layers
let baseMaps = {
  "Street Map": streetmap
};  

// Create our map, giving it the streetmap and others layers to display on load
let myMap = L.map("map", {
  center: [ 41.90, -87.6237 ],
  zoom: 12,
  layers: [] // no layers added initially
});

// Add streetmap tile to map
streetmap.addTo(myMap);

// Create overlay objects to hold our overlay layers
let overlayMaps = {
  "Risk Score 1 - Pass": new L.LayerGroup(),
  "Risk Score 2 - Pass": new L.LayerGroup(),
  "Risk Score 3 - Pass": new L.LayerGroup(),
  "Risk Score 1 - Fail": new L.LayerGroup(),
  "Risk Score 2 - Fail": new L.LayerGroup(),
  "Risk Score 3 - Fail": new L.LayerGroup()
}

// Create a layer control
// Pass in our baseMaps and overlayMaps
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);

// Create a custom legend title
let legendTitle = L.control({ position: 'topright' });
legendTitle.onAdd = function(map) {
  let div = L.DomUtil.create('div', 'legend-title');
  div.innerHTML = 'Restaurants in Chicago 2022-current';
  return div;
};
legendTitle.addTo(myMap);

// Load the data and add it to the corresponding layer group when the user selects the layer
const url = "https://data.cityofchicago.org/resource/4ijn-s7e5.geojson?$limit=10000";

d3.json(url).then(function(data) {  
  data.features.forEach(function(feature) {
    if (feature.properties.facility_type === "Restaurant" && 
        feature.properties.city === "CHICAGO" && 
        feature.properties.inspection_date > "2022-01-01T00:00:00.000") {
      
      let layer;
      
      if (feature.properties.risk === "Risk 1 (High)" && feature.properties.results === "Pass") {
        layer = overlayMaps["Risk Score 1 - Pass"];
      } else if (feature.properties.risk === "Risk 2 (Medium)" && feature.properties.results === "Pass") {
        layer = overlayMaps["Risk Score 2 - Pass"];
      } else if (feature.properties.risk === "Risk 3 (Low)" && feature.properties.results === "Pass") {
        layer = overlayMaps["Risk Score 3 - Pass"];
      } else if (feature.properties.risk === "Risk 1 (High)" && feature.properties.results === "Fail") {
        layer = overlayMaps["Risk Score 1 - Fail"];
      } else if (feature.properties.risk === "Risk 2 (Medium)" && feature.properties.results === "Fail") {
        layer = overlayMaps["Risk Score 2 - Fail"];  
      } else if (feature.properties.risk === "Risk 3 (Low)" && feature.properties.results === "Fail") {
        layer = overlayMaps["Risk Score 3 - Fail"];
      }  
      
      if (layer) {
        let iconUrl, markerColor;
        if (feature.properties.results === "Pass") {
          iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png';
          markerColor = 'green';
        } else {
          iconUrl = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png';
          markerColor = 'red';
        }
      
        let marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
          icon: L.icon({
            iconUrl: iconUrl,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          })
        });
      
        marker.bindPopup("<h3>" + feature.properties.aka_name + "</h3><hr><p>Address: " + feature.properties.address + "</p><p>Risk Score: " + feature.properties.risk + "</p><p>" + feature.properties.results + "</p>");
        layer.addLayer(marker);
      }
      
      
      
    }
  });
})
