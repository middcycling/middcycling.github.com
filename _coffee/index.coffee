$ ->
	$('.index-slider').iosSlider
		snapToChildren: true
		snapSlideCenter: true
		infiniteSlider: true
		autoSlide: true
		autoSlideTimer: 2500
		keyboardControls: false
		scrollbar: false

	blurbpaths = [
		'/blurbs/construction.html'
		'/blurbs/strava.html'
	]
	random = Math.round(Math.random()*blurbpaths.length);
	randompath = blurbpaths[random]
	$('#blurb').load randompath

console.log 'Hello.'
# $ ->
# 	$('.blurb-slider').iosSlider
# 		snapToChildren: true
# 		snapSlideCenter: true
# 		infiniteSlider: true
# 		autoSlide: true
# 		autoSlideTimer: 2500
# 		keyboardControls: false
# 		scrollbar: false