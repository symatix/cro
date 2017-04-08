Template.files_methods_pige.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pigeOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pigeFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pigeFiles1").val('');
    $("#pigeFiles1_id").val('');
    document.getElementById("pigeOne_name").innerHTML = "";
    document.getElementById("pigeOne_title").innerHTML = "";
    $("#pigeOne_uploaded").attr("src","");
    $("#pigeOne_delete").remove();
  },
  'change #pigeFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("pigeFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pigeFiles1").val('');
          $("#pigeFiles1_id").val('');
          document.getElementById("pigeOne_name").innerHTML = "";
          document.getElementById("pigeOne_title").innerHTML = "";
          $("#pigeOne_uploaded").attr("src","");
          $("#pigeOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#pigeFiles1").val(photoOne);
            $("#pigeFiles1_id").val(photoOneId);
            Session.set("pigeFiles1_id", photoOneId);
            document.getElementById("pigeOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pigeOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pigeOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pigeOne_progress").remove();
                            }
                            console.log(result);
                            $("#pigeOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pigeOne_title").innerHTML = "Picture one";
                  document.getElementById("pigeOne_name").innerHTML = "new";
                  $("#pigeOne_uploaded").attr("src",url);
                  $("#pigeOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pigeOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pigeTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pigeFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pigeFiles2").val('');
    $("#pigeFiles2_id").val('');
    document.getElementById("pigeTwo_name").innerHTML = "";
    document.getElementById("pigeTwo_title").innerHTML = "";
    $("#pigeTwo_uploaded").attr("src","");
    $("#pigeTwo_delete").remove();
  },

  'change #pigeFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("pigeFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pigeFiles2").val('');
          $("#pigeFiles2_id").val('');
          document.getElementById("pigeTwo_name").innerHTML = "";
          document.getElementById("pigeTwo_title").innerHTML = "";
          $("#pigeTwo_uploaded").attr("src","");
          $("#pigeTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#pigeFiles2").val(photoTwo);
            $("#pigeFiles2_id").val(photoTwoId);
            Session.set("pigeFiles2_id", photoTwoId);
            document.getElementById("pigeTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pigeTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pigeTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pigeTwo_progress").remove();
                            }
                            console.log(result);
                            $("#pigeTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pigeTwo_title").innerHTML = "Picture two";
                  document.getElementById("pigeTwo_name").innerHTML = "new"; // set name in label
                  $("#pigeTwo_uploaded").attr("src",url);
                  $("#pigeTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pigeTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pigeThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pigeFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pigeFiles3").val('');
    $("#pigeFiles3_id").val('');
    document.getElementById("pigeThree_name").innerHTML = "";
    document.getElementById("pigeThree_title").innerHTML = "";
    $("#pigeThree_uploaded").attr("src","");
    $("#pigeThree_delete").remove();
  },

  'change #pigeFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("pigeFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pigeFiles3").val('');
          $("#pigeFiles3_id").val('');
          document.getElementById("pigeThree_name").innerHTML = "";
          document.getElementById("pigeThree_title").innerHTML = "";
          $("#pigeThree_uploaded").attr("src","");
          $("#pigeThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#pigeFiles3").val(photoThree);
            $("#pigeFiles3_id").val(photoThreeId);
            Session.set("pigeFiles3_id", photoThreeId);
            document.getElementById("pigeThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pigeThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pigeThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pigeThree_progress").remove();
                            }
                            console.log(result);
                            $("#pigeThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pigeThree_title").innerHTML = "Picture three";
                  document.getElementById("pigeThree_name").innerHTML = "new"; // set name in label
                  $("#pigeThree_uploaded").attr("src",url);
                  $("#pigeThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pigeThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pigeFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pigeFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pigeFiles4").val('');
    $("#pigeFiles4_id").val('');
    document.getElementById("pigeFour_name").innerHTML = "";
    document.getElementById("pigeFour_title").innerHTML = "";
    $("#pigeFour_uploaded").attr("src","");
    $("#pigeFour_delete").remove();
  },

  'change #pigeFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("pigeFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pigeFiles4").val('');
          $("#pigeFiles4_id").val('');
          document.getElementById("pigeFour_name").innerHTML = "";
          document.getElementById("pigeFour_title").innerHTML = "";
          $("#pigeFour_uploaded").attr("src","");
          $("#pigeFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#pigeFiles4").val(photoFour);
            $("#pigeFiles4_id").val(photoFourId);
            Session.set("pigeFiles4_id", photoFourId);
            document.getElementById("pigeFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pigeFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pigeFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pigeFour_progress").remove();
                            }
                            console.log(result);
                            $("#pigeFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pigeFour_title").innerHTML = "Picture four";
                  document.getElementById("pigeFour_name").innerHTML = "new"; // set name in label
                  $("#pigeFour_uploaded").attr("src",url);
                  $("#pigeFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pigeFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pigeFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pigeFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pigeFiles5").val('');
    $("#pigeFiles5_id").val('');
    document.getElementById("pigeFiles_name").innerHTML = "";
    document.getElementById("upload_pigeFiles5").innerHTML = "(.zip)";
    $("#pigeFile_delete").remove();
  },
  'change #pigeFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("pigeFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pigeFiles5").val('');
          $("#pigeFiles5_id").val('');
          document.getElementById("pigeFiles_name").innerHTML = "";
          document.getElementById("upload_pigeFiles5").innerHTML = "(.zip)";
          $("#pigeFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#pigeFiles5").val(files);
            $("#pigeFiles5_id").val(filesId);
            Session.set("pigeFiles5_id", filesId);

            // track progress of upload
            $("#pigeFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pigeFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pigeFive_progress").remove();
                            }
                            console.log(result);
                            $("#pigeFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("pigeFiles_name").innerHTML = "new"; 
                  $("#pigeFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pigeFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})