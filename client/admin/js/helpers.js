// web ("/new") > local ("/client/admin/item-list")
Template.adm_prospero_db.helpers({
  adminIndex: () => AdminIndex,
  gallery:function(){
      return Prospero.find({}, {sort:Session.get("sortList"), limit:Session.get("siteLimit")});
  },
  visibilityTrue:function(){
    var visibility = Prospero.findOne({_id:this.__originalId}).visible;
    if(visibility == "hidden"){
      return false;
    } else {
      return true;
    }
  },
  noValue:function(){
    var i;
    var x;
    var err = '';
    var itemDetails = Prospero.findOne({_id:this.__originalId});
      for (x in itemDetails){
        if(itemDetails[x] == err){
          console.log("test");
        return true;
      }
    }
  },
  loadBtn:function(){
    return {class:'btn-default btn-submit'}
  }
})

Template.db_count.helpers({
  prosperoCount:function(){
    return Prospero.find().count();
  },
  dataCount:function(){
    return Data.find().count();
  }
})

// web ("/admin/users") / local ("client/admin/user-list")
Template.users.helpers({
  users:function(){
    return Meteor.users.find({username:{$ne:"admin"}});
  }
})
