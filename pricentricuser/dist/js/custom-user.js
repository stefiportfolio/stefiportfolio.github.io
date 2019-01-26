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

// Function for count height of monitor
countHeight = function(){
	// Count max Height
	height_max = window.innerHeight;
	// 86 from first nav, 59 from secondary nav, 35 from space from bottom
	height_content = height_max - 86 - 59 - 35;

	// Rule for scroll table without button
	if ($('.user2').length == 1 || $('.user3').length == 1 || $('.user4')) {
		height_content_table = height_content - 95;
		$('.scroll-without-btn').css('max-height', height_content_table);
		$('.scroll-without-btn').css('height', height_content_table);
	}

	// Rule for scroll full
	// if () {
	// 	// 114 from thead, 60 from tbody btn-wrap
	// 	height_content_table = height_content - 113 - 60;
	// 	$('.scroll-full').css('max-height', height_content_table);
	// 	$('.scroll-full').css('height', height_content_table);
	// }
}
countHeight();

$(window).on('resize', function(){
  countHeight();
});

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

// Table Hover
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

// Report Modal HANDLER
$('#reportModal .opt-wrapper span').on('click', function(){
    $('#reportModal span').removeClass('active');
    $(this).addClass('active');
    $('#reportModal .tab').addClass('hide');
    $(this).parent().parent().find('.tab.'+$(this).attr('mod')+'-wrapper').removeClass('hide');
})
// Market Basket Handler
$('#marketModal .opt-wrapper span').on('click', function(){
    $('#marketModal .opt-wrapper span').removeClass('active');
    $(this).addClass('active');
    $('#marketModal .tab').addClass('hide');
    $(this).parent().parent().find('.tab.'+$(this).attr('mod')+'-wrapper').removeClass('hide');
})

// LOGIN LINE HORIZONTAL
$('#login .list-agenda-wrap:first-child .dot-border:before').css('width','10px')
// $('#login .list-agenda-wrap:first-child').css('backgroundColor','red')
// $('#login .list-agenda').height()

// Report Dropdown Click
$('#report').on('hidden.bs.select', function (e) {
  var type_report = $('#report .dropdown-menu.inner li.selected a span.type-option').attr('title')
    if (type_report == 'Save') {
    $('#reportModal').modal('show');
    $('#reportModal .tab').addClass('hide');
    $('#reportModal .tab-opt').removeClass('active');
    $('#reportModal .tab1').addClass('active');
    $('#reportModal .save-report-wrapper').removeClass('hide');
  }
  if (type_report == 'Load') {
    $('#reportModal').modal('show');
    $('#reportModal .tab').addClass('hide');
    $('#reportModal .tab-opt').removeClass('active');
    $('#reportModal .tab2').addClass('active');
    $('#reportModal .my-report-wrapper').removeClass('hide');
  }
  if (type_report == 'Shared Report') {
    $('#reportModal').modal('show');
    $('#reportModal .tab').addClass('hide');
    $('#reportModal .tab-opt').removeClass('active');
    $('#reportModal .tab3').addClass('active');
    $('#reportModal .team-report-wrapper').removeClass('hide');
  }
  if (type_report == 'Market Baskets') {
    $('#marketModal').modal('show');
  }  
});

// Export Cancel Button
$('.export-wrapper .cancel-btn').on('click', function(){
	$('.export-wrapper').addClass('hide')
})

// Export Checkbox Area
$(".lpart-1 .top .checkbox label input[type='checkbox']").change(function() {
  if(this.checked) {
  	$(".lpart-1 .bottom .checkbox label input[type='checkbox']").prop('checked', true);
  }
  else{
  	$(".lpart-1 .bottom .checkbox label input[type='checkbox']").prop('checked', false);
  }
});

$(".lpart-2 .top .checkbox label input[type='checkbox']").change(function() {
  if(this.checked) {
  	$(".lpart-2 .bottom .checkbox label input[type='checkbox']").prop('checked', true);
  }
  else{
  	$(".lpart-2 .bottom .checkbox label input[type='checkbox']").prop('checked', false);
  }
});

$(".rpart .top .checkbox label input[type='checkbox']").change(function() {
  if(this.checked) {
  	$(".rpart .bottom .checkbox label input[type='checkbox']").prop('checked', true);
  }
  else{
  	$(".rpart .bottom .checkbox label input[type='checkbox']").prop('checked', false);
  }
});

// Export Button Handler
// $('#export-wrap .export-btn,.export-btn-user1').on('click', function(){
// 	$('.export-wrapper').toggleClass('hide');
// 	if ($('.bg-overlay.hide').length==1) {
// 		$('.bg-overlay').removeClass('hide');
// 	}
// })

// Menu Laucher Button Handler
$('#menu-laucher-id').on('click', function(){
  $('.menu-launcher').toggleClass('hide');
  if (!$('.user-popup').hasClass('hide')) {
    $('.user-popup').addClass('hide');
    $('#user-popup-id span').removeClass('open');
  }
})
// user popup Button Handler
$('#user-popup-id span').on('click', function(){
  $('.user-popup').toggleClass('hide');
  $('#user-popup-id span').toggleClass('open');
  if (!$('.menu-launcher').hasClass('hide')) {
    $('.menu-launcher').addClass('hide');
  }
})

// Close Popup When click outer element
$(document).mouseup(function(e) {
  if ($(e.target).closest('.menu-launcher').length == 0 && $(e.target).attr('id') != 'menu-laucher-id') {
    if (!$('.menu-launcher').hasClass('hide')) {
      $('.menu-launcher').addClass('hide');
    }
  }
  if ($(e.target).closest('.user-popup').length == 0 && $(e.target).parent().attr('id') != 'user-popup-id') {
    if (!$('.user-popup').hasClass('hide')) {
      $('.user-popup').addClass('hide');
      $('#user-popup-id span').removeClass('open');
    }
  }
  if ($(e.target).closest('.customize-wrapper').length == 0) {
    if (!$('.customize-wrapper:not(.configure)').hasClass('hide')) {
      $('.customize-wrapper:not(.configure)').addClass('hide');
      if ($('.bg-overlay.hide').length!=1) {
        $('.bg-overlay').addClass('hide');
      }
    }
  }
});
// Click Icon Shareable in popup
$('table .shared-col').on('click','.icon-png', function(){
	console.log($(this).attr('class').split(' ').pop());
	if ($(this).attr('class').split(' ').pop() == 'icon-blue-shared') {
		$(this).removeClass('icon-blue-shared');
		$(this).addClass('icon-grey-shared');
	}
	else{
		$(this).addClass('icon-blue-shared');
		$(this).removeClass('icon-grey-shared');
	}
})
// CLICK DISPLAY 
$('.user-popup .display-icon-set').on('click',function(){
	$('.user-popup .display-icon-set').toggleClass('on')
})
// CLICK DISPLAY  GEAR
$('.navbar-default.custom-user #price-change .ic-gearsetting').on('click',function(){
  $('.customize-wrapper:not(.configure)').toggleClass('hide')
})
// datepicker
if($('#datepicker-current').length>0){
  $('#datepicker-current').on('click',function(){
    $(' <div class="additional-datepicker"> <ul id="start-date"> <li><span>Start Date</span></li><li><input type="text" placeholder="Start Date"></li></ul> <ul id="end-date"> <li>End Date</li><li><input type="text" placeholder="End Date"></li></ul> </div>').insertAfter('.date-picker-wrapper .month-wrapper')
  })
  $('#datepicker-current').dateRangePicker({
    autoClose: true,
    showShortcuts: true,
    shortcuts : null,
    // singleDate : true,
    singleMonth: true,
    startOfWeek: 'sunday',
    language:'en',
    customShortcuts:
    [
      {
        name: 'Last 12 Months',
        dates : function()
        {
          //move calendars to show this date's month and next month
          var start = moment().toDate();
          var end = moment().add(12, 'M').toDate();
          return [start,end];
        }
      },
      //if only return an array of one date, it will display the month which containing the date. and it will not select any date range
      {
        name: 'Last 24 Months',
        dates : function()
        {
          var start = moment().toDate();
          var end = moment().add(24, 'M').toDate();
          return [start,end];
        }
      },
      //if only return an array of one date, it will display the month which containing the date. and it will not select any date range
      {
        name: 'Last 36 Months',
        dates : function()
        {
          var start = moment().toDate();
          var end = moment().add(36, 'M').toDate();
          return [start,end];
        }
      },
      //if only return an array of one date, it will display the month which containing the date. and it will not select any date range
      {
        name: 'Last 48 Months',
        dates : function()
        {
          var start = moment().toDate();
          var end = moment().add(48, 'M').toDate();
          return [start,end];
        }
      },
      //if only return an array of one date, it will display the month which containing the date. and it will not select any date range
      {
        name: 'Year to Date',
        dates : function()
        {
          var end = moment().toDate();
          var start = moment().subtract(1, 'years').toDate();
          return [start,end];
        }
      },
      //if only return an array of one date, it will display the month which containing the date. and it will not select any date range
      {
        name: 'All Data',
        dates : function()
        {
          var start = moment().toDate();
          var end = moment().add(12, 'M').toDate();
          return [start,end];
        }
      }
    ],
    getValue: function()
    {
      if ($('#start-date input').val() && $('#end-date input').val() )
        return $('#start-date input').val() + ' to ' + $('#end-date input').val();
      else
        return '';
    },
    setValue: function(s,s1,s2)
    {
      $(this).val(s);
      $('#start-date input').val(s1);
      $('#end-date input').val(s2);
    }
  });
}

if($('#datepicker-current-single').length>0){
  $('#datepicker-current-single').dateRangePicker({
    autoClose: true,
    singleDate : true,
    singleMonth: true,
    startOfWeek: 'sunday',
    language:'en',
    getValue: function()
    {
      if ($('#start-date input').val() && $('#end-date input').val() )
        return $('#start-date input').val() + ' to ' + $('#end-date input').val();
      else
        return '';
    },
    setValue: function(s,s1,s2)
    {
      $(this).val(s);
      $('#start-date input').val(s1);
      $('#end-date input').val(s2);
    }
  });  
}
$('.dropdown-container').on('click',function(){
  $('.date-picker-wrapper').css('display','none')
})