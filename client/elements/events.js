
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
    Session.set("showSample", false);
    Session.set("showPigment", false);

    var painting = "Painting";
    var sculpture = "Sculpture";
    var sample = "Sample/cross-section";
    var pigment = "Pigment/dye/binder/varnish/reference materials";


    Session.set("itemId", itemId);

    if(type==="Painting"){
    Session.set("showPainting", true);
    }
    if(type==="Sculpture"){
        Session.set("showSculpture", true);
    }
    if(type==="Sample/cross-section"){
        Session.set("showSample", true);
    }
    if(type==="Pigment/dye/binder/varnish/reference materials"){
        Session.set("showPigment", true);
    }
    if(type!==painting && type!==sculpture && type!==sample && type!==pigment){
        Session.set("showOther", true);
    }
  },
})
