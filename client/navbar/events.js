// web ("") / local ("index/navbar")
Template.navbar.events({
  "click .logout":function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go("/login");
  },
  'change .sorting-paintings': (e) => {
    PaintingIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-admin': (e) => {
    AdminIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'change .sorting-editor': (e) => {
    EditorIndex.getComponentMethods()
      .addProps('sortBy', $(e.target).val())
  },
  'click .newItem-href':function(){
    delete Session.keys.itemId;
  }
})