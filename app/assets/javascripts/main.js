// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/


/* ---------------------------------------------- /*
 * Validators
/* ---------------------------------------------- */

function isValidEmailAddress(url) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(url);
}

function isValidLinkedIn(url) {
	var pattern = new RegExp(/((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/);
	return pattern.test(url);
}

/* ---------------------------------------------- /*
 * Coming Soon Timer
/* ---------------------------------------------- */

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock(){
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock,1000);
}

/* ---------------------------------------------- /*
 * Preloader
/* ---------------------------------------------- */

$(window).load(function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
});

$(document).on('click','.navbar-collapse.in',function(e) {
	if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
		$(this).collapse('hide');
	}
});

$(document).ready(function() {

	var deadline = 'April 30 2016 00:00:00 UTC+0200';
	initializeClock('clockdiv', deadline);

	$('body').scrollspy({
		target: '.navbar-custom',
		offset: 50
	})	

	/* ---------------------------------------------- /*
	 * Background images
	/* ---------------------------------------------- */
	/*
	$('#intro').backstretch([
		'bg3.jpg'
	], {duration: 3000, fade: 750});
	*/
	/* ---------------------------------------------- /*
		 * Navbar
	/* ---------------------------------------------- */

	var navbar = $('.navbar');
	
	if($(window).width() <= 767) {
		navbar.addClass('custom-collapse');
	}

	$(window).resize(function() {
		if($(this).width() <= 767) {
			navbar.addClass('custom-collapse');
		}
		else {
			navbar.removeClass('custom-collapse');
		}
	});

	/* ---------------------------------------------- /*
	 * Count to
	/* ---------------------------------------------- */

	$('#stats').waypoint(function() {
		$('.timer').each(function() {
			counter = $(this).attr('data-count'),
			$(this).delay(6000).countTo({
				from: 0,
				to: counter,
				speed: 3000,// Stats Counter Speed
				refreshInterval: 50,
			});
		});
	 }, { offset: '70%', triggerOnce: true });

	/* ---------------------------------------------- /*
	 * Carousel Testimonial
	/* ---------------------------------------------- */

	$('#testimonialCarousel').carousel({
			interval: false,
		 	autoplay:true,
		autoplayTimeout:600,
		autoplayHoverPause:true
	});

	/* ---------------------------------------------- /*
	 * Contact form ajax
	/* ---------------------------------------------- */

	$("#contact-form").submit(function(e) {

		e.preventDefault();

		var c_name = $("#c_name").val();
		var c_email = $("#c_email").val();
		var c_message = $("#c_message ").val();
		var responseMessage = $('.ajax-response');

		if (( c_name== "" || c_email == "" || c_message == "") || (!isValidEmailAddress(c_email) )) {
			responseMessage.fadeIn(500);
			responseMessage.html('<i class="fa fa-warning"></i> Check all fields.');
		}

		else {
			$.ajax({
				type: "POST",
				url: "assets/php/contactForm.php",
				dataType: 'json',
				data: {
					c_email: c_email,
					c_name: c_name,
					c_message: c_message
				},
				beforeSend: function(result) {
					$('#contact-form button').empty();
					$('#contact-form button').append('<i class="fa fa-cog fa-spin"></i> Wait...');
				},
				success: function(result) {
					if(result.sendstatus == 1) {
						responseMessage.html(result.message);
						responseMessage.fadeIn(500);
						$('#contact-form').fadeOut(500);
					} else {
						$('#contact-form button').empty();
						$('#contact-form button').append('<i class="fa fa-retweet"></i> Try again.');
						responseMessage.html(result.message);
						responseMessage.fadeIn(1000);
					}
				}
			});
		}

		return false;

	});

	//Delete content of modal
  	$('body').on('hidden.bs.modal', '.modal', function() {
    	$(this).removeData('bs.modal');
    });

    //Functions to run on show
	$("#AdvisorModal").on('show.bs.modal', function (event) {
		$("input#advisor_curriculum").filestyle({
			buttonText: "Import CV",
			buttonName: "btn-default",
			iconName: "fa fa-folder-open",
			buttonBefore: true
		});
		$("input#advisor_linkedin_url").on('change', function (event) {
			var parent = $(this).parent();
			if(isValidLinkedIn($(this).val())) 
			{
				if(parent.hasClass("has-error")){
					parent.removeClass("has-error");
				}
				parent.addClass("has-success");
			}
			else
			{
				if(parent.hasClass("has-success")){
					parent.removeClass("has-success");
				}
				parent.addClass("has-error");
			}
		});
		$("form#new_advisor").on('submit', function (e) {
			var linkedin = $("input#advisor_linkedin_url");
			var curriculum = $("input#advisor_curriculum");
			if(isValidLinkedIn(linkedin.val()) || curriculum.val() != ''){
				return true;
			}
			else 
			{
				if(!linkedin.parent().hasClass("has-error")){
					linkedin.parent().addClass("has-error");
				}
				if(!curriculum.parent().hasClass("has-error") && linkedin.val() == ""){
					curriculum.parent().addClass("has-error");
					curriculum.parent().find('div.input-group > span > label.btn').addClass("btn-danger");
					curriculum.parent().find('div.input-group > span > label > span').addClass("text-danger");
					curriculum.parent().find('div.input-group').addClass("has-error");
				}
				return false;
	    	}
		});
	});

});