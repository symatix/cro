Template.files_methods_gc_ms.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #gc_msOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("gc_msFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#gc_msFiles1").val('');
    $("#gc_msFiles1_id").val('');
    document.getElementById("gc_msOne_name").innerHTML = "";
    document.getElementById("gc_msOne_title").innerHTML = "";
    $("#gc_msOne_uploaded").attr("src","");
    $("#gc_msOne_delete").remove();
  },
  'change #gc_msFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("gc_msFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#gc_msFiles1").val('');
          $("#gc_msFiles1_id").val('');
          document.getElementById("gc_msOne_name").innerHTML = "";
          document.getElementById("gc_msOne_title").innerHTML = "";
          $("#gc_msOne_uploaded").attr("src","");
          $("#gc_msOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#gc_msFiles1").val(photoOne);
            $("#gc_msFiles1_id").val(photoOneId);
            Session.set("gc_msFiles1_id", photoOneId);
            document.getElementById("gc_msOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#gc_msOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="gc_msOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#gc_msOne_progress").remove();
                            }
                            console.log(result);
                            $("#gc_msOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("gc_msOne_title").innerHTML = "Picture one";
                  document.getElementById("gc_msOne_name").innerHTML = "new";
                  $("#gc_msOne_uploaded").attr("src",url);
                  $("#gc_msOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="gc_msOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #gc_msTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("gc_msFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#gc_msFiles2").val('');
    $("#gc_msFiles2_id").val('');
    document.getElementById("gc_msTwo_name").innerHTML = "";
    document.getElementById("gc_msTwo_title").innerHTML = "";
    $("#gc_msTwo_uploaded").attr("src","");
    $("#gc_msTwo_delete").remove();
  },

  'change #gc_msFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("gc_msFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#gc_msFiles2").val('');
          $("#gc_msFiles2_id").val('');
          document.getElementById("gc_msTwo_name").innerHTML = "";
          document.getElementById("gc_msTwo_title").innerHTML = "";
          $("#gc_msTwo_uploaded").attr("src","");
          $("#gc_msTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#gc_msFiles2").val(photoTwo);
            $("#gc_msFiles2_id").val(photoTwoId);
            Session.set("gc_msFiles2_id", photoTwoId);
            document.getElementById("gc_msTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#gc_msTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="gc_msTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#gc_msTwo_progress").remove();
                            }
                            console.log(result);
                            $("#gc_msTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("gc_msTwo_title").innerHTML = "Picture two";
                  document.getElementById("gc_msTwo_name").innerHTML = "new"; // set name in label
                  $("#gc_msTwo_uploaded").attr("src",url);
                  $("#gc_msTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="gc_msTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #gc_msThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("gc_msFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#gc_msFiles3").val('');
    $("#gc_msFiles3_id").val('');
    document.getElementById("gc_msThree_name").innerHTML = "";
    document.getElementById("gc_msThree_title").innerHTML = "";
    $("#gc_msThree_uploaded").attr("src","");
    $("#gc_msThree_delete").remove();
  },

  'change #gc_msFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("gc_msFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#gc_msFiles3").val('');
          $("#gc_msFiles3_id").val('');
          document.getElementById("gc_msThree_name").innerHTML = "";
          document.getElementById("gc_msThree_title").innerHTML = "";
          $("#gc_msThree_uploaded").attr("src","");
          $("#gc_msThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#gc_msFiles3").val(photoThree);
            $("#gc_msFiles3_id").val(photoThreeId);
            Session.set("gc_msFiles3_id", photoThreeId);
            document.getElementById("gc_msThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#gc_msThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="gc_msThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#gc_msThree_progress").remove();
                            }
                            console.log(result);
                            $("#gc_msThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("gc_msThree_title").innerHTML = "Picture three";
                  document.getElementById("gc_msThree_name").innerHTML = "new"; // set name in label
                  $("#gc_msThree_uploaded").attr("src",url);
                  $("#gc_msThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="gc_msThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #gc_msFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("gc_msFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#gc_msFiles4").val('');
    $("#gc_msFiles4_id").val('');
    document.getElementById("gc_msFour_name").innerHTML = "";
    document.getElementById("gc_msFour_title").innerHTML = "";
    $("#gc_msFour_uploaded").attr("src","");
    $("#gc_msFour_delete").remove();
  },

  'change #gc_msFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("gc_msFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#gc_msFiles4").val('');
          $("#gc_msFiles4_id").val('');
          document.getElementById("gc_msFour_name").innerHTML = "";
          document.getElementById("gc_msFour_title").innerHTML = "";
          $("#gc_msFour_uploaded").attr("src","");
          $("#gc_msFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#gc_msFiles4").val(photoFour);
            $("#gc_msFiles4_id").val(photoFourId);
            Session.set("gc_msFiles4_id", photoFourId);
            document.getElementById("gc_msFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#gc_msFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="gc_msFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#gc_msFour_progress").remove();
                            }
                            console.log(result);
                            $("#gc_msFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("gc_msFour_title").innerHTML = "Picture four";
                  document.getElementById("gc_msFour_name").innerHTML = "new"; // set name in label
                  $("#gc_msFour_uploaded").attr("src",url);
                  $("#gc_msFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="gc_msFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #gc_msFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("gc_msFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#gc_msFiles5").val('');
    $("#gc_msFiles5_id").val('');
    document.getElementById("gc_msFiles_name").innerHTML = "";
    document.getElementById("upload_gc_msFiles5").innerHTML = "(.zip)";
    $("#gc_msFile_delete").remove();
  },
  'change #gc_msFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("gc_msFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#gc_msFiles5").val('');
          $("#gc_msFiles5_id").val('');
          document.getElementById("gc_msFiles_name").innerHTML = "";
          document.getElementById("upload_gc_msFiles5").innerHTML = "(.zip)";
          $("#gc_msFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#gc_msFiles5").val(files);
            $("#gc_msFiles5_id").val(filesId);
            Session.set("gc_msFiles5_id", filesId);

            // track progress of upload
            $("#gc_msFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="gc_msFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#gc_msFive_progress").remove();
                            }
                            console.log(result);
                            $("#gc_msFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("gc_msFiles_name").innerHTML = "new"; 
                  $("#gc_msFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="gc_msFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})