Template.files_methods_binderFiller.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #binderFillerOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("binderFillerFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#binderFillerFiles1").val('');
    $("#binderFillerFiles1_id").val('');
    document.getElementById("binderFillerOne_name").innerHTML = "";
    document.getElementById("binderFillerOne_title").innerHTML = "";
    $("#binderFillerOne_uploaded").attr("src","");
    $("#binderFillerOne_delete").remove();
  },
  'change #binderFillerFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("binderFillerFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#binderFillerFiles1").val('');
          $("#binderFillerFiles1_id").val('');
          document.getElementById("binderFillerOne_name").innerHTML = "";
          document.getElementById("binderFillerOne_title").innerHTML = "";
          $("#binderFillerOne_uploaded").attr("src","");
          $("#binderFillerOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#binderFillerFiles1").val(photoOne);
            $("#binderFillerFiles1_id").val(photoOneId);
            Session.set("binderFillerFiles1_id", photoOneId);
            document.getElementById("binderFillerOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#binderFillerOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="binderFillerOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#binderFillerOne_progress").remove();
                            }
                            console.log(result);
                            $("#binderFillerOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("binderFillerOne_title").innerHTML = "Picture one";
                  document.getElementById("binderFillerOne_name").innerHTML = "new";
                  $("#binderFillerOne_uploaded").attr("src",url);
                  $("#binderFillerOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="binderFillerOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #binderFillerTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("binderFillerFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#binderFillerFiles2").val('');
    $("#binderFillerFiles2_id").val('');
    document.getElementById("binderFillerTwo_name").innerHTML = "";
    document.getElementById("binderFillerTwo_title").innerHTML = "";
    $("#binderFillerTwo_uploaded").attr("src","");
    $("#binderFillerTwo_delete").remove();
  },

  'change #binderFillerFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("binderFillerFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#binderFillerFiles2").val('');
          $("#binderFillerFiles2_id").val('');
          document.getElementById("binderFillerTwo_name").innerHTML = "";
          document.getElementById("binderFillerTwo_title").innerHTML = "";
          $("#binderFillerTwo_uploaded").attr("src","");
          $("#binderFillerTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#binderFillerFiles2").val(photoTwo);
            $("#binderFillerFiles2_id").val(photoTwoId);
            Session.set("binderFillerFiles2_id", photoTwoId);
            document.getElementById("binderFillerTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#binderFillerTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="binderFillerTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#binderFillerTwo_progress").remove();
                            }
                            console.log(result);
                            $("#binderFillerTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("binderFillerTwo_title").innerHTML = "Picture two";
                  document.getElementById("binderFillerTwo_name").innerHTML = "new"; // set name in label
                  $("#binderFillerTwo_uploaded").attr("src",url);
                  $("#binderFillerTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="binderFillerTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #binderFillerThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("binderFillerFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#binderFillerFiles3").val('');
    $("#binderFillerFiles3_id").val('');
    document.getElementById("binderFillerThree_name").innerHTML = "";
    document.getElementById("binderFillerThree_title").innerHTML = "";
    $("#binderFillerThree_uploaded").attr("src","");
    $("#binderFillerThree_delete").remove();
  },

  'change #binderFillerFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("binderFillerFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#binderFillerFiles3").val('');
          $("#binderFillerFiles3_id").val('');
          document.getElementById("binderFillerThree_name").innerHTML = "";
          document.getElementById("binderFillerThree_title").innerHTML = "";
          $("#binderFillerThree_uploaded").attr("src","");
          $("#binderFillerThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#binderFillerFiles3").val(photoThree);
            $("#binderFillerFiles3_id").val(photoThreeId);
            Session.set("binderFillerFiles3_id", photoThreeId);
            document.getElementById("binderFillerThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#binderFillerThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="binderFillerThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#binderFillerThree_progress").remove();
                            }
                            console.log(result);
                            $("#binderFillerThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("binderFillerThree_title").innerHTML = "Picture three";
                  document.getElementById("binderFillerThree_name").innerHTML = "new"; // set name in label
                  $("#binderFillerThree_uploaded").attr("src",url);
                  $("#binderFillerThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="binderFillerThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #binderFillerFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("binderFillerFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#binderFillerFiles4").val('');
    $("#binderFillerFiles4_id").val('');
    document.getElementById("binderFillerFour_name").innerHTML = "";
    document.getElementById("binderFillerFour_title").innerHTML = "";
    $("#binderFillerFour_uploaded").attr("src","");
    $("#binderFillerFour_delete").remove();
  },

  'change #binderFillerFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("binderFillerFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#binderFillerFiles4").val('');
          $("#binderFillerFiles4_id").val('');
          document.getElementById("binderFillerFour_name").innerHTML = "";
          document.getElementById("binderFillerFour_title").innerHTML = "";
          $("#binderFillerFour_uploaded").attr("src","");
          $("#binderFillerFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#binderFillerFiles4").val(photoFour);
            $("#binderFillerFiles4_id").val(photoFourId);
            Session.set("binderFillerFiles4_id", photoFourId);
            document.getElementById("binderFillerFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#binderFillerFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="binderFillerFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#binderFillerFour_progress").remove();
                            }
                            console.log(result);
                            $("#binderFillerFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("binderFillerFour_title").innerHTML = "Picture four";
                  document.getElementById("binderFillerFour_name").innerHTML = "new"; // set name in label
                  $("#binderFillerFour_uploaded").attr("src",url);
                  $("#binderFillerFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="binderFillerFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #binderFillerFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("binderFillerFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#binderFillerFiles5").val('');
    $("#binderFillerFiles5_id").val('');
    document.getElementById("binderFillerFiles_name").innerHTML = "";
    document.getElementById("upload_binderFillerFiles5").innerHTML = "(.zip)";
    $("#binderFillerFile_delete").remove();
  },
  'change #binderFillerFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("binderFillerFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#binderFillerFiles5").val('');
          $("#binderFillerFiles5_id").val('');
          document.getElementById("binderFillerFiles_name").innerHTML = "";
          document.getElementById("upload_binderFillerFiles5").innerHTML = "(.zip)";
          $("#binderFillerFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#binderFillerFiles5").val(files);
            $("#binderFillerFiles5_id").val(filesId);
            Session.set("binderFillerFiles5_id", filesId);

            // track progress of upload
            $("#binderFillerFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="binderFillerFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#binderFillerFive_progress").remove();
                            }
                            console.log(result);
                            $("#binderFillerFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("binderFillerFiles_name").innerHTML = "new"; 
                  $("#binderFillerFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="binderFillerFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})