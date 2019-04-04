 
$(document).ready(function(){  // Add smooth scrolling to all links
  
  $("a").on('click', function(event) {

    
    if (this.hash !== "") { // Make sure this.hash has a value before overriding default behavior
      
    event.preventDefault(); // Prevent default anchor click behavior

    var hash = this.hash; // Store hash

    $('html, body').animate({ // Using jQuery's animate() method to add smooth page scroll
    scrollTop: $(hash).offset().top
    
    }, 900, function(){ // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
 
    window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
    });
    
    } // End if
  });
});
 

/* SINGLE LINK animate smooth scroll
$('#view-work').on('click', function(){
    const images = $('#images').position().top;

    $('html, body').animate(
    {
        scrollTop: images
    }, 
    900
    );
});*/