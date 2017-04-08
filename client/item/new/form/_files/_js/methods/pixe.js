Template.files_methods_pixe.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pixeOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pixeFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pixeFiles1").val('');
    $("#pixeFiles1_id").val('');
    document.getElementById("pixeOne_name").innerHTML = "";
    document.getElementById("pixeOne_title").innerHTML = "";
    $("#pixeOne_uploaded").attr("src","");
    $("#pixeOne_delete").remove();
  },
  'change #pixeFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("pixeFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pixeFiles1").val('');
          $("#pixeFiles1_id").val('');
          document.getElementById("pixeOne_name").innerHTML = "";
          document.getElementById("pixeOne_title").innerHTML = "";
          $("#pixeOne_uploaded").attr("src","");
          $("#pixeOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#pixeFiles1").val(photoOne);
            $("#pixeFiles1_id").val(photoOneId);
            Session.set("pixeFiles1_id", photoOneId);
            document.getElementById("pixeOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pixeOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pixeOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pixeOne_progress").remove();
                            }
                            console.log(result);
                            $("#pixeOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pixeOne_title").innerHTML = "Picture one";
                  document.getElementById("pixeOne_name").innerHTML = "new";
                  $("#pixeOne_uploaded").attr("src",url);
                  $("#pixeOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pixeOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pixeTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pixeFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pixeFiles2").val('');
    $("#pixeFiles2_id").val('');
    document.getElementById("pixeTwo_name").innerHTML = "";
    document.getElementById("pixeTwo_title").innerHTML = "";
    $("#pixeTwo_uploaded").attr("src","");
    $("#pixeTwo_delete").remove();
  },

  'change #pixeFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("pixeFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pixeFiles2").val('');
          $("#pixeFiles2_id").val('');
          document.getElementById("pixeTwo_name").innerHTML = "";
          document.getElementById("pixeTwo_title").innerHTML = "";
          $("#pixeTwo_uploaded").attr("src","");
          $("#pixeTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#pixeFiles2").val(photoTwo);
            $("#pixeFiles2_id").val(photoTwoId);
            Session.set("pixeFiles2_id", photoTwoId);
            document.getElementById("pixeTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pixeTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pixeTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pixeTwo_progress").remove();
                            }
                            console.log(result);
                            $("#pixeTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pixeTwo_title").innerHTML = "Picture two";
                  document.getElementById("pixeTwo_name").innerHTML = "new"; // set name in label
                  $("#pixeTwo_uploaded").attr("src",url);
                  $("#pixeTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pixeTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pixeThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pixeFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pixeFiles3").val('');
    $("#pixeFiles3_id").val('');
    document.getElementById("pixeThree_name").innerHTML = "";
    document.getElementById("pixeThree_title").innerHTML = "";
    $("#pixeThree_uploaded").attr("src","");
    $("#pixeThree_delete").remove();
  },

  'change #pixeFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("pixeFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pixeFiles3").val('');
          $("#pixeFiles3_id").val('');
          document.getElementById("pixeThree_name").innerHTML = "";
          document.getElementById("pixeThree_title").innerHTML = "";
          $("#pixeThree_uploaded").attr("src","");
          $("#pixeThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#pixeFiles3").val(photoThree);
            $("#pixeFiles3_id").val(photoThreeId);
            Session.set("pixeFiles3_id", photoThreeId);
            document.getElementById("pixeThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pixeThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pixeThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pixeThree_progress").remove();
                            }
                            console.log(result);
                            $("#pixeThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pixeThree_title").innerHTML = "Picture three";
                  document.getElementById("pixeThree_name").innerHTML = "new"; // set name in label
                  $("#pixeThree_uploaded").attr("src",url);
                  $("#pixeThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pixeThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pixeFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pixeFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pixeFiles4").val('');
    $("#pixeFiles4_id").val('');
    document.getElementById("pixeFour_name").innerHTML = "";
    document.getElementById("pixeFour_title").innerHTML = "";
    $("#pixeFour_uploaded").attr("src","");
    $("#pixeFour_delete").remove();
  },

  'change #pixeFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("pixeFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pixeFiles4").val('');
          $("#pixeFiles4_id").val('');
          document.getElementById("pixeFour_name").innerHTML = "";
          document.getElementById("pixeFour_title").innerHTML = "";
          $("#pixeFour_uploaded").attr("src","");
          $("#pixeFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#pixeFiles4").val(photoFour);
            $("#pixeFiles4_id").val(photoFourId);
            Session.set("pixeFiles4_id", photoFourId);
            document.getElementById("pixeFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#pixeFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pixeFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pixeFour_progress").remove();
                            }
                            console.log(result);
                            $("#pixeFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("pixeFour_title").innerHTML = "Picture four";
                  document.getElementById("pixeFour_name").innerHTML = "new"; // set name in label
                  $("#pixeFour_uploaded").attr("src",url);
                  $("#pixeFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pixeFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #pixeFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("pixeFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#pixeFiles5").val('');
    $("#pixeFiles5_id").val('');
    document.getElementById("pixeFiles_name").innerHTML = "";
    document.getElementById("upload_pixeFiles5").innerHTML = "(.zip)";
    $("#pixeFile_delete").remove();
  },
  'change #pixeFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("pixeFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#pixeFiles5").val('');
          $("#pixeFiles5_id").val('');
          document.getElementById("pixeFiles_name").innerHTML = "";
          document.getElementById("upload_pixeFiles5").innerHTML = "(.zip)";
          $("#pixeFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#pixeFiles5").val(files);
            $("#pixeFiles5_id").val(filesId);
            Session.set("pixeFiles5_id", filesId);

            // track progress of upload
            $("#pixeFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="pixeFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#pixeFive_progress").remove();
                            }
                            console.log(result);
                            $("#pixeFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("pixeFiles_name").innerHTML = "new"; 
                  $("#pixeFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="pixeFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})