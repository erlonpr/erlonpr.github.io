var main = function() {

    $('.description').hide();
    $('.sub-description').hide();
    
    // $('.subject').click(function() {
    //     $(this).children('.list').toggle();
    // });
  
    $('.item').click(function() {
        
        $('.description').hide();
        
        // $('.sub-description').hide();            o erro esta aqui
        $(this).children('.description').show();
        
        $('.item').removeClass('reading');
        $(this).addClass('reading');
   
    });
    
    $('.sub-item').click(function() {
        $('.sub-description').hide();
        $(this).children('.sub-description').show();
    });
    
    
    $('.page_header').click(function() {
        $('.interface').toggle();
    });    
    
    
     
    
    
    
};

$(document).ready(main);