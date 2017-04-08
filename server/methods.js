import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
	insertItem:function(itemDetails){
    	Prospero.insert(itemDetails);
    	var id = Prospero.findOne(itemDetails)._id;
    	return id;
	},
	updateItem:function(itemId, itemDetails){
		Prospero.update({_id:itemId},{$set:itemDetails},{multi:true});
	},
	hideItem:function(itemId, dateFormat){
		Prospero.update({_id:itemId},{$set:{"isDeleted":"deleted", "info.last_edit": dateFormat}});
	},
	deleteItem:function(itemId){
   	var i;
	var obj = Prospero.findOne(itemId);
    var data = obj.data;
    var methods = obj.details.methods;

    // remove files from basic and materials forms
	    for (var property in data) {
	     	if (data.hasOwnProperty(property)) {
	            var parent = data[property];

	            for (var sub_property in parent){

	                 if (parent.hasOwnProperty(sub_property)) {
	                    var child = parent[sub_property];
				      	if (child[0] == "/" || !child){
				      	} else {
				      		// delete data entry
	                    	Data.remove(child);
				      		console.log("deleted data with id: "+child);
				      	}
	                }
	            }
	        }
	 	}
    // remove files from methods
	    for (var property in methods) {
	     	if (methods.hasOwnProperty(property)) {
	            var parent = methods[property];

	            for (var sub_property in parent){

	                 if (parent.hasOwnProperty(sub_property)) {
	                    var child = parent[sub_property];

	                    for (var baby in child){
	                    	if(child.hasOwnProperty(baby)){
	                    		var result = child[baby];

	                    		if (result[0] == "/" || result.indexOf(' ') > 0 || !result){
	                    		} else {
	                    			//delete data entry
	                    			Data.remove(result);
	                    			console.log("deleted data with id: "+result);
	                    		}
	                    	}
	                    }
	                }
	            }
	        }

	 	}
	Prospero.remove(itemId);
	},
	toggleItem:function(itemId, visible, dateFormat){
		if(visible == "public"){
	    	Prospero.update({_id:itemId}, {$set:{"visible":"hidden", "last_edit": dateFormat}});
	    } else {
	    	Prospero.update({_id:itemId}, {$set:{"visible":"public", "last_edit": dateFormat}});
	    }
	},
	resendUserDetails:function(userDetails){
	    Email.send({
			  to: userDetails.profile.email,
			  from: "croartia.db@gmail.com",
			  subject: "Login details request for "+userDetails.profile.username+"@croARTia",
			  text: "Hello, "+userDetails.profile.full_name+"!\n Here are your user details for croARTia:\n\n Username: "+userDetails.profile.username+"\n Password: "+userDetails.profile.password+"\n\n croARTia team",
			});
	    Email.send({
			  to: "croartia.db@gmail.com",
			  from: "croartia.db.userForm",
			  subject: "Details request for user: "+userDetails.profile.username+"@croARTia",
			  text: "Hello, admin!\n\nUser requested details:\n\nUsername: "+userDetails.profile.username+"\nPassword: "+userDetails.profile.password+"\n\nFull name: "+userDetails.profile.full_name+"\nInstitution: "+userDetails.profile.institution+"\nTelephone: "+userDetails.profile.telephone+"\nEmail: "+userDetails.profile.email+"\n\n croARTia automated system"
			});
	},
	forgotPasswordRequest:function(email){
		var userDetails = Meteor.users.findOne({"profile.email":email});
		if (userDetails){
		    Email.send({
				  to: userDetails.profile.email,
				  from: "croartia.db@gmail.com",
				  subject: "Login details request for "+userDetails.profile.username+"@croARTia",
				  text: "Hello, "+userDetails.profile.full_name+"!\n Here are your user details for croARTia:\n\n Username: "+userDetails.profile.username+"\n Password: "+userDetails.profile.password+"\n\n croARTia team",
				});
		    Email.send({
				  to: "croartia.db@gmail.com",
				  from: "croartia.db.userForm",
				  subject: "Details request for user: "+userDetails.profile.username+"@croARTia",
				  text: "Hello, admin!\n\nUser requested details:\n\nUsername: "+userDetails.profile.username+"\nPassword: "+userDetails.profile.password+"\n\nFull name: "+userDetails.profile.full_name+"\nInstitution: "+userDetails.profile.institution+"\nTelephone: "+userDetails.profile.telephone+"\nEmail: "+userDetails.profile.email+"\n\n croARTia automated system"
				});
				return true;
		} 
	},
	createUsers: function(userDetails) {
	    Accounts.createUser(userDetails);
	    Email.send({
			  to: userDetails.email,
			  from: "croartia.db@gmail.com",
			  subject: "Welcome to croARTia db",
			  text: "Hello, "+userDetails.profile.full_name+"!\n And welcome to croARTia!\n\nTo start using croARTia database, go to #DOMAIN and use these credentials to log in:\n\n Username: "+userDetails.profile.username+"\n Password: "+userDetails.profile.password+"\n\n croARTia team",
			});
	    Email.send({
			  to: "croartia.db@gmail.com",
			  from: "croartia.db.userForm",
			  subject: "New user: "+userDetails.profile.username+"@croARTia",
			  text: "Hello, admin!\n\nNew user created with user details:\n\nUsername: "+userDetails.profile.username+"\nPassword: "+userDetails.profile.password+"\n\nFull name: "+userDetails.profile.full_name+"\nInstitution: "+userDetails.profile.institution+"\nTelephone: "+userDetails.profile.telephone+"\nEmail: "+userDetails.profile.email+"\n\n croARTia automated system"
			});
	},
	editUsers: function(userId, password, userDetails) {
		Meteor.users.update({_id:userId}, {$set: userDetails})
	    Email.send({
			  to: userDetails.email,
			  from: "croartia.db@gmail.com",
			  subject: "croARTia db user details changed",
			  text: "Hello, "+userDetails.profile.full_name+"!\n Your login credentials have been changed!\n\nTo use croARTia database, go to #DOMAIN and use these credentials to log in:\n\n Username: "+userDetails.profile.username+"\n Password: "+userDetails.profile.password+"\n\n croARTia team",
			});
	    Email.send({
			  to: "croartia.db@gmail.com",
			  from: "croartia.db.userForm",
			  subject: "Updated user: "+userDetails.profile.username+"@croARTia",
			  text: "Hello, admin!\n\nUser "+userDetails.profile.username+" was updated with new details:\n\nUsername: "+userDetails.profile.username+"\nPassword: "+userDetails.profile.password+"\n\nFull name: "+userDetails.profile.full_name+"\nInstitution: "+userDetails.profile.institution+"\nTelephone: "+userDetails.profile.telephone+"\nEmail: "+userDetails.profile.email+"\n\n croARTia automated system"
			});
	},
	removeUser:function(userId){
	    Meteor.users.remove(userId);
	},
	adminId: function(){
		return Meteor.users.findOne({username:"admin"})._id;
	},
	adminUsername: function(){
		var admin = Meteor.users.findOne({username:"admin"}).username;
		return admin;
	}
})
