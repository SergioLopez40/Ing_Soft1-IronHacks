var map;
var name1 = 'STN';

function myMap() {
    var map0 = document.getElementById("map");
    var mapProp= {
        center: {lat:40.729131,lng:-73.996546},
        zoom:12
    };
    map=new google.maps.Map(map0,mapProp);
    var marker= new google.maps.Marker({
        position:map.center,
        map:map,
        label: name1,
    });
    markers();
}

function updateMarkers(map, array){
    for(var i=0;i<array.length;i++){
        array[i].setMap(map);
    }
}

var schoolSecurity = "https://data.cityofnewyork.us/api/views/qybk-bjjc/rows.json?accessType=DOWNLOAD";
var rentmarkers = [];
var showrents = false;

$("#price").click(function(){
    if(showrents){
        updateMarkers(null,rentmarkers);
    }else{
        updateMarkers(map,rentmarkers);
    }
    showrents = !showrents;
});

function markers(){
    var data=$.get("https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json")
    .done(function(){
        for(var i=0; i<(data.responseJSON.data).length; i++){
            var location = new google.maps.LatLng(data.responseJSON.data[i][23],data.responseJSON.data[i][24]);
            var marker = new google.maps.Marker({
                position: location,
                map:map,
            });
            rentmarkers.push(marker);
            marker.setMap(null);
        }
    });
}
