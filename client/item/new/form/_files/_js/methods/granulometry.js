Template.files_methods_granulometry.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #granulometryOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("granulometryFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#granulometryFiles1").val('');
    $("#granulometryFiles1_id").val('');
    document.getElementById("granulometryOne_name").innerHTML = "";
    document.getElementById("granulometryOne_title").innerHTML = "";
    $("#granulometryOne_uploaded").attr("src","");
    $("#granulometryOne_delete").remove();
  },
  'change #granulometryFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("granulometryFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#granulometryFiles1").val('');
          $("#granulometryFiles1_id").val('');
          document.getElementById("granulometryOne_name").innerHTML = "";
          document.getElementById("granulometryOne_title").innerHTML = "";
          $("#granulometryOne_uploaded").attr("src","");
          $("#granulometryOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#granulometryFiles1").val(photoOne);
            $("#granulometryFiles1_id").val(photoOneId);
            Session.set("granulometryFiles1_id", photoOneId);
            document.getElementById("granulometryOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#granulometryOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="granulometryOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#granulometryOne_progress").remove();
                            }
                            console.log(result);
                            $("#granulometryOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("granulometryOne_title").innerHTML = "Picture one";
                  document.getElementById("granulometryOne_name").innerHTML = "new";
                  $("#granulometryOne_uploaded").attr("src",url);
                  $("#granulometryOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="granulometryOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #granulometryTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("granulometryFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#granulometryFiles2").val('');
    $("#granulometryFiles2_id").val('');
    document.getElementById("granulometryTwo_name").innerHTML = "";
    document.getElementById("granulometryTwo_title").innerHTML = "";
    $("#granulometryTwo_uploaded").attr("src","");
    $("#granulometryTwo_delete").remove();
  },

  'change #granulometryFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("granulometryFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#granulometryFiles2").val('');
          $("#granulometryFiles2_id").val('');
          document.getElementById("granulometryTwo_name").innerHTML = "";
          document.getElementById("granulometryTwo_title").innerHTML = "";
          $("#granulometryTwo_uploaded").attr("src","");
          $("#granulometryTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#granulometryFiles2").val(photoTwo);
            $("#granulometryFiles2_id").val(photoTwoId);
            Session.set("granulometryFiles2_id", photoTwoId);
            document.getElementById("granulometryTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#granulometryTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="granulometryTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#granulometryTwo_progress").remove();
                            }
                            console.log(result);
                            $("#granulometryTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("granulometryTwo_title").innerHTML = "Picture two";
                  document.getElementById("granulometryTwo_name").innerHTML = "new"; // set name in label
                  $("#granulometryTwo_uploaded").attr("src",url);
                  $("#granulometryTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="granulometryTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #granulometryThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("granulometryFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#granulometryFiles3").val('');
    $("#granulometryFiles3_id").val('');
    document.getElementById("granulometryThree_name").innerHTML = "";
    document.getElementById("granulometryThree_title").innerHTML = "";
    $("#granulometryThree_uploaded").attr("src","");
    $("#granulometryThree_delete").remove();
  },

  'change #granulometryFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("granulometryFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#granulometryFiles3").val('');
          $("#granulometryFiles3_id").val('');
          document.getElementById("granulometryThree_name").innerHTML = "";
          document.getElementById("granulometryThree_title").innerHTML = "";
          $("#granulometryThree_uploaded").attr("src","");
          $("#granulometryThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#granulometryFiles3").val(photoThree);
            $("#granulometryFiles3_id").val(photoThreeId);
            Session.set("granulometryFiles3_id", photoThreeId);
            document.getElementById("granulometryThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#granulometryThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="granulometryThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#granulometryThree_progress").remove();
                            }
                            console.log(result);
                            $("#granulometryThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("granulometryThree_title").innerHTML = "Picture three";
                  document.getElementById("granulometryThree_name").innerHTML = "new"; // set name in label
                  $("#granulometryThree_uploaded").attr("src",url);
                  $("#granulometryThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="granulometryThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #granulometryFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("granulometryFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#granulometryFiles4").val('');
    $("#granulometryFiles4_id").val('');
    document.getElementById("granulometryFour_name").innerHTML = "";
    document.getElementById("granulometryFour_title").innerHTML = "";
    $("#granulometryFour_uploaded").attr("src","");
    $("#granulometryFour_delete").remove();
  },

  'change #granulometryFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("granulometryFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#granulometryFiles4").val('');
          $("#granulometryFiles4_id").val('');
          document.getElementById("granulometryFour_name").innerHTML = "";
          document.getElementById("granulometryFour_title").innerHTML = "";
          $("#granulometryFour_uploaded").attr("src","");
          $("#granulometryFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#granulometryFiles4").val(photoFour);
            $("#granulometryFiles4_id").val(photoFourId);
            Session.set("granulometryFiles4_id", photoFourId);
            document.getElementById("granulometryFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#granulometryFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="granulometryFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#granulometryFour_progress").remove();
                            }
                            console.log(result);
                            $("#granulometryFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("granulometryFour_title").innerHTML = "Picture four";
                  document.getElementById("granulometryFour_name").innerHTML = "new"; // set name in label
                  $("#granulometryFour_uploaded").attr("src",url);
                  $("#granulometryFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="granulometryFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #granulometryFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("granulometryFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#granulometryFiles5").val('');
    $("#granulometryFiles5_id").val('');
    document.getElementById("granulometryFiles_name").innerHTML = "";
    document.getElementById("upload_granulometryFiles5").innerHTML = "(.zip)";
    $("#granulometryFile_delete").remove();
  },
  'change #granulometryFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("granulometryFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#granulometryFiles5").val('');
          $("#granulometryFiles5_id").val('');
          document.getElementById("granulometryFiles_name").innerHTML = "";
          document.getElementById("upload_granulometryFiles5").innerHTML = "(.zip)";
          $("#granulometryFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#granulometryFiles5").val(files);
            $("#granulometryFiles5_id").val(filesId);
            Session.set("granulometryFiles5_id", filesId);

            // track progress of upload
            $("#granulometryFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="granulometryFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#granulometryFive_progress").remove();
                            }
                            console.log(result);
                            $("#granulometryFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("granulometryFiles_name").innerHTML = "new"; 
                  $("#granulometryFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="granulometryFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})