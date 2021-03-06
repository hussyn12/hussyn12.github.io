jQuery( document ).ready(function( $ ) {
"use strict"

/*-----------------------------------------------------------------------------------*/
/* 	COUNTER JS
/*-----------------------------------------------------------------------------------*/
$('.counter .timer').countTo();
/*-----------------------------------------------------------------------------------*/
/*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(".sticky").sticky({topSpacing:0});
/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'animate',      
    animateClass: 'animated', 
    offset:       100,          
    mobile:       false       
});
wow.init();

/*-----------------------------------------------------------------------------------*/
/* 		NAVIGATION SMOOTH SCROLL
/*-----------------------------------------------------------------------------------*/
$('.scroll a').bind('click', function(event) {
 var $anchor = $(this);
    $('html, body').stop().animate({
       scrollTop: $($anchor.attr('href')).offset().top
    }, 1000, 'easeInOutExpo');
    event.preventDefault();
});
/*-----------------------------------------------------------------------------------*/
/* 		Active Menu Item on Page Scroll
/*-----------------------------------------------------------------------------------*/
let mainNavLinks = document.querySelectorAll("header nav li a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
/*-----

/*-----------------------------------------------------------------------------------*/
/*	Go TO TOP
/*-----------------------------------------------------------------------------------*/
var offset = 300,
	//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	offset_opacity = 1200,
	//duration of the top scrolling animation (in ms)
	scroll_top_duration = 700,
	//grab the "back to top" link
	$back_to_top = $('.cd-top');

//hide or show the "back to top" link
$(window).scroll(function(){
	( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
	if( $(this).scrollTop() > offset_opacity ) { 
		$back_to_top.addClass('cd-fade-out');
	}
});
//smooth scroll to top
$back_to_top.on('click', function(event){
	event.preventDefault();
	$('body,html').animate({
		scrollTop: 0 ,
	 	}, scroll_top_duration
);
});
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/



$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $(".header a, .scrollbtn, .work, .dark-border").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('anime'), {
  dotColor: 'rgba(255, 255, 255, 0.40)',
        lineColor: 'rgba(255, 255, 255, 0.21)',
        parallaxMultiplier: 5,
        particleRadius: 5,
        proximity: 130,
        density: 12000
  });
 
});




var html = "Hi,/I'm Hussain,/Software Engineer.";
var ret  = "";
$.each(html.split(''), function(k, v) {
    
    if (v == "/") {
    	ret += "<br>";
    }
    else if (v == " ") {
    	ret += "&nbsp;"
    }
    else {
    	ret += "<span class='letter hvr-wobble-to-bottom-right' >" + v +  "</span>" ;
   }
});


$('.ml9 .letters').html(ret);

anime.timeline({loop: false})
  .add({
    targets: '.ml9 .letter, .social-links li',
    scale: [0, 1],
    duration: 4500,
    elasticity: 750,
    delay: function(el, i) {
      return 45 * (i+1)
    }
  });
