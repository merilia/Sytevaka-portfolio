// A $( document ).ready() block.
$( document ).ready(function() {
    $('.slider-container').bxSlider({
  mode: 'fade',
  controls: true,
  auto: true,
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: '<img src="next.png" height="25" width="25"/>',
  prevText: '<img src="previous.png" height="25" width="25"/>'
});
    $(function() {
  $("a.title").click(function() { 
      $(this).parent().next().toggle("fast").siblings("[id]").hide("fast");
  });
});
$(function() {
	$("li.title").click(function() {
		$(".opened").toggleClass(".closed");
	});
});
});