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
})