
Template.edit_button.events({
  'click .btn-setSession':function(event){
    var itemId = this._id;
    var type = Prospero.findOne(this._id).type;
    delete Session.keys.showPicture;
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
