var $win = $(window);
var $featureSection = $('.feature-section');
var $socialSection = $('.social-section');
var $social = $('.social');

$win.on('scroll', function () { 
	var scrollPos = $win.scrollTop();
console.log(scrollPos);

	$featureSection.css('background-position','center ' + scrollPos / 3 + 'px');
});


$socialSection.waypoint(function () {
	$social.addClass('js-social-animation');


}, { offset: '100%' });
