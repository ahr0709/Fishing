// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.

function initMap() {
  const uluru = { lat: 47.2529, lng: -122.4443 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Pudget Sound</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, Puget Sound /ˈpjuːdʒɪt/ is a sound along the northwestern coast of the U.S. state of Washington, an inlet of the Pacific Ocean, and part of the Salish Sea. It is a complex estuarine system of interconnected marine waterways and basins, with one major and one minor connection to the open Pacific Ocean via the Strait of Juan de Fuca—Admiralty Inlet being the major connection and Deception Pass being the minor. Flow through Deception Pass is approximately equal to 2% of the total tidal exchange between Puget Sound and the Strait of Juan de Fuca. Puget Sound extends approximately 100 miles (160 km) from Deception Pass in the north to Olympia, Washington in the south. Its average depth is 450 feet (140 m) and its maximum depth, off Point Jefferson between Indianola and Kingston, is 930 feet (280 m).</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/wiki/Puget_Sound</a> " 
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
