$(document).ready(function(){
	$('html').click(function(){
		var randomNumber = Math.floor(Math.random() * 12) + 1;
		var newSource = "assets/yes" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
	});
	$('#sadrefresh').click(function(){
		var randomNumber = Math.floor(Math.random() * 18) + 1;
		var newSource = "assets2/crying" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
	});
});

