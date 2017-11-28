Template.methods.helpers({
	pigmentForm: function () {
		if (Session.get("showPigment") || Session.get("showSample")) {
			//$('.togglePigment').removeClass("active");
			$(".toggle").hide();
			//delete Session.keys.showPigment;
			return true;
		}
	}
})

Template.methods_checkbox.helpers({
	methodChecked: function () {

		Object.keys(this.details.methods).forEach(method => {
			if (this.details.methods[method] !== false) {
				console.log(this.details.methods)
				document.getElementById(method).checked = true;
			}
		})

	}
})
