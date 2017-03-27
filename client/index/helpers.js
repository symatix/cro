// web ("/") / local ("index/index")
Template.mainGallery.helpers({
  galleryIndex: () => GalleryIndex,

  gallery:function(){
    return Prospero.find({}, {sort:Session.get("sortIndex"), limit:Session.get("siteLimit")});
  },
  loadBtn:function(){
    return {class:"btn btn-default btn-submit float-right"}
  },
  username:function(){
    return Meteor.user().profile.full_name;
  },
  painting:function(){
    return Prospero.find({"type":"Painting"}, {limit:1});
  },
  sculptures:function(){
    return Prospero.find({"type":"Sculpture"}, {limit:1});
  },
  heritage:function(){
    return Prospero.find({"type":"Architectural heritage"}, {limit:1});
  },
  archival:function(){
    return Prospero.find({"type":"Archival object"}, {limit:1});
  },
  archaeological:function(){
    return Prospero.find({"type":"Archaeological object"}, {limit:1});
  },
  sample:function(){
    return Prospero.find({"type":"Sample/cross-section"}, {limit:1});
  },
  pigment:function(){
    return Prospero.find({"type":"Pigment/dye/binder/varnish/reference materials"}, {limit:1});
  },
  other:function(){
    return Prospero.find({"type":"other"}, {limit:1});
  }
})
