Template.files_methods_libs.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #libsOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("libsFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#libsFiles1").val('');
    $("#libsFiles1_id").val('');
    document.getElementById("libsOne_name").innerHTML = "";
    document.getElementById("libsOne_title").innerHTML = "";
    $("#libsOne_uploaded").attr("src","");
    $("#libsOne_delete").remove();
  },
  'change #libsFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("libsFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#libsFiles1").val('');
          $("#libsFiles1_id").val('');
          document.getElementById("libsOne_name").innerHTML = "";
          document.getElementById("libsOne_title").innerHTML = "";
          $("#libsOne_uploaded").attr("src","");
          $("#libsOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#libsFiles1").val(photoOne);
            $("#libsFiles1_id").val(photoOneId);
            Session.set("libsFiles1_id", photoOneId);
            document.getElementById("libsOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#libsOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="libsOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#libsOne_progress").remove();
                            }
                            console.log(result);
                            $("#libsOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("libsOne_title").innerHTML = "Picture one";
                  document.getElementById("libsOne_name").innerHTML = "new";
                  $("#libsOne_uploaded").attr("src",url);
                  $("#libsOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="libsOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #libsTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("libsFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#libsFiles2").val('');
    $("#libsFiles2_id").val('');
    document.getElementById("libsTwo_name").innerHTML = "";
    document.getElementById("libsTwo_title").innerHTML = "";
    $("#libsTwo_uploaded").attr("src","");
    $("#libsTwo_delete").remove();
  },

  'change #libsFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("libsFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#libsFiles2").val('');
          $("#libsFiles2_id").val('');
          document.getElementById("libsTwo_name").innerHTML = "";
          document.getElementById("libsTwo_title").innerHTML = "";
          $("#libsTwo_uploaded").attr("src","");
          $("#libsTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#libsFiles2").val(photoTwo);
            $("#libsFiles2_id").val(photoTwoId);
            Session.set("libsFiles2_id", photoTwoId);
            document.getElementById("libsTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#libsTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="libsTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#libsTwo_progress").remove();
                            }
                            console.log(result);
                            $("#libsTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("libsTwo_title").innerHTML = "Picture two";
                  document.getElementById("libsTwo_name").innerHTML = "new"; // set name in label
                  $("#libsTwo_uploaded").attr("src",url);
                  $("#libsTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="libsTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #libsThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("libsFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#libsFiles3").val('');
    $("#libsFiles3_id").val('');
    document.getElementById("libsThree_name").innerHTML = "";
    document.getElementById("libsThree_title").innerHTML = "";
    $("#libsThree_uploaded").attr("src","");
    $("#libsThree_delete").remove();
  },

  'change #libsFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("libsFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#libsFiles3").val('');
          $("#libsFiles3_id").val('');
          document.getElementById("libsThree_name").innerHTML = "";
          document.getElementById("libsThree_title").innerHTML = "";
          $("#libsThree_uploaded").attr("src","");
          $("#libsThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#libsFiles3").val(photoThree);
            $("#libsFiles3_id").val(photoThreeId);
            Session.set("libsFiles3_id", photoThreeId);
            document.getElementById("libsThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#libsThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="libsThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#libsThree_progress").remove();
                            }
                            console.log(result);
                            $("#libsThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("libsThree_title").innerHTML = "Picture three";
                  document.getElementById("libsThree_name").innerHTML = "new"; // set name in label
                  $("#libsThree_uploaded").attr("src",url);
                  $("#libsThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="libsThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #libsFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("libsFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#libsFiles4").val('');
    $("#libsFiles4_id").val('');
    document.getElementById("libsFour_name").innerHTML = "";
    document.getElementById("libsFour_title").innerHTML = "";
    $("#libsFour_uploaded").attr("src","");
    $("#libsFour_delete").remove();
  },

  'change #libsFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("libsFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#libsFiles4").val('');
          $("#libsFiles4_id").val('');
          document.getElementById("libsFour_name").innerHTML = "";
          document.getElementById("libsFour_title").innerHTML = "";
          $("#libsFour_uploaded").attr("src","");
          $("#libsFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#libsFiles4").val(photoFour);
            $("#libsFiles4_id").val(photoFourId);
            Session.set("libsFiles4_id", photoFourId);
            document.getElementById("libsFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#libsFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="libsFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#libsFour_progress").remove();
                            }
                            console.log(result);
                            $("#libsFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("libsFour_title").innerHTML = "Picture four";
                  document.getElementById("libsFour_name").innerHTML = "new"; // set name in label
                  $("#libsFour_uploaded").attr("src",url);
                  $("#libsFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="libsFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #libsFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("libsFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#libsFiles5").val('');
    $("#libsFiles5_id").val('');
    document.getElementById("libsFiles_name").innerHTML = "";
    document.getElementById("upload_libsFiles5").innerHTML = "(.zip)";
    $("#libsFile_delete").remove();
  },
  'change #libsFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("libsFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#libsFiles5").val('');
          $("#libsFiles5_id").val('');
          document.getElementById("libsFiles_name").innerHTML = "";
          document.getElementById("upload_libsFiles5").innerHTML = "(.zip)";
          $("#libsFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#libsFiles5").val(files);
            $("#libsFiles5_id").val(filesId);
            Session.set("libsFiles5_id", filesId);

            // track progress of upload
            $("#libsFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="libsFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#libsFive_progress").remove();
                            }
                            console.log(result);
                            $("#libsFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("libsFiles_name").innerHTML = "new"; 
                  $("#libsFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="libsFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})