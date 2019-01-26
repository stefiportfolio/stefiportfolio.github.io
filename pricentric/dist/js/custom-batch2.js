// For Pages 15 ++

// HOVER TR
$("table tbody tr:not(.btn-wrapper):not(.empty-tr):not(.no-hover)").on({
  mouseenter: function () {
      //stuff to do on mouse enter
      $(this).children('td').slice(0, 1).append("<span class='tr-hover'></span>");
  },
  mouseleave: function () {
      //stuff to do on mouse leave
      $(this).children('td').slice(0, 1).find('span.tr-hover').remove()
  }
});

// Function for count height of monitor
countHeight = function(){
	// Count max Height
	height_max = window.innerHeight;
	// 86 from first nav, 59 from secondary nav, 33 from margin top content, 67 from space from bottom
	height_content = height_max - 86 - 60 - 33 - 67;

	// Rule for scroll full
	if ($('.page15').length == 1 || $('.page16').length == 1 || $('.page17').length == 1 || $('.page18').length == 1 || $('.page19').length == 1 || $('.page20').length == 1 || $('.page21').length == 1 || $('.page22').length == 1 || $('.page23').length == 1 || $('.page24').length == 1 || $('.page28').length == 1 || $('.page30').length == 1 || $('.page31').length == 1 || $('.page32').length == 1 || $('.page34').length == 1 || $('.page38').length == 1) {
		// 113 from thead, 60 from tbody btn-wrap
		height_content_table = height_content - 113 - 60;
		$('.scroll-full').css('max-height', height_content_table);
		$('.scroll-full').css('height', height_content_table);
	}

	// For Scrool Without btn
	if ($('.page25').length == 1 || $('.page26').length == 1 || $('.page29').length == 1 || $('.page36').length == 1) {
		$('.scroll-without-btn').css('max-height', height_content - 105);
		$('.scroll-without-btn').css('height', height_content - 105);
	}

	if ($('.page25').length == 1 || $('.page36').length == 1) {
		height_content_table = height_content;
		$('.scroll-special').css('max-height', height_content_table - 60 - 126 - 54);
		$('.scroll-special').css('height', height_content_table - 60 - 126 - 54);
	}

	if ($('.page26').length == 1) {
		height_content_table = height_content - 54 - 52;
		$('.scroll-full').css('max-height', height_content_table);
		$('.scroll-full').css('height', height_content_table);
	}

	if ($('.page27').length == 1) {
		// 114 from thead, 60 from tbody btn-wrap
		height_content_table = height_content - 117 - 60;
		$('.scroll-full').css('max-height', height_content_table);
		$('.scroll-full').css('height', height_content_table);

		$('.scroll-without-btn').css('max-height', height_content - 117);
		$('.scroll-without-btn').css('height', height_content - 117);
	}

	if ($('.page29').length == 1) {
		// 114 from thead, 60 from tbody btn-wrap 
		height_content_table = height_content - 105 - 60;
		$('.scroll-full').css('max-height', height_content_table );
		$('.scroll-full').css('height', height_content_table );
	}
	if ($('.page38').length == 1) {
		$('.scroll-without-btn').css('max-height', height_content - 114);
		$('.scroll-without-btn').css('height', height_content - 114);
	}
	// Rule for empty tr table2 page 1
	if ( $('.page39').length == 1){
		// 86 from mini table in top, 20 from margin top, 50 from tab, 60 from btn wrapper
		height_content_table = height_content - 86 - 20 - 47 - 60
		$('.scroll-without-btn').css('max-height', height_content_table);
		$('.scroll-without-btn').css('height', height_content_table);

		height_content_table_tab_4 = height_content - 86 - 20 - 47
		$('#4 .scroll-without-btn').css('max-height', height_content_table_tab_4);
		$('#4 .scroll-without-btn').css('height', height_content_table_tab_4);

		// Left Table
		height_content_left_table = height_content - 105
		$('.table1 .scroll-without-btn').css('max-height', height_content_left_table);
		$('.table1 .scroll-without-btn').css('height', height_content_left_table);
	}
	if ($('.page40').length == 1) {
		// 114 from thead, 60 from tbody btn-wrap 
		height_content_table = height_content - 105 - 60;
		$('.scroll-full').css('max-height', height_content_table );
		$('.scroll-full').css('height', height_content_table );
	
		$('.scroll-without-btn').css('max-height', height_content_table);
		$('.scroll-without-btn').css('height', height_content_table);	
	}
}
countHeight();

