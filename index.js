
(function () {
    document.getElementById("botones").getElementById("best").addEventListener("click", function () {
        alert("Graph cheaper");
    });
})();

(function () {
    document.getElementById("security").addEventListener("click", function () {
        alert("Graph Safety");
    });
})();

(function () {
    document.getElementById("best").addEventListener("click", function () {
        alert("Graph Cheaper safety");
    });
})();

var googleMap;
function myMap() {
    var map = document.getElementById("googleMap")
    var mapProp= {
        center: {lat:40.729131,lng:-73.996546},
        zoom:12
    };
    googleMap=new google.maps.Map(map,mapProp);
    var marker= new google.maps.Marker({
        position:googleMap.center,
        map:googleMap
    });
}

(function best() {
    document.getElementById("best").addEventListener("click", function () {
        alert("Hi! :)");
    });
})();

$(document).ready(function(){
    document.getElementById("price").onclick = function () {
        insertDataRent();
        setMapOnAll(googleMap,rentmarkers);
    };
});

(function () {
    document.getElementById("security").addEventListener("click", function () {
        alert("Hi! :)");
    });
})();

var rent="https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD";
var rentdata;
var rentmarkers=[];
loadDataSetsData();

function loadDataSetsData(){
    $.ajax({
      url: rent,
      type:"GET"  
    }).done(function(data){
     rentdata = data.data;
    });
}

function insertDataRent(){
    for(var i=0; i<rentdata.length; i++){
        var lat = rentdata[i][23];
        var lng = rentdata[i][24];
        if(lat !== null && lng !== null){
            rentmarkers.push(addmarkeraux(lat,lng, "casa"));
        }
    }
}

function setMapOnAll(map,list){
    for(var i=0;i<list.length;i++){
        list[i].setMap(map);
    }
}

function getDataFromURL(URL){
    var data = $.get(URL, function(){
        console.log(URL);
    }).done(function(){
        console.log(data);
    }).fail(function(error){
        console.error(error);
    })
}
