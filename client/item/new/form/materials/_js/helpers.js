Template.original_painting.helpers({
  pontataYes:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.original.potataGiornata;
      if (type === "Yes"){
        return "selected";
      }
    }
  },
  pontataNo:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.original.potataGiornata;
      if (type === "No"){
        return "selected";
      }
    }
  },
  reliefYes:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.original.relief;
      if (type === "Yes"){
        return "selected";
      }
    }
  },
  reliefNo:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.original.relief;
      if (type === "No"){
        return "selected";
      }
    }
  },
})
Template.interventions_painting.helpers({
  pontataYes2:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.interventions.potataGiornata;
      if (type === "Yes"){
        return "selected";
      }
    }
  },
  pontataNo2:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.interventions.potataGiornata;
      if (type === "No"){
        return "selected";
      }
    }
  },
  reliefYes2:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.interventions.relief;
      if (type === "Yes"){
        return "selected";
      }
    }
  },
  reliefNo2:function(){
    if (this._id){
      var type = Prospero.findOne(this._id).materials.interventions.relief;
      if (type === "No"){
        return "selected";
      }
    }
  },
})

Template.materials_techniques.helpers({
	painting:function(){
		if (Session.get("showPainting")){
			return true;
		}
	},
	sculpture:function(){
		if(Session.get("showSculpture")){
			return true;
		}
	},
	other:function(){
		if(Session.get("showOther")){
			return true;
		}
	},
})