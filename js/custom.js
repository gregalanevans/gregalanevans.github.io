


	$('.autoplay').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1500,
	});

$(window).on('scroll', function () {
  $('.autoplay').each(function(){
  var that = $(this);
  if( that.offset().top < ( $(window).scrollTop() + ($(window).height() / 2) ) && that.offset().top > $(window).scrollTop() -200){
     console.log('is visible ' + $(this).attr("id"));
     that.slick('slickPlay');
  }else{
    console.log('is stoped');
     that.slick('slickPause');
  }
});
});




	$('a[href*="#"]:not([href="#"])').click(function() {
	    console.log('Hello');
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html,body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});

	
// var activeImage = 1;

// $('.scroller-window').scroll(function() {
//   //console.log('Event Fired');

//   var scrollTop = $('.scroller-window').scrollTop();
//   var docHeight = $('.scroller-window').height();
//   var scrollPercent = scrollTop / docHeight;
//   var scrollPercentRounded = Math.round( scrollPercent * 100 );
  
//   var newOpacityValue = (100 - scrollPercentRounded) / 100;
  
//   //console.log( newOpacityValue );
  
//   changeToNextImage(newOpacityValue);
// });


// function changeToNextImage(value){
  
//   $('#image'+activeImage).css('opacity', value );
  
//   if(value == 0 && activeImage < 3){
//     $('.scroller-window').scrollTop(0);
//     activeImage++;
//     console.log('Active img = '+activeImage)
//   }else if(value == 1 && activeImage > 1){
//     activeImage--;
//     $('.scroller-window').scrollTop( $('.scroller-window').height() );
//   }
  
// }
