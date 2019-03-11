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


      // year picker
      $('#datepicker').datepicker({
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'yy',
        onClose: function(dateText, inst) { 
          var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
          $(this).datepicker('setDate', new Date(year, 1));
        }
      });
      $(".date-picker-year").focus(function () {
        $(".ui-datepicker-month").hide();
      });
});