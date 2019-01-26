// Tab How It Work
$(".how-it-works-section .tab-wrapper .tab").on("click", function() {
	$(".how-it-works-section .tab-wrapper .tab").removeClass('active');
	$(this).addClass('active');

	if ($(this).text() == 'Personal') {
		$('.how-it-works-section .tab-content .content-wrap').removeClass('hide');
		$('.how-it-works-section .tab-content .tab-business').addClass('hide');
	}
	else{
		$('.how-it-works-section .tab-content .content-wrap').removeClass('hide');
		$('.how-it-works-section .tab-content .tab-personal').addClass('hide');
	}
});

$('header .nav-icon').on("click", function(){
	if ($('.header-menu ul.show').length == 1) {
		$('.header-menu ul').removeClass('show');
		$('.header-menu .bg-overlay').addClass('hide');
	}
	else{
		$('.header-menu ul').addClass('show');
		$('.header-menu .bg-overlay').removeClass('hide');
	}
})


var base_url = window.location.origin+''+window.location.pathname;
var header_element = '';

// FOR MENU CONTENT IN HERE, dummy_header for Text appear in Page
var dummy_header = ['About', 'How It Works', 'Sale', 'Team', 'Contact Us'];

// This part for link to each section
var dummy_link_id = ['about', 'how-it-work', 'sale', 'team', 'contact'];

for (var i = 0; i < dummy_header.length; i++) {
  if (dummy_header[i] == 'Contact Us') {
  	header_element += "<li><a href='"+base_url+"#"+dummy_link_id[i]+"' class='contact-us'>"+dummy_header[i]+"</a></li>";
  }
  else{
  	header_element += "<li><a href='"+base_url+"#"+dummy_link_id[i]+"'>"+dummy_header[i]+"</a></li>";
  }
}

$('.header-menu ul').append(header_element);

$('.bg-overlay').css('height', $('.header-menu ul').height());

$('.header-wrapper').on('click', '.header-menu ul a[href*="#"]:not([href="#"])',function() {
  var target;
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
    	if ($('.header-menu ul.show').length == 1) {
				$('.header-menu ul').removeClass('show');
				$('.header-menu .bg-overlay').addClass('hide');
			}
      $('html,body').animate({
        scrollTop: target.offset().top - 86
      }, 600);
      return false;
    }
  }
});