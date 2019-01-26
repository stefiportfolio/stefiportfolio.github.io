
slide('.testimoni-section');

// SPECIAL CASE FOR COMPANY LOGO 
// just show in mobile version
$(document).ready(function() {
  checkResolution()
});
$(window).resize(function(){
  checkResolution()
});

function checkResolution(){
  var width_window = $(window).width();
  
  if (width_window < 1024) {
    if(!$('.company-logo').hasClass('slide-container')){
      $('.company-logo').addClass('slide-container')
      $('.company-logo li').addClass('slide')
      $('.company-logo .dot-wrap').removeClass('hide')
      slide('.company-logo');  
    }
  }
  else{
    $('.company-logo').removeClass('slide-container')
    $('.company-logo li').removeClass('slide')
    $('.company-logo li').css('display','inherit')
    $('.company-logo .dot-wrap').addClass('hide')
    $('.company-logo .dot-wrap').html('')
    
  }
}

function slide(selector){

  setDotSlide(selector) // set dot pagination
  
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

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  var slideTimer;
  function plusSlides(n) {
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
    for (i = 0; i < dots.length; i++) {
      $(dots[i]).removeClass('active')
    }
    $(slides[slideIndex-1]).css('display','block')
    $(dots[slideIndex-1]).addClass('active')

    slideTimer = setTimeout(showSlidesAuto, 5000); // Change image every 2 seconds
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