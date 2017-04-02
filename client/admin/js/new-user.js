Template.new_user.events({
	'submit .js-add-user':function(){
		var userId = Session.get("userId");

		if(userId){
    		Meteor.myFunctions.editUser();
		} else {
    		Meteor.myFunctions.addUser();
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