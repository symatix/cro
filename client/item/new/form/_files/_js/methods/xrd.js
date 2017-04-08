Template.files_methods_xrd.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrdOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrdFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrdFiles1").val('');
    $("#xrdFiles1_id").val('');
    document.getElementById("xrdOne_name").innerHTML = "";
    document.getElementById("xrdOne_title").innerHTML = "";
    $("#xrdOne_uploaded").attr("src","");
    $("#xrdOne_delete").remove();
  },
  'change #xrdFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrdFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrdFiles1").val('');
          $("#xrdFiles1_id").val('');
          document.getElementById("xrdOne_name").innerHTML = "";
          document.getElementById("xrdOne_title").innerHTML = "";
          $("#xrdOne_uploaded").attr("src","");
          $("#xrdOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#xrdFiles1").val(photoOne);
            $("#xrdFiles1_id").val(photoOneId);
            Session.set("xrdFiles1_id", photoOneId);
            document.getElementById("xrdOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrdOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrdOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrdOne_progress").remove();
                            }
                            console.log(result);
                            $("#xrdOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrdOne_title").innerHTML = "Picture one";
                  document.getElementById("xrdOne_name").innerHTML = "new";
                  $("#xrdOne_uploaded").attr("src",url);
                  $("#xrdOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrdOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrdTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrdFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrdFiles2").val('');
    $("#xrdFiles2_id").val('');
    document.getElementById("xrdTwo_name").innerHTML = "";
    document.getElementById("xrdTwo_title").innerHTML = "";
    $("#xrdTwo_uploaded").attr("src","");
    $("#xrdTwo_delete").remove();
  },

  'change #xrdFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrdFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrdFiles2").val('');
          $("#xrdFiles2_id").val('');
          document.getElementById("xrdTwo_name").innerHTML = "";
          document.getElementById("xrdTwo_title").innerHTML = "";
          $("#xrdTwo_uploaded").attr("src","");
          $("#xrdTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#xrdFiles2").val(photoTwo);
            $("#xrdFiles2_id").val(photoTwoId);
            Session.set("xrdFiles2_id", photoTwoId);
            document.getElementById("xrdTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrdTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrdTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrdTwo_progress").remove();
                            }
                            console.log(result);
                            $("#xrdTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrdTwo_title").innerHTML = "Picture two";
                  document.getElementById("xrdTwo_name").innerHTML = "new"; // set name in label
                  $("#xrdTwo_uploaded").attr("src",url);
                  $("#xrdTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrdTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrdThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrdFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrdFiles3").val('');
    $("#xrdFiles3_id").val('');
    document.getElementById("xrdThree_name").innerHTML = "";
    document.getElementById("xrdThree_title").innerHTML = "";
    $("#xrdThree_uploaded").attr("src","");
    $("#xrdThree_delete").remove();
  },

  'change #xrdFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("xrdFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrdFiles3").val('');
          $("#xrdFiles3_id").val('');
          document.getElementById("xrdThree_name").innerHTML = "";
          document.getElementById("xrdThree_title").innerHTML = "";
          $("#xrdThree_uploaded").attr("src","");
          $("#xrdThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#xrdFiles3").val(photoThree);
            $("#xrdFiles3_id").val(photoThreeId);
            Session.set("xrdFiles3_id", photoThreeId);
            document.getElementById("xrdThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrdThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrdThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrdThree_progress").remove();
                            }
                            console.log(result);
                            $("#xrdThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrdThree_title").innerHTML = "Picture three";
                  document.getElementById("xrdThree_name").innerHTML = "new"; // set name in label
                  $("#xrdThree_uploaded").attr("src",url);
                  $("#xrdThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrdThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrdFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrdFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrdFiles4").val('');
    $("#xrdFiles4_id").val('');
    document.getElementById("xrdFour_name").innerHTML = "";
    document.getElementById("xrdFour_title").innerHTML = "";
    $("#xrdFour_uploaded").attr("src","");
    $("#xrdFour_delete").remove();
  },

  'change #xrdFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("xrdFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrdFiles4").val('');
          $("#xrdFiles4_id").val('');
          document.getElementById("xrdFour_name").innerHTML = "";
          document.getElementById("xrdFour_title").innerHTML = "";
          $("#xrdFour_uploaded").attr("src","");
          $("#xrdFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#xrdFiles4").val(photoFour);
            $("#xrdFiles4_id").val(photoFourId);
            Session.set("xrdFiles4_id", photoFourId);
            document.getElementById("xrdFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrdFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrdFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrdFour_progress").remove();
                            }
                            console.log(result);
                            $("#xrdFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrdFour_title").innerHTML = "Picture four";
                  document.getElementById("xrdFour_name").innerHTML = "new"; // set name in label
                  $("#xrdFour_uploaded").attr("src",url);
                  $("#xrdFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrdFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrdFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrdFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrdFiles5").val('');
    $("#xrdFiles5_id").val('');
    document.getElementById("xrdFiles_name").innerHTML = "";
    document.getElementById("upload_xrdFiles5").innerHTML = "(.zip)";
    $("#xrdFile_delete").remove();
  },
  'change #xrdFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrdFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrdFiles5").val('');
          $("#xrdFiles5_id").val('');
          document.getElementById("xrdFiles_name").innerHTML = "";
          document.getElementById("upload_xrdFiles5").innerHTML = "(.zip)";
          $("#xrdFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#xrdFiles5").val(files);
            $("#xrdFiles5_id").val(filesId);
            Session.set("xrdFiles5_id", filesId);

            // track progress of upload
            $("#xrdFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrdFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrdFive_progress").remove();
                            }
                            console.log(result);
                            $("#xrdFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("xrdFiles_name").innerHTML = "new"; 
                  $("#xrdFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrdFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})