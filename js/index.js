(function() {
  $(function() {
    var blurbpaths, random, randompath;
    $('.index-slider').iosSlider({
      snapToChildren: true,
      snapSlideCenter: true,
      infiniteSlider: true,
      autoSlide: true,
      autoSlideTimer: 2500,
      keyboardControls: false,
      scrollbar: false
    });
    blurbpaths = ['/blurbs/construction.html', '/blurbs/strava.html', '/blurbs/bikeshop.html', '/blurbs/grouprides.html'];
    random = Math.round(Math.random() * (blurbpaths.length - 1));
    randompath = blurbpaths[random];
    return $('.blurb').load(randompath);
  });

  console.log('Hello.');

}).call(this);
