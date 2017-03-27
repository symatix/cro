// web ("/") / local ("index/index")
Template.painting_list.helpers({
  paintingIndex: () => PaintingIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
Template.sculpture_list.helpers({
  sculptureIndex: () => SculptureIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
Template.architectural_list.helpers({
  architecturalIndex: () => ArchitecturalIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
Template.archival_list.helpers({
  archivalIndex: () => ArchivalIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
Template.archaeological_list.helpers({
  archaeologicalIndex: () => ArchaeologicalIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
Template.pigment_list.helpers({
  pigmentIndex: () => PigmentIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
Template.other_list.helpers({
  otherIndex: () => OtherIndex,
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
})