$(window).on('resize', function(){
  countHeight();
});

// add more modal handler
$('.modal-body .add-more').on('click', function(){

	if($('.record-row').length < 7){
	  if($('.page34').length == 1){
			$(this).parent().find('.record-row:first').clone().appendTo(".modal-body .record-wrapper").find(' .datepicker-current-single-popup').dateRangePicker({
		    autoClose: true,
		    singleDate : true,
		    singleMonth: true,
		    startOfWeek: 'sunday',
		    language:'en',
		    format:'DD/MM/YYYY'
		  });
		}else{
			$(this).parent().find('.record-row:first').clone().appendTo(".modal-body .record-wrapper");
		}
	}
	if($('.record-row').length == 7){
		$(this).addClass('hide')
	}
})

$('.modal-body').on('click', '.icon-close',function(){
	$(this).parent().remove();
	if($('.record-row').length < 7){
		if ($('.add-more.hide').length == 1) {
			$('.add-more').removeClass('hide');
		}
	}
})

$('.modal-body').on('mouseenter','.record-row .icon-close', function(){
	$(this).parent().addClass('bg-on')
})
$('.modal-body').on('mouseleave','.record-row .icon-close', function(){
	$(this).parent().removeClass('bg-on')
})

// DATEPICKER
if($('.datepicker-current-single').length>0){
    
  if($('.page39').length == 1 || $('.page38').length == 1){
  	$('.datepicker-current-single#start-date').dateRangePicker({
	    autoClose: true,
	    singleDate : true,
	    singleMonth: true,
	    startOfWeek: 'sunday',
	    language:'en',
	    format:'DD/MM/YYYY',
	    customClass: 'some-css-class' 
	  });
		$('.datepicker-current-single#end-date').dateRangePicker({
	    autoClose: true,
	    singleDate : true,
	    singleMonth: true,
	    startOfWeek: 'sunday',
	    language:'en',
	    format:'DD/MM/YYYY'
	  });  
		if($('.datepicker-current-single#ind-date-1').length>0){
			$('.datepicker-current-single#ind-date-1').dateRangePicker({
		    autoClose: true,
		    singleDate : true,
		    singleMonth: true,
		    startOfWeek: 'sunday',
		    language:'en',
		    format:'DD/MM/YYYY'
		  });	
		}
		
  }
  else{
	  $('.datepicker-current-single').dateRangePicker({
	    autoClose: true,
	    singleDate : true,
	    singleMonth: true,
	    startOfWeek: 'sunday',
	    language:'en',
	    format:'DD/MM/YYYY'
	  });	
  }
}
$('#addApprovalModal .modal-body .record-row').each(
	function(){
		$(this).find(' .datepicker-current-single-popup').dateRangePicker({
	    autoClose: true,
	    singleDate : true,
	    singleMonth: true,
	    startOfWeek: 'sunday',
	    language:'en',
	    format:'DD/MM/YYYY'
	  });
	}
)
$('#change-level span').on('click', function(){
	$('#change-level span').removeClass('active')
	$(this).addClass('active')
})
$('#show-with-history').on('click', function(){
	$('.with-history').toggleClass('hide')
})
$('td.td-star').on('click', function(){
	// console.log($(this).attr('id'))
	if($(this).attr('id')=='make-all-star'){
		if($(this).find('span.icon').attr('class').indexOf('icon-star-nocolor')>0){
			$('td.td-star').find('span.icon').removeClass('icon-star-nocolor')
			$('td.td-star').find('span.icon').addClass('icon-star')
				
		}else{
			$('td.td-star').find('span.icon').removeClass('icon-star')
			$('td.td-star').find('span.icon').addClass('icon-star-nocolor')
		}
	}else{
		$(this).find('span.icon').toggleClass('icon-star')
		$(this).find('span.icon').toggleClass('icon-star-nocolor')
	}
})

// Gear Header Click
$('.navbar-right .icon-gear').on('click', function(){
	$('.list-popup').toggleClass('hide');
})

// Close Popup When click outer element
$(document).mouseup(function(e) {
  if ($(e.target).closest('.list-popup').length == 0 && $(e.target).closest('.navbar-right .icon-gear').length == 0) {
  	if (!$('.list-popup').hasClass('hide')) {
      $('.list-popup').addClass('hide');
    }
  }
});