$(document).ready(function(){
  
    function resizePriceBoxes(){
      
      var resizeArray = ['.col-boxes','.description-container','h3']
      var arrayLength = resizeArray.length;
      var maxHeight = [];
      
      for (var i = 0; i < arrayLength; i++) {
        maxHeight[i] = 0;
        $(".section-program-boxes "+ resizeArray[i]).each(function () {
           if ($(this).height() > maxHeight[i]) { maxHeight[i] = $(this).height(); }
        });
        $(".section-program-boxes "+ resizeArray[i]).height(maxHeight[i]);
      }
    
    }
        
    resizePriceBoxes();
    window.addEventListener("resize", resizePriceBoxes);

    $('.cta-tool-box ul li').on("click",function(){
        href = $(this).attr('data-target');
        window.location.href = href;
    });
    
    $('.down-move').on("click",function(){
      var top = $(this).closest('section').next('section').offset().top;
      console.log(top);
      $('html,body').animate({
        scrollTop: top
      },200);
    });
    
  })