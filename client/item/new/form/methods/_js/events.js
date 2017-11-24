Template.methods.events({
	'click .btn_toggleMethods': function (event) {
		event.preventDefault();
		$('.toggleMethods').slideToggle('').toggleClass('active');

		if ($('.toggleMethods').hasClass('active')) {
			$('.btn_toggleMethods').text('Expand');
		} else {
			$('.btn_toggleMethods').text('Colapse');
		}
	}
})

Template.methods_checkbox.events({
	'click .method-checkbox': function (event) {
		event.stopPropagation();
		event.preventDefault();

		var methodId = $(event.target).attr('for');

		$('#object_toggle-' + methodId).slideToggle('').toggleClass('active');

		if ($('#object_toggle-' + methodId).hasClass('active')) {
			$(event.target).addClass('check-active');
		} else {
			$(event.target).removeClass('check-active');
		}
	},
	'click .checkbox-input': function (event) {
		event.stopPropagation();

		if ($('#methodsTechniques').length > 0) {
			let oldMethods = '';

			if ($("#methodsTechniques").val()) {
				oldMethods = $("#methodsTechniques").val() + ', ';
			}

			const newMethods = oldMethods + event.target.value;
			$("#methodsTechniques").val(newMethods);
		}
	}
})
