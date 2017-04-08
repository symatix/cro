Template.files_methods_vis.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #visOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("visFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#visFiles1").val('');
    $("#visFiles1_id").val('');
    document.getElementById("visOne_name").innerHTML = "";
    document.getElementById("visOne_title").innerHTML = "";
    $("#visOne_uploaded").attr("src","");
    $("#visOne_delete").remove();
  },
  'change #visFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("visFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#visFiles1").val('');
          $("#visFiles1_id").val('');
          document.getElementById("visOne_name").innerHTML = "";
          document.getElementById("visOne_title").innerHTML = "";
          $("#visOne_uploaded").attr("src","");
          $("#visOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#visFiles1").val(photoOne);
            $("#visFiles1_id").val(photoOneId);
            Session.set("visFiles1_id", photoOneId);
            document.getElementById("visOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#visOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="visOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#visOne_progress").remove();
                            }
                            console.log(result);
                            $("#visOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("visOne_title").innerHTML = "Picture one";
                  document.getElementById("visOne_name").innerHTML = "new";
                  $("#visOne_uploaded").attr("src",url);
                  $("#visOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="visOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #visTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("visFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#visFiles2").val('');
    $("#visFiles2_id").val('');
    document.getElementById("visTwo_name").innerHTML = "";
    document.getElementById("visTwo_title").innerHTML = "";
    $("#visTwo_uploaded").attr("src","");
    $("#visTwo_delete").remove();
  },

  'change #visFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("visFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#visFiles2").val('');
          $("#visFiles2_id").val('');
          document.getElementById("visTwo_name").innerHTML = "";
          document.getElementById("visTwo_title").innerHTML = "";
          $("#visTwo_uploaded").attr("src","");
          $("#visTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#visFiles2").val(photoTwo);
            $("#visFiles2_id").val(photoTwoId);
            Session.set("visFiles2_id", photoTwoId);
            document.getElementById("visTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#visTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="visTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#visTwo_progress").remove();
                            }
                            console.log(result);
                            $("#visTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("visTwo_title").innerHTML = "Picture two";
                  document.getElementById("visTwo_name").innerHTML = "new"; // set name in label
                  $("#visTwo_uploaded").attr("src",url);
                  $("#visTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="visTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #visThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("visFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#visFiles3").val('');
    $("#visFiles3_id").val('');
    document.getElementById("visThree_name").innerHTML = "";
    document.getElementById("visThree_title").innerHTML = "";
    $("#visThree_uploaded").attr("src","");
    $("#visThree_delete").remove();
  },

  'change #visFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("visFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#visFiles3").val('');
          $("#visFiles3_id").val('');
          document.getElementById("visThree_name").innerHTML = "";
          document.getElementById("visThree_title").innerHTML = "";
          $("#visThree_uploaded").attr("src","");
          $("#visThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#visFiles3").val(photoThree);
            $("#visFiles3_id").val(photoThreeId);
            Session.set("visFiles3_id", photoThreeId);
            document.getElementById("visThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#visThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="visThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#visThree_progress").remove();
                            }
                            console.log(result);
                            $("#visThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("visThree_title").innerHTML = "Picture three";
                  document.getElementById("visThree_name").innerHTML = "new"; // set name in label
                  $("#visThree_uploaded").attr("src",url);
                  $("#visThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="visThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #visFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("visFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#visFiles4").val('');
    $("#visFiles4_id").val('');
    document.getElementById("visFour_name").innerHTML = "";
    document.getElementById("visFour_title").innerHTML = "";
    $("#visFour_uploaded").attr("src","");
    $("#visFour_delete").remove();
  },

  'change #visFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("visFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#visFiles4").val('');
          $("#visFiles4_id").val('');
          document.getElementById("visFour_name").innerHTML = "";
          document.getElementById("visFour_title").innerHTML = "";
          $("#visFour_uploaded").attr("src","");
          $("#visFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#visFiles4").val(photoFour);
            $("#visFiles4_id").val(photoFourId);
            Session.set("visFiles4_id", photoFourId);
            document.getElementById("visFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#visFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="visFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#visFour_progress").remove();
                            }
                            console.log(result);
                            $("#visFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("visFour_title").innerHTML = "Picture four";
                  document.getElementById("visFour_name").innerHTML = "new"; // set name in label
                  $("#visFour_uploaded").attr("src",url);
                  $("#visFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="visFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #visFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("visFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#visFiles5").val('');
    $("#visFiles5_id").val('');
    document.getElementById("visFiles_name").innerHTML = "";
    document.getElementById("upload_visFiles5").innerHTML = "(.zip)";
    $("#visFile_delete").remove();
  },
  'change #visFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("visFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#visFiles5").val('');
          $("#visFiles5_id").val('');
          document.getElementById("visFiles_name").innerHTML = "";
          document.getElementById("upload_visFiles5").innerHTML = "(.zip)";
          $("#visFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#visFiles5").val(files);
            $("#visFiles5_id").val(filesId);
            Session.set("visFiles5_id", filesId);

            // track progress of upload
            $("#visFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="visFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#visFive_progress").remove();
                            }
                            console.log(result);
                            $("#visFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("visFiles_name").innerHTML = "new"; 
                  $("#visFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="visFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})