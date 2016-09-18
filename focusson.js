$(document).ready(function() {
	$('.tool-pushbutton').click(function(ev) {
		ev.preventDefault();

		var show = $(this).data('show');

		$('#Tools, #Interviews').hide();
		$('#' + show).show();

		$('.tool-pushbutton').removeClass('active');
		$(this).addClass('active');
	})
});