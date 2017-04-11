Router.configure({
  layoutTemplate:'ProsperoLayout'
});

// GENERAL ROUTES
Router.route("/", function(){ 
  Session.set("noFilter", true);
  Session.set("details", true);
  this.render('navbar', {to:"header"});
  this.render('mainGallery', {to:"main"});
});

Router.route("/login", function(){
  this.render('navbar', {to:"header"});
  this.render('login', {to:"main"});
})

Router.route("/search", function(){
  this.render('navbar', {to:"header"});
  this.render('advanced_search', {to:"main"});
});

Router.route("/new", function(){
  Session.set("noFilter", true);
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main"});
});

Router.route("/edit/:_id", function(){
  Session.set("noFilter", true);
  Session.set("itemId", this.params._id);

  var id = Session.get("itemId");

   
    var type = Prospero.findOne(Session.get("itemId")).type;

    if(type === "Painting"){
      Session.set("showPicture", true);
    }
    if(type === "Sculpture"){
      Session.set("showSculpture", true);
    } 
    if(type === "Pigment/dye/binder/varnish/reference materials"){
      Session.set("showPigment", true);
    } 
    if(type === "Architectural heritage"){
      Session.set("showOther", true);
    }
    if(type === "Archival object"){
      Session.set("showOther", true);
    }
    if(type === "Archaeological object"){
      Session.set("showOther", true);
    }
    if(type === "other"){
      Session.set("showOther", true);
    }

  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/gallery/details/:_id", function(){
  Session.set("noFilter", true);
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_details', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});



// MODERATOR ROUTES
Router.route("/moderator/collection", function(){
  Session.set("sortList", {author: 1});
  Session.set("noFilter", true);

  this.render('navbar', {to:"header"});
  this.render('moderator_db', {to:"main"}); // change to limited session - 20 display
});


Router.route("/gallery/edit/:_id", function(){
  Session.set("noFilter", true);
  Session.set("itemId", this.params._id);

  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});


Router.route("/admin/users", function(){
  Session.set("noFilter", true);

  this.render('navbar', {to:"header"});
  this.render('users', {to:"main"});
});

Router.route("/admin/db/", function(){
  Session.set("sortList", {author: 1});
  Session.set("noFilter", true);
  this.render('navbar', {to:"header"});
  this.render('adm_db', {to:"main"});
});
Router.route("/admin/db/stats", function(){
  Session.set("sortList", {author: 1});
  Session.set("noFilter", true);

  this.render('navbar', {to:"header"});
  this.render('admin_db_stats', {to:"main"});
});

Router.route("/admin/users/entry", function(){
  Session.set("noFilter", true);

  this.render('navbar', {to:"header"});
  this.render('new_user', {to:"main"});
});
Router.route("/admin/users/entry/:_id", function(){
  Session.set("userId", this.params._id);
  Session.set("noFilter", true);

  this.render('navbar', {to:"header"});
  this.render('new_user', {to:"main",
    data: function(){
      return Meteor.users.findOne({_id:this.params._id});
}});
});
