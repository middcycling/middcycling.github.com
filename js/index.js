(function() {
  $(function() {
    return $('.index-slider').iosSlider({
      snapToChildren: true,
      snapSlideCenter: true,
      infiniteSlider: true,
      autoSlide: true,
      autoSlideTimer: 2500,
      keyboardControls: true,
      scrollbar: false
    });
  });

}).call(this);
