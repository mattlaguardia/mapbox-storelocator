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
    "coordinates": [-77.002583742142,
      38.887041080933
    ]
  },
  "properties": {
    "phoneFormatted": "(555) 555-5555",
    "phone": "2025479338",
    "address": "221 Pennsylvania Ave SE",
    "city": "Washington DC",
    "country": "United States",
    "crossStreet": "btwn 2nd & 3rd Sts. SE",
    "postalCode": "20003",
    "state": "D.C."
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-76.933492720127,
      38.99225245786
    ]
  },
  "properties": {
    "address": "8204 Baltimore Ave",
    "city": "College Park",
    "country": "United States",
    "postalCode": "20740",
    "state": "MD"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-77.097083330154,
      38.980979
    ]
  },
  "properties": {
    "phoneFormatted": "(301) 654-7336",
    "phone": "3016547336",
    "address": "4831 Bethesda Ave",
    "cc": "US",
    "city": "Bethesda",
    "country": "United States",
    "postalCode": "20814",
    "state": "MD"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-77.359425054188,
      38.958058116661
    ]
  },
  "properties": {
    "phoneFormatted": "(571) 203-0082",
    "phone": "5712030082",
    "address": "11935 Democracy Dr",
    "city": "Reston",
    "country": "United States",
    "crossStreet": "btw Explorer & Library",
    "postalCode": "20190",
    "state": "VA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-77.10853099823,
      38.880100922392
    ]
  },
  "properties": {
    "phoneFormatted": "(703) 522-2016",
    "phone": "7035222016",
    "address": "4075 Wilson Blvd",
    "city": "Arlington",
    "country": "United States",
    "crossStreet": "at N Randolph St.",
    "postalCode": "22203",
    "state": "VA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-75.28784,
      40.008008
    ]
  },
  "properties": {
    "phoneFormatted": "(610) 642-9400",
    "phone": "6106429400",
    "address": "68 Coulter Ave",
    "city": "Ardmore",
    "country": "United States",
    "postalCode": "19003",
    "state": "PA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-75.20121216774,
      39.954030175164
    ]
  },
  "properties": {
    "phoneFormatted": "(215) 386-1365",
    "phone": "2153861365",
    "address": "3925 Walnut St",
    "city": "Philadelphia",
    "country": "United States",
    "postalCode": "19104",
    "state": "PA"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [-77.043959498405,
      38.903883387232
    ]
  },
  "properties": {
    "phoneFormatted": "(202) 331-3355",
    "phone": "2023313355",
    "address": "1901 L St. NW",
    "city": "Washington DC",
    "country": "United States",
    "crossStreet": "at 19th St",
    "postalCode": "20036",
    "state": "D.C."
  }
}]
};
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
          .setHTML('<h3>Sweetgreen</h3>' +
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
