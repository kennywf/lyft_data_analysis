$.getJSON("data/lyft_data.json", function(jsonData) {
    var geojson = {
        type: "FeatureCollection",
        features: [],
      };
      
      for (i = 0; i < jsonData.data.length; i++)
      
      
      
          geojson.features.push({
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [jsonData.data[i].lat, jsonData.data[i].long]
              },
              "properties": {
                "time_of_trip": jsonData.data[i].time_of_trip,
                "lat": jsonData.data[i].lat,
                "lon": jsonData.data[i].lon,
              }
            });
      
          // console.log(geojson)
          });