Template.item_new.helpers({
  admin:function(){
    var userCurrent = Meteor.user().username;
    var userAdmin = Meteor.users.findOne({username:"admin"}).username;
    if (userCurrent == userAdmin){
      return true;
    } else {
      return false;
    }
  },
  data:function(){
    return Data.find();
  },
  editObject:function(){
    var itemId = this._id;
    if(!itemId){
      return true;
    }
  },
  available:function(){
    if (this._id){
      var isAvailable = Prospero.findOne(this._id).isDeleted;
      if (isAvailable === "available"){
        return "selected";
      }
    }
  },
  deleted:function(){
    if (this._id){
      var isDeleted = Prospero.findOne(this._id).isDeleted;
      if (isDeleted === "deleted"){
        return "selected";
      }
    }
  },
  public:function(){
    if (this._id){
      var isPublic = Prospero.findOne(this._id).visible;
      if (isPublic === "public"){
        return "selected";
      }
    } else if (!this._id){
      return "selected";
    }
  },
  private:function(){
    if (this._id){
      var isPrivate = Prospero.findOne(this._id).visible;
      if (isPrivate === "private"){
        return "selected";
      }
    }
  },

})