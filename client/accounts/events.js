Template.new_user.events({
    'submit .js-add-user': function(event){
        event.preventDefault();
        Meteor.myFunctions.addUser();
        Router.go("/admin/users");
    }
});

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var username = $('[name=username]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(username, password, function(error){
          if (error){
            $(".login-error").animate({opacity:1, padding:"15px", width:"170px"}, 100, function(){
              $(".login-error").animate({padding:"5px", width:"160px"}, 50);
            });
          } else {
          Router.go("/");
          }
        });
    }
});

Template.edit_user.events({
  'click .js-edit-user':function(event){
    event.preventDefault();
    Meteor.myFunctions.editUser();
    Router.go("/admin/users");
  },
    "click .js-delete":function(event){
      var safeDelete = $('#safe-delete-'+this._id).is(':checked')
      var userId = this._id;
      if (safeDelete){
        console.log(userId);
        Meteor.call("removeUser", userId);
        Router.go("/admin/users");
      } else {
        alert("FAIL > delete not allowed - check box to delete");
      }
    }
})

Template.users.events({
    "click .js-delete":function(event){
      var safeDelete = $('#safe-delete-'+this._id).is(':checked')
      var userId = this._id;
      if (safeDelete){
        $("#"+this._id).animate({opacity:0},400, function(){
        console.log(userId);
        Meteor.call("removeUser", userId);
        });
      } else {
        alert("FAIL > delete not allowed - check box to delete");
      }
    }
})
