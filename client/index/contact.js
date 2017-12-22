Template.contact.events({
	'click #userContactForm': function (event) {
		event.preventDefault();
		var subject = $("#subject").val();
		var email = $("#eMail").val();
		var name = $("#fullName").val();
		var institution = $("#institution").val();
		var telephone = $("#telephone").val();
		var text = $("#contactText").val();

		var contact = { subject, email, name, institution, telephone, text }

		Meteor.call("contactForm", contact, function (error) {
			if (error) {
				toastr.error(`Something went wrong: ${error}`);
			} else {
				toastr.success(`Thank you, ${contact.name}. Your form was submitted.`)
				Router.go("/");
			}
		})
	}
});
