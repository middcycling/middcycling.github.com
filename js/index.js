(function() {
  $(function() {
    return $('.index-slider').iosSlider({
      snapToChildren: true,
      snapSlideCenter: true,
      infiniteSlider: true,
      autoSlide: true,
      autoSlideTimer: 2500,
      keyboardControls: false,
      scrollbar: false
    });
  });

  $(function() {
    return $('.blurb-slider').iosSlider({
      snapToChildren: true,
      snapSlideCenter: true,
      infiniteSlider: true,
      autoSlide: true,
      autoSlideTimer: 2500,
      keyboardControls: false,
      scrollbar: false
    });
  });

}).call(this);
