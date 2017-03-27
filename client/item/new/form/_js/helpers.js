Template.form.helpers({
  notIntruder:function(){
    if (!Session.get("showPigment")){
      return true;
    } else {
      return false;
    }
  },
  painting:function(){
    if (Session.get("showPicture")){
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
  exclusive:function(){
    var painting = Session.get("showPicture");
    var sculpture = Session.get("showSculpture");
    var other = Session.get("showOther");
    if (painting || sculpture || other){
      return true;
    }
  },
  pigment:function(){
    if(Session.get("showPigment")){
      return true;
    }
  }
})