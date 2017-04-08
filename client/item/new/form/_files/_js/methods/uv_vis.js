Template.files_methods_uv_vis.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uv_visOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uv_visFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uv_visFiles1").val('');
    $("#uv_visFiles1_id").val('');
    document.getElementById("uv_visOne_name").innerHTML = "";
    document.getElementById("uv_visOne_title").innerHTML = "";
    $("#uv_visOne_uploaded").attr("src","");
    $("#uv_visOne_delete").remove();
  },
  'change #uv_visFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("uv_visFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uv_visFiles1").val('');
          $("#uv_visFiles1_id").val('');
          document.getElementById("uv_visOne_name").innerHTML = "";
          document.getElementById("uv_visOne_title").innerHTML = "";
          $("#uv_visOne_uploaded").attr("src","");
          $("#uv_visOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#uv_visFiles1").val(photoOne);
            $("#uv_visFiles1_id").val(photoOneId);
            Session.set("uv_visFiles1_id", photoOneId);
            document.getElementById("uv_visOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uv_visOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uv_visOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uv_visOne_progress").remove();
                            }
                            console.log(result);
                            $("#uv_visOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uv_visOne_title").innerHTML = "Picture one";
                  document.getElementById("uv_visOne_name").innerHTML = "new";
                  $("#uv_visOne_uploaded").attr("src",url);
                  $("#uv_visOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uv_visOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uv_visTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uv_visFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uv_visFiles2").val('');
    $("#uv_visFiles2_id").val('');
    document.getElementById("uv_visTwo_name").innerHTML = "";
    document.getElementById("uv_visTwo_title").innerHTML = "";
    $("#uv_visTwo_uploaded").attr("src","");
    $("#uv_visTwo_delete").remove();
  },

  'change #uv_visFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("uv_visFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uv_visFiles2").val('');
          $("#uv_visFiles2_id").val('');
          document.getElementById("uv_visTwo_name").innerHTML = "";
          document.getElementById("uv_visTwo_title").innerHTML = "";
          $("#uv_visTwo_uploaded").attr("src","");
          $("#uv_visTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#uv_visFiles2").val(photoTwo);
            $("#uv_visFiles2_id").val(photoTwoId);
            Session.set("uv_visFiles2_id", photoTwoId);
            document.getElementById("uv_visTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uv_visTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uv_visTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uv_visTwo_progress").remove();
                            }
                            console.log(result);
                            $("#uv_visTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uv_visTwo_title").innerHTML = "Picture two";
                  document.getElementById("uv_visTwo_name").innerHTML = "new"; // set name in label
                  $("#uv_visTwo_uploaded").attr("src",url);
                  $("#uv_visTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uv_visTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uv_visThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uv_visFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uv_visFiles3").val('');
    $("#uv_visFiles3_id").val('');
    document.getElementById("uv_visThree_name").innerHTML = "";
    document.getElementById("uv_visThree_title").innerHTML = "";
    $("#uv_visThree_uploaded").attr("src","");
    $("#uv_visThree_delete").remove();
  },

  'change #uv_visFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("uv_visFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uv_visFiles3").val('');
          $("#uv_visFiles3_id").val('');
          document.getElementById("uv_visThree_name").innerHTML = "";
          document.getElementById("uv_visThree_title").innerHTML = "";
          $("#uv_visThree_uploaded").attr("src","");
          $("#uv_visThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#uv_visFiles3").val(photoThree);
            $("#uv_visFiles3_id").val(photoThreeId);
            Session.set("uv_visFiles3_id", photoThreeId);
            document.getElementById("uv_visThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uv_visThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uv_visThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uv_visThree_progress").remove();
                            }
                            console.log(result);
                            $("#uv_visThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uv_visThree_title").innerHTML = "Picture three";
                  document.getElementById("uv_visThree_name").innerHTML = "new"; // set name in label
                  $("#uv_visThree_uploaded").attr("src",url);
                  $("#uv_visThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uv_visThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uv_visFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uv_visFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uv_visFiles4").val('');
    $("#uv_visFiles4_id").val('');
    document.getElementById("uv_visFour_name").innerHTML = "";
    document.getElementById("uv_visFour_title").innerHTML = "";
    $("#uv_visFour_uploaded").attr("src","");
    $("#uv_visFour_delete").remove();
  },

  'change #uv_visFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("uv_visFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uv_visFiles4").val('');
          $("#uv_visFiles4_id").val('');
          document.getElementById("uv_visFour_name").innerHTML = "";
          document.getElementById("uv_visFour_title").innerHTML = "";
          $("#uv_visFour_uploaded").attr("src","");
          $("#uv_visFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#uv_visFiles4").val(photoFour);
            $("#uv_visFiles4_id").val(photoFourId);
            Session.set("uv_visFiles4_id", photoFourId);
            document.getElementById("uv_visFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uv_visFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uv_visFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uv_visFour_progress").remove();
                            }
                            console.log(result);
                            $("#uv_visFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uv_visFour_title").innerHTML = "Picture four";
                  document.getElementById("uv_visFour_name").innerHTML = "new"; // set name in label
                  $("#uv_visFour_uploaded").attr("src",url);
                  $("#uv_visFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uv_visFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uv_visFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uv_visFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uv_visFiles5").val('');
    $("#uv_visFiles5_id").val('');
    document.getElementById("uv_visFiles_name").innerHTML = "";
    document.getElementById("upload_uv_visFiles5").innerHTML = "(.zip)";
    $("#uv_visFile_delete").remove();
  },
  'change #uv_visFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("uv_visFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uv_visFiles5").val('');
          $("#uv_visFiles5_id").val('');
          document.getElementById("uv_visFiles_name").innerHTML = "";
          document.getElementById("upload_uv_visFiles5").innerHTML = "(.zip)";
          $("#uv_visFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#uv_visFiles5").val(files);
            $("#uv_visFiles5_id").val(filesId);
            Session.set("uv_visFiles5_id", filesId);

            // track progress of upload
            $("#uv_visFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uv_visFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uv_visFive_progress").remove();
                            }
                            console.log(result);
                            $("#uv_visFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("uv_visFiles_name").innerHTML = "new"; 
                  $("#uv_visFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uv_visFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})