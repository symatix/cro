Template.new_user.events({
	'submit .js-add-user':function(){
		if (!this._id){

		    var username = document.getElementById('username').value;
		    var password = document.getElementById('password').value;
		    var email = document.getElementById('email').value;
		    var full_name = document.getElementById('full_name').value;
		    var institution = document.getElementById('institution').value;
		    var telephone = document.getElementById('telephone').value;


		    var user = {
		      username:username,
		      password: password,
		      email: email,
		      profile: {
		        username:username,
		        visible:1,
		        isAdmin:false,
		        full_name: full_name,
		        email: email,
		        institution: institution,
		        telephone: telephone,
		        password:password // this is insecure, only admin should see this field
		      }
		    }

			console.log("addin user "+user);
			Meteor.myFunctions.addUser();
		} else {
			var userId = this._id;
			var user = Meteor.users.findOne(userId);
			var email = Meteor.users.findOne(userId).profile.email;
		    var username = $('[name=username]').val();
		    var password = $('[name=password]').val();
		    var email = $('[name=email]').val();
		    var full_name = $('[name=full_name]').val();
		    var institution = $('[name=institution]').val();
		    var telephone = $('[name=telephone]').val();
			var user = {
			      username:username,
			      password: password,
			      email: email,
			      profile: {
			        username:username,
			        visible:1,
			        isAdmin:false,
			        full_name: full_name,
			        email: email,
			        institution: institution,
			        telephone: telephone,
			        password:password // this is insecure, only admin should see this field
			      }
			    }

			Meteor.myFunctions.editUser(userId);
		}
	}
})
Template.new_user.helpers({
	edit:function(){
		if(Session.get("userId")){
			return true;
		}
	}
})