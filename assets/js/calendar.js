(function($) {
		$(document).ready(function() {
			"use strict";

	
			$('#calendar').fullCalendar({
				selectAllow: function (e) {
					if (e.end.getTime() / 1000 - e.start.getTime() / 1000 <= 86400) {
						return true;
					}
				 },

			   dayClick: function(date, jsEvent, view) { 
				  $('.fc-day,.fc-day-number').removeClass("fc-state-highlight");

				  $(jsEvent.target).addClass("fc-state-highlight");
				  //  alert("Selected Date:"+date._d);
				  const bkday = new Date(date._d);
				  const bkd = new Date(bkday).toLocaleDateString('en-GB');
				  $('#bkg-date').val(bkday.toDateString());
				  $('#bkgdate').text(bkd);
				  $("#calendar-info").addClass('show');
				}
			});


			$(document.body).on('click', '.price-calcu .number_btn' ,function(){
			  var $button = $(this);
			  var oldValue = parseInt($button.parent().find("input").val());
			  var newVal;

			  
  
			  if ($button.text() === "+") {
			  newVal = oldValue + 1;
			  } else {
			  // Don't allow decrementing below "0"
			  newVal = (oldValue > 1) ? oldValue - 1 : 0;
			  }
			  $button.parent().find("input").val(newVal);


  



  
			  var qty1 = $('#type_1').val();
			  var t1price =100;
			  var t1amt = t1price * qty1
			  $('.type1-price b').html(t1amt);
  
			  var qty2 = $('#type_2').val();
			  var t2price =120;
			  var t2amt = t2price * qty2
			  $('.type2-price b').html(t2amt);

			  $("#totalamt").html(t1amt + t2amt);
  
  			if (qty1 > 1) {
				$('.travel-relation').addClass("show");
			} else {
				$('.travel-relation').removeClass("show");
			}
			if (qty2 > 0) {
				$('.travel-relation').addClass("show");
			} 
			
			
  
			  });
  

		});
	  })(jQuery);