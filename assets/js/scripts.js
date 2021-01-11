$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("a").click(function(event){
       if(this.hash !==""){
         event.preventDefault();

         var gato = this.hash;

         $("html, body").animate({
           scrollTop: $(gato).offset().top 
         }, 800, function(){
           window.location.hash = gato;
         });
       }   
    });

    $("#hamburger").click(function (event) {
      if (document.getElementById("navHamburger").className.match(/(?:^|\s)navBar_250(?!\S)/)) {
      document.getElementById("navHamburger").className = document.getElementById("navHamburger").className.replace(/(?:^|\s)navBar_250(?!\S)/g, '')
      } else {
      document.getElementById("navHamburger").className += " navBar_250";
      } 
      }); 


});