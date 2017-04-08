Template.files_methods_analysis.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #analysisOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("analysisFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#analysisFiles1").val('');
    $("#analysisFiles1_id").val('');
    document.getElementById("analysisOne_name").innerHTML = "";
    document.getElementById("analysisOne_title").innerHTML = "";
    $("#analysisOne_uploaded").attr("src","");
    $("#analysisOne_delete").remove();
  },
  'change #analysisFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("analysisFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#analysisFiles1").val('');
          $("#analysisFiles1_id").val('');
          document.getElementById("analysisOne_name").innerHTML = "";
          document.getElementById("analysisOne_title").innerHTML = "";
          $("#analysisOne_uploaded").attr("src","");
          $("#analysisOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#analysisFiles1").val(photoOne);
            $("#analysisFiles1_id").val(photoOneId);
            Session.set("analysisFiles1_id", photoOneId);
            document.getElementById("analysisOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#analysisOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="analysisOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#analysisOne_progress").remove();
                            }
                            console.log(result);
                            $("#analysisOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("analysisOne_title").innerHTML = "Picture one";
                  document.getElementById("analysisOne_name").innerHTML = "new";
                  $("#analysisOne_uploaded").attr("src",url);
                  $("#analysisOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="analysisOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #analysisTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("analysisFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#analysisFiles2").val('');
    $("#analysisFiles2_id").val('');
    document.getElementById("analysisTwo_name").innerHTML = "";
    document.getElementById("analysisTwo_title").innerHTML = "";
    $("#analysisTwo_uploaded").attr("src","");
    $("#analysisTwo_delete").remove();
  },

  'change #analysisFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("analysisFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#analysisFiles2").val('');
          $("#analysisFiles2_id").val('');
          document.getElementById("analysisTwo_name").innerHTML = "";
          document.getElementById("analysisTwo_title").innerHTML = "";
          $("#analysisTwo_uploaded").attr("src","");
          $("#analysisTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#analysisFiles2").val(photoTwo);
            $("#analysisFiles2_id").val(photoTwoId);
            Session.set("analysisFiles2_id", photoTwoId);
            document.getElementById("analysisTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#analysisTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="analysisTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#analysisTwo_progress").remove();
                            }
                            console.log(result);
                            $("#analysisTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("analysisTwo_title").innerHTML = "Picture two";
                  document.getElementById("analysisTwo_name").innerHTML = "new"; // set name in label
                  $("#analysisTwo_uploaded").attr("src",url);
                  $("#analysisTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="analysisTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #analysisThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("analysisFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#analysisFiles3").val('');
    $("#analysisFiles3_id").val('');
    document.getElementById("analysisThree_name").innerHTML = "";
    document.getElementById("analysisThree_title").innerHTML = "";
    $("#analysisThree_uploaded").attr("src","");
    $("#analysisThree_delete").remove();
  },

  'change #analysisFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("analysisFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#analysisFiles3").val('');
          $("#analysisFiles3_id").val('');
          document.getElementById("analysisThree_name").innerHTML = "";
          document.getElementById("analysisThree_title").innerHTML = "";
          $("#analysisThree_uploaded").attr("src","");
          $("#analysisThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#analysisFiles3").val(photoThree);
            $("#analysisFiles3_id").val(photoThreeId);
            Session.set("analysisFiles3_id", photoThreeId);
            document.getElementById("analysisThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#analysisThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="analysisThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#analysisThree_progress").remove();
                            }
                            console.log(result);
                            $("#analysisThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("analysisThree_title").innerHTML = "Picture three";
                  document.getElementById("analysisThree_name").innerHTML = "new"; // set name in label
                  $("#analysisThree_uploaded").attr("src",url);
                  $("#analysisThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="analysisThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #analysisFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("analysisFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#analysisFiles4").val('');
    $("#analysisFiles4_id").val('');
    document.getElementById("analysisFour_name").innerHTML = "";
    document.getElementById("analysisFour_title").innerHTML = "";
    $("#analysisFour_uploaded").attr("src","");
    $("#analysisFour_delete").remove();
  },

  'change #analysisFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("analysisFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#analysisFiles4").val('');
          $("#analysisFiles4_id").val('');
          document.getElementById("analysisFour_name").innerHTML = "";
          document.getElementById("analysisFour_title").innerHTML = "";
          $("#analysisFour_uploaded").attr("src","");
          $("#analysisFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#analysisFiles4").val(photoFour);
            $("#analysisFiles4_id").val(photoFourId);
            Session.set("analysisFiles4_id", photoFourId);
            document.getElementById("analysisFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#analysisFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="analysisFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#analysisFour_progress").remove();
                            }
                            console.log(result);
                            $("#analysisFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("analysisFour_title").innerHTML = "Picture four";
                  document.getElementById("analysisFour_name").innerHTML = "new"; // set name in label
                  $("#analysisFour_uploaded").attr("src",url);
                  $("#analysisFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="analysisFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #analysisFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("analysisFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#analysisFiles5").val('');
    $("#analysisFiles5_id").val('');
    document.getElementById("analysisFiles_name").innerHTML = "";
    document.getElementById("upload_analysisFiles5").innerHTML = "(.zip)";
    $("#analysisFile_delete").remove();
  },
  'change #analysisFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("analysisFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#analysisFiles5").val('');
          $("#analysisFiles5_id").val('');
          document.getElementById("analysisFiles_name").innerHTML = "";
          document.getElementById("upload_analysisFiles5").innerHTML = "(.zip)";
          $("#analysisFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#analysisFiles5").val(files);
            $("#analysisFiles5_id").val(filesId);
            Session.set("analysisFiles5_id", filesId);

            // track progress of upload
            $("#analysisFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="analysisFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#analysisFive_progress").remove();
                            }
                            console.log(result);
                            $("#analysisFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("analysisFiles_name").innerHTML = "new"; 
                  $("#analysisFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="analysisFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})