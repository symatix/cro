Template.files_methods_om.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #omOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("omFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#omFiles1").val('');
    $("#omFiles1_id").val('');
    document.getElementById("omOne_name").innerHTML = "";
    document.getElementById("omOne_title").innerHTML = "";
    $("#omOne_uploaded").attr("src","");
    $("#omOne_delete").remove();
  },
  'change #omFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("omFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#omFiles1").val('');
          $("#omFiles1_id").val('');
          document.getElementById("omOne_name").innerHTML = "";
          document.getElementById("omOne_title").innerHTML = "";
          $("#omOne_uploaded").attr("src","");
          $("#omOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#omFiles1").val(photoOne);
            $("#omFiles1_id").val(photoOneId);
            Session.set("omFiles1_id", photoOneId);
            document.getElementById("omOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#omOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="omOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#omOne_progress").remove();
                            }
                            console.log(result);
                            $("#omOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("omOne_title").innerHTML = "Picture one";
                  document.getElementById("omOne_name").innerHTML = "new";
                  $("#omOne_uploaded").attr("src",url);
                  $("#omOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="omOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #omTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("omFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#omFiles2").val('');
    $("#omFiles2_id").val('');
    document.getElementById("omTwo_name").innerHTML = "";
    document.getElementById("omTwo_title").innerHTML = "";
    $("#omTwo_uploaded").attr("src","");
    $("#omTwo_delete").remove();
  },

  'change #omFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("omFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#omFiles2").val('');
          $("#omFiles2_id").val('');
          document.getElementById("omTwo_name").innerHTML = "";
          document.getElementById("omTwo_title").innerHTML = "";
          $("#omTwo_uploaded").attr("src","");
          $("#omTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#omFiles2").val(photoTwo);
            $("#omFiles2_id").val(photoTwoId);
            Session.set("omFiles2_id", photoTwoId);
            document.getElementById("omTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#omTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="omTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#omTwo_progress").remove();
                            }
                            console.log(result);
                            $("#omTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("omTwo_title").innerHTML = "Picture two";
                  document.getElementById("omTwo_name").innerHTML = "new"; // set name in label
                  $("#omTwo_uploaded").attr("src",url);
                  $("#omTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="omTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #omThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("omFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#omFiles3").val('');
    $("#omFiles3_id").val('');
    document.getElementById("omThree_name").innerHTML = "";
    document.getElementById("omThree_title").innerHTML = "";
    $("#omThree_uploaded").attr("src","");
    $("#omThree_delete").remove();
  },

  'change #omFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("omFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#omFiles3").val('');
          $("#omFiles3_id").val('');
          document.getElementById("omThree_name").innerHTML = "";
          document.getElementById("omThree_title").innerHTML = "";
          $("#omThree_uploaded").attr("src","");
          $("#omThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#omFiles3").val(photoThree);
            $("#omFiles3_id").val(photoThreeId);
            Session.set("omFiles3_id", photoThreeId);
            document.getElementById("omThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#omThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="omThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#omThree_progress").remove();
                            }
                            console.log(result);
                            $("#omThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("omThree_title").innerHTML = "Picture three";
                  document.getElementById("omThree_name").innerHTML = "new"; // set name in label
                  $("#omThree_uploaded").attr("src",url);
                  $("#omThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="omThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #omFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("omFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#omFiles4").val('');
    $("#omFiles4_id").val('');
    document.getElementById("omFour_name").innerHTML = "";
    document.getElementById("omFour_title").innerHTML = "";
    $("#omFour_uploaded").attr("src","");
    $("#omFour_delete").remove();
  },

  'change #omFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("omFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#omFiles4").val('');
          $("#omFiles4_id").val('');
          document.getElementById("omFour_name").innerHTML = "";
          document.getElementById("omFour_title").innerHTML = "";
          $("#omFour_uploaded").attr("src","");
          $("#omFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#omFiles4").val(photoFour);
            $("#omFiles4_id").val(photoFourId);
            Session.set("omFiles4_id", photoFourId);
            document.getElementById("omFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#omFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="omFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#omFour_progress").remove();
                            }
                            console.log(result);
                            $("#omFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("omFour_title").innerHTML = "Picture four";
                  document.getElementById("omFour_name").innerHTML = "new"; // set name in label
                  $("#omFour_uploaded").attr("src",url);
                  $("#omFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="omFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #omFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("omFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#omFiles5").val('');
    $("#omFiles5_id").val('');
    document.getElementById("omFiles_name").innerHTML = "";
    document.getElementById("upload_omFiles5").innerHTML = "(.zip)";
    $("#omFile_delete").remove();
  },
  'change #omFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("omFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#omFiles5").val('');
          $("#omFiles5_id").val('');
          document.getElementById("omFiles_name").innerHTML = "";
          document.getElementById("upload_omFiles5").innerHTML = "(.zip)";
          $("#omFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#omFiles5").val(files);
            $("#omFiles5_id").val(filesId);
            Session.set("omFiles5_id", filesId);

            // track progress of upload
            $("#omFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="omFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#omFive_progress").remove();
                            }
                            console.log(result);
                            $("#omFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("omFiles_name").innerHTML = "new"; 
                  $("#omFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="omFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})