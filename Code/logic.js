function popUpMsg(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.aka_name + "</h3><hr><p>" +
      new Date(feature.properties.inspection_date) + "</p><p>Address: " + feature.properties.address + "</p>");
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

// Create our map, giving it the streetmap and earthquakes layers to display on load
let myMap = L.map("map", {
    center: [ 37.09, -95.71 ],
    zoom: 3,
    layers: [streetmap]     //default selected layer
    });

// Add streetmap tile to map
streetmap.addTo(myMap);


// create layer; will attach data later on
let riskscore = new L.LayerGroup();

// Create overlay object to hold our overlay layer
let overlayMaps = {
	Riskscore: riskscore
}

// Create a layer control
// Pass in our baseMaps and overlayMaps

L.control.layers(baseMaps, overlayMaps, {
	collapsed: false
  }).addTo(myMap);


const url = "https://data.cityofchicago.org/resource/4ijn-s7e5.geojson?$limit=250";

// Perform a GET request to the query URL
d3.json(url).then(function(data) {  

	L.geoJSON(data, {
		onEachFeature: popUpMsg,
		pointToLayer: function(feature, latlng) {
			return L.marker(latlng); // create a new marker layer for each point
		}
	}).addTo(myMap);	
	
	// riskscore.addTo(myMap);
});
