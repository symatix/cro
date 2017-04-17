
Template.advanced_search.helpers({
  searchIndex: () => SearchIndex,
  // yup...just to style a damn button...
  loadBtn:function () {
    return {class:'btn btn-submit'};
  }, 
  range:function(){
  	if (Session.get("range")){
  		return true;
  	}
  },
  typeOfObject:function(){
    var pigment = "Pigment/dye/binder/varnish/reference materials";
    if (Prospero.findOne({_id:this.__originalId}).type === pigment){
      return "Reference materials";
    } else {
      return Prospero.findOne({_id:this.__originalId}).type;
    }
  },

})