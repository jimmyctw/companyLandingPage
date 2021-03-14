
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const location = { lat: 3.259600, lng: 101.675430 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: location,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}