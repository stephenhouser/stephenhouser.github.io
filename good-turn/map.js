var center;
var map = null;

function Newinitialize(lat,lng) {
    center = new google.maps.LatLng(lat,lng);
    var myOptions = {
        zoom: 14,
        center: center,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    }
    map = new google.maps.Map(document.getElementById("turn_map"), myOptions);
}

function detectBrowser() {
    var useragent = navigator.userAgent;
    var mapdivMap = document.getElementById("turn_map");

    if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
        mapdivMap.style.width = '100%';
        mapdivMap.style.height = '100%';
    } else {
        mapdivMap.style.width = '600px';
        mapdivMap.style.height = '800px';
    }
};

$(document).ready(function() {
    if(navigator.geolocation) {
        detectBrowser();
        navigator.geolocation.getCurrentPosition(function(position){
            Newinitialize(position.coords.latitude,position.coords.longitude);
        });
        Newinitialize(52.636161,-1.133065);
    } else {
        detectBrowser();
        Newinitialize(52.636161,-1.133065);
    }
});
