Template.files_methods_uvf.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uvfOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uvfFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uvfFiles1").val('');
    $("#uvfFiles1_id").val('');
    document.getElementById("uvfOne_name").innerHTML = "";
    document.getElementById("uvfOne_title").innerHTML = "";
    $("#uvfOne_uploaded").attr("src","");
    $("#uvfOne_delete").remove();
  },
  'change #uvfFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("uvfFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uvfFiles1").val('');
          $("#uvfFiles1_id").val('');
          document.getElementById("uvfOne_name").innerHTML = "";
          document.getElementById("uvfOne_title").innerHTML = "";
          $("#uvfOne_uploaded").attr("src","");
          $("#uvfOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#uvfFiles1").val(photoOne);
            $("#uvfFiles1_id").val(photoOneId);
            Session.set("uvfFiles1_id", photoOneId);
            document.getElementById("uvfOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uvfOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uvfOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uvfOne_progress").remove();
                            }
                            console.log(result);
                            $("#uvfOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uvfOne_title").innerHTML = "Picture one";
                  document.getElementById("uvfOne_name").innerHTML = "new";
                  $("#uvfOne_uploaded").attr("src",url);
                  $("#uvfOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uvfOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uvfTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uvfFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uvfFiles2").val('');
    $("#uvfFiles2_id").val('');
    document.getElementById("uvfTwo_name").innerHTML = "";
    document.getElementById("uvfTwo_title").innerHTML = "";
    $("#uvfTwo_uploaded").attr("src","");
    $("#uvfTwo_delete").remove();
  },

  'change #uvfFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("uvfFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uvfFiles2").val('');
          $("#uvfFiles2_id").val('');
          document.getElementById("uvfTwo_name").innerHTML = "";
          document.getElementById("uvfTwo_title").innerHTML = "";
          $("#uvfTwo_uploaded").attr("src","");
          $("#uvfTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#uvfFiles2").val(photoTwo);
            $("#uvfFiles2_id").val(photoTwoId);
            Session.set("uvfFiles2_id", photoTwoId);
            document.getElementById("uvfTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uvfTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uvfTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uvfTwo_progress").remove();
                            }
                            console.log(result);
                            $("#uvfTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uvfTwo_title").innerHTML = "Picture two";
                  document.getElementById("uvfTwo_name").innerHTML = "new"; // set name in label
                  $("#uvfTwo_uploaded").attr("src",url);
                  $("#uvfTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uvfTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uvfThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uvfFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uvfFiles3").val('');
    $("#uvfFiles3_id").val('');
    document.getElementById("uvfThree_name").innerHTML = "";
    document.getElementById("uvfThree_title").innerHTML = "";
    $("#uvfThree_uploaded").attr("src","");
    $("#uvfThree_delete").remove();
  },

  'change #uvfFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("uvfFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uvfFiles3").val('');
          $("#uvfFiles3_id").val('');
          document.getElementById("uvfThree_name").innerHTML = "";
          document.getElementById("uvfThree_title").innerHTML = "";
          $("#uvfThree_uploaded").attr("src","");
          $("#uvfThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#uvfFiles3").val(photoThree);
            $("#uvfFiles3_id").val(photoThreeId);
            Session.set("uvfFiles3_id", photoThreeId);
            document.getElementById("uvfThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uvfThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uvfThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uvfThree_progress").remove();
                            }
                            console.log(result);
                            $("#uvfThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uvfThree_title").innerHTML = "Picture three";
                  document.getElementById("uvfThree_name").innerHTML = "new"; // set name in label
                  $("#uvfThree_uploaded").attr("src",url);
                  $("#uvfThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uvfThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uvfFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uvfFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uvfFiles4").val('');
    $("#uvfFiles4_id").val('');
    document.getElementById("uvfFour_name").innerHTML = "";
    document.getElementById("uvfFour_title").innerHTML = "";
    $("#uvfFour_uploaded").attr("src","");
    $("#uvfFour_delete").remove();
  },

  'change #uvfFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("uvfFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uvfFiles4").val('');
          $("#uvfFiles4_id").val('');
          document.getElementById("uvfFour_name").innerHTML = "";
          document.getElementById("uvfFour_title").innerHTML = "";
          $("#uvfFour_uploaded").attr("src","");
          $("#uvfFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#uvfFiles4").val(photoFour);
            $("#uvfFiles4_id").val(photoFourId);
            Session.set("uvfFiles4_id", photoFourId);
            document.getElementById("uvfFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#uvfFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uvfFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uvfFour_progress").remove();
                            }
                            console.log(result);
                            $("#uvfFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("uvfFour_title").innerHTML = "Picture four";
                  document.getElementById("uvfFour_name").innerHTML = "new"; // set name in label
                  $("#uvfFour_uploaded").attr("src",url);
                  $("#uvfFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uvfFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #uvfFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("uvfFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#uvfFiles5").val('');
    $("#uvfFiles5_id").val('');
    document.getElementById("uvfFiles_name").innerHTML = "";
    document.getElementById("upload_uvfFiles5").innerHTML = "(.zip)";
    $("#uvfFile_delete").remove();
  },
  'change #uvfFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("uvfFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#uvfFiles5").val('');
          $("#uvfFiles5_id").val('');
          document.getElementById("uvfFiles_name").innerHTML = "";
          document.getElementById("upload_uvfFiles5").innerHTML = "(.zip)";
          $("#uvfFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#uvfFiles5").val(files);
            $("#uvfFiles5_id").val(filesId);
            Session.set("uvfFiles5_id", filesId);

            // track progress of upload
            $("#uvfFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="uvfFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#uvfFive_progress").remove();
                            }
                            console.log(result);
                            $("#uvfFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("uvfFiles_name").innerHTML = "new"; 
                  $("#uvfFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="uvfFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})