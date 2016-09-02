var main = function() {

  $('.description').hide();
  
   $('.item').click(function() {
     $(this).children('.description').toggle();
     $(this).addClass('reading');
   });
};

$(document).ready(main);