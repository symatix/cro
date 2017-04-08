Template.files_methods_scanning.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #scanningOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("scanningFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#scanningFiles1").val('');
    $("#scanningFiles1_id").val('');
    document.getElementById("scanningOne_name").innerHTML = "";
    document.getElementById("scanningOne_title").innerHTML = "";
    $("#scanningOne_uploaded").attr("src","");
    $("#scanningOne_delete").remove();
  },
  'change #scanningFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("scanningFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#scanningFiles1").val('');
          $("#scanningFiles1_id").val('');
          document.getElementById("scanningOne_name").innerHTML = "";
          document.getElementById("scanningOne_title").innerHTML = "";
          $("#scanningOne_uploaded").attr("src","");
          $("#scanningOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#scanningFiles1").val(photoOne);
            $("#scanningFiles1_id").val(photoOneId);
            Session.set("scanningFiles1_id", photoOneId);
            document.getElementById("scanningOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#scanningOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="scanningOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#scanningOne_progress").remove();
                            }
                            console.log(result);
                            $("#scanningOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("scanningOne_title").innerHTML = "Picture one";
                  document.getElementById("scanningOne_name").innerHTML = "new";
                  $("#scanningOne_uploaded").attr("src",url);
                  $("#scanningOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="scanningOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #scanningTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("scanningFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#scanningFiles2").val('');
    $("#scanningFiles2_id").val('');
    document.getElementById("scanningTwo_name").innerHTML = "";
    document.getElementById("scanningTwo_title").innerHTML = "";
    $("#scanningTwo_uploaded").attr("src","");
    $("#scanningTwo_delete").remove();
  },

  'change #scanningFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("scanningFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#scanningFiles2").val('');
          $("#scanningFiles2_id").val('');
          document.getElementById("scanningTwo_name").innerHTML = "";
          document.getElementById("scanningTwo_title").innerHTML = "";
          $("#scanningTwo_uploaded").attr("src","");
          $("#scanningTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#scanningFiles2").val(photoTwo);
            $("#scanningFiles2_id").val(photoTwoId);
            Session.set("scanningFiles2_id", photoTwoId);
            document.getElementById("scanningTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#scanningTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="scanningTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#scanningTwo_progress").remove();
                            }
                            console.log(result);
                            $("#scanningTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("scanningTwo_title").innerHTML = "Picture two";
                  document.getElementById("scanningTwo_name").innerHTML = "new"; // set name in label
                  $("#scanningTwo_uploaded").attr("src",url);
                  $("#scanningTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="scanningTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #scanningThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("scanningFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#scanningFiles3").val('');
    $("#scanningFiles3_id").val('');
    document.getElementById("scanningThree_name").innerHTML = "";
    document.getElementById("scanningThree_title").innerHTML = "";
    $("#scanningThree_uploaded").attr("src","");
    $("#scanningThree_delete").remove();
  },

  'change #scanningFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("scanningFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#scanningFiles3").val('');
          $("#scanningFiles3_id").val('');
          document.getElementById("scanningThree_name").innerHTML = "";
          document.getElementById("scanningThree_title").innerHTML = "";
          $("#scanningThree_uploaded").attr("src","");
          $("#scanningThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#scanningFiles3").val(photoThree);
            $("#scanningFiles3_id").val(photoThreeId);
            Session.set("scanningFiles3_id", photoThreeId);
            document.getElementById("scanningThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#scanningThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="scanningThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#scanningThree_progress").remove();
                            }
                            console.log(result);
                            $("#scanningThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("scanningThree_title").innerHTML = "Picture three";
                  document.getElementById("scanningThree_name").innerHTML = "new"; // set name in label
                  $("#scanningThree_uploaded").attr("src",url);
                  $("#scanningThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="scanningThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #scanningFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("scanningFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#scanningFiles4").val('');
    $("#scanningFiles4_id").val('');
    document.getElementById("scanningFour_name").innerHTML = "";
    document.getElementById("scanningFour_title").innerHTML = "";
    $("#scanningFour_uploaded").attr("src","");
    $("#scanningFour_delete").remove();
  },

  'change #scanningFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("scanningFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#scanningFiles4").val('');
          $("#scanningFiles4_id").val('');
          document.getElementById("scanningFour_name").innerHTML = "";
          document.getElementById("scanningFour_title").innerHTML = "";
          $("#scanningFour_uploaded").attr("src","");
          $("#scanningFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#scanningFiles4").val(photoFour);
            $("#scanningFiles4_id").val(photoFourId);
            Session.set("scanningFiles4_id", photoFourId);
            document.getElementById("scanningFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#scanningFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="scanningFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#scanningFour_progress").remove();
                            }
                            console.log(result);
                            $("#scanningFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("scanningFour_title").innerHTML = "Picture four";
                  document.getElementById("scanningFour_name").innerHTML = "new"; // set name in label
                  $("#scanningFour_uploaded").attr("src",url);
                  $("#scanningFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="scanningFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #scanningFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("scanningFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#scanningFiles5").val('');
    $("#scanningFiles5_id").val('');
    document.getElementById("scanningFiles_name").innerHTML = "";
    document.getElementById("upload_scanningFiles5").innerHTML = "(.zip)";
    $("#scanningFile_delete").remove();
  },
  'change #scanningFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("scanningFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#scanningFiles5").val('');
          $("#scanningFiles5_id").val('');
          document.getElementById("scanningFiles_name").innerHTML = "";
          document.getElementById("upload_scanningFiles5").innerHTML = "(.zip)";
          $("#scanningFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#scanningFiles5").val(files);
            $("#scanningFiles5_id").val(filesId);
            Session.set("scanningFiles5_id", filesId);

            // track progress of upload
            $("#scanningFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="scanningFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#scanningFive_progress").remove();
                            }
                            console.log(result);
                            $("#scanningFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("scanningFiles_name").innerHTML = "new"; 
                  $("#scanningFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="scanningFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})