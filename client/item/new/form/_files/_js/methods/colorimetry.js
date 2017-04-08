Template.files_methods_colorimetry.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #colorimetryOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("colorimetryFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#colorimetryFiles1").val('');
    $("#colorimetryFiles1_id").val('');
    document.getElementById("colorimetryOne_name").innerHTML = "";
    document.getElementById("colorimetryOne_title").innerHTML = "";
    $("#colorimetryOne_uploaded").attr("src","");
    $("#colorimetryOne_delete").remove();
  },
  'change #colorimetryFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("colorimetryFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#colorimetryFiles1").val('');
          $("#colorimetryFiles1_id").val('');
          document.getElementById("colorimetryOne_name").innerHTML = "";
          document.getElementById("colorimetryOne_title").innerHTML = "";
          $("#colorimetryOne_uploaded").attr("src","");
          $("#colorimetryOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#colorimetryFiles1").val(photoOne);
            $("#colorimetryFiles1_id").val(photoOneId);
            Session.set("colorimetryFiles1_id", photoOneId);
            document.getElementById("colorimetryOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#colorimetryOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="colorimetryOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#colorimetryOne_progress").remove();
                            }
                            console.log(result);
                            $("#colorimetryOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("colorimetryOne_title").innerHTML = "Picture one";
                  document.getElementById("colorimetryOne_name").innerHTML = "new";
                  $("#colorimetryOne_uploaded").attr("src",url);
                  $("#colorimetryOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="colorimetryOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #colorimetryTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("colorimetryFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#colorimetryFiles2").val('');
    $("#colorimetryFiles2_id").val('');
    document.getElementById("colorimetryTwo_name").innerHTML = "";
    document.getElementById("colorimetryTwo_title").innerHTML = "";
    $("#colorimetryTwo_uploaded").attr("src","");
    $("#colorimetryTwo_delete").remove();
  },

  'change #colorimetryFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("colorimetryFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#colorimetryFiles2").val('');
          $("#colorimetryFiles2_id").val('');
          document.getElementById("colorimetryTwo_name").innerHTML = "";
          document.getElementById("colorimetryTwo_title").innerHTML = "";
          $("#colorimetryTwo_uploaded").attr("src","");
          $("#colorimetryTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#colorimetryFiles2").val(photoTwo);
            $("#colorimetryFiles2_id").val(photoTwoId);
            Session.set("colorimetryFiles2_id", photoTwoId);
            document.getElementById("colorimetryTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#colorimetryTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="colorimetryTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#colorimetryTwo_progress").remove();
                            }
                            console.log(result);
                            $("#colorimetryTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("colorimetryTwo_title").innerHTML = "Picture two";
                  document.getElementById("colorimetryTwo_name").innerHTML = "new"; // set name in label
                  $("#colorimetryTwo_uploaded").attr("src",url);
                  $("#colorimetryTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="colorimetryTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #colorimetryThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("colorimetryFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#colorimetryFiles3").val('');
    $("#colorimetryFiles3_id").val('');
    document.getElementById("colorimetryThree_name").innerHTML = "";
    document.getElementById("colorimetryThree_title").innerHTML = "";
    $("#colorimetryThree_uploaded").attr("src","");
    $("#colorimetryThree_delete").remove();
  },

  'change #colorimetryFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("colorimetryFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#colorimetryFiles3").val('');
          $("#colorimetryFiles3_id").val('');
          document.getElementById("colorimetryThree_name").innerHTML = "";
          document.getElementById("colorimetryThree_title").innerHTML = "";
          $("#colorimetryThree_uploaded").attr("src","");
          $("#colorimetryThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#colorimetryFiles3").val(photoThree);
            $("#colorimetryFiles3_id").val(photoThreeId);
            Session.set("colorimetryFiles3_id", photoThreeId);
            document.getElementById("colorimetryThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#colorimetryThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="colorimetryThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#colorimetryThree_progress").remove();
                            }
                            console.log(result);
                            $("#colorimetryThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("colorimetryThree_title").innerHTML = "Picture three";
                  document.getElementById("colorimetryThree_name").innerHTML = "new"; // set name in label
                  $("#colorimetryThree_uploaded").attr("src",url);
                  $("#colorimetryThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="colorimetryThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #colorimetryFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("colorimetryFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#colorimetryFiles4").val('');
    $("#colorimetryFiles4_id").val('');
    document.getElementById("colorimetryFour_name").innerHTML = "";
    document.getElementById("colorimetryFour_title").innerHTML = "";
    $("#colorimetryFour_uploaded").attr("src","");
    $("#colorimetryFour_delete").remove();
  },

  'change #colorimetryFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("colorimetryFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#colorimetryFiles4").val('');
          $("#colorimetryFiles4_id").val('');
          document.getElementById("colorimetryFour_name").innerHTML = "";
          document.getElementById("colorimetryFour_title").innerHTML = "";
          $("#colorimetryFour_uploaded").attr("src","");
          $("#colorimetryFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#colorimetryFiles4").val(photoFour);
            $("#colorimetryFiles4_id").val(photoFourId);
            Session.set("colorimetryFiles4_id", photoFourId);
            document.getElementById("colorimetryFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#colorimetryFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="colorimetryFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#colorimetryFour_progress").remove();
                            }
                            console.log(result);
                            $("#colorimetryFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("colorimetryFour_title").innerHTML = "Picture four";
                  document.getElementById("colorimetryFour_name").innerHTML = "new"; // set name in label
                  $("#colorimetryFour_uploaded").attr("src",url);
                  $("#colorimetryFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="colorimetryFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #colorimetryFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("colorimetryFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#colorimetryFiles5").val('');
    $("#colorimetryFiles5_id").val('');
    document.getElementById("colorimetryFiles_name").innerHTML = "";
    document.getElementById("upload_colorimetryFiles5").innerHTML = "(.zip)";
    $("#colorimetryFile_delete").remove();
  },
  'change #colorimetryFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("colorimetryFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#colorimetryFiles5").val('');
          $("#colorimetryFiles5_id").val('');
          document.getElementById("colorimetryFiles_name").innerHTML = "";
          document.getElementById("upload_colorimetryFiles5").innerHTML = "(.zip)";
          $("#colorimetryFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#colorimetryFiles5").val(files);
            $("#colorimetryFiles5_id").val(filesId);
            Session.set("colorimetryFiles5_id", filesId);

            // track progress of upload
            $("#colorimetryFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="colorimetryFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#colorimetryFive_progress").remove();
                            }
                            console.log(result);
                            $("#colorimetryFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("colorimetryFiles_name").innerHTML = "new"; 
                  $("#colorimetryFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="colorimetryFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})