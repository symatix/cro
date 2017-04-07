Template.form_files_basic.events({
  'click #delete-front':function(event){
    event.preventDefault();
    var id = document.getElementById("img_front_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#img_front").val('');
    $("#img_front_id").val('');
    document.getElementById("newFront_name").innerHTML = "";
    document.getElementById("newFront_title").innerHTML = "";
    $("#front_uploaded").attr("src","");
    $("#delete-front").remove();
  },
  'change #data_img_front': function(event, template) {
    event.preventDefault();

    if (this._id){
      var imgId = document.getElementById("img_front_id").value;
    }

      FS.Utility.eachFile(event, function(file) {

        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#img_front").val('');
          $("#img_front_id").val('');
          document.getElementById("newFront_name").innerHTML = "";
          document.getElementById("newFront_title").innerHTML = "";
          $("#front_uploaded").attr("src","");
          $("#delete-front").remove();
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("newFront_title").innerHTML = "Front image";
                  document.getElementById("newFront_name").innerHTML = "new"; // set name in label
                  $("#front_uploaded").attr("src",url);
                  $("#delete-front-container").append('<a href="#" class="list-font btn btn-danger" id="delete-front">DELETE</a>');

                }
              }
            }); // end of wait

             // grabbing url and placing it for gallery img_front value
            var frontImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var frontImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_front").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_front").val(frontImg);
            $("#img_front_id").val(frontImgId);
            Session.set("img_front",frontImgId);

          }
        });
     });
   },
  'click #delete-back':function(event){
    event.preventDefault();
    var id = document.getElementById("img_back_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#img_back").val('');
    $("#img_back_id").val('');
    document.getElementById("backNew_name").innerHTML = "";
    document.getElementById("backNew_title").innerHTML = "";
    $("#back_uploaded").attr("src","");
    $("#delete-back").remove();
  },
  'change #data_img_back': function(event, template) {
    event.preventDefault();
    
    if (this._id){
      var imgId = document.getElementById("img_back_id").value;
    }


      FS.Utility.eachFile(event, function(file) {


        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#img_back").val('');
          $("#img_back_id").val('');
          document.getElementById("backNew_name").innerHTML = "";
          document.getElementById("backNew_title").innerHTML = "";
          $("#back_uploaded").attr("src","");
          $("#delete-back").remove();
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("backNew_title").innerHTML = "Back image";
                  document.getElementById("backNew_name").innerHTML = "new"; // set name in label
                  $("#back_uploaded").attr("src",url);
                  $("#delete-back-container").append('<a href="#" class="list-font btn btn-danger" id="delete-back">DELETE</a>');

                }
              }
            }); // end of wait


             // grabbing url and placing it for gallery img_front value
            var backImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var backImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_back").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_back").val(backImg);
            $("#img_back_id").val(backImgId);
            Session.set("backId", backImgId);
          }
        });
     });
   },
  'click #delete-side':function(event){
    event.preventDefault();
    var id = document.getElementById("img_side_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#img_side").val('');
    $("#img_side_id").val('');
    document.getElementById("sideNew_name").innerHTML = "";
    document.getElementById("sideNew_title").innerHTML = "";
    $("#side_uploaded").attr("src","");
    $("#delete-side").remove();
  },
  'change #data_img_side': function(event, template) {
    event.preventDefault();
    
    if (this._id){
      var imgId = document.getElementById("img_side_id").value;
    }


      FS.Utility.eachFile(event, function(file) {


        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#img_side").val('');
          $("#img_side_id").val('');
          document.getElementById("sideNew_name").innerHTML = "";
          document.getElementById("sideNew_title").innerHTML = "";
          $("#side_uploaded").attr("src","");
          $("#delete-side").remove();
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callside
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("sideNew_title").innerHTML = "Side image";
                  document.getElementById("sideNew_name").innerHTML = "new"; // set name in label
                  $("#side_uploaded").attr("src",url);
                  $("#delete-side-container").append('<a href="#" class="list-font btn btn-danger" id="delete-side">DELETE</a>');

                }
              }
            }); // end of wait


             // grabbing url and placing it for gallery img_front value
            var sideImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var sideImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_side").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_side").val(sideImg);
            $("#img_side_id").val(sideImgId);
            Session.set("sideId", sideImgId);
          }
        });
     });
   },
  'click #delete-signature':function(event){
    event.preventDefault();
    var id = document.getElementById("img_signature_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#img_signature").val('');
    $("#img_signature_id").val('');
    document.getElementById("signatureNew_name").innerHTML = "";
    document.getElementById("signatureNew_title").innerHTML = "";
    $("#signature_uploaded").attr("src","");
    $("#delete-signature").remove();
  },
  'change #data_img_signature': function(event, template) {
    event.preventDefault();
    
    if (this._id){
      var imgId = document.getElementById("img_signature_id").value;
    }


      FS.Utility.eachFile(event, function(file) {


        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#img_signature").val('');
          $("#img_signature_id").val('');
          document.getElementById("signatureNew_name").innerHTML = "";
          document.getElementById("signatureNew_title").innerHTML = "";
          $("#signature_uploaded").attr("src","");
          $("#delete-signature").remove();
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callsignature
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("signatureNew_title").innerHTML = "Signature image";
                  document.getElementById("signatureNew_name").innerHTML = "new"; // set name in label
                  $("#signature_uploaded").attr("src",url);
                  $("#delete-signature-container").append('<a href="#" class="list-font btn btn-danger" id="delete-signature">DELETE</a>');

                }
              }
            }); // end of wait


             // grabbing url and placing it for gallery img_front value
            var signatureImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var signatureImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_signature").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_signature").val(signatureImg);
            $("#img_signature_id").val(signatureImgId);
            Session.set("signatureId", signatureImgId);
          }
        });
     });
   },
  'click #delete-files':function(event){
    event.preventDefault();
    var id = document.getElementById("basic_files_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#basic_files").val('');
    $("#basic_files_id").val('');
    document.getElementById("filesNew_name").innerHTML = "";
    $("#delete-files").remove();
  },
  'change #data_basic_files': function(event, template) {
    event.preventDefault();
    
    if (this._id){
      var imgId = document.getElementById("basic_files_id").value;
    }


      FS.Utility.eachFile(event, function(file) {


        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#basic_files").val('');
          $("#basic_files_id").val('');
          document.getElementById("filesNew_name").innerHTML = "";
          $("#delete-files").remove();
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("filesNew_name").innerHTML = "new"; // set name in label
                  $("#delete-files-container").append('<a href="#" class="list-font btn btn-danger" id="delete-files">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait


             // grabbing url and placing it for gallery img_front value
            var filesImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesImgId = fileObj._id;

            var fullPath = document.getElementById("data_basic_files").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#basic_files").val(filesImg);
            $("#basic_files_id").val(filesImgId);
            Session.set("filesId", filesImgId);
          }
        });
     });
   },
})
