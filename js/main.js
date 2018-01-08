
/*

   $(document).ready(function($){

    var holder = $('#holder');
    var current = 1;
    var loop;

    loop = setInterval(next, 4000);

    function next (){
        current++;
        if(current === 8) {
           current = 1;
           $('#holder').css('margin-left','auto');
        };
        holder.append('<img src="img/'+current+'.jpg"></img>')
        holder.animate({
            'margin-left' : '-=1407'
        },1500);
    }
});


*/



 
/*$( document ).click(function() {
  $( ".box" ).toggle( "slide" );
});*/

$(document).ready(function(){
    
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        };
    });
    
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return true;
    });
    
};

