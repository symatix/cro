// local ("test/property-check.html")
Template.property_check.helpers({
  noValue:function(){
    var i;
    var x;
    var err = '';
    var itemDetails = Prospero.findOne({_id:this.__originalId}).basic;
      for (x in itemDetails){
        if(itemDetails[x] == err){
        return true;
      }
    }
  }
})

// web ("/gallery/details/:_id") > local ("test/edit-button")
Template.edit_button.helpers({
  owner:function(){
    var user = Meteor.user()._id;
    var owner = Prospero.findOne({_id:this._id}).userId;
    if (user){
      if (user == owner){
        return true;
      }
    }
  },
  admin:function(){
    var userCurrent = Meteor.user().username;
    if (userCurrent == "admin"){
      return true;
    }
  }
})
