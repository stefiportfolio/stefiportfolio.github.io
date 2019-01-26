
slide('.news-art-content .news-wrap .list-wrap-outer', false, false, 3);
slide('.news-art-content .art-wrap .list-wrap-outer', false, false, 3);

function slide(selector, dotSlider, autoSlider, size){

  if(dotSlider){
    setDotSlide(selector) // set dot pagination
  }
  
  // Pagination slide
  function setDotSlide(selector){
    var slides = document.querySelectorAll(selector+" .slide");
    for (var j = 1; j <= slides.length; j++) {
      // APPEND DOT ELEMENT PAGINATION
      var classSelector = selector.replace('.', '');
      var tmp_ele = '<span class="dot" id="dot-'+j+'-'+classSelector+'" ><span class="dot-inside"></span></span> '
      $('.slide-container'+selector+' .dot-wrap').append(tmp_ele)
      
      // ADD CLICK FUNCTION
      var td
      td = document.getElementById('dot-'+j+'-'+classSelector);
      
      if (typeof window.addEventListener === 'function'){
        (function (_td) {
          td.addEventListener('click', function(){ 
            var thenum = (_td.id).match(/\d/g);
            thenum = thenum.join("");

            currentSlide(thenum)
          });
        })(td);
      }
    }

  }

  // Next Prev SLides 
  $(selector + " .prev").click(function(){
    plusSlides(-1)
  }); 
  $(selector + " .next").click(function(){
    plusSlides(1)
  });

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  var slideTimer;
  function plusSlides(n) {
    if(size){
      n = size
    }
    showSlides(slideIndex += n);
    clearTimeout(slideTimer)
    doSlide = 0

  }
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
    doSlide = 0
    clearTimeout(slideTimer)
  }
  // slide show
  function showSlides(n) {
    var i;
    var slides  = $(selector+' .slide')
    var dots =  $(selector+' .dot')
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).css('display','none')
    }
    if(dotSlider){
      for (i = 0; i < dots.length; i++) {
        $(dots[i]).removeClass('active')
      }  
    }

    for (var i = slideIndex-1; i < (slideIndex-1)+size; i++) {
      $(slides[i]).css('display','block')
      // $(slides[i]).removeClass('mright75')
      if(dotSlider){
        $(dots[i]).addClass('active')
      }
      // $(slides[]).css('display','block')
    }

    // count block slide 
    // var tmp_count_block = 0
    // for (i = 0; i < slides.length; i++) {
    //   // $(slides[i]).css('display','none')
    //   if($(slides[i]).css('display')!='none'){
    //     tmp_count_block+=1
    //   }
    // }

    // console.log();
    // if(tmp_count_block<size){
    //   if(! $(selector).hasClass('flex-start')){
    //     $(selector).addClass('flex-start')
    //   }
    // }else{
    //   if($(selector).hasClass('flex-start')){
    //     $(selector).removeClass('flex-start')
    //   }
    // }
    // if(tmp_count_block<size){
    //   for (var i = slideIndex-1; i < (slideIndex-1)+size; i++) {
    //     $(slides[i]).addClass('mright75')
    //   }
    // }

    if(autoSlider){
      slideTimer = setTimeout(showSlidesAuto, 5000); // Change image every 2 seconds
    }
  }
  // slide auto
  var doSlide = 0
  function showSlidesAuto() {
    var i;
    var slides  = $(selector+' .slide')
    var dots =  $(selector+' .dot')

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}   
    if(slideIndex <= slides.length){
      doSlide = 1
    } 
    if(doSlide==1){
      for (i = 0; i < slides.length; i++) { 
        $(slides[i]).css('display','none')
      }
      for (i = 0; i < dots.length; i++) {
        $(dots[i]).removeClass('active')
      }
      $(slides[slideIndex-1]).css('display','block')
      $(dots[slideIndex-1]).addClass('active')
      
      slideTimer = setTimeout(showSlidesAuto, 5000);
    }  
  }
}