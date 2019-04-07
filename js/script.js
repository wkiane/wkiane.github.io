$(document).ready(function() {
	$('#form_footer').submit(function(e) {
		e.preventDefault();

		$(this).hide();
		$('#enviado').fadeIn();
	});


});