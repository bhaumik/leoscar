$(document).ready(function(){
	$('#refresh, img').click(function(){
		var randomNumber = Math.floor(Math.random() * 13) + 1;
		var newSource = "assets/yes" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
	});
});

