$(document).ready(function() {
	$('#form_footer').submit(function(e) {
		e.preventDefault();

		$(this).hide();
		$('#enviado').fadeIn();
	});


});

/*
var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 300000); // every 5 minutes (300000)
*/