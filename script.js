$(document).ready(function(){	
	$('#find').click(function(){
		var celebrity1 = $('#celebrity1').val();
		var celebrity2 = $('#celebrity2').val();
		var op = "<h5>Degree of Seperation: 3</h5>";
		op += "<div class='order'></div>";
		op += "<div class='order'></div>";
		op += "<div class='order'></div>";
		$('#notice-area').html(op);
	});
});