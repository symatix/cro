

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
				      		console.log("data id: "+child);
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
	                    			console.log("result is: "+result);
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
	createUsers: function(userDetails) {
	    Accounts.createUser(userDetails);
	    console.log("user created");
	},
	editUsers: function(userId, userDetails) {
	 	Meteor.users.update({_id:userId}, {$set: userDetails})
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
