Template.files_methods_c_14.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #c_14One_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("c_14Files1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#c_14Files1").val('');
    $("#c_14Files1_id").val('');
    document.getElementById("c_14One_name").innerHTML = "";
    document.getElementById("c_14One_title").innerHTML = "";
    $("#c_14One_uploaded").attr("src","");
    $("#c_14One_delete").remove();
  },
  'change #c_14Files1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("c_14Files1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#c_14Files1").val('');
          $("#c_14Files1_id").val('');
          document.getElementById("c_14One_name").innerHTML = "";
          document.getElementById("c_14One_title").innerHTML = "";
          $("#c_14One_uploaded").attr("src","");
          $("#c_14One_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#c_14Files1").val(photoOne);
            $("#c_14Files1_id").val(photoOneId);
            Session.set("c_14Files1_id", photoOneId);
            document.getElementById("c_14One_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#c_14One_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="c_14One_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#c_14One_progress").remove();
                            }
                            console.log(result);
                            $("#c_14One_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("c_14One_title").innerHTML = "Picture one";
                  document.getElementById("c_14One_name").innerHTML = "new";
                  $("#c_14One_uploaded").attr("src",url);
                  $("#c_14One-delete-container").append('<a href="#" class="list-font btn btn-danger" id="c_14One_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #c_14Two_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("c_14Files2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#c_14Files2").val('');
    $("#c_14Files2_id").val('');
    document.getElementById("c_14Two_name").innerHTML = "";
    document.getElementById("c_14Two_title").innerHTML = "";
    $("#c_14Two_uploaded").attr("src","");
    $("#c_14Two_delete").remove();
  },

  'change #c_14Files2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("c_14Files2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#c_14Files2").val('');
          $("#c_14Files2_id").val('');
          document.getElementById("c_14Two_name").innerHTML = "";
          document.getElementById("c_14Two_title").innerHTML = "";
          $("#c_14Two_uploaded").attr("src","");
          $("#c_14Two_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#c_14Files2").val(photoTwo);
            $("#c_14Files2_id").val(photoTwoId);
            Session.set("c_14Files2_id", photoTwoId);
            document.getElementById("c_14Two_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#c_14Two_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="c_14Two_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#c_14Two_progress").remove();
                            }
                            console.log(result);
                            $("#c_14Two_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("c_14Two_title").innerHTML = "Picture two";
                  document.getElementById("c_14Two_name").innerHTML = "new"; // set name in label
                  $("#c_14Two_uploaded").attr("src",url);
                  $("#c_14Two-delete-container").append('<a href="#" class="list-font btn btn-danger" id="c_14Two_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #c_14Three_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("c_14Files3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#c_14Files3").val('');
    $("#c_14Files3_id").val('');
    document.getElementById("c_14Three_name").innerHTML = "";
    document.getElementById("c_14Three_title").innerHTML = "";
    $("#c_14Three_uploaded").attr("src","");
    $("#c_14Three_delete").remove();
  },

  'change #c_14Files3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("c_14Files3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#c_14Files3").val('');
          $("#c_14Files3_id").val('');
          document.getElementById("c_14Three_name").innerHTML = "";
          document.getElementById("c_14Three_title").innerHTML = "";
          $("#c_14Three_uploaded").attr("src","");
          $("#c_14Three_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#c_14Files3").val(photoThree);
            $("#c_14Files3_id").val(photoThreeId);
            Session.set("c_14Files3_id", photoThreeId);
            document.getElementById("c_14Three_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#c_14Three_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="c_14Three_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#c_14Three_progress").remove();
                            }
                            console.log(result);
                            $("#c_14Three_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("c_14Three_title").innerHTML = "Picture three";
                  document.getElementById("c_14Three_name").innerHTML = "new"; // set name in label
                  $("#c_14Three_uploaded").attr("src",url);
                  $("#c_14Three-delete-container").append('<a href="#" class="list-font btn btn-danger" id="c_14Three_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #c_14Four_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("c_14Files4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#c_14Files4").val('');
    $("#c_14Files4_id").val('');
    document.getElementById("c_14Four_name").innerHTML = "";
    document.getElementById("c_14Four_title").innerHTML = "";
    $("#c_14Four_uploaded").attr("src","");
    $("#c_14Four_delete").remove();
  },

  'change #c_14Files4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("c_14Files4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#c_14Files4").val('');
          $("#c_14Files4_id").val('');
          document.getElementById("c_14Four_name").innerHTML = "";
          document.getElementById("c_14Four_title").innerHTML = "";
          $("#c_14Four_uploaded").attr("src","");
          $("#c_14Four_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#c_14Files4").val(photoFour);
            $("#c_14Files4_id").val(photoFourId);
            Session.set("c_14Files4_id", photoFourId);
            document.getElementById("c_14Four_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#c_14Four_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="c_14Four_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#c_14Four_progress").remove();
                            }
                            console.log(result);
                            $("#c_14Four_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("c_14Four_title").innerHTML = "Picture four";
                  document.getElementById("c_14Four_name").innerHTML = "new"; // set name in label
                  $("#c_14Four_uploaded").attr("src",url);
                  $("#c_14Four-delete-container").append('<a href="#" class="list-font btn btn-danger" id="c_14Four_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #c_14File_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("c_14Files5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#c_14Files5").val('');
    $("#c_14Files5_id").val('');
    document.getElementById("c_14Files_name").innerHTML = "";
    document.getElementById("upload_c_14Files5").innerHTML = "(.zip)";
    $("#c_14File_delete").remove();
  },
  'change #c_14Files5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("c_14Files5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#c_14Files5").val('');
          $("#c_14Files5_id").val('');
          document.getElementById("c_14Files_name").innerHTML = "";
          document.getElementById("upload_c_14Files5").innerHTML = "(.zip)";
          $("#c_14File_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#c_14Files5").val(files);
            $("#c_14Files5_id").val(filesId);
            Session.set("c_14Files5_id", filesId);

            // track progress of upload
            $("#c_14Files_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="c_14Five_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#c_14Five_progress").remove();
                            }
                            console.log(result);
                            $("#c_14Five_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("c_14Files_name").innerHTML = "new"; 
                  $("#c_14Files-delete-container").append('<a href="#" class="list-font btn btn-danger" id="c_14File_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})