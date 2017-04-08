Template.form_files_basic.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    delete Session.keys.img_front
  },
  'change #data_img_front': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {

        // check if file is present and delete it
        var imgId = document.getElementById("img_front_id").value;
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
        // start to insert file
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

             // setting everything up for form submit
            var frontImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var frontImgId = fileObj._id;
            $("#img_front").val(frontImg);
            $("#img_front_id").val(frontImgId);
            document.getElementById("newFront_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#newFront_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="frontOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#frontOne_progress").remove();
                            }
                            console.log(result);
                            $("#frontOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // waiting for callback
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
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
      FS.Utility.eachFile(event, function(file) {

        // check if file is present and delete it
        var imgId = document.getElementById("img_back_id").value;
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
        // start to insert file
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {

            // setting everything up for form submit
            var backImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var backImgId = fileObj._id;
            $("#img_back").val(backImg);
            $("#img_back_id").val(backImgId);
            document.getElementById("backNew_title").innerHTML = "status: uploading";


            // track progress of upload
            $("#backNew_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="backTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#backTwo_progress").remove();
                            }
                            console.log(result);
                            $("#backTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // waiting for callback
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
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("img_side_id").value;
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

            var sideImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var sideImgId = fileObj._id;
            $("#img_side").val(sideImg);
            $("#img_side_id").val(sideImgId);
            document.getElementById("sideNew_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#sideNew_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="sideTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#sideTwo_progress").remove();
                            }
                            console.log(result);
                            $("#sideTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

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

          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("img_signature_id").value;
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

             // grabbing url and placing it for gallery img_front value
            var signatureImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var signatureImgId = fileObj._id;
            $("#img_signature").val(signatureImg);
            $("#img_signature_id").val(signatureImgId);
            document.getElementById("signatureNew_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#signatureNew_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="signatureTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#signatureTwo_progress").remove();
                            }
                            console.log(result);
                            $("#signatureTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for callback on upload
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
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

      FS.Utility.eachFile(event, function(file) {

      var imgId = document.getElementById("basic_files_id").value;
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


             // grabbing url and placing it for gallery img_front value
            var filesImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesImgId = fileObj._id;
            $("#basic_files").val(filesImg);
            $("#basic_files_id").val(filesImgId);


            // track progress of upload
            $("#filesNew_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="filesTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#filesTwo_progress").remove();
                            }
                            console.log(result);
                            $("#filesTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

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
          }
        });
     });
   },
})
