// web ("/new") > local ("/client/admin/item-list")
Template.adm_db.events({
  "click .js-delete":function(event){
    var itemId = this.__originalId;
    var safeDelete = $('#safe-delete-'+itemId).is(':checked');
    var obj = Prospero.findOne(itemId);
    if (safeDelete == false){
      alert("Denied: check box to delete");
    } else {
        $("#"+itemId).animate({opacity:0},200,function(){
        setTimeout(Meteor.call("deleteItem", obj, itemId),5000);
        });
    }
  },
  'click .btn-setSession':function(event){
    var itemId = this.__originalId;
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
  'change .sorting': (e) => {
    AdminIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  "click .js-visibility":function(event){
    var itemId = this.__originalId;
    var visible = Prospero.findOne({_id:itemId}).visible;
    var dateFormat = Meteor.myFunctions.dateFormat();
    Meteor.call("toggleItem", itemId, visible, dateFormat);
  },
  "mouseenter .img-front-xs":function(event){
    var itemId = this.__originalId;
    var imgSrc = $("#img-front-"+itemId).attr("src");
    var author = Prospero.findOne(itemId).basic.author;
    var title = Prospero.findOne(itemId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title+" • front image");
  },
  "mouseenter .img-back-xs":function(event){
    var itemId = this.__originalId;
    var imgSrc = $("#img-back-"+itemId).attr("src");
    var author = Prospero.findOne(itemId).basic.author;
    var title = Prospero.findOne(itemId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title+" • back image");
  }
})


////////////////////////////////////
      //CHECK IF BELOW NEEDED//
///////////////////////////////////
// web ("/admin/edit/:_id") > local ("client/admin/item-edit")
Template.adminEdit.events({
  'submit .js-edit-painting-data':function(event){
    event.preventDefault();
    Meteor.myFunctions.updateData();
    Router.go("/admin/details/"+this._id);
  },
    "click .js-delete":function(event){
      var safeDelete = $('#safe-delete-'+this._id).is(':checked')
      var itemId = Session.get("itemId");
      if (safeDelete){
        Meteor.call("deleteItem", itemId);
        Router.go("/admin/prosperoDB");
      } else {
        alert("Denied: check box to delete");
      }
    }
})
