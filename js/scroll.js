

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
    
});

// hide nav-list on mobile
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
 };





$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a",).on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// Cache selectors
var topMenu = $(".nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });



var img= $('img');
var hodor = $('#hodor');
var ifo = $('#ifo');
var img1Ifo = 'Pozvati za cenu <br> (+381)61/234-5678'
img.on('click', function(){
    ifo.html('');
    hodor.html('');
    var self = $(this);

    var copy = self.clone();
        copy.css({
            position : 'absolute',
            width: self.width(),
            height : self.height(),
            top : self.offset().top,
            left : self.offset().left
        });
        copy.animate({
            top : hodor.offset().top,
            left : hodor.offset().left,
            width : hodor.width(),
            height : hodor.height()

        }, 1000, function() {
            ifo.append(img1Ifo);

        });
    hodor.append(copy);
});





