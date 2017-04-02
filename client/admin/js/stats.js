Template.admin_db_stats.events({
	'click .btn-setSession':function(event){
    var itemId = this._id;
    var type = Prospero.findOne(itemId).type;
    delete Session.keys.showPainting;
    delete Session.keys.showSculpture;
    delete Session.keys.showOther;
    delete Session.keys.showPigment;

    Session.set("showPainting", false);
    Session.set("showSculpture", false);
    Session.set("showOther", false);
    Session.set("showPigment", false);


    Session.set("itemId", itemId);

    if(type==="Painting"){
    Session.set("showPainting", true);
    }
    if(type==="Sculpture"){
        Session.set("showSculpture", true);
    }
    if(type==="Pigment/dye/binder/varnish/reference materials"){
        Session.set("showPigment", true);
    }
    if(type!=="Painting" && type!=="Sculpture" && type!=="Pigment/dye/binder/varnish/reference materials"){
        Session.set("showOther", true);
    }
  },
})


Template.admin_db_stats.helpers({
	total:function(){
		return Prospero.find({}).count();
	},
	entry:function(){
		var userId = Meteor.user()._id;
		return Prospero.find({},{sort:{"info.last_edit": -1},limit:10});
	},
	typeOfObject:function(){
		var object = Prospero.findOne({"_id":this._id}).type;
		console.log(object);
		var type = "Pigment/dye/binder/varnish/reference materials";

		if(object===type){
			return "Reference material";
		} else {
			return object;
		}
	},
	totalPublic:function(){
		return Prospero.find({"visible":"public","isDeleted":"available"}).count();
	},
	totalPrivate:function(){
		return Prospero.find({"visible":"private","isDeleted":"available"}).count();
	},
	totalDeleted:function(){
		return Prospero.find({"isDeleted":"deleted"}).count();
	},
	files:function(){
		return Data.find({}).count();
	},

	// total category
	painting:function(){
		return Prospero.find({"type":"Painting"}).count();
	},
	sculpture:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sculpture"}).count();
	},
	sample:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sample/cross-section"}).count();
	},
	reference:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Pigment/dye/binder/varnish/reference materials"}).count();
	},
	architectural:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Architectural heritage"}).count();
	},
	archival:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archival object"}).count();
	},
	archaeological:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archaeological object"}).count();
	},
	other:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"other"}).count();
	},

	// total category public
	paintingPublic:function(){
		return Prospero.find({"type":"Painting","visible":"public","isDeleted":"available"}).count();
	},
	sculpturePublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sculpture","visible":"public","isDeleted":"available"}).count();
	},
	samplePublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sample/cross-section","visible":"public","isDeleted":"available"}).count();
	},
	referencePublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Pigment/dye/binder/varnish/reference materials","visible":"public","isDeleted":"available"}).count();
	},
	architecturalPublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Architectural heritage","visible":"public","isDeleted":"available"}).count();
	},
	archivalPublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archival object","visible":"public","isDeleted":"available"}).count();
	},
	archaeologicalPublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archaeological object","visible":"public","isDeleted":"available"}).count();
	},
	otherPublic:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"other","visible":"public","isDeleted":"available"}).count();
	},


	

	// total category private
	paintingPrivate:function(){
		return Prospero.find({"type":"Painting","visible":"private","isDeleted":"available"}).count();
	},
	sculpturePrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sculpture","visible":"private","isDeleted":"available"}).count();
	},
	samplePrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sample/cross-section","visible":"private","isDeleted":"available"}).count();
	},
	referencePrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Pigment/dye/binder/varnish/reference materials","visible":"private","isDeleted":"available"}).count();
	},
	architecturalPrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Architectural heritage","visible":"private","isDeleted":"available"}).count();
	},
	archivalPrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archival object","visible":"private","isDeleted":"available"}).count();
	},
	archaeologicalPrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archaeological object","visible":"private","isDeleted":"available"}).count();
	},
	otherPrivate:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"other","visible":"private","isDeleted":"available"}).count();
	},

	// total category deleted
	paintingDeleted:function(){
		return Prospero.find({"type":"Painting","isDeleted":"deleted"}).count();
	},
	sculptureDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sculpture","isDeleted":"deleted"}).count();
	},
	sampleDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Sample/cross-section","isDeleted":"deleted"}).count();
	},
	referenceDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Pigment/dye/binder/varnish/reference materials","isDeleted":"deleted"}).count();
	},
	architecturalDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Architectural heritage","isDeleted":"deleted"}).count();
	},
	archivalDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archival object","isDeleted":"deleted"}).count();
	},
	archaeologicalDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"Archaeological object","isDeleted":"deleted"}).count();
	},
	otherDeleted:function(){
		console.log(Prospero.find({"info.userId":Meteor.user()._id}).fetch());
		return Prospero.find({"type":"other","isDeleted":"deleted"}).count();
	},


})