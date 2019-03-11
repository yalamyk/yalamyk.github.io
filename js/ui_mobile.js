$(function(){
    $(".list_filter a").click(function() {
        $("#menu,.page_blur,html").addClass("open");
        window.location.hash = "#open";
      });
      
      window.onhashchange = function() {
        if (location.hash != "#open") {
          $("#menu,.page_blur,html").removeClass("open");
        }
      };
});