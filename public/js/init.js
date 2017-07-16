(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();

// Moves the carousel
    $('.carousel').carousel();
      setInterval(function() {
        $('.carousel').carousel('next');
      }, 3000); // every 3 seconds
  }); // end of document ready
})(jQuery); // end of jQuery name space
