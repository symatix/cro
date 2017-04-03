// web ("") / local ("index/navbar")
Template.navbar.events({
  "click .logout":function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go("/login");
  },
  'change .sorting-view':function(){
    var value = $(".sorting-view").val();
    if (value==="details"){
      Session.set("large",false);
      Session.set("details",true);
    } else {
      Session.set("details",false);
      Session.set("large",true);
    }
  },
  'change .sorting-users': (e) => {
    UsersIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-paintings': (e) => {
    PaintingIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-admin': (e) => {
    AdminIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-admin-category': function (e) {
    AdminIndex.getComponentMethods()
      .addProps('categoryFilter', $(e.target).val())
  },
  'change .sorting-editor': (e) => {
    ModeratorIndex.getComponentMethods()
      .addProps('sortByFilter', $(e.target).val())
  },
  'change .sorting-moderator': function (e) {
    ModeratorIndex.getComponentMethods()
      .addProps('categoryFilter', $(e.target).val())
  },
  'change .sorting-guest': (e) => {
    GalleryIndex.getComponentMethods()
      .addProps('guestSort', $(e.target).val())
  },
  'change .sorting-category-guest': function (e) {
    GalleryIndex.getComponentMethods()
      .addProps('guestCategory', $(e.target).val())
  },
  'click .newItem-href':function(){
    delete Session.keys.itemId;
  },
  'click .newUser-href':function(){
    delete Session.keys.userId;
  },
  'change .sorting-filter':function(){
      Session.set("first_entry",false);
      Session.set("last_entry",false);
      Session.set("last_edit",false);
      Session.set("addedBy",false);
      Session.set("title_a",false);
      Session.set("title_z",false);
      Session.set("author_a",false);
      Session.set("author_z",false);
      var value = $(".sorting-filter").val();

      if (value==="first_entry"){
        Session.set("first_entry",true);
      } 
      if (value==="last_entry"){
        Session.set("last_entry",true);
      } 
      if (value==="last_edit"){
        Session.set("last_edit",true);
      } 
      if (value==="addedBy"){
        Session.set("addedBy",true);
      } 
      if (value==="title_a"){
        Session.set("title_a",true);
      } 
      if (value==="title_z"){
        Session.set("title_z",true);
      } 
      if (value==="author_a"){
        Session.set("author_a",true);
      } 
      if (value==="author_z"){
        Session.set("author_z",true);
      } 
  },/*
  'change .sorting-category':function(event){
      Session.set("paintingFilter",false);
      Session.set("sculptureFilter",false);
      Session.set("architecturalFilter",false);
      Session.set("archivalFilter",false);
      Session.set("archaeologicalFilter",false);
      Session.set("sampleFilter",false);
      Session.set("pigmentFilter",false);
      Session.set("otherFilter",false);
      Session.set("privateFilter",false);
      Session.set("deletedFilter",false);
      var value = $(".sorting-category").val();

      if (value===""){
        Session.set("allFilter",true)
      }
      if (value==="Painting"){
        Session.set("paintingFilter",true);
      } 
      if (value==="Sculpture"){
        Session.set("sculptureFilter",true);
      } 
      if (value==="Architectural heritage"){
        Session.set("architecturalFilter",true);
      } 
      if (value==="Archival object"){
        Session.set("archivalFilter",true);
      } 
      if (value==="Archaeological object"){
        Session.set("archaeologicalFilter",true);
      } 
      if (value==="Sample/cross-section"){
        Session.set("sampleFilter",true);
      } 
      if (value==="Pigment/dye/binder/varnish/reference materials"){
        Session.set("pigmentFilter",true);
      } 
      if (value==="other"){
        Session.set("otherFilter",true);
      } 
      if (value==="private"){
        Session.set("privateFilter",true);
      } 
      if (value==="deleted"){
        Session.set("deletedFilter",true);
      } 
      //alert("/painting "+Session.get("paintingFilter")+"/sculpture "+Session.get("sculptureFilter")+"/architectural "+Session.get("architecturalFilter")+"/archival "+Session.get("archivalFilter")+"/archaeological "+Session.get("archaeologicalFilter")+"/sample "+Session.get("sampleFilter")+"/pigment "+Session.get("pigmentFilter")+"/other "+Session.get("otherFilter")+"/private "+Session.get("privateFilter")+"deleted "+Session.get("deletedFilter"))
    }*/
})