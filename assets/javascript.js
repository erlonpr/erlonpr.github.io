var main = function() {

    $('.description').hide();
    $('.sub-description').hide();
    
  
    $('.item').click(function() {
        
        $('.description').hide(); 
        $(this).children('.description').show();
        
        $('.item').removeClass('reading');
        $(this).addClass('reading');
   
    });
    
    $('.sub-item').click(function() {
        $('.sub-description').hide();
        $(this).children('.sub-description').show();
    });
};

$(document).ready(main);