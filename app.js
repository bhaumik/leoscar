$(document).ready(function(){
	$('#refresh').click(function(){
		var randomNumber = Math.floor(Math.random() * 18) + 1;
		var newSource = "assets/crying" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
	});
});

