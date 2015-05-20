$(function() {
	$( "#b1" ).click(function() {
   $( "#slide1" ).addClass( "vis" );
});
	$( "#bc1" ).click(function() {
   $( "#slide1" ).removeClass( "vis" );
});
		$( "#b2" ).click(function() {
   $( "#slide2" ).addClass( "vis" );
});
	$( "#bc2" ).click(function() {
   $( "#slide2" ).removeClass( "vis" );
});
		$( "#b3" ).click(function() {
   $( "#slide3" ).addClass( "vis" );
});
	$( "#bc3" ).click(function() {
   $( "#slide3" ).removeClass( "vis" );
});
		$( "#b4" ).click(function() {
   $( "#slide4" ).addClass( "vis" );
});
	$( "#bc4" ).click(function() {
   $( "#slide4" ).removeClass( "vis" );
});
		$( "#b5" ).click(function() {
   $( "#slide5" ).addClass( "vis" );
});
	$( "#bc5" ).click(function() {
   $( "#slide5" ).removeClass( "vis" );
});
		$( "#b6" ).click(function() {
   $( "#slide6" ).addClass( "vis" );
});
	$( "#bc6" ).click(function() {
   $( "#slide6" ).removeClass( "vis" );
});

		$( "#allweb" ).click(function() {
   $( "#add" ).addClass( "vis" );
   $( "#allweb" ).addClass( "novis" );
   $( "#allweb2" ).removeClass( "novis" );
   
});
	$( "#allweb2" ).click(function() {
   $( "#add" ).removeClass( "vis" );
   $( "#allweb" ).removeClass( "novis" );
   $( "#allweb2" ).addClass( "novis" );
});

});
