$(function(){
    
    
    $('a[href^="#"]').click(function(e){
        
        var target = $(this).attr('href');
        var strip = target.slice(1);
        var anchor = $("div[id='" + strip + "']");
        
        e.preventDefault();
        
        $('html, body').animate({
            
            scrollTop: anchor.offset().top
        },'slow');
    });
    
    
});