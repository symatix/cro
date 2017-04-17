Template.contact.events({
    'click #userContactForm':function(event){
      event.preventDefault();
      var subject = $("#subject").val();
      var email = $("#eMail").val();
      var fullName = $("#fullName").val();
      var institution = $("#institution").val();
      var telephone = $("#telephone").val();
      var text = $("#contactText").val();

      var contact = {
      	subject: subject,
      	email: email,
      	name: fullName,
      	institution: institution,
      	telephone: telephone,
      	text: text,
      }

      Meteor.call("contactForm",contact, function(error){
        if (error){
          alert("Something went wrong: "+error);
        } else {
          alert("Thank you, "+contact.name+". Your form was submitted.");
          Router.go("/");
        }
      })
	}
});