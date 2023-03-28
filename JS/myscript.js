$(document).ready(function(){
   
   $(window).scroll(function(){
          
           // scroll-up button show/hide script
           if(this.scrollY > 200){
               $('#upbtn').css("display", "block");
           }else{
               $('#upbtn').css("display", "none");
           }
       });
    
    function navcolor(){
              var nav = document.getElementById('navbar');
              nav.classList.toggle("nav-back");
            }

    $('.navbar-toggler').click(function(){
      var nav = document.getElementById('navbar');
      nav.classList.toggle("nav-back");
    });
    
    $('.carousel').carousel(function(){
      interval: 1500
    })

    $('#home-tab').click(function(){
        $(".beverages").css("display", "block");
        $(".appetizers").css("display", "block");
    });


    $('#second-tab').click(function(){
        $(".appetizers").css("display", "block");
        $(".beverages").css("display", "none");
    });


    $('#third').click(function(){
        $(".appetizers").hide();
        $(".beverages").show();
    });







    // pre-loader

  var loader;

  function loadNow(opacity) {
      if (opacity <= 0) {
          displayContent();
      } else {
          loader.style.opacity = opacity;
          window.setTimeout(function() {
              loadNow(opacity - 0.10);
          }, 100);
      }
  }

  function displayContent() {
      loader.style.display = 'none';
      $('#loader').fadeOut(1000);
      
  }

  document.addEventListener("DOMContentLoaded", function() {
      loader = document.getElementById('loader');
      loadNow(1);
  });

});