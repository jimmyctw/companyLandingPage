function initMap(){
    const location = { lat: 3.259600, lng: 101.675430};
    const map = new google.maps.Map(document.getElementsById('locationMap'), {
        zoom: 4,
        center: location
    });

}
