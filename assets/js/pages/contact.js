var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 43.175455,
				lng: -89.219926, 
			  });
			   var marker = map.addMarker({
					lat: 43.175455,
					lng: -89.219926,
		            title: 'Loop, Inc.'
		        });
			});
        }

    };
}();