Template.nav_scrollspy_affix.helpers({
  notPigment:function(){
    if (Session.get("showPicture") || Session.get("showSculpture") || Session.get("showSample") || Session.get("showOther")){
      return true;
    } else {
      return false;
    }
  }
})

Template.objectType_hidden_fields.helpers({
  painting:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Painting';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  sculpture:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Sculpture';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  arhitectual:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Architectural heritage';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  archival:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Archival object';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  archaeological:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Archaeological object';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  sample:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Sample/cross-section';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  pigment:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'Pigment/dye/binder/varnish/reference materials';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
  other:function(){
    var id = Session.get("itemId");
    var object = Prospero.findOne(id).type;
    var type = 'other';
    if (object === type){
      console.log("editing: "+object+" / id: "+id);
      return true;
    }
  },
})