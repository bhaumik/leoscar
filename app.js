$(document).ready(function(){
	$('#refresh, img').click(function(){
		var randomNumber = Math.floor(Math.random() * 12) + 1;
		var newSource = "assets/yes" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
		$('h1').text("YES :)✨");
	});
	
	$('#sadrefresh').click(function(){
		var randomNumber = Math.floor(Math.random() * 18) + 1;
		var newSource = "assets2/crying" + randomNumber + ".gif";
		$('#homegif').attr("src", newSource);
		$('h1').text("Nooooo!!!! :( ");	});
});

