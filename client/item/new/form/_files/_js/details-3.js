Template.item_files_details_3.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #restorationOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoOne3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoOne3").val('');
    $("#photoOne3_id").val('');
    document.getElementById("restorationOne_name").innerHTML = "";
    document.getElementById("restorationOne_title").innerHTML = "";
    $("#restorationOne_uploaded").attr("src","");
    $("#restorationOne_delete").remove();
  },
  'change #photoOne_label3': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("photoOne3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoOne3").val('');
          $("#photoOne3_id").val('');
          document.getElementById("restorationOne_name").innerHTML = "";
          document.getElementById("restorationOne_title").innerHTML = "";
          $("#restorationOne_uploaded").attr("src","");
          $("#restorationOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#photoOne3").val(photoOne);
            $("#photoOne3_id").val(photoOneId);
            Session.set("photoOne3_id", photoOneId);
            document.getElementById("restorationOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#restorationOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="restorationOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#restorationOne_progress").remove();
                            }
                            console.log(result);
                            $("#restorationOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("restorationOne_title").innerHTML = "Picture one";
                  document.getElementById("restorationOne_name").innerHTML = "new"; // set name in label
                  $("#restorationOne_uploaded").attr("src",url);
                  $("#restorationOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="restorationOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #restorationTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoTwo3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoTwo3").val('');
    $("#photoTwo3_id").val('');
    document.getElementById("restorationTwo_name").innerHTML = "";
    document.getElementById("restorationTwo_title").innerHTML = "";
    $("#restorationTwo_uploaded").attr("src","");
    $("#restorationTwo_delete").remove();
  },

  'change #photoTwo_label3': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("photoTwo3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoTwo3").val('');
          $("#photoTwo3_id").val('');
          document.getElementById("restorationTwo_name").innerHTML = "";
          document.getElementById("restorationTwo_title").innerHTML = "";
          $("#restorationTwo_uploaded").attr("src","");
          $("#restorationTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#photoTwo3").val(photoTwo);
            $("#photoTwo3_id").val(photoTwoId);
            Session.set("photoTwo3_id", photoTwoId);
            document.getElementById("restorationTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#restorationTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="restorationTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#restorationTwo_progress").remove();
                            }
                            console.log(result);
                            $("#restorationTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("restorationTwo_title").innerHTML = "Picture two";
                  document.getElementById("restorationTwo_name").innerHTML = "new"; // set name in label
                  $("#restorationTwo_uploaded").attr("src",url);
                  $("#restorationTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="restorationTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #restorationThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoThree3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoThree3").val('');
    $("#photoThree3_id").val('');
    document.getElementById("restorationThree_name").innerHTML = "";
    document.getElementById("restorationThree_title").innerHTML = "";
    $("#restorationThree_uploaded").attr("src","");
    $("#restorationThree_delete").remove();
  },

  'change #photoThree_label3': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("photoThree3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoThree3").val('');
          $("#photoThree3_id").val('');
          document.getElementById("restorationThree_name").innerHTML = "";
          document.getElementById("restorationThree_title").innerHTML = "";
          $("#restorationThree_uploaded").attr("src","");
          $("#restorationThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#photoThree3").val(photoThree);
            $("#photoThree3_id").val(photoThreeId);
            Session.set("photoThree3_id", photoThreeId);
            document.getElementById("restorationThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#restorationThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="restorationThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#restorationThree_progress").remove();
                            }
                            console.log(result);
                            $("#restorationThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("restorationThree_title").innerHTML = "Picture three";
                  document.getElementById("restorationThree_name").innerHTML = "new"; // set name in label
                  $("#restorationThree_uploaded").attr("src",url);
                  $("#restorationThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="restorationThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #restorationFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoFour3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoFour3").val('');
    $("#photoFour3_id").val('');
    document.getElementById("restorationFour_name").innerHTML = "";
    document.getElementById("restorationFour_title").innerHTML = "";
    $("#restorationFour_uploaded").attr("src","");
    $("#restorationFour_delete").remove();
  },

  'change #photoFour_label3': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("photoFour3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoFour3").val('');
          $("#photoFour3_id").val('');
          document.getElementById("restorationFour_name").innerHTML = "";
          document.getElementById("restorationFour_title").innerHTML = "";
          $("#restorationFour_uploaded").attr("src","");
          $("#restorationFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#photoFour3").val(photoFour);
            $("#photoFour3_id").val(photoFourId);
            Session.set("photoFour3_id", photoFourId);
            document.getElementById("restorationFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#restorationFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="restorationFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#restorationFour_progress").remove();
                            }
                            console.log(result);
                            $("#restorationFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("restorationFour_title").innerHTML = "Picture four";
                  document.getElementById("restorationFour_name").innerHTML = "new"; // set name in label
                  $("#restorationFour_uploaded").attr("src",url);
                  $("#restorationFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="restorationFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #restorationFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("files3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#files3").val('');
    $("#files3_id").val('');
    document.getElementById("restorationFiles_name").innerHTML = "";
    $("#restorationFile_delete").remove();
  },
  'change #files_label3': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("files3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#files3").val('');
          $("#files3_id").val('');
          document.getElementById("restorationFiles_name").innerHTML = "";
          $("#restorationFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#files3").val(files);
            $("#files3_id").val(filesId);
            Session.set("files3_id", filesId);

            // track progress of upload
            $("#restorationFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="restorationFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#restorationFive_progress").remove();
                            }
                            console.log(result);
                            $("#restorationFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("restorationFiles_name").innerHTML = "new"; // set name in label
                  $("#restorationFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="restorationFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})