$(document).ready(function(){
	$('html').click(function(){
		var randomNumber = Math.floor(Math.random() * 12) + 1;
		var newSource = "assets/yes" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
	});
});

