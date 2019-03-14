$(function(){
    // $(".list_filter a").click(function() {
    //     $(".m_slider, .page_blur, html").addClass("open");
    //     window.location.hash = "#open";
    //     console.log(' window.location.hash : '+window.location.hash);
    //   }); 
      // window.onhashchange = function() {
      //   console.log('onhashchange : '+window.location.hash);
      //   if (window.location.hash != "#open") {
      //     $(".m_slider,.page_blur,html").removeClass("open");
      //   }
      // };

      // year picker
      // $('#picker_year_start').datepicker({
      //   changeYear: true,
      //   showButtonPanel: true,
      //   dateFormat: 'yy',
      //   yearRange: "-500:+0",
      //   onClose: function(dateText, inst) { 
      //     var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
      //     $(this).datepicker('setDate', new Date(year, 1));
      //   }
      // });

      // $('#picker_year_end').datepicker({
      //   changeYear: true,
      //   showButtonPanel: true,
      //   dateFormat: 'yy',
      //   yearRange: "-500:+0",
      //   onClose: function(dateText, inst) { 
      //     var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
      //     $(this).datepicker('setDate', new Date(year, 1));
      //   }
      // });


// jQuery(function(){
// var footerAbsoluteBottom = function(){
// var windowHeight = $(window).outerHeight();
// var footerHeight = $('#footer').outerHeight();
// $('#wrapper').css(
// {
// 'min-height' : windowHeight,
// 'padding-bottom' : footerHeight
// }
// );
// }
// $(window).resize(function(){
// footerAbsoluteBottom();
// });
// $(document).ready(function(){
// footerAbsoluteBottom();
// });
// });
// <style>
// #wrapper{position:relative;}
// #footer{position:absolute;left:0;bottom:0;width:100%;}
// </style>


      $(".date-picker-year").focus(function () {
        $(".ui-datepicker-month").hide();
      });
});