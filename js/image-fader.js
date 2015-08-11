$(document).ready(function(){

  // fade images out
  $('#gallery img').fadeTo('slow', 0.25);

  // detect user hovering on images inside #gallery
  $('#gallery img').hover(function() {
    // fade images back in.
    $(this).fadeTo(800, 1);
  }, function() {
    // on mouse off fade images back out
    $(this).fadeTo(600, 0.25);
  });

  // Activate fancybox plugin: http://fancyapps.com/fancybox/#instructions
  $('#gallery a').fancybox({
    type: 'image'
  });

});