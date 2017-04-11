// web ("/") / local ("index/index")
Template.mainGallery.helpers({
  galleryIndex: () => GalleryIndex,
  // yup...just to style a damn button...
  loadBtn:function () {
    return {class:'btn btn-submit'};
  }, 
  croartia:function(){
    return Prospero.find({}, {sort:{type:1}, limit:8});
  },
  typeOfObject:function(){
    var object = Prospero.findOne(this.__originalId).type;
    var pigment = "Pigment/dye/binder/varnish/reference materials";
    var other = "other";
    if (object===pigment){
      object = "Reference material";
      return object;
    } else if (object===other){
      object = "Other";
      return object;
    } else {
    return object;
    }

  },
  viewLarge:function(){
    if (Session.get("large")){
      return true;
    }
  },
  viewDetails:function(){
    if (Session.get("details")){
      return true;
    }
  },
  /*
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
  */
})
