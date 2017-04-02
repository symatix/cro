// web ("/database/myitems") > local ("/client/user/item-list")
Template.moderator_db.helpers({
  moderatorIndex: () => ModeratorIndex,
  gallery:function(){
    var userId = Meteor.user()._id;
    return Prospero.find(
      {userId:userId, visible:{$ne:"hidden"}}, {sort:Session.get("sortList"), limit:Session.get("siteLimit")});
  },
	totalPublic:function(){
		var userId = Meteor.user()._id;
		return Prospero.find({"visible":"public","isDeleted":"available","owner":userId}).count();
	},
	totalPrivate:function(){
		var userId = Meteor.user()._id;
		return Prospero.find({"visible":"private","isDeleted":"available","owner":userId}).count();
	},
  loadBtn:function(){
    return {class:'btn-default btn-submit'}
  },
	total:function(){
		return Prospero.find({"info.userId":Meteor.user()._id, "isDeleted":"available"}).count();
	},
	painting:function(){
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Painting"}).count();
	},
	sculpture:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Sculpture"}).count();
	},
	sample:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Sample/cross-section"}).count();
	},
	reference:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Pigment/dye/binder/varnish/reference materials"}).count();
	},
	architectural:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Architectural heritage"}).count();
	},
	archival:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Archival object"}).count();
	},
	archaeological:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"Archaeological object"}).count();
	},
	other:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"info.userId":Meteor.user()._id, "type":"other"}).count();
	},
})
