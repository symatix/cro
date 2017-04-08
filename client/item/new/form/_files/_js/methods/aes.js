Template.files_methods_aes.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aesOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aesFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aesFiles1").val('');
    $("#aesFiles1_id").val('');
    document.getElementById("aesOne_name").innerHTML = "";
    document.getElementById("aesOne_title").innerHTML = "";
    $("#aesOne_uploaded").attr("src","");
    $("#aesOne_delete").remove();
  },
  'change #aesFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("aesFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aesFiles1").val('');
          $("#aesFiles1_id").val('');
          document.getElementById("aesOne_name").innerHTML = "";
          document.getElementById("aesOne_title").innerHTML = "";
          $("#aesOne_uploaded").attr("src","");
          $("#aesOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#aesFiles1").val(photoOne);
            $("#aesFiles1_id").val(photoOneId);
            Session.set("aesFiles1_id", photoOneId);
            document.getElementById("aesOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aesOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aesOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aesOne_progress").remove();
                            }
                            console.log(result);
                            $("#aesOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aesOne_title").innerHTML = "Picture one";
                  document.getElementById("aesOne_name").innerHTML = "new";
                  $("#aesOne_uploaded").attr("src",url);
                  $("#aesOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aesOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aesTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aesFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aesFiles2").val('');
    $("#aesFiles2_id").val('');
    document.getElementById("aesTwo_name").innerHTML = "";
    document.getElementById("aesTwo_title").innerHTML = "";
    $("#aesTwo_uploaded").attr("src","");
    $("#aesTwo_delete").remove();
  },

  'change #aesFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("aesFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aesFiles2").val('');
          $("#aesFiles2_id").val('');
          document.getElementById("aesTwo_name").innerHTML = "";
          document.getElementById("aesTwo_title").innerHTML = "";
          $("#aesTwo_uploaded").attr("src","");
          $("#aesTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#aesFiles2").val(photoTwo);
            $("#aesFiles2_id").val(photoTwoId);
            Session.set("aesFiles2_id", photoTwoId);
            document.getElementById("aesTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aesTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aesTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aesTwo_progress").remove();
                            }
                            console.log(result);
                            $("#aesTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aesTwo_title").innerHTML = "Picture two";
                  document.getElementById("aesTwo_name").innerHTML = "new"; // set name in label
                  $("#aesTwo_uploaded").attr("src",url);
                  $("#aesTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aesTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aesThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aesFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aesFiles3").val('');
    $("#aesFiles3_id").val('');
    document.getElementById("aesThree_name").innerHTML = "";
    document.getElementById("aesThree_title").innerHTML = "";
    $("#aesThree_uploaded").attr("src","");
    $("#aesThree_delete").remove();
  },

  'change #aesFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("aesFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aesFiles3").val('');
          $("#aesFiles3_id").val('');
          document.getElementById("aesThree_name").innerHTML = "";
          document.getElementById("aesThree_title").innerHTML = "";
          $("#aesThree_uploaded").attr("src","");
          $("#aesThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#aesFiles3").val(photoThree);
            $("#aesFiles3_id").val(photoThreeId);
            Session.set("aesFiles3_id", photoThreeId);
            document.getElementById("aesThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aesThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aesThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aesThree_progress").remove();
                            }
                            console.log(result);
                            $("#aesThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aesThree_title").innerHTML = "Picture three";
                  document.getElementById("aesThree_name").innerHTML = "new"; // set name in label
                  $("#aesThree_uploaded").attr("src",url);
                  $("#aesThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aesThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aesFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aesFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aesFiles4").val('');
    $("#aesFiles4_id").val('');
    document.getElementById("aesFour_name").innerHTML = "";
    document.getElementById("aesFour_title").innerHTML = "";
    $("#aesFour_uploaded").attr("src","");
    $("#aesFour_delete").remove();
  },

  'change #aesFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("aesFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aesFiles4").val('');
          $("#aesFiles4_id").val('');
          document.getElementById("aesFour_name").innerHTML = "";
          document.getElementById("aesFour_title").innerHTML = "";
          $("#aesFour_uploaded").attr("src","");
          $("#aesFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#aesFiles4").val(photoFour);
            $("#aesFiles4_id").val(photoFourId);
            Session.set("aesFiles4_id", photoFourId);
            document.getElementById("aesFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aesFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aesFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aesFour_progress").remove();
                            }
                            console.log(result);
                            $("#aesFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aesFour_title").innerHTML = "Picture four";
                  document.getElementById("aesFour_name").innerHTML = "new"; // set name in label
                  $("#aesFour_uploaded").attr("src",url);
                  $("#aesFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aesFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aesFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aesFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aesFiles5").val('');
    $("#aesFiles5_id").val('');
    document.getElementById("aesFiles_name").innerHTML = "";
    document.getElementById("upload_aesFiles5").innerHTML = "(.zip)";
    $("#aesFile_delete").remove();
  },
  'change #aesFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("aesFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aesFiles5").val('');
          $("#aesFiles5_id").val('');
          document.getElementById("aesFiles_name").innerHTML = "";
          document.getElementById("upload_aesFiles5").innerHTML = "(.zip)";
          $("#aesFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#aesFiles5").val(files);
            $("#aesFiles5_id").val(filesId);
            Session.set("aesFiles5_id", filesId);

            // track progress of upload
            $("#aesFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aesFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aesFive_progress").remove();
                            }
                            console.log(result);
                            $("#aesFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("aesFiles_name").innerHTML = "new"; 
                  $("#aesFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aesFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})