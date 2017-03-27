

Meteor.methods({
	insertItem:function(itemDetails){
    	Prospero.insert(itemDetails);
    	var id = Prospero.findOne(itemDetails)._id;
    	return id;
	},
	updateItem:function(itemId, itemDetails){
		Prospero.upsert({_id:itemId},{$set:itemDetails});
	},
	hideItem:function(itemId, dateFormat){
		Prospero.update({_id:itemId},{$set:{"visible":"hidden", "last_edit": dateFormat}});
	},
	deleteItem:function(itemId){
		var frontId = Prospero.findOne(itemId).data.imgs.img_front_id;
		var backId = Prospero.findOne(itemId).data.imgs.img_back_id;
		Data.remove(frontId);
		console.log("de zbriso sam "+frontId);
		Data.remove(backId);
		console.log("a bome i "+backId);
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
