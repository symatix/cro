Template.item_files_details_1.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #originalOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoOne1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoOne1").val('');
    $("#photoOne1_id").val('');
    document.getElementById("originalOne_name").innerHTML = "";
    document.getElementById("originalOne_title").innerHTML = "";
    $("#originalOne_uploaded").attr("src","");
    $("#originalOne_delete").remove();
  },
  'change #photoOne_label1': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("photoOne1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoOne1").val('');
          $("#photoOne1_id").val('');
          document.getElementById("originalOne_name").innerHTML = "";
          document.getElementById("originalOne_title").innerHTML = "";
          $("#originalOne_uploaded").attr("src","");
          $("#originalOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#photoOne1").val(photoOne);
            $("#photoOne1_id").val(photoOneId);
            Session.set("photoOne1_id", photoOneId);
            document.getElementById("originalOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#originalOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="originalOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#originalOne_progress").remove();
                            }
                            console.log(result);
                            $("#originalOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("originalOne_title").innerHTML = "Picture one";
                  document.getElementById("originalOne_name").innerHTML = "new";
                  $("#originalOne_uploaded").attr("src",url);
                  $("#originalOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="originalOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #originalTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoTwo1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoTwo1").val('');
    $("#photoTwo1_id").val('');
    document.getElementById("originalTwo_name").innerHTML = "";
    document.getElementById("originalTwo_title").innerHTML = "";
    $("#originalTwo_uploaded").attr("src","");
    $("#originalTwo_delete").remove();
  },

  'change #photoTwo_label1': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("photoTwo1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoTwo1").val('');
          $("#photoTwo1_id").val('');
          document.getElementById("originalTwo_name").innerHTML = "";
          document.getElementById("originalTwo_title").innerHTML = "";
          $("#originalTwo_uploaded").attr("src","");
          $("#originalTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#photoTwo1").val(photoTwo);
            $("#photoTwo1_id").val(photoTwoId);
            Session.set("photoTwo1_id", photoTwoId);
            document.getElementById("originalTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#originalTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="originalTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#originalTwo_progress").remove();
                            }
                            console.log(result);
                            $("#originalTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("originalTwo_title").innerHTML = "Picture two";
                  document.getElementById("originalTwo_name").innerHTML = "new"; // set name in label
                  $("#originalTwo_uploaded").attr("src",url);
                  $("#originalTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="originalTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #originalThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoThree1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoThree1").val('');
    $("#photoThree1_id").val('');
    document.getElementById("originalThree_name").innerHTML = "";
    document.getElementById("originalThree_title").innerHTML = "";
    $("#originalThree_uploaded").attr("src","");
    $("#originalThree_delete").remove();
  },

  'change #photoThree_label1': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("photoThree1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoThree1").val('');
          $("#photoThree1_id").val('');
          document.getElementById("originalThree_name").innerHTML = "";
          document.getElementById("originalThree_title").innerHTML = "";
          $("#originalThree_uploaded").attr("src","");
          $("#originalThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#photoThree1").val(photoThree);
            $("#photoThree1_id").val(photoThreeId);
            Session.set("photoThree1_id", photoThreeId);
            document.getElementById("originalThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#originalThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="originalThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#originalThree_progress").remove();
                            }
                            console.log(result);
                            $("#originalThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("originalThree_title").innerHTML = "Picture three";
                  document.getElementById("originalThree_name").innerHTML = "new"; // set name in label
                  $("#originalThree_uploaded").attr("src",url);
                  $("#originalThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="originalThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #originalFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoFour1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoFour1").val('');
    $("#photoFour1_id").val('');
    document.getElementById("originalFour_name").innerHTML = "";
    document.getElementById("originalFour_title").innerHTML = "";
    $("#originalFour_uploaded").attr("src","");
    $("#originalFour_delete").remove();
  },

  'change #photoFour_label1': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("photoFour1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoFour1").val('');
          $("#photoFour1_id").val('');
          document.getElementById("originalFour_name").innerHTML = "";
          document.getElementById("originalFour_title").innerHTML = "";
          $("#originalFour_uploaded").attr("src","");
          $("#originalFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#photoFour1").val(photoFour);
            $("#photoFour1_id").val(photoFourId);
            Session.set("photoFour1_id", photoFourId);
            document.getElementById("originalFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#originalFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="originalFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#originalFour_progress").remove();
                            }
                            console.log(result);
                            $("#originalFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("originalFour_title").innerHTML = "Picture four";
                  document.getElementById("originalFour_name").innerHTML = "new"; // set name in label
                  $("#originalFour_uploaded").attr("src",url);
                  $("#originalFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="originalFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #originalFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("files1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#files1").val('');
    $("#files1_id").val('');
    document.getElementById("originalFiles_name").innerHTML = "";
    document.getElementById("upload_files1").innerHTML = "(.zip)";
    $("#originalFile_delete").remove();
  },
  'change #files_label1': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("files1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#files1").val('');
          $("#files1_id").val('');
          document.getElementById("originalFiles_name").innerHTML = "";
          document.getElementById("upload_files1").innerHTML = "(.zip)";
          $("#originalFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#files1").val(files);
            $("#files1_id").val(filesId);
            Session.set("files1_id", filesId);

            // track progress of upload
            $("#originalFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="originalFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#originalFive_progress").remove();
                            }
                            console.log(result);
                            $("#originalFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("originalFiles_name").innerHTML = "new"; 
                  $("#originalFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="originalFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})
