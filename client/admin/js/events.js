// web ("/new") > local ("/client/admin/item-list")
Template.adm_prospero_db.events({
  "click .js-delete":function(event){
    var itemId = this.__originalId;
    var safeDelete = $('#safe-delete-'+itemId).is(':checked');
    if (safeDelete == false){
      alert("FAIL > delete not allowed - check box to delete");
    } else {
        $("#"+itemId).animate({opacity:0},200,function(){
        setTimeout(Meteor.call("deleteItem", itemId),5000);
        });
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
        alert("FAIL > delete not allowed - check box to delete");
      }
    }
})
