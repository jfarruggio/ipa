var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 43.175365,
				lng: -89.219985,
			  });
			   var marker = map.addMarker({
					lat: 43.175365,
					lng: -89.219985,
		            title: 'Loop, Inc.'
		        });
			});
        }

    };
}();