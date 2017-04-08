Template.files_methods_fors.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #forsOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("forsFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#forsFiles1").val('');
    $("#forsFiles1_id").val('');
    document.getElementById("forsOne_name").innerHTML = "";
    document.getElementById("forsOne_title").innerHTML = "";
    $("#forsOne_uploaded").attr("src","");
    $("#forsOne_delete").remove();
  },
  'change #forsFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("forsFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#forsFiles1").val('');
          $("#forsFiles1_id").val('');
          document.getElementById("forsOne_name").innerHTML = "";
          document.getElementById("forsOne_title").innerHTML = "";
          $("#forsOne_uploaded").attr("src","");
          $("#forsOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#forsFiles1").val(photoOne);
            $("#forsFiles1_id").val(photoOneId);
            Session.set("forsFiles1_id", photoOneId);
            document.getElementById("forsOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#forsOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="forsOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#forsOne_progress").remove();
                            }
                            console.log(result);
                            $("#forsOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("forsOne_title").innerHTML = "Picture one";
                  document.getElementById("forsOne_name").innerHTML = "new";
                  $("#forsOne_uploaded").attr("src",url);
                  $("#forsOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="forsOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #forsTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("forsFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#forsFiles2").val('');
    $("#forsFiles2_id").val('');
    document.getElementById("forsTwo_name").innerHTML = "";
    document.getElementById("forsTwo_title").innerHTML = "";
    $("#forsTwo_uploaded").attr("src","");
    $("#forsTwo_delete").remove();
  },

  'change #forsFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("forsFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#forsFiles2").val('');
          $("#forsFiles2_id").val('');
          document.getElementById("forsTwo_name").innerHTML = "";
          document.getElementById("forsTwo_title").innerHTML = "";
          $("#forsTwo_uploaded").attr("src","");
          $("#forsTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#forsFiles2").val(photoTwo);
            $("#forsFiles2_id").val(photoTwoId);
            Session.set("forsFiles2_id", photoTwoId);
            document.getElementById("forsTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#forsTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="forsTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#forsTwo_progress").remove();
                            }
                            console.log(result);
                            $("#forsTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("forsTwo_title").innerHTML = "Picture two";
                  document.getElementById("forsTwo_name").innerHTML = "new"; // set name in label
                  $("#forsTwo_uploaded").attr("src",url);
                  $("#forsTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="forsTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #forsThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("forsFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#forsFiles3").val('');
    $("#forsFiles3_id").val('');
    document.getElementById("forsThree_name").innerHTML = "";
    document.getElementById("forsThree_title").innerHTML = "";
    $("#forsThree_uploaded").attr("src","");
    $("#forsThree_delete").remove();
  },

  'change #forsFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("forsFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#forsFiles3").val('');
          $("#forsFiles3_id").val('');
          document.getElementById("forsThree_name").innerHTML = "";
          document.getElementById("forsThree_title").innerHTML = "";
          $("#forsThree_uploaded").attr("src","");
          $("#forsThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#forsFiles3").val(photoThree);
            $("#forsFiles3_id").val(photoThreeId);
            Session.set("forsFiles3_id", photoThreeId);
            document.getElementById("forsThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#forsThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="forsThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#forsThree_progress").remove();
                            }
                            console.log(result);
                            $("#forsThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("forsThree_title").innerHTML = "Picture three";
                  document.getElementById("forsThree_name").innerHTML = "new"; // set name in label
                  $("#forsThree_uploaded").attr("src",url);
                  $("#forsThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="forsThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #forsFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("forsFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#forsFiles4").val('');
    $("#forsFiles4_id").val('');
    document.getElementById("forsFour_name").innerHTML = "";
    document.getElementById("forsFour_title").innerHTML = "";
    $("#forsFour_uploaded").attr("src","");
    $("#forsFour_delete").remove();
  },

  'change #forsFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("forsFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#forsFiles4").val('');
          $("#forsFiles4_id").val('');
          document.getElementById("forsFour_name").innerHTML = "";
          document.getElementById("forsFour_title").innerHTML = "";
          $("#forsFour_uploaded").attr("src","");
          $("#forsFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#forsFiles4").val(photoFour);
            $("#forsFiles4_id").val(photoFourId);
            Session.set("forsFiles4_id", photoFourId);
            document.getElementById("forsFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#forsFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="forsFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#forsFour_progress").remove();
                            }
                            console.log(result);
                            $("#forsFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("forsFour_title").innerHTML = "Picture four";
                  document.getElementById("forsFour_name").innerHTML = "new"; // set name in label
                  $("#forsFour_uploaded").attr("src",url);
                  $("#forsFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="forsFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #forsFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("forsFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#forsFiles5").val('');
    $("#forsFiles5_id").val('');
    document.getElementById("forsFiles_name").innerHTML = "";
    document.getElementById("upload_forsFiles5").innerHTML = "(.zip)";
    $("#forsFile_delete").remove();
  },
  'change #forsFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("forsFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#forsFiles5").val('');
          $("#forsFiles5_id").val('');
          document.getElementById("forsFiles_name").innerHTML = "";
          document.getElementById("upload_forsFiles5").innerHTML = "(.zip)";
          $("#forsFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#forsFiles5").val(files);
            $("#forsFiles5_id").val(filesId);
            Session.set("forsFiles5_id", filesId);

            // track progress of upload
            $("#forsFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="forsFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#forsFive_progress").remove();
                            }
                            console.log(result);
                            $("#forsFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("forsFiles_name").innerHTML = "new"; 
                  $("#forsFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="forsFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})