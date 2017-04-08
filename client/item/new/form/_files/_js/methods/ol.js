Template.files_methods_ol.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #olOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("olFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#olFiles1").val('');
    $("#olFiles1_id").val('');
    document.getElementById("olOne_name").innerHTML = "";
    document.getElementById("olOne_title").innerHTML = "";
    $("#olOne_uploaded").attr("src","");
    $("#olOne_delete").remove();
  },
  'change #olFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("olFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#olFiles1").val('');
          $("#olFiles1_id").val('');
          document.getElementById("olOne_name").innerHTML = "";
          document.getElementById("olOne_title").innerHTML = "";
          $("#olOne_uploaded").attr("src","");
          $("#olOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#olFiles1").val(photoOne);
            $("#olFiles1_id").val(photoOneId);
            Session.set("olFiles1_id", photoOneId);
            document.getElementById("olOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#olOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="olOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#olOne_progress").remove();
                            }
                            console.log(result);
                            $("#olOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("olOne_title").innerHTML = "Picture one";
                  document.getElementById("olOne_name").innerHTML = "new";
                  $("#olOne_uploaded").attr("src",url);
                  $("#olOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="olOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #olTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("olFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#olFiles2").val('');
    $("#olFiles2_id").val('');
    document.getElementById("olTwo_name").innerHTML = "";
    document.getElementById("olTwo_title").innerHTML = "";
    $("#olTwo_uploaded").attr("src","");
    $("#olTwo_delete").remove();
  },

  'change #olFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("olFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#olFiles2").val('');
          $("#olFiles2_id").val('');
          document.getElementById("olTwo_name").innerHTML = "";
          document.getElementById("olTwo_title").innerHTML = "";
          $("#olTwo_uploaded").attr("src","");
          $("#olTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#olFiles2").val(photoTwo);
            $("#olFiles2_id").val(photoTwoId);
            Session.set("olFiles2_id", photoTwoId);
            document.getElementById("olTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#olTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="olTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#olTwo_progress").remove();
                            }
                            console.log(result);
                            $("#olTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("olTwo_title").innerHTML = "Picture two";
                  document.getElementById("olTwo_name").innerHTML = "new"; // set name in label
                  $("#olTwo_uploaded").attr("src",url);
                  $("#olTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="olTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #olThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("olFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#olFiles3").val('');
    $("#olFiles3_id").val('');
    document.getElementById("olThree_name").innerHTML = "";
    document.getElementById("olThree_title").innerHTML = "";
    $("#olThree_uploaded").attr("src","");
    $("#olThree_delete").remove();
  },

  'change #olFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("olFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#olFiles3").val('');
          $("#olFiles3_id").val('');
          document.getElementById("olThree_name").innerHTML = "";
          document.getElementById("olThree_title").innerHTML = "";
          $("#olThree_uploaded").attr("src","");
          $("#olThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#olFiles3").val(photoThree);
            $("#olFiles3_id").val(photoThreeId);
            Session.set("olFiles3_id", photoThreeId);
            document.getElementById("olThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#olThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="olThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#olThree_progress").remove();
                            }
                            console.log(result);
                            $("#olThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("olThree_title").innerHTML = "Picture three";
                  document.getElementById("olThree_name").innerHTML = "new"; // set name in label
                  $("#olThree_uploaded").attr("src",url);
                  $("#olThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="olThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #olFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("olFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#olFiles4").val('');
    $("#olFiles4_id").val('');
    document.getElementById("olFour_name").innerHTML = "";
    document.getElementById("olFour_title").innerHTML = "";
    $("#olFour_uploaded").attr("src","");
    $("#olFour_delete").remove();
  },

  'change #olFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("olFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#olFiles4").val('');
          $("#olFiles4_id").val('');
          document.getElementById("olFour_name").innerHTML = "";
          document.getElementById("olFour_title").innerHTML = "";
          $("#olFour_uploaded").attr("src","");
          $("#olFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#olFiles4").val(photoFour);
            $("#olFiles4_id").val(photoFourId);
            Session.set("olFiles4_id", photoFourId);
            document.getElementById("olFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#olFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="olFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#olFour_progress").remove();
                            }
                            console.log(result);
                            $("#olFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("olFour_title").innerHTML = "Picture four";
                  document.getElementById("olFour_name").innerHTML = "new"; // set name in label
                  $("#olFour_uploaded").attr("src",url);
                  $("#olFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="olFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #olFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("olFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#olFiles5").val('');
    $("#olFiles5_id").val('');
    document.getElementById("olFiles_name").innerHTML = "";
    document.getElementById("upload_olFiles5").innerHTML = "(.zip)";
    $("#olFile_delete").remove();
  },
  'change #olFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("olFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#olFiles5").val('');
          $("#olFiles5_id").val('');
          document.getElementById("olFiles_name").innerHTML = "";
          document.getElementById("upload_olFiles5").innerHTML = "(.zip)";
          $("#olFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#olFiles5").val(files);
            $("#olFiles5_id").val(filesId);
            Session.set("olFiles5_id", filesId);

            // track progress of upload
            $("#olFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="olFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#olFive_progress").remove();
                            }
                            console.log(result);
                            $("#olFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("olFiles_name").innerHTML = "new"; 
                  $("#olFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="olFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})