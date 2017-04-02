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
})