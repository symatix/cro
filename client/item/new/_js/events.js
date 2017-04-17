Template.item_new.events({
  'click .upload_label':function(event){
    $(".upload-progress").css({"display":"block"});
  },
  'mouseover .upload_label':function(event){
    var originalText = $(event.target).html();
    Session.set("labelOriginal", originalText);
    $(event.target).html("click to select and upload a file");
  },
  'mouseout .upload_label':function(event){
    $(event.target).html(Session.get("labelOriginal"));
    Session.set("labelOriginal", false);
  },
  'click .a-heading-tab':function(event){
    $("#methods_href").css({"display":"block"});
    $("#submit_href").css({"display":"block"});
  },
  'submit .js-input-painting-data':function(event){
    event.preventDefault();
    objectId = this._id;
    var progress = $('.progress-bar-custom').attr('aria-valuenow');
    console.log(progress);
    if (progress==="100" || progress==="0"){
      Meteor.myFunctions.insertData();
    } else {
      alert("Error: upload not finished. /"+progress);
    }
    Session.set("showPicture", false);
  },
  'click #form-basic-select li':function(e){
 // e.preventDefault();
    $(this).find('a').tab('show');
 // $(this).tab('show');
     $(this).closest('ul').find('input[type="checkbox"]').prop('checked','');
     $(this).closest('li').find('input[type="checkbox"]').prop('checked','checked');
     var type = $('input[type="checkbox"]:checked').val();
     $("#objectType").val(type);


    // now goes a long way of individual checking...
    //painting form
    if (document.getElementById('item_painting').checked){
      Session.set("showPainting", true);
    } else {
      Session.set("showPainting", false);
    }
    // sculpture form
    if (document.getElementById('item-sculpture').checked){
      Session.set("showSculpture", true);
    } else {
      Session.set("showSculpture", false);
    }
    // pigment form
    if (document.getElementById('item-pigment-dye-binder').checked){
      Session.set("showPigment", true);
    } else {
      Session.set("showPigment", false);
    }
    //sample cross section
    if (document.getElementById('item-sample-crosssection').checked){
      Session.set("showSample", true);
    } else {
      Session.set("showSample", false);
    }

    //other form
    if (document.getElementById('item-architectural-heritage').checked || document.getElementById('item-archival-object').checked || document.getElementById('item-archaeological').checked || document.getElementById('item-other').checked || document.getElementById('item-arts-crafts').checked){
      Session.set("showOther", true);
    } else {
      Session.set("showOther", false);
    }
  },
  'change #item_painting':function(e){
    e.preventDefault();
  }
})