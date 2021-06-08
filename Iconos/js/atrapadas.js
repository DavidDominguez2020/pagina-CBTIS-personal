$(document).ready(function(){
	$("#ocultar").click(function(evento){
		evento.preventDefault();
		$("#ocultarone").hide(4000);
	});

	$("#mostrar").click(function(evento){
		evento.preventDefault();
		$("#ocultarone").show(3000)
	});

	$("#desvanecido").fadeOut(3000, function(){
		$("#desvanecido").css({'top':300, 'left':200});
		$("#desvanecido").fadeIn(3000);
	})

	$("#ocultarone").fadeOut(3000, function(){
		$("#ocultarone").css({'top':300, 'left':200});
		$("#ocultarone").fadeIn(3000);
	})

});