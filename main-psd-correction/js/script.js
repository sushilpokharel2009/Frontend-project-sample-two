$(document).ready(function(){
	$('.carousel').carousel({
		interval: 1000
	})

	$('.carousel1').carousel({
		interval: 1000
	})

	$('.btn-search').click(function(){
		$('.search-slide').slideToggle();
	})
});