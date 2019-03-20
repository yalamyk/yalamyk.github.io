$(function(){
  console.log('ui_mobile');
  $(".list_filter a").click(function() {
      $(".m_slider, .page_blur, html").addClass("open");
      window.location.hash = "#open";
      console.log(' window.location.hash : '+window.location.hash);
    }); 
    
    // window.onhashchange = function() {
    //   console.log('onhashchange : '+window.location.hash);
    //   if (window.location.hash !== "#open") {
    //     $(".m_slider,.page_blur,html").removeClass("open");
    //   }
    // };
      
});
function isValueTrue(num) {
  var num = document.getElementById(num).value;
  if(num){
    return true;
  }else{
    return false;
  }
}

