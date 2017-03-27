// web ("/database/myitems") > local ("/client/user/item-list")
Template.editorItems.events({
  "click .js-remove":function(event){
    itemId = this.__originalId;
    $("#"+itemId).animate({opacity:0},200,function(){
      var dateFormat = Meteor.myFunctions.dateFormat();
      Meteor.call("hideItem", itemId, dateFormat);
    });
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
  },
  "click .js-visibility":function(event){
    var itemId = this.__originalId;
    var visible = Prospero.findOne({_id:itemId}).visible;
    Meteor.call("toggleItem", itemId, visible);
  }
})

// web ("/gallery/edit/:_id") > local ("/client/user/item-edit")
Template.editorEdit.events({
  "click .js-remove":function(event){
    event.preventDefault();
    //this to meteor method
    var itemId = this._id;
    var dateFormat = Meteor.myFunctions.dateFormat();
    Meteor.call("hideItem", itemId, dateFormat);
    Router.go("/database/myitems");
  },
  'submit .js-edit-painting-data':function(event){
    event.preventDefault();
    Meteor.myFunctions.updateData();
    Router.go("/gallery/details/"+Session.get("itemId"));
  }
})
