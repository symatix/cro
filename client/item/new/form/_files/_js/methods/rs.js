Template.files_methods_rs.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rsOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rsFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rsFiles1").val('');
    $("#rsFiles1_id").val('');
    document.getElementById("rsOne_name").innerHTML = "";
    document.getElementById("rsOne_title").innerHTML = "";
    $("#rsOne_uploaded").attr("src","");
    $("#rsOne_delete").remove();
  },
  'change #rsFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("rsFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rsFiles1").val('');
          $("#rsFiles1_id").val('');
          document.getElementById("rsOne_name").innerHTML = "";
          document.getElementById("rsOne_title").innerHTML = "";
          $("#rsOne_uploaded").attr("src","");
          $("#rsOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#rsFiles1").val(photoOne);
            $("#rsFiles1_id").val(photoOneId);
            Session.set("rsFiles1_id", photoOneId);
            document.getElementById("rsOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rsOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rsOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rsOne_progress").remove();
                            }
                            console.log(result);
                            $("#rsOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rsOne_title").innerHTML = "Picture one";
                  document.getElementById("rsOne_name").innerHTML = "new";
                  $("#rsOne_uploaded").attr("src",url);
                  $("#rsOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rsOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rsTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rsFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rsFiles2").val('');
    $("#rsFiles2_id").val('');
    document.getElementById("rsTwo_name").innerHTML = "";
    document.getElementById("rsTwo_title").innerHTML = "";
    $("#rsTwo_uploaded").attr("src","");
    $("#rsTwo_delete").remove();
  },

  'change #rsFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("rsFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rsFiles2").val('');
          $("#rsFiles2_id").val('');
          document.getElementById("rsTwo_name").innerHTML = "";
          document.getElementById("rsTwo_title").innerHTML = "";
          $("#rsTwo_uploaded").attr("src","");
          $("#rsTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#rsFiles2").val(photoTwo);
            $("#rsFiles2_id").val(photoTwoId);
            Session.set("rsFiles2_id", photoTwoId);
            document.getElementById("rsTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rsTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rsTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rsTwo_progress").remove();
                            }
                            console.log(result);
                            $("#rsTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rsTwo_title").innerHTML = "Picture two";
                  document.getElementById("rsTwo_name").innerHTML = "new"; // set name in label
                  $("#rsTwo_uploaded").attr("src",url);
                  $("#rsTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rsTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rsThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rsFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rsFiles3").val('');
    $("#rsFiles3_id").val('');
    document.getElementById("rsThree_name").innerHTML = "";
    document.getElementById("rsThree_title").innerHTML = "";
    $("#rsThree_uploaded").attr("src","");
    $("#rsThree_delete").remove();
  },

  'change #rsFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("rsFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rsFiles3").val('');
          $("#rsFiles3_id").val('');
          document.getElementById("rsThree_name").innerHTML = "";
          document.getElementById("rsThree_title").innerHTML = "";
          $("#rsThree_uploaded").attr("src","");
          $("#rsThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#rsFiles3").val(photoThree);
            $("#rsFiles3_id").val(photoThreeId);
            Session.set("rsFiles3_id", photoThreeId);
            document.getElementById("rsThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rsThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rsThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rsThree_progress").remove();
                            }
                            console.log(result);
                            $("#rsThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rsThree_title").innerHTML = "Picture three";
                  document.getElementById("rsThree_name").innerHTML = "new"; // set name in label
                  $("#rsThree_uploaded").attr("src",url);
                  $("#rsThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rsThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rsFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rsFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rsFiles4").val('');
    $("#rsFiles4_id").val('');
    document.getElementById("rsFour_name").innerHTML = "";
    document.getElementById("rsFour_title").innerHTML = "";
    $("#rsFour_uploaded").attr("src","");
    $("#rsFour_delete").remove();
  },

  'change #rsFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("rsFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rsFiles4").val('');
          $("#rsFiles4_id").val('');
          document.getElementById("rsFour_name").innerHTML = "";
          document.getElementById("rsFour_title").innerHTML = "";
          $("#rsFour_uploaded").attr("src","");
          $("#rsFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#rsFiles4").val(photoFour);
            $("#rsFiles4_id").val(photoFourId);
            Session.set("rsFiles4_id", photoFourId);
            document.getElementById("rsFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rsFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rsFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rsFour_progress").remove();
                            }
                            console.log(result);
                            $("#rsFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rsFour_title").innerHTML = "Picture four";
                  document.getElementById("rsFour_name").innerHTML = "new"; // set name in label
                  $("#rsFour_uploaded").attr("src",url);
                  $("#rsFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rsFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rsFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rsFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rsFiles5").val('');
    $("#rsFiles5_id").val('');
    document.getElementById("rsFiles_name").innerHTML = "";
    document.getElementById("upload_rsFiles5").innerHTML = "(.zip)";
    $("#rsFile_delete").remove();
  },
  'change #rsFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("rsFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rsFiles5").val('');
          $("#rsFiles5_id").val('');
          document.getElementById("rsFiles_name").innerHTML = "";
          document.getElementById("upload_rsFiles5").innerHTML = "(.zip)";
          $("#rsFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#rsFiles5").val(files);
            $("#rsFiles5_id").val(filesId);
            Session.set("rsFiles5_id", filesId);

            // track progress of upload
            $("#rsFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rsFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rsFive_progress").remove();
                            }
                            console.log(result);
                            $("#rsFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("rsFiles_name").innerHTML = "new"; 
                  $("#rsFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rsFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})