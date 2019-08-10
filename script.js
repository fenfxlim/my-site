menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');

  if (x.className === "topnav") {
  	x.className += " responsive";
  } else {
  	x.className ="topnav";
  }

}

  $('a[href^="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});

$(document).ready(function(){

    $(function (){
		$("#back-top").hide();

		$(window).scroll(function (){
			if ($(this).scrollTop() > 700){
				$("#back-top").fadeIn();
			} else{
				$("#back-top").fadeOut();
			}
		});

		$("#back-top a").click(function (){
			$("body,html").animate({
				scrollTop:0
			}, 800);
			return false;
		});
	});
});