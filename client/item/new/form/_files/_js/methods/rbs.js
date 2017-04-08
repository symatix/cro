Template.files_methods_rbs.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rbsOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rbsFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rbsFiles1").val('');
    $("#rbsFiles1_id").val('');
    document.getElementById("rbsOne_name").innerHTML = "";
    document.getElementById("rbsOne_title").innerHTML = "";
    $("#rbsOne_uploaded").attr("src","");
    $("#rbsOne_delete").remove();
  },
  'change #rbsFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("rbsFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rbsFiles1").val('');
          $("#rbsFiles1_id").val('');
          document.getElementById("rbsOne_name").innerHTML = "";
          document.getElementById("rbsOne_title").innerHTML = "";
          $("#rbsOne_uploaded").attr("src","");
          $("#rbsOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#rbsFiles1").val(photoOne);
            $("#rbsFiles1_id").val(photoOneId);
            Session.set("rbsFiles1_id", photoOneId);
            document.getElementById("rbsOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rbsOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rbsOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rbsOne_progress").remove();
                            }
                            console.log(result);
                            $("#rbsOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rbsOne_title").innerHTML = "Picture one";
                  document.getElementById("rbsOne_name").innerHTML = "new";
                  $("#rbsOne_uploaded").attr("src",url);
                  $("#rbsOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rbsOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rbsTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rbsFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rbsFiles2").val('');
    $("#rbsFiles2_id").val('');
    document.getElementById("rbsTwo_name").innerHTML = "";
    document.getElementById("rbsTwo_title").innerHTML = "";
    $("#rbsTwo_uploaded").attr("src","");
    $("#rbsTwo_delete").remove();
  },

  'change #rbsFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("rbsFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rbsFiles2").val('');
          $("#rbsFiles2_id").val('');
          document.getElementById("rbsTwo_name").innerHTML = "";
          document.getElementById("rbsTwo_title").innerHTML = "";
          $("#rbsTwo_uploaded").attr("src","");
          $("#rbsTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#rbsFiles2").val(photoTwo);
            $("#rbsFiles2_id").val(photoTwoId);
            Session.set("rbsFiles2_id", photoTwoId);
            document.getElementById("rbsTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rbsTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rbsTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rbsTwo_progress").remove();
                            }
                            console.log(result);
                            $("#rbsTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rbsTwo_title").innerHTML = "Picture two";
                  document.getElementById("rbsTwo_name").innerHTML = "new"; // set name in label
                  $("#rbsTwo_uploaded").attr("src",url);
                  $("#rbsTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rbsTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rbsThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rbsFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rbsFiles3").val('');
    $("#rbsFiles3_id").val('');
    document.getElementById("rbsThree_name").innerHTML = "";
    document.getElementById("rbsThree_title").innerHTML = "";
    $("#rbsThree_uploaded").attr("src","");
    $("#rbsThree_delete").remove();
  },

  'change #rbsFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("rbsFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rbsFiles3").val('');
          $("#rbsFiles3_id").val('');
          document.getElementById("rbsThree_name").innerHTML = "";
          document.getElementById("rbsThree_title").innerHTML = "";
          $("#rbsThree_uploaded").attr("src","");
          $("#rbsThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#rbsFiles3").val(photoThree);
            $("#rbsFiles3_id").val(photoThreeId);
            Session.set("rbsFiles3_id", photoThreeId);
            document.getElementById("rbsThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rbsThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rbsThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rbsThree_progress").remove();
                            }
                            console.log(result);
                            $("#rbsThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rbsThree_title").innerHTML = "Picture three";
                  document.getElementById("rbsThree_name").innerHTML = "new"; // set name in label
                  $("#rbsThree_uploaded").attr("src",url);
                  $("#rbsThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rbsThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rbsFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rbsFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rbsFiles4").val('');
    $("#rbsFiles4_id").val('');
    document.getElementById("rbsFour_name").innerHTML = "";
    document.getElementById("rbsFour_title").innerHTML = "";
    $("#rbsFour_uploaded").attr("src","");
    $("#rbsFour_delete").remove();
  },

  'change #rbsFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("rbsFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rbsFiles4").val('');
          $("#rbsFiles4_id").val('');
          document.getElementById("rbsFour_name").innerHTML = "";
          document.getElementById("rbsFour_title").innerHTML = "";
          $("#rbsFour_uploaded").attr("src","");
          $("#rbsFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#rbsFiles4").val(photoFour);
            $("#rbsFiles4_id").val(photoFourId);
            Session.set("rbsFiles4_id", photoFourId);
            document.getElementById("rbsFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#rbsFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rbsFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rbsFour_progress").remove();
                            }
                            console.log(result);
                            $("#rbsFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("rbsFour_title").innerHTML = "Picture four";
                  document.getElementById("rbsFour_name").innerHTML = "new"; // set name in label
                  $("#rbsFour_uploaded").attr("src",url);
                  $("#rbsFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rbsFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #rbsFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("rbsFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#rbsFiles5").val('');
    $("#rbsFiles5_id").val('');
    document.getElementById("rbsFiles_name").innerHTML = "";
    document.getElementById("upload_rbsFiles5").innerHTML = "(.zip)";
    $("#rbsFile_delete").remove();
  },
  'change #rbsFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("rbsFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#rbsFiles5").val('');
          $("#rbsFiles5_id").val('');
          document.getElementById("rbsFiles_name").innerHTML = "";
          document.getElementById("upload_rbsFiles5").innerHTML = "(.zip)";
          $("#rbsFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#rbsFiles5").val(files);
            $("#rbsFiles5_id").val(filesId);
            Session.set("rbsFiles5_id", filesId);

            // track progress of upload
            $("#rbsFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="rbsFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#rbsFive_progress").remove();
                            }
                            console.log(result);
                            $("#rbsFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("rbsFiles_name").innerHTML = "new"; 
                  $("#rbsFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="rbsFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})