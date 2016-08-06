/************fancybox***************/
$(document).ready(function() {
		$(".fancybox").fancybox();
	});
/***************//*****************/

/************menu_h***************/
$(document).ready(function(){
	$('.menu_h').click(function() {
		$('nav ul').slideToggle('slow');
	});
  $('nav ul li').click(function(){
    $('nav ul').slideUp('slow')
  });
});
/***************//*****************/
  $(document).ready(function(){
    $("nav ul li").on("click","a", function (event) {
              event.preventDefault();
     var id  = $(this).attr('href'),
     top = $(id).offset().top;         
    $('body,html').animate({scrollTop: top}, 1000);
    });
    })
/*******************//****************/
