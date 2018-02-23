 function initMap() {
     var magna = { lat: -31.429805, lng: -64.1938951 },
     	 econom = { lat: -31.4355, lng: -64.2558592 },
     	 blas = { lat: -31.3386, lng: -64.256855 },
     	 bogota = { lat: 4.6239927, lng: -74.0062631 };

     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 10,
         center: magna
     });
     var marker = new google.maps.Marker({
         position: magna,
         map: map
     });
     var marker1 = new google.maps.Marker({
         position: econom,
         map: map
     });
     var marker2 = new google.maps.Marker({
         position: blas,
         map: map
     });
     var marker3 = new google.maps.Marker({
         position: bogota,
         map: map
     });
 }