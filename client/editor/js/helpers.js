// web ("/database/myitems") > local ("/client/user/item-list")
Template.editorItems.helpers({
  editorIndex: () => EditorIndex,
  gallery:function(){
    var userId = Meteor.user()._id;
    return Prospero.find(
      {userId:userId, visible:{$ne:"hidden"}}, {sort:Session.get("sortList"), limit:Session.get("siteLimit")});
  },
  loadBtn:function(){
    return {class:'btn-default btn-submit'}
  }
})
