var main = function() {

    $('.description').hide();
    $('.sub-description').hide();
    
    // $('.subject').click(function() {
    //     $(this).children('.list').toggle();
    // });
    
    $('.item').on( "click", function() {        
        
        $('.description').hide();
        $(this).children('.description').show();
               
        $('.item').removeClass('reading');
        $(this).addClass('reading');
        
    });

    $('.item').mouseup(function() {
        $('.sub-description').hide();
    });
    
    $('.sub-item').click(function() { 
        $('.sub-description').hide();
        $(this).children('.sub-description').show();          
    });
    
    
    $('.page_header').click(function() {
        $('.interface').toggle('slow');
        
        $('.description').hide();
        $('.item').removeClass('reading');
    });        
};

$(document).ready(main);