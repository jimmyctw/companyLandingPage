const serviceBtns = document.getElementsByClassName('serviceBtn');







for( let i = 0 ; i < serviceBtns.length ; i++ ){
    const serviceBtn = serviceBtns[i];

    serviceBtn.addEventListener('click', () => {
        const serviceDetail = serviceBtn.nextElementSibling;
        serviceDetail.classList.toggle("displayNone");
    })
}

function initMap(){
    const location = { lat: 3.259600, lng: 101.675430};
    const map = new google.maps.Map(document.getElementsById('locationMap'), {
        zoom: 4,
        center: location
    });

}
