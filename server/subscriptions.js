Meteor.publish("documents", function(){
    return Documents.find({
        $or:[
            {isPrivate:{$ne:true}},
            {owner:this.userId}
        ]
    });
})

Meteor.publish("theUsers", function(){
	var userId = this.userId;
	var adminId = Meteor.users.findOne({username:"admin"})._id;
	if (adminId == userId){
		return Meteor.users.find({},{profile:{visible:1}});
	}
})

Meteor.publish("theProspero", function(){
	var userId = this.userId;
	var adminId = Meteor.users.findOne({username:"admin"})._id;
	if(userId == adminId){
		if (this.userId){
			return Prospero.find({}, {sort:{"createdAt":-1}});
		}
	} else {
		return Prospero.find({"visible":"public"}, {sort: {"createdAt":-1}});
	}
})

Meteor.publish("theData", function(){
	return Data.find();
})
