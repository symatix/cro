Template.users.events({
	'click #mailer-send': function (event) {
		const email = {
			subject: $("#mailer-subject").val(),
			body: $("#mailer-body").val()
		}
		console.log(email)
		Meteor.call("sendMailToAll", email, function (error) {
			if (!error) {
				toastr.success("Email sent to all users.")
			} else {
				toastr.error(`Error sending email: ${error}`)
			}
		});
	}
})
