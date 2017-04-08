Template.files_methods_xrr.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrrOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrrFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrrFiles1").val('');
    $("#xrrFiles1_id").val('');
    document.getElementById("xrrOne_name").innerHTML = "";
    document.getElementById("xrrOne_title").innerHTML = "";
    $("#xrrOne_uploaded").attr("src","");
    $("#xrrOne_delete").remove();
  },
  'change #xrrFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrrFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrrFiles1").val('');
          $("#xrrFiles1_id").val('');
          document.getElementById("xrrOne_name").innerHTML = "";
          document.getElementById("xrrOne_title").innerHTML = "";
          $("#xrrOne_uploaded").attr("src","");
          $("#xrrOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#xrrFiles1").val(photoOne);
            $("#xrrFiles1_id").val(photoOneId);
            Session.set("xrrFiles1_id", photoOneId);
            document.getElementById("xrrOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrrOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrrOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrrOne_progress").remove();
                            }
                            console.log(result);
                            $("#xrrOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrrOne_title").innerHTML = "Picture one";
                  document.getElementById("xrrOne_name").innerHTML = "new";
                  $("#xrrOne_uploaded").attr("src",url);
                  $("#xrrOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrrOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrrTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrrFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrrFiles2").val('');
    $("#xrrFiles2_id").val('');
    document.getElementById("xrrTwo_name").innerHTML = "";
    document.getElementById("xrrTwo_title").innerHTML = "";
    $("#xrrTwo_uploaded").attr("src","");
    $("#xrrTwo_delete").remove();
  },

  'change #xrrFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrrFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrrFiles2").val('');
          $("#xrrFiles2_id").val('');
          document.getElementById("xrrTwo_name").innerHTML = "";
          document.getElementById("xrrTwo_title").innerHTML = "";
          $("#xrrTwo_uploaded").attr("src","");
          $("#xrrTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#xrrFiles2").val(photoTwo);
            $("#xrrFiles2_id").val(photoTwoId);
            Session.set("xrrFiles2_id", photoTwoId);
            document.getElementById("xrrTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrrTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrrTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrrTwo_progress").remove();
                            }
                            console.log(result);
                            $("#xrrTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrrTwo_title").innerHTML = "Picture two";
                  document.getElementById("xrrTwo_name").innerHTML = "new"; // set name in label
                  $("#xrrTwo_uploaded").attr("src",url);
                  $("#xrrTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrrTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrrThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrrFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrrFiles3").val('');
    $("#xrrFiles3_id").val('');
    document.getElementById("xrrThree_name").innerHTML = "";
    document.getElementById("xrrThree_title").innerHTML = "";
    $("#xrrThree_uploaded").attr("src","");
    $("#xrrThree_delete").remove();
  },

  'change #xrrFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("xrrFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrrFiles3").val('');
          $("#xrrFiles3_id").val('');
          document.getElementById("xrrThree_name").innerHTML = "";
          document.getElementById("xrrThree_title").innerHTML = "";
          $("#xrrThree_uploaded").attr("src","");
          $("#xrrThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#xrrFiles3").val(photoThree);
            $("#xrrFiles3_id").val(photoThreeId);
            Session.set("xrrFiles3_id", photoThreeId);
            document.getElementById("xrrThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrrThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrrThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrrThree_progress").remove();
                            }
                            console.log(result);
                            $("#xrrThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrrThree_title").innerHTML = "Picture three";
                  document.getElementById("xrrThree_name").innerHTML = "new"; // set name in label
                  $("#xrrThree_uploaded").attr("src",url);
                  $("#xrrThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrrThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrrFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrrFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrrFiles4").val('');
    $("#xrrFiles4_id").val('');
    document.getElementById("xrrFour_name").innerHTML = "";
    document.getElementById("xrrFour_title").innerHTML = "";
    $("#xrrFour_uploaded").attr("src","");
    $("#xrrFour_delete").remove();
  },

  'change #xrrFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("xrrFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrrFiles4").val('');
          $("#xrrFiles4_id").val('');
          document.getElementById("xrrFour_name").innerHTML = "";
          document.getElementById("xrrFour_title").innerHTML = "";
          $("#xrrFour_uploaded").attr("src","");
          $("#xrrFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#xrrFiles4").val(photoFour);
            $("#xrrFiles4_id").val(photoFourId);
            Session.set("xrrFiles4_id", photoFourId);
            document.getElementById("xrrFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#xrrFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrrFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrrFour_progress").remove();
                            }
                            console.log(result);
                            $("#xrrFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("xrrFour_title").innerHTML = "Picture four";
                  document.getElementById("xrrFour_name").innerHTML = "new"; // set name in label
                  $("#xrrFour_uploaded").attr("src",url);
                  $("#xrrFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrrFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #xrrFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("xrrFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#xrrFiles5").val('');
    $("#xrrFiles5_id").val('');
    document.getElementById("xrrFiles_name").innerHTML = "";
    document.getElementById("upload_xrrFiles5").innerHTML = "(.zip)";
    $("#xrrFile_delete").remove();
  },
  'change #xrrFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("xrrFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#xrrFiles5").val('');
          $("#xrrFiles5_id").val('');
          document.getElementById("xrrFiles_name").innerHTML = "";
          document.getElementById("upload_xrrFiles5").innerHTML = "(.zip)";
          $("#xrrFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#xrrFiles5").val(files);
            $("#xrrFiles5_id").val(filesId);
            Session.set("xrrFiles5_id", filesId);

            // track progress of upload
            $("#xrrFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="xrrFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#xrrFive_progress").remove();
                            }
                            console.log(result);
                            $("#xrrFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("xrrFiles_name").innerHTML = "new"; 
                  $("#xrrFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="xrrFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})