$(document).ready(function(){
	$('#refresh').click(function(){
		$('#defaultgif').hide();
		var random = Math.floor(Math.random() * $('.randomgif').length);
		$('.randomgif').hide().eq(random).show();
	});
});

