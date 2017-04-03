// web ("") / local ("index/navbar")
Template.navbar.helpers({
  admin:function(){
    var username = Meteor.user().profile.full_name;
    var admin = "admin";
    if (username == admin){
      return true;
    }
  },
  galleryIndex: () => GalleryIndex,
  adminIndex: () => AdminIndex,
  moderatorIndex: () => ModeratorIndex,
  usersIndex: () => UsersIndex,

  searchAttributesModerator:function(){
    return {placeholder: ' Search by author, title or type',
            id:'input-basic-search'}
  },
  searchAttributesAdmin:function(){
    return {placeholder: ' Search by author, title, user or type',
            id:'input-basic-search'}
  },
  searchAttributesUsers:function(){
    return {placeholder: ' Search by username, name, email or inst...',
            id:'input-basic-search'}
  },
  userDbView:function(){
    var routeName = Router.current().route.path();
    var admin = "/admin/db";
    var moderator = "/moderator/collection";
    if(routeName == admin || routeName == moderator){
      return true;
    } 
  },
  moderatorDbView:function(){
    var routeName = Router.current().route.path();
    var moderatorDb = "/admin/users";
    if(routeName == moderatorDb){
      return true;
    } 
  },
  homeUrl:function(){
    var routeName = Router.current().route.path();
    var home = "/";
    if(routeName == home){
      return true;
    } else {
      return false;
    }
  },
  large:function(){
    if(Session.get("large")){
      return "selected";
    }
  },
  details:function(){
    if(Session.get("details")){
      return "selected";
    }
  },
  
  first_entry:function(){
    if(Session.get("first_entry")){
      return "selected";
    }
  },
  last_entry:function(){
    if(Session.get("last_entry")){
      return "selected";
    }
  },
  last_edit:function(){
    if(Session.get("last_edit")){
      return "selected";
    }
  },
  addedBy:function(){
    if(Session.get("addedBy")){
      return "selected";
    }
  },
  title_a:function(){
    if(Session.get("title_a")){
      return "selected";
    }
  },
  title_z:function(){
    if(Session.get("title_z")){
      return "selected";
    }
  },
  author_a:function(){
    if(Session.get("author_a")){
      return "selected";
    }
  },
  author_z:function(){
    if(Session.get("author_z")){
      return "selected";
    }
  },
/*

  painting:function(){
    if(Session.get("paintingFilter")){
      return "selected";
    }
  },
  sculpture:function(){
    if(Session.get("sculptureFilter")){
      return "selected";
    }
  },
  architectural:function(){
    if(Session.get("architecturalFilter")){
      return "selected";
    }
  },
  archival:function(){
    if(Session.get("archivalFilter")){
      return "selected";
    }
  },
  archaeological:function(){
    if(Session.get("archaeologicalFilter")){
      return "selected";
    }
  },
  sample:function(){
    if(Session.get("sampleFilter")){
      return "selected";
    }
  },
  pigment:function(){
    if(Session.get("pigmentFilter")){
      return "selected";
    }
  },
  other:function(){
    if(Session.get("otherFilter")){
      return "selected";
    }
  },
  private:function(){
    if(Session.get("privateFilter")){
      return "selected";
    }
  },
  deleted:function(){
    if(Session.get("deletedFilter")){
      return "selected";
    }
  },
  all:function(){
    if(Session.get("allFilter")){
      return "selected";
    }
  },
  */
})