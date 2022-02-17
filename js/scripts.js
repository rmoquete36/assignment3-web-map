mapboxgl.accessToken = 'pk.eyJ1Ijoicm1vcXVldGUzNiIsImEiOiJja3psbzl6NTMxdnlzMm9xcnA0bTg1MTltIn0.DOhCPXavQF6DSwY_b4XEBw'

    var map = new mapboxgl.Map({
      container: 'mapContainer', // HTML container id
      style: 'mapbox://styles/mapbox/streets-v9', // style URL
      center: [-75.39530703244692, 42.76014405060649],  // starting position as [lng, lat]
      zoom: 6
    });

// I couldn't find a dataset I liked, so plotted my own points
    var pointsOfInterest = [
      {
        lnglat: [-73.9589, 41.4597],
        popupHtml: 'Breakneck Ridge',
        subText: '1 hour and 20 minutes from NYC <p> A 3.7 mile loop offering beautiful views of the Hudson River </p>'
      },
      {
        lnglat: [-74.2119, 41.4009],
        popupHtml: 'Sams Point',
        subText: '2 hours from NYC <p> A 8.3 mile loop on the highest point of the Shawangunk Ridge </p>'
      },
      {
        lnglat: [-73.9834, 41.2568],
        popupHtml: 'Tomkins Cove',
        subText: '1 hour from NYC <p> This trail stretches 88 miles in NY alone! </p>'
      },
      {
        lnglat: [-76.5212, 42.4168],
        popupHtml: 'Buttermilk Falls',
        subText: '4 hours and 20 minutes from NYC <p> A 1.6 mile loop featuring a waterfall </p>'
      },
      {
        lnglat: [-73.8601, 44.2187],
        popupHtml: 'Cascade Mountain',
        subText: 'Located south of Lake Placid, this trail leads to two Adirondack High Peaks'
      },
      {
        lnglat: [-73.98869, 41.31204],
        popupHtml: 'Bear Mountain Loop',
        subText: 'Located near Hessian Lake in the Hudson Valley'
      },
      {
        lnglat: [-74.23435912232786, 41.73057943470612],
        popupHtml: 'Gertrudes Nose',
        subText: 'Located near High Falls, this trail takes an average of 3.5 hours to complete!'
      },
      {
        lnglat: [-74.09328126274008, 42.08566295649322],
        popupHtml: 'Overlook Mountain',
        subText: 'A little over a 2 hour drive from NYC, this trail is moderately difficult and takes 3 hours to complete'
      },
      {
        lnglat: [-74.01066815498837, 41.32662345138527],
        popupHtml: 'Popolopen Torne Loop',
        subText: 'A 1 hour commute from NYC, this trail features a beautiful river'
      },
      {
        lnglat: [-73.95091313099323, 44.15890398739176],
        popupHtml: 'Van Hoevenberg',
        subText: 'Located near Lake Placid, this trail features stunning views'
      },
      {
        lnglat: [-73.99479890909348, 41.43351426307851],
        popupHtml: 'Storm King Trail',
        subText: '1.5 hours from NYC, this mountain trail is perfect for runners'
      },
      {
        lnglat: [-76.87402386598906, 42.38458556912664],
        popupHtml: 'Finger Lakes',
        subText: 'Consisting of a network of trails, only 48 people have completed the entire trail!'
      },
      {
        lnglat: [-75.42890399638267, 43.26190368268952],
        popupHtml: 'Erie Canalway Trail',
        subText: 'This trail can lead you from Buffalo to Albany, and anywhere in between!'
      },
    ]

    pointsOfInterest.forEach(function(pointOfInterest) {
      var popup = new mapboxgl.Popup({ offset: 40})
        .setHTML(`
          <h3>${pointOfInterest.popupHtml}</h3>
          <p>${pointOfInterest.subText}</p>
        `);

      new mapboxgl.Marker({
        color: 'red'
      })
        .setLngLat(pointOfInterest.lnglat)
        .setPopup(popup)
        .addTo(map);
    })
