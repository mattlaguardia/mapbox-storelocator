mapboxgl.accessToken = 'pk.eyJ1IjoibWF0dGJvb21pdHkiLCJhIjoiY2l5MjN4OWlxMDAwdjMycGdzeWFwaThhbyJ9.42MKNeff-uuLt8ewQhkK_g';
  // This adds the map to your page
// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
Element.prototype.remove = function() {
  if (this.parentNode) {
    this.parentNode.removeChild(this);
  }
};
}
// This adds the map to your page
var map = new mapboxgl.Map({
// container id specified in the HTML
container: 'map',
// style URL
style: 'mapbox://styles/mapbox/light-v9',
// initial position in [long, lat] format
center: [-118.1674248,40.5037172],
// initial zoom
zoom: 3.5
});

var stores = {
"type": "FeatureCollection",
"features": [{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.1674248,47.5037172]
  },
  "properties": {
    "name": "Emerald Haze Cannabis Emporium",
    "phoneFormatted": "(555) 555-5555",
    "phone": "2022347336",
    "address": "Emerald Haze Cannabis Emporium - 4033 NE Sunset Blvd, Suite 5",
    "city": "Renton",
    "country": "United States",
    "state": "WA",
    'marker-color': '#3ca0d3',
    'marker-size': 'large',
    'marker-symbol': 'rocket'
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-115.1483898,
      36.1070396
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2025078357",
    "address": "The Grove - 4647 Swenson St",
    "city": "Las Vegas",
    "country": "United States",
    "crossStreet": "at 22nd St NW",
    "postalCode": "20037",
    "state": "NV"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-123.035363,
      44.8885352
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2023879338",
    "address": "TLC Cannabis Emporium - 4550 Commercial St",
    "city": "SE Salem",
    "country": "United States",
    "crossStreet": "at Dupont Circle",
    "postalCode": "20036",
    "state": "OR"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.4164089,
      37.7768998
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2023379338",
    "address": "Sparc - 1256 Mission St",
    "city": "San Francisco",
    "country": "United States",
    "crossStreet": "at 34th St NW",
    "postalCode": "94103",
    "state": "CA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-122.244474,
      37.7839302
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2023379338",
    "address": "Harborside Health Center - 1840 Embarcadero",
    "city": "Oakland",
    "country": "United States",
    "postalCode": "94606",
    "state": "CA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-117.6772419,
      34.1069268
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2023379338",
    "address": "CaptainJacks - 2085 W Foothill Blvd",
    "city": "Upland",
    "country": "United States",
    "postalCode": "94606",
    "state": "CA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-105.0058609,
      39.7189584
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2023379338",
    "address": "New Amsterdam Organics - 150 Rio Grande Blvd",
    "city": "Denver",
    "country": "United States",
    "postalCode": "80223",
    "state": "CO"
  }
}
]};
// This adds the data to the map
  map.on('load', function (e) {
    // Add a GeoJSON source containing place coordinates and information.
    map.addSource("places", {
      "type": "geojson",
      "data": stores
    });
    // This is where your '.addLayer()' used to be
    // Initialize the list
    buildLocationList(stores);

  });

  // This is where your interactions with the symbol layer used to be
  // Now you have interactions with DOM markers instead
  stores.features.forEach(function(marker, i) {
    // Create an img element for the marker
    var el = document.createElement('div');
    el.id = "marker-" + i;
    el.className = 'marker';
    el.style.left='-28px';
    el.style.top='-46px';
    // Add markers to the map at all points
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);

    el.addEventListener('click', function(e){
        // 1. Fly to the point
        flyToStore(marker);

        // 2. Close all other popups and display popup for clicked store
        createPopUp(marker);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        e.stopPropagation();
        if (activeItem[0]) {
           activeItem[0].classList.remove('active');
        }

        var listing = document.getElementById('listing-' + i);
        listing.classList.add('active');

    });
  });


  function flyToStore(currentFeature) {
    map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 13
      });
  }

  function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();


    var popup = new mapboxgl.Popup({closeOnClick: false})
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML('<h3>Store: </h3>' +
            '<h4>' + currentFeature.properties.address + '</h4>')
          .addTo(map);
  }


  function buildLocationList(data) {
    for (i = 0; i < data.features.length; i++) {
      var currentFeature = data.features[i];
      var prop = currentFeature.properties;

      var listings = document.getElementById('listings');
      var listing = listings.appendChild(document.createElement('div'));
      listing.className = 'item';
      listing.id = "listing-" + i;

      var link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.dataPosition = i;
      link.innerHTML = prop.address;

      var details = listing.appendChild(document.createElement('div'));
      details.innerHTML = prop.city;
      if (prop.phone) {
        details.innerHTML += ' &middot; ' + prop.phoneFormatted;
      }



      link.addEventListener('click', function(e){
        // Update the currentFeature to the store associated with the clicked link
        var clickedListing = data.features[this.dataPosition];

        // 1. Fly to the point
        flyToStore(clickedListing);

        // 2. Close all other popups and display popup for clicked store
        createPopUp(clickedListing);

        // 3. Highlight listing in sidebar (and remove highlight for all other listings)
        var activeItem = document.getElementsByClassName('active');

        if (activeItem[0]) {
           activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    }
  }
