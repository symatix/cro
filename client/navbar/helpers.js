// web ("") / local ("index/navbar")
Template.navbar.helpers({
  admin:function(){
    var username = Meteor.user().profile.full_name;
    var admin = "admin";
    if (username == admin){
      return true;
    }
  },
  paintingIndex: () => PaintingIndex,
  adminIndex: () => AdminIndex,
  editorIndex: () => EditorIndex,

  searchAttributes:function(){
    return {placeholder: ' Search by author or title',
            id:'input-basic-search'}
  },
  paintingInput:function(){
    var routeName = Router.current().route.path();
    var index = "/Painting";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  },
  sculptureInput:function(){
    var routeName = Router.current().route.path();
    var index = "/Sculpture";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  },
  editorInput:function(){
    var routeName = Router.current().route.path();
    var index = "/database/myitems";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  },
  adminInput:function(){
    var routeName = Router.current().route.path();
    var index = "/admin/prosperoDB";
    if(routeName == index){
      return true;
    } else {
      return false;
    }
  }
})