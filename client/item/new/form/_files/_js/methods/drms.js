Template.files_methods_drms.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #drmsOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("drmsFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#drmsFiles1").val('');
    $("#drmsFiles1_id").val('');
    document.getElementById("drmsOne_name").innerHTML = "";
    document.getElementById("drmsOne_title").innerHTML = "";
    $("#drmsOne_uploaded").attr("src","");
    $("#drmsOne_delete").remove();
  },
  'change #drmsFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("drmsFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#drmsFiles1").val('');
          $("#drmsFiles1_id").val('');
          document.getElementById("drmsOne_name").innerHTML = "";
          document.getElementById("drmsOne_title").innerHTML = "";
          $("#drmsOne_uploaded").attr("src","");
          $("#drmsOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#drmsFiles1").val(photoOne);
            $("#drmsFiles1_id").val(photoOneId);
            Session.set("drmsFiles1_id", photoOneId);
            document.getElementById("drmsOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#drmsOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="drmsOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#drmsOne_progress").remove();
                            }
                            console.log(result);
                            $("#drmsOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("drmsOne_title").innerHTML = "Picture one";
                  document.getElementById("drmsOne_name").innerHTML = "new";
                  $("#drmsOne_uploaded").attr("src",url);
                  $("#drmsOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="drmsOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #drmsTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("drmsFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#drmsFiles2").val('');
    $("#drmsFiles2_id").val('');
    document.getElementById("drmsTwo_name").innerHTML = "";
    document.getElementById("drmsTwo_title").innerHTML = "";
    $("#drmsTwo_uploaded").attr("src","");
    $("#drmsTwo_delete").remove();
  },

  'change #drmsFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("drmsFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#drmsFiles2").val('');
          $("#drmsFiles2_id").val('');
          document.getElementById("drmsTwo_name").innerHTML = "";
          document.getElementById("drmsTwo_title").innerHTML = "";
          $("#drmsTwo_uploaded").attr("src","");
          $("#drmsTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#drmsFiles2").val(photoTwo);
            $("#drmsFiles2_id").val(photoTwoId);
            Session.set("drmsFiles2_id", photoTwoId);
            document.getElementById("drmsTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#drmsTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="drmsTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#drmsTwo_progress").remove();
                            }
                            console.log(result);
                            $("#drmsTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("drmsTwo_title").innerHTML = "Picture two";
                  document.getElementById("drmsTwo_name").innerHTML = "new"; // set name in label
                  $("#drmsTwo_uploaded").attr("src",url);
                  $("#drmsTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="drmsTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #drmsThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("drmsFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#drmsFiles3").val('');
    $("#drmsFiles3_id").val('');
    document.getElementById("drmsThree_name").innerHTML = "";
    document.getElementById("drmsThree_title").innerHTML = "";
    $("#drmsThree_uploaded").attr("src","");
    $("#drmsThree_delete").remove();
  },

  'change #drmsFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("drmsFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#drmsFiles3").val('');
          $("#drmsFiles3_id").val('');
          document.getElementById("drmsThree_name").innerHTML = "";
          document.getElementById("drmsThree_title").innerHTML = "";
          $("#drmsThree_uploaded").attr("src","");
          $("#drmsThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#drmsFiles3").val(photoThree);
            $("#drmsFiles3_id").val(photoThreeId);
            Session.set("drmsFiles3_id", photoThreeId);
            document.getElementById("drmsThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#drmsThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="drmsThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#drmsThree_progress").remove();
                            }
                            console.log(result);
                            $("#drmsThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("drmsThree_title").innerHTML = "Picture three";
                  document.getElementById("drmsThree_name").innerHTML = "new"; // set name in label
                  $("#drmsThree_uploaded").attr("src",url);
                  $("#drmsThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="drmsThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #drmsFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("drmsFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#drmsFiles4").val('');
    $("#drmsFiles4_id").val('');
    document.getElementById("drmsFour_name").innerHTML = "";
    document.getElementById("drmsFour_title").innerHTML = "";
    $("#drmsFour_uploaded").attr("src","");
    $("#drmsFour_delete").remove();
  },

  'change #drmsFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("drmsFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#drmsFiles4").val('');
          $("#drmsFiles4_id").val('');
          document.getElementById("drmsFour_name").innerHTML = "";
          document.getElementById("drmsFour_title").innerHTML = "";
          $("#drmsFour_uploaded").attr("src","");
          $("#drmsFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#drmsFiles4").val(photoFour);
            $("#drmsFiles4_id").val(photoFourId);
            Session.set("drmsFiles4_id", photoFourId);
            document.getElementById("drmsFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#drmsFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="drmsFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#drmsFour_progress").remove();
                            }
                            console.log(result);
                            $("#drmsFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("drmsFour_title").innerHTML = "Picture four";
                  document.getElementById("drmsFour_name").innerHTML = "new"; // set name in label
                  $("#drmsFour_uploaded").attr("src",url);
                  $("#drmsFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="drmsFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #drmsFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("drmsFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#drmsFiles5").val('');
    $("#drmsFiles5_id").val('');
    document.getElementById("drmsFiles_name").innerHTML = "";
    document.getElementById("upload_drmsFiles5").innerHTML = "(.zip)";
    $("#drmsFile_delete").remove();
  },
  'change #drmsFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("drmsFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#drmsFiles5").val('');
          $("#drmsFiles5_id").val('');
          document.getElementById("drmsFiles_name").innerHTML = "";
          document.getElementById("upload_drmsFiles5").innerHTML = "(.zip)";
          $("#drmsFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#drmsFiles5").val(files);
            $("#drmsFiles5_id").val(filesId);
            Session.set("drmsFiles5_id", filesId);

            // track progress of upload
            $("#drmsFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="drmsFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#drmsFive_progress").remove();
                            }
                            console.log(result);
                            $("#drmsFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("drmsFiles_name").innerHTML = "new"; 
                  $("#drmsFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="drmsFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})