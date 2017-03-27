Router.configure({
  layoutTemplate:'ProsperoLayout'
});

Router.route("/", function(){
  this.render('navbar', {to:"header"});
  this.render('mainGallery', {to:"main"});
});
// list branching urls
Router.route("/Painting", function(){
  this.render('navbar', {to:"header"});
  this.render('painting_list', {to:"main"});
});
Router.route("/Sculpture", function(){
  this.render('navbar', {to:"header"});
  this.render('sculpture_list', {to:"main"});
});
Router.route("/Architectural%20heritage", function(){
  this.render('navbar', {to:"header"});
  this.render('architectural_list', {to:"main"});
});
Router.route("/Archival%20object", function(){
  this.render('navbar', {to:"header"});
  this.render('archival_list', {to:"main"});
});
Router.route("/Archaeological%20object", function(){
  this.render('navbar', {to:"header"});
  this.render('archaeological_list', {to:"main"});
});
Router.route("/Pigment/dye/binder/varnish/reference%20materials", function(){
  this.render('navbar', {to:"header"});
  this.render('pigment_list', {to:"main"});
});
Router.route("/other", function(){
  this.render('navbar', {to:"header"});
  this.render('other_list', {to:"main"});
});






Router.route("/login", function(){
  this.render('navbar', {to:"header"});
  this.render('login', {to:"main"});
})

Router.route("/search", function(){
  this.render('navbar', {to:"header"});
  this.render('advanced_search', {to:"main"});
});

Router.route("/up", function(){
  this.render('navbar', {to:"header"});
  this.render('upload_form', {to:"main"});
});

Router.route("/database/myitems", function(){
  Session.set("sortList", {author: 1});
  this.render('navbar', {to:"header"});
  this.render('editorItems', {to:"main"}); // change to limited session - 20 display
});

Router.route("/new", function(){
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main"});
});

Router.route("/gallery/details/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_details', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/gallery/edit/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});
Router.route("/edit/:_id", function(){
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

Router.route("/admin/details/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_details', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/admin/edit/:_id", function(){
  Session.set("itemId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('item_new', {to:"main",
    data: function(){
        return Prospero.findOne({_id:this.params._id});
      }
    });
});

Router.route("/admin/users", function(){
  this.render('navbar', {to:"header"});
  this.render('users', {to:"main"});
});
Router.route("/admin/users/edit/:_id", function(){
  Session.set("userId", this.params._id);
  this.render('navbar', {to:"header"});
  this.render('edit_user', {to:"main",
    data: function(){
      return Meteor.users.findOne({_id:this.params._id});
}});
});


Router.route("/admin/prosperoDB/", function(){
  Session.set("sortList", {author: 1})
  this.render('navbar', {to:"header"});
  this.render('adm_prospero_db', {to:"main"});
});

Router.route("/admin/users/add", function(){
  this.render('navbar', {to:"header"});
  this.render('new_user', {to:"main"});
});
