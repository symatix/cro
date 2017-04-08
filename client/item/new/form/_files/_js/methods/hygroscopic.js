Template.files_methods_hygroscopic.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #hygroscopicOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("hygroscopicFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#hygroscopicFiles1").val('');
    $("#hygroscopicFiles1_id").val('');
    document.getElementById("hygroscopicOne_name").innerHTML = "";
    document.getElementById("hygroscopicOne_title").innerHTML = "";
    $("#hygroscopicOne_uploaded").attr("src","");
    $("#hygroscopicOne_delete").remove();
  },
  'change #hygroscopicFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("hygroscopicFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#hygroscopicFiles1").val('');
          $("#hygroscopicFiles1_id").val('');
          document.getElementById("hygroscopicOne_name").innerHTML = "";
          document.getElementById("hygroscopicOne_title").innerHTML = "";
          $("#hygroscopicOne_uploaded").attr("src","");
          $("#hygroscopicOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#hygroscopicFiles1").val(photoOne);
            $("#hygroscopicFiles1_id").val(photoOneId);
            Session.set("hygroscopicFiles1_id", photoOneId);
            document.getElementById("hygroscopicOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#hygroscopicOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="hygroscopicOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#hygroscopicOne_progress").remove();
                            }
                            console.log(result);
                            $("#hygroscopicOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("hygroscopicOne_title").innerHTML = "Picture one";
                  document.getElementById("hygroscopicOne_name").innerHTML = "new";
                  $("#hygroscopicOne_uploaded").attr("src",url);
                  $("#hygroscopicOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="hygroscopicOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #hygroscopicTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("hygroscopicFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#hygroscopicFiles2").val('');
    $("#hygroscopicFiles2_id").val('');
    document.getElementById("hygroscopicTwo_name").innerHTML = "";
    document.getElementById("hygroscopicTwo_title").innerHTML = "";
    $("#hygroscopicTwo_uploaded").attr("src","");
    $("#hygroscopicTwo_delete").remove();
  },

  'change #hygroscopicFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("hygroscopicFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#hygroscopicFiles2").val('');
          $("#hygroscopicFiles2_id").val('');
          document.getElementById("hygroscopicTwo_name").innerHTML = "";
          document.getElementById("hygroscopicTwo_title").innerHTML = "";
          $("#hygroscopicTwo_uploaded").attr("src","");
          $("#hygroscopicTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#hygroscopicFiles2").val(photoTwo);
            $("#hygroscopicFiles2_id").val(photoTwoId);
            Session.set("hygroscopicFiles2_id", photoTwoId);
            document.getElementById("hygroscopicTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#hygroscopicTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="hygroscopicTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#hygroscopicTwo_progress").remove();
                            }
                            console.log(result);
                            $("#hygroscopicTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("hygroscopicTwo_title").innerHTML = "Picture two";
                  document.getElementById("hygroscopicTwo_name").innerHTML = "new"; // set name in label
                  $("#hygroscopicTwo_uploaded").attr("src",url);
                  $("#hygroscopicTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="hygroscopicTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #hygroscopicThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("hygroscopicFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#hygroscopicFiles3").val('');
    $("#hygroscopicFiles3_id").val('');
    document.getElementById("hygroscopicThree_name").innerHTML = "";
    document.getElementById("hygroscopicThree_title").innerHTML = "";
    $("#hygroscopicThree_uploaded").attr("src","");
    $("#hygroscopicThree_delete").remove();
  },

  'change #hygroscopicFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("hygroscopicFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#hygroscopicFiles3").val('');
          $("#hygroscopicFiles3_id").val('');
          document.getElementById("hygroscopicThree_name").innerHTML = "";
          document.getElementById("hygroscopicThree_title").innerHTML = "";
          $("#hygroscopicThree_uploaded").attr("src","");
          $("#hygroscopicThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#hygroscopicFiles3").val(photoThree);
            $("#hygroscopicFiles3_id").val(photoThreeId);
            Session.set("hygroscopicFiles3_id", photoThreeId);
            document.getElementById("hygroscopicThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#hygroscopicThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="hygroscopicThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#hygroscopicThree_progress").remove();
                            }
                            console.log(result);
                            $("#hygroscopicThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("hygroscopicThree_title").innerHTML = "Picture three";
                  document.getElementById("hygroscopicThree_name").innerHTML = "new"; // set name in label
                  $("#hygroscopicThree_uploaded").attr("src",url);
                  $("#hygroscopicThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="hygroscopicThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #hygroscopicFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("hygroscopicFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#hygroscopicFiles4").val('');
    $("#hygroscopicFiles4_id").val('');
    document.getElementById("hygroscopicFour_name").innerHTML = "";
    document.getElementById("hygroscopicFour_title").innerHTML = "";
    $("#hygroscopicFour_uploaded").attr("src","");
    $("#hygroscopicFour_delete").remove();
  },

  'change #hygroscopicFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("hygroscopicFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#hygroscopicFiles4").val('');
          $("#hygroscopicFiles4_id").val('');
          document.getElementById("hygroscopicFour_name").innerHTML = "";
          document.getElementById("hygroscopicFour_title").innerHTML = "";
          $("#hygroscopicFour_uploaded").attr("src","");
          $("#hygroscopicFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#hygroscopicFiles4").val(photoFour);
            $("#hygroscopicFiles4_id").val(photoFourId);
            Session.set("hygroscopicFiles4_id", photoFourId);
            document.getElementById("hygroscopicFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#hygroscopicFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="hygroscopicFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#hygroscopicFour_progress").remove();
                            }
                            console.log(result);
                            $("#hygroscopicFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("hygroscopicFour_title").innerHTML = "Picture four";
                  document.getElementById("hygroscopicFour_name").innerHTML = "new"; // set name in label
                  $("#hygroscopicFour_uploaded").attr("src",url);
                  $("#hygroscopicFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="hygroscopicFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #hygroscopicFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("hygroscopicFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#hygroscopicFiles5").val('');
    $("#hygroscopicFiles5_id").val('');
    document.getElementById("hygroscopicFiles_name").innerHTML = "";
    document.getElementById("upload_hygroscopicFiles5").innerHTML = "(.zip)";
    $("#hygroscopicFile_delete").remove();
  },
  'change #hygroscopicFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("hygroscopicFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#hygroscopicFiles5").val('');
          $("#hygroscopicFiles5_id").val('');
          document.getElementById("hygroscopicFiles_name").innerHTML = "";
          document.getElementById("upload_hygroscopicFiles5").innerHTML = "(.zip)";
          $("#hygroscopicFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#hygroscopicFiles5").val(files);
            $("#hygroscopicFiles5_id").val(filesId);
            Session.set("hygroscopicFiles5_id", filesId);

            // track progress of upload
            $("#hygroscopicFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="hygroscopicFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#hygroscopicFive_progress").remove();
                            }
                            console.log(result);
                            $("#hygroscopicFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("hygroscopicFiles_name").innerHTML = "new"; 
                  $("#hygroscopicFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="hygroscopicFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})