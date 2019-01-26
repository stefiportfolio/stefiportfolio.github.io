// MAXIMUM TAG INPUT
$('.search input').tagsinput({
   maxTags: 5,
});

// HANDLER FOR REMOVE ALL TAGS
// 1 if min 1 tag, add remove button
$('.search input').on('beforeItemAdd', function(event) {
  $('.search .remove-container').removeClass('hide')
});
// 2 left 0 tag remove remove button
$('.search input').on('itemRemoved', function(event) {
  var tagLength = $('#search-taginput').tagsinput()[0].itemsArray.length
  if(tagLength==0){
    $('.search .remove-container').addClass('hide')  
  }
});

// REMOVE ALL TAG
$("#remove").on("click", function() {
	$('#search-taginput').tagsinput('removeAll');
  $('.search .remove-container').addClass('hide')
});

// DATEPICKER Function
$('.mydatepicker').datepicker({
  format: "dd / mm / yyyy"
}).on('change', function(){
    $('.datepicker').hide();
});
$('.mydatemonthpicker').datepicker({
	format: "MM yyyy",
    startView: "months", 
    minViewMode: "months"})
$(".mydatemonthpicker").datepicker("setDate", new Date());

// Handler when checkbox is checked (example = PAGE11)
if ($('.page11').length == 1 || $('.page10').length == 1 || $('.page7').length == 1) {
  $(":checkbox").on('click', function(){
	  $(this).parent().parent().find('td').toggleClass("blue-font");
	});
}

// HOVER TR
$("table tbody tr:not(.btn-wrapper):not(.empty-tr):not(.no-hover):not(.thead-special)").on({
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
	// 86 from first nav, 59 from secondary nav, 33 from margin top content, 23 from space from bottom
	height_content = height_max - 86 - 59 - 33 - 67;

	// Rule for page 11
	if ($('.page11').length == 1 || $('.page9').length == 1 || $('.page8').length == 1 || $('.user1').length == 1 || $('.page2').length == 1 ||  $('.page1').length == 1 ||  $('.page4').length == 1 ||  $('.page5').length == 1 ||  $('.page6').length == 1 || $('.page14').length >= 1) {
		// 114 from thead, 60 from tbody btn-wrap
		height_content_table = height_content - 113;
		$('.scroll-without-btn').css('max-height', height_content_table);
		$('.scroll-without-btn').css('height', height_content_table);
	}
	// Rule for scroll full
	if ($('.page13').length == 1 || $('.page12').length == 1 || $('.page11').length == 1 || $('.page10').length == 1 || $('.page7').length == 1 ||  $('.page2').length == 1 ||  $('.page3').length == 1 ||  $('.page8').length == 1 || $('.page9').length == 1 || $('.page14').length >= 1) {
		// 114 from thead, 60 from tbody btn-wrap
		height_content_table = height_content - 113 - 60;
		$('.scroll-full').css('max-height', height_content_table);
		$('.scroll-full').css('height', height_content_table);
	}

	// Rule for Right table (blue table)
	if ($('.page2').length == 1 || $('.page3').length == 1 || $('.page5').length == 1){
		// 54 from header blue, 60 from btn-wrap, 228 from content static
		height_content_table_right = height_content - 45 - 60;
		$('.table2 .scroll-without-btn').css('max-height', height_content_table_right);
		$('.table2 .scroll-without-btn').css('height', height_content_table_right);
	}

	// Rule for empty tr table2 page 1
	if ($('.page1').length == 1){
		height_max = window.innerHeight;
		height_content = height_max - 90 - 60 - 34 - 68;
		$('.col-scroll').css('max-height', height_content);
	}

	// Scroll Left table page 3
	if ($('.page3').length == 1){
		height_content_table = height_content - 113;
		$('.table1 .scroll-without-btn').css('max-height', height_content_table);
		$('.table1 .scroll-without-btn').css('height', height_content_table);
	}

	// Rule for email notif table2 page 4
	if ($('.page4').length == 1){
		height_content_table = height_content - 54 - 60 -37 -61;
		$('.email-notif-desc').css('height', height_content_table);
	}

	// Rule for empty tr table2 page 6
	if ($('.page6').length == 1){
		height_content_table = height_content - 54 - 60;
		$('tbody.scroll-full').css('height', height_content_table);
	}

}
countHeight();

$(window).on('resize', function(){
  countHeight();
});

// Page 1 - Chart
if ($('.page1').length == 1){
	
	// CHART SETTING
	Highcharts.chart('container', {
	  data: {
	        table: 'datatable',

	    },series: [{
	       showInLegend: false
	  }],
	  chart: {
	      type: 'column',
	      margin: [50, 35, 100, 80]
	  },
	  title: {
	      text: 'Price Type Comparison',
	      x:24,
	      align:'left',
	       style: {
	          color: '#707c84',
	          fontSize:'16px'
	      }
	  },
	  yAxis: {
	      allowDecimals: false,
	      title: {
	          text: 'Units'
	      },
	      maxPadding: 0,
	      labels: {
	         style: {
	            color: '#99abb4',
	         }
	      },
	  },
	  xAxis: {
	      labels: {
	         style: {
	            color: '#99abb4',
	         }
	      },
	  },
        plotOptions: {
            series: {
                pointPadding: 0,
                groupPadding: 0.25
            }
        },
	  tooltip: {
	      formatter: function () {
	          return '<b>' + this.series.name + '</b><br/>' +
	              this.point.y + ' ' + this.point.name.toLowerCase();
	      }
	  }
	});
}

// DROPDOWN CHECKBOX
var options = [];
$( '.dropdown-menu a' ).on( 'click', function( event ) {
   var $target = $( event.currentTarget ),
       val = $target.attr( 'data-value' ),
       $inp = $target.find( 'input' ),
       idx;

   if ( ( idx = options.indexOf( val ) ) > -1 ) {
      options.splice( idx, 1 );
      setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
   } else {
      options.push( val );
      setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
   }
   $( event.target ).blur();
   return false;
});
$( '.dropdown-menu .btn3' ).on( 'click', function( event ) {
	var $target = $( event.currentTarget ),
   		$inp = $target.parent().parent().find( 'input' )
   	setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
	return false
})

// Page 3 - edit button click & Cancel button click
if ($('.page3').length == 1){
	$('.page3 .edt-btn').on('click', function(){
		$(this).addClass('hide');
		$('.add-con-btn').addClass('hide');
		$('.cncl-btn,.save-btn').removeClass('hide');

		$(this).parent().parent().parent().parent().find('tbody.scroll .value-col').addClass('p0');
		$(this).parent().parent().parent().parent().find('tbody.scroll .value-col').removeClass('pleft20');
		$(this).parent().parent().parent().parent().find('tbody.scroll .value-col:not(.js-flag)').addClass('pleft8');
		$(this).parent().parent().parent().parent().find('tbody.scroll .value').addClass('hide');
		$(this).parent().parent().parent().parent().find('tbody.scroll .edit-value').removeClass('hide');

	})
	$('.page3 .cncl-btn').on('click', function(){
		$(this).addClass('hide');
		$('.save-btn').addClass('hide');
		$('.edt-btn, .add-con-btn').removeClass('hide');

		$(this).parent().parent().parent().parent().find('tbody.scroll .value-col').removeClass('p0');
		$(this).parent().parent().parent().parent().find('tbody.scroll .value-col').addClass('pleft20');
		$(this).parent().parent().parent().parent().find('tbody.scroll .value-col:not(.js-flag)').removeClass('pleft8');
		$(this).parent().parent().parent().parent().find('tbody.scroll .value').removeClass('hide');
		$(this).parent().parent().parent().parent().find('tbody.scroll .edit-value').addClass('hide');
	})
}

// Page 3 - Edit email icon
$(".page3 .icon-edit").on("click", function(){
	$(this).parent().parent().find('.email-text').addClass('hide')
	$(this).parent().parent().find('.email-set').addClass('hide')
	$(this).parent().parent().find('.save-active').removeClass('hide')
	$(this).parent().parent().find('.edit-email').removeClass('hide')
})

// Page 3 - Save Email btn
$(".page3 .save-email-btn").on("click", function(){
	$(this).parent().parent().find('.email-text').removeClass('hide')
	$(this).parent().parent().find('.email-set').removeClass('hide')
	$(this).parent().parent().find('.save-active').addClass('hide')
	$(this).parent().parent().find('.edit-email').addClass('hide')
})

// Page 4 - Text Editor
$(".page4 .edit-btn").on("click",function(){
	$('.page4 #email-notif-text').addClass('hide')
	CKEDITOR.replace( 'editor' ,{height: "400px"});
	$('.page4 #default-wrap,.page4 .attc-file').addClass('hide')
	$('.page4 .save-btn').addClass('show');
});
$(".page4 .save-btn").on("click",function(){
	$('.page4 #email-notif-text').removeClass('hide')
	$('.page4 .editor').hide()
	CKEDITOR.instances.editor.destroy();
	$('.page4 #default-wrap,.page4 .attc-file').removeClass('hide')
	$('.page4 .save-btn').removeClass('show');
})

// Page 2 - VALIDATION POP UP
$('.page2 .create-org-btn').on('click',function(){
	var check_valid = 3 //org_name, start_date, end_date
	if($('.page2 input#start-date').val()!=''){
		check_valid-=1;
	}
	if($('.page2 input#end-date').val()!=''){
		check_valid-=1;
	}
	if($('.page2 input#org-name').val()!=''){
		check_valid-=1;
	}
	if(check_valid!=0){
		$('#myModalNotComplete').modal('toggle');
	}else{
		$('#myModalComplete').modal('toggle');
	}
})
// Page 3 - VALIDATION POP UP
$('.page3 .save-btn').on('click',function(){
	var check_valid = 3 //org_name, start_date, end_date
	if($('.page3 input#start-date').val()!=''){
		check_valid-=1;
	}
	if($('.page3 input#end-date').val()!=''){
		check_valid-=1;
	}
	if($('.page3 input#user-name').val()!=''){
		check_valid-=1;
	}
	if(check_valid!=0){
		$('#myModalNotComplete').modal('toggle');
	}else{
		$('#myModalComplete').modal('toggle');
	}
})
// Page 5 - VALIDATION POP UP
$('.page5 .create-user').on('click',function(){
	var check_valid = 3 //email, fname, lname
	if($('.page5 input#first_name').val()!=''){
		check_valid-=1;
	}
	if($('.page5 input#last_name').val()!=''){
		check_valid-=1;
	}
	if($('.page5 input#email').val()!=''){
		check_valid-=1;
	}
	if(check_valid!=0){
		$('#myModalNotComplete').modal('toggle');
	}else{
		$('#myModalComplete').modal('toggle');
	}
})
// Page 6 - VALIDATION POP UP
$('.page6 .save-btn').on('click',function(){
	var check_valid = 3 //email, fname, lname
	if($('.page6 input#first_name').val()!=''){
		check_valid-=1;
	}
	if($('.page6 input#last_name').val()!=''){
		check_valid-=1;
	}
	if($('.page6 input#email').val()!=''){
		check_valid-=1;
	}
	if(check_valid!=0){
		$('#myModalNotComplete').modal('toggle');
	}else{
		$('#myModalComplete').modal('toggle');
	}
})
// Page 10 Dropdown Select handler
$("select").on('change', function() {
	if (this.value == 'Active') {
		$(this).parent().parent().find('.circle-custom').attr('class',"green-circle circle-custom");
	}
	if (this.value == 'Non Active') {
		$(this).parent().parent().find('.circle-custom').attr('class',"red-circle circle-custom");
	}
	if (this.value == 'Relish') {
		$(this).parent().parent().find('.circle-custom').attr('class',"grey-circle circle-custom");
	}
})

// Page 14 - Star / empty star click
if ($('.page14').length >= 1){
	$(".page14 table").on("click", '.glyphicon-star', function(){
		$(this).removeClass('glyphicon-star');
		$(this).addClass('glyphicon-star-empty');
	})
	$(".page14 table").on("click", '.glyphicon-star-empty', function(){
		$(this).removeClass('glyphicon-star-empty');
		$(this).addClass('glyphicon-star');
	})
}

// Page 14 - Pop UP
$('.page14 .icon-trash').on('click',function(){
	$('#myModalConfirmRegDelete').modal('toggle');
})
$('.page14 .restore-btn').on('click',function(){
	$('#myModalConfirmRegRestore').modal('toggle');
})

// add more modal handler
$('.modal-body .add-more').on('click', function(){
	console.log($('.record-row').length)
	if($('.record-row').length < 7){
		$(this).parent().find('.record-row:first').clone().appendTo(".modal-body .record-wrapper");
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
    
  if($('.page39').length == 1 || $('.page38').length == 1 || $('.page2').length == 1 || $('.page3').length == 1 ){
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