
$(document).ready(function(){
	 $('[data-toggle="popover"]').popover();

	 $("a").on('click', function(event) {
	    //hash is not empty
	    if (this.hash !== "") {
	      event.preventDefault();
	      // Store hash
	      var hash = this.hash;

	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 800, function(){
	   
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	      });
	    } 
	  });
	});

