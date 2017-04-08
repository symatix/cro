Template.files_methods_xrf.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrfOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrfFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrfFiles1").val('');
    $("#xrfFiles1_id").val('');
    document.getElementById("xrfOne_name").innerHTML = "";
    document.getElementById("xrfOne_title").innerHTML = "";
    $("#xrfOne_uploaded").attr("src","");
    $("#xrfOne_delete").remove();
  },
  'change #xrfFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrfFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrfFiles1").val('');
          $("#xrfFiles1_id").val('');
          document.getElementById("xrfOne_name").innerHTML = "";
          document.getElementById("xrfOne_title").innerHTML = "";
          $("#xrfOne_uploaded").attr("src","");
          $("#xrfOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#xrfFiles1").val(photoOne);
            $("#xrfFiles1_id").val(photoOneId);
            Session.set("xrfFiles1_id", photoOneId);
            document.getElementById("xrfOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrfOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrfOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrfOne_progress").remove();
                            }
                            console.log(result);
                            $("#xrfOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrfOne_title").innerHTML = "Picture one";
                  document.getElementById("xrfOne_name").innerHTML = "new";
                  $("#xrfOne_uploaded").attr("src",url);
                  $("#xrfOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrfOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrfTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrfFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrfFiles2").val('');
    $("#xrfFiles2_id").val('');
    document.getElementById("xrfTwo_name").innerHTML = "";
    document.getElementById("xrfTwo_title").innerHTML = "";
    $("#xrfTwo_uploaded").attr("src","");
    $("#xrfTwo_delete").remove();
  },

  'change #xrfFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrfFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrfFiles2").val('');
          $("#xrfFiles2_id").val('');
          document.getElementById("xrfTwo_name").innerHTML = "";
          document.getElementById("xrfTwo_title").innerHTML = "";
          $("#xrfTwo_uploaded").attr("src","");
          $("#xrfTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#xrfFiles2").val(photoTwo);
            $("#xrfFiles2_id").val(photoTwoId);
            Session.set("xrfFiles2_id", photoTwoId);
            document.getElementById("xrfTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrfTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrfTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrfTwo_progress").remove();
                            }
                            console.log(result);
                            $("#xrfTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrfTwo_title").innerHTML = "Picture two";
                  document.getElementById("xrfTwo_name").innerHTML = "new"; // set name in label
                  $("#xrfTwo_uploaded").attr("src",url);
                  $("#xrfTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrfTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrfThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrfFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrfFiles3").val('');
    $("#xrfFiles3_id").val('');
    document.getElementById("xrfThree_name").innerHTML = "";
    document.getElementById("xrfThree_title").innerHTML = "";
    $("#xrfThree_uploaded").attr("src","");
    $("#xrfThree_delete").remove();
  },

  'change #xrfFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("xrfFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrfFiles3").val('');
          $("#xrfFiles3_id").val('');
          document.getElementById("xrfThree_name").innerHTML = "";
          document.getElementById("xrfThree_title").innerHTML = "";
          $("#xrfThree_uploaded").attr("src","");
          $("#xrfThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#xrfFiles3").val(photoThree);
            $("#xrfFiles3_id").val(photoThreeId);
            Session.set("xrfFiles3_id", photoThreeId);
            document.getElementById("xrfThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrfThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrfThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrfThree_progress").remove();
                            }
                            console.log(result);
                            $("#xrfThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrfThree_title").innerHTML = "Picture three";
                  document.getElementById("xrfThree_name").innerHTML = "new"; // set name in label
                  $("#xrfThree_uploaded").attr("src",url);
                  $("#xrfThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrfThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrfFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrfFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrfFiles4").val('');
    $("#xrfFiles4_id").val('');
    document.getElementById("xrfFour_name").innerHTML = "";
    document.getElementById("xrfFour_title").innerHTML = "";
    $("#xrfFour_uploaded").attr("src","");
    $("#xrfFour_delete").remove();
  },

  'change #xrfFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("xrfFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrfFiles4").val('');
          $("#xrfFiles4_id").val('');
          document.getElementById("xrfFour_name").innerHTML = "";
          document.getElementById("xrfFour_title").innerHTML = "";
          $("#xrfFour_uploaded").attr("src","");
          $("#xrfFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#xrfFiles4").val(photoFour);
            $("#xrfFiles4_id").val(photoFourId);
            Session.set("xrfFiles4_id", photoFourId);
            document.getElementById("xrfFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrfFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrfFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrfFour_progress").remove();
                            }
                            console.log(result);
                            $("#xrfFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrfFour_title").innerHTML = "Picture four";
                  document.getElementById("xrfFour_name").innerHTML = "new"; // set name in label
                  $("#xrfFour_uploaded").attr("src",url);
                  $("#xrfFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrfFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrfFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrfFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrfFiles5").val('');
    $("#xrfFiles5_id").val('');
    document.getElementById("xrfFiles_name").innerHTML = "";
    document.getElementById("upload_xrfFiles5").innerHTML = "(.zip)";
    $("#xrfFile_delete").remove();
  },
  'change #xrfFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrfFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrfFiles5").val('');
          $("#xrfFiles5_id").val('');
          document.getElementById("xrfFiles_name").innerHTML = "";
          document.getElementById("upload_xrfFiles5").innerHTML = "(.zip)";
          $("#xrfFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#xrfFiles5").val(files);
            $("#xrfFiles5_id").val(filesId);
            Session.set("xrfFiles5_id", filesId);

            // track progress of upload
            $("#xrfFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrfFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrfFive_progress").remove();
                            }
                            console.log(result);
                            $("#xrfFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("xrfFiles_name").innerHTML = "new"; 
                  $("#xrfFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrfFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})