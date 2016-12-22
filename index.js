$(document).ready(function(){
	var navMap = {"uxNav" : 0, "webNav" : 1, "visNav" : 2, "aboutNav" : 3};

	$('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  arrows: false,
	  draggable: false
	});

	$("#sliderNav li").click(function(){
		var id = $(this)[0].id;
		$(".slider").slick("slickGoTo", navMap[id], "false")
	})
})