var send_form = function(e, form){
	e.preventDefault();
	var serializeDados = form.serialize();
	var btn = form.find("input[type='submit']");

	console.log(serializeDados);
	 
	$.ajax({
		url: 'http://localhost/willa_form/index.php',
		dataType: 'html',
		type: 'POST',
		data: serializeDados,
		beforeSend: function() {
			btn.val( "Aguarde..." );
		},
		success: function(data, textStatus) {
			form.hide();
			console.log(textStatus);
			console.log(data);
			
			$('#enviado').fadeIn();

		},
		error: function(xhr,er) {
			$('#erro').fadeIn();
			console.log('Error ' + xhr.status + ' - ' + xhr.statusText + ' - Tipo de erro: ' + er);
		}
	});     
}

$(document).ready(function() {
	$('#form_footer').submit(function(e) {
		e.preventDefault();
		send_form(e, $(this));
		//$(this).hide();
		//$('#enviado').fadeIn();
	});

	setInterval(function() {
		$('.whatsapp-floating').toggleClass('always-shake');
	}, 3000);


});

/*
var http = require("http");
setInterval(function() {
    http.get("http://<your app name>.herokuapp.com");
}, 300000); // every 5 minutes (300000)
*/