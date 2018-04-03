//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$( document ).ready(function() {
  $(document).on('click', '#btn', function(event){
      event.preventDefault();
      var offset = - 210;

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top + offset
      }, 500);
  });
});

$( document ).ready(function() {
  $(document).on('click', '#btn1', function(event){
      event.preventDefault();
      var offset = - 300;

      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top + offset
      }, 500);
  });
});
