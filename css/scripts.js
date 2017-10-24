// https://developers.google.com/youtube/iframe_api_reference
	if(document.getElementById("play-button")){
		// global variable for the player
		var player;

		// this function gets called when API is ready to use
		function onYouTubePlayerAPIReady() {
		  // create the global player from the specific iframe (#video)
		  player = new YT.Player('video', {
		    events: {
		      // call this function when player is ready to use
		      'onReady': onPlayerReady
		    }
		  });
		}

		function onPlayerReady(event) {
		  
		  // bind events
		  var playButton = document.getElementById("play-button");
		  playButton.addEventListener("click", function() {
		    player.playVideo();
		    $('.video-img').hide();
		  });
		  
		  // var pauseButton = document.getElementById("pause-button");

		  // pauseButton.addEventListener("click", function() {
		  //   player.pauseVideo();
		  // });
		  
		}

		// Inject YouTube API script
		var tag = document.createElement('script');
		tag.src = "//www.youtube.com/player_api";
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	}


$(document).ready(function() {

	
	// $('.slider-content .slider').slick({
	//   dots: true,
	//   infinite: true,
	//   speed: 500
	// });
	var timeoutID = 0;
	
	$('.slider-wrap-page').each(function() {

		// $('.slider-wrap-page .slider').slick({
		// 	dots: true,
		// 	infinite: true,
		// 	speed: 500,
		// 	fade: true,
		// 	slidesToShow: 1,
		// 	adaptiveHeight: true,
		// });


		var thisSlide = $('.slider-wrap-page');
		var oneSlide = thisSlide.find('.one-slide');
		var oneSlideLength = oneSlide.length;

		var activeSlide2;

		var sliderUiVar = $('#slider-slick-control').slider({
			step: 0.01,
			value: 0,
			min: 0,
			max: oneSlideLength - 1,
			// create: function() {
			// 	handle.text( $( this ).slider( "value" ) );
			// },
			slide: function( event, ui ) {
				// console.log( ui.value );

				var activeSlide = Math.round(ui.value)  + 1;


				if(activeSlide2 == activeSlide) {
					clearTimeout(timeoutID);
				}

				timeoutID = setTimeout(function() {
					thisSlide.find('.slick-dots > *:nth-child(' + activeSlide + ')').click();
				}, 300);

				activeSlide2 = activeSlide;
				
			},

			 stop: function( event, ui ) {
			 	var activeSlideStop = Math.round(ui.value) ;
			 	sliderUiVar.slider( "value", activeSlideStop );
			 }
		});	


	});

	$('.content-plus').click(function() {
		$(this).closest('.slider-wrap-page').toggleClass('slider-wrap-page-content-hide');
	})


	$('.menu-btn').click(function() {
		$('.main-header').toggleClass('open');
	});

	$('.main-section-bottom').click(function() {

		$('html,body').animate({scrollTop:$('.main-section').parent().height()}, '500')
	});


	$('.house-dot').click(function(){
		$('.house-section-wrap').hide();
		$('.house-two-step').show();
	});
	$('.house-two-step .house-img').click(function(){
		$('.house-two-step').hide();
		$('.house-three-step').show();
	});
	$('.house-two-step .back-house-step').click(function(){
		$('.house-section-wrap').show();
		$('.house-two-step').hide();
	});
	$('.house-three-step .back-house-step').click(function(){
		$('.house-two-step').show();
		$('.house-three-step').hide();
	});
			
	if($('#map-canvas').length) {
		var mapThis = $('#map-canvas');
		if(mapThis.parent().hasClass('slide-content')){
			mapThis.appendTo(mapThis.closest('.slide-content-wrap').next('.slider-img'));
		}
	    var map;
	    var myLatlng = new google.maps.LatLng(36.797051, 2.903192);
	    var MY_MAPTYPE_ID = 'mystyle';


	    function initialize() {
	    var stylez =  [
			 {
			        "featureType": "all",
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "administrative.neighborhood",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#333333"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.business",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.business",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.place_of_worship",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi.place_of_worship",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "all",
			        "stylers": [
			            {
			                "color": "#b2a06b"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "color": "#000000"
			            },
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "labels.text",
			        "stylers": [
			            {
			                "weight": 0.5
			            },
			            {
			                "color": "#333333"
			            }
			        ]
			    },
			    {
			        "featureType": "transit.station",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "gamma": 1
			            },
			            {
			                "saturation": 50
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "all",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "saturation": 50
			            },
			            {
			                "hue": "#50a5d1"
			            }
			        ]
			    }

	    ];



	    var myOptions = {
	      zoom: 14,
	      scrollwheel: false,
	      center: myLatlng,
	         mapTypeControlOptions: {
	           mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
	        },
	        mapTypeId: MY_MAPTYPE_ID
	    }
	    var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

	    var markerImage = new google.maps.MarkerImage(
	        '../wp-content/themes/le_patio_theme/images/marker.png',
	        new google.maps.Size(36,47),
	        new google.maps.Point(0,0),
	        new google.maps.Point(18,47)
	    );


	    var marker = new google.maps.Marker({
	      icon: markerImage,
	      position: myLatlng,
	      map: map,
	      title:"Google Maps!"
	    });


	     

	      var styledMapOptions = {
	        name: "LE PATIO"
	      };
	     
	      var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);
	     
	      map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);




	    }



	    google.maps.event.addDomListener(window, 'load', initialize);

	}


	var intervalID;
	$('.menu-main-menu-container > ul > li > a').hover(
		function() {
			clearInterval(intervalID);
			$('.menu-main-menu-container > ul > li > a').removeClass('hover-menu'); 
			$(this).addClass('hover-menu');
		}, function() {
		    closeDropdownHover();
		}
	);

	$('.menu-main-menu-container > ul > li > a + *').hover(
		function() {
			clearInterval(intervalID);
		}, function() {
		    closeDropdownHover();
		}
	);


	function closeDropdownHover(){
		intervalID = setInterval(function(){
			$('.menu-main-menu-container > ul > li > a').removeClass('hover-menu'); 
		}, 400);

	}
});