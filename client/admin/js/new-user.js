Template.new_user.events({
	'submit .js-add-user':function(){
		if (!this._id){
			alert("addin user");
			Meteor.myFunctions.addUser();
		} else {
			var userId = this._id;
			var user = Meteor.users.findOne(userId);
			var oldPassword = Meteor.users.findOne(userId).profile.password;
    		var newPassword = $('[name=password]').val();
    		console.log("old password in bcrypt is: "+oldPassword);
/*
			Accounts.changePassword(oldPassword, newPassword, function(err){
				if(err){
					alert(err);
				} else {
					alert("password changed to: "+newPassword);
				}
			});
*/

			Accounts.setPassword(userId, newPassword, {logout: false})
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