Template.files_methods_synchrotron.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #synchrotronOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("synchrotronFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#synchrotronFiles1").val('');
    $("#synchrotronFiles1_id").val('');
    document.getElementById("synchrotronOne_name").innerHTML = "";
    document.getElementById("synchrotronOne_title").innerHTML = "";
    $("#synchrotronOne_uploaded").attr("src","");
    $("#synchrotronOne_delete").remove();
  },
  'change #synchrotronFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("synchrotronFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#synchrotronFiles1").val('');
          $("#synchrotronFiles1_id").val('');
          document.getElementById("synchrotronOne_name").innerHTML = "";
          document.getElementById("synchrotronOne_title").innerHTML = "";
          $("#synchrotronOne_uploaded").attr("src","");
          $("#synchrotronOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#synchrotronFiles1").val(photoOne);
            $("#synchrotronFiles1_id").val(photoOneId);
            Session.set("synchrotronFiles1_id", photoOneId);
            document.getElementById("synchrotronOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#synchrotronOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="synchrotronOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#synchrotronOne_progress").remove();
                            }
                            console.log(result);
                            $("#synchrotronOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("synchrotronOne_title").innerHTML = "Picture one";
                  document.getElementById("synchrotronOne_name").innerHTML = "new";
                  $("#synchrotronOne_uploaded").attr("src",url);
                  $("#synchrotronOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="synchrotronOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #synchrotronTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("synchrotronFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#synchrotronFiles2").val('');
    $("#synchrotronFiles2_id").val('');
    document.getElementById("synchrotronTwo_name").innerHTML = "";
    document.getElementById("synchrotronTwo_title").innerHTML = "";
    $("#synchrotronTwo_uploaded").attr("src","");
    $("#synchrotronTwo_delete").remove();
  },

  'change #synchrotronFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("synchrotronFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#synchrotronFiles2").val('');
          $("#synchrotronFiles2_id").val('');
          document.getElementById("synchrotronTwo_name").innerHTML = "";
          document.getElementById("synchrotronTwo_title").innerHTML = "";
          $("#synchrotronTwo_uploaded").attr("src","");
          $("#synchrotronTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#synchrotronFiles2").val(photoTwo);
            $("#synchrotronFiles2_id").val(photoTwoId);
            Session.set("synchrotronFiles2_id", photoTwoId);
            document.getElementById("synchrotronTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#synchrotronTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="synchrotronTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#synchrotronTwo_progress").remove();
                            }
                            console.log(result);
                            $("#synchrotronTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("synchrotronTwo_title").innerHTML = "Picture two";
                  document.getElementById("synchrotronTwo_name").innerHTML = "new"; // set name in label
                  $("#synchrotronTwo_uploaded").attr("src",url);
                  $("#synchrotronTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="synchrotronTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #synchrotronThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("synchrotronFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#synchrotronFiles3").val('');
    $("#synchrotronFiles3_id").val('');
    document.getElementById("synchrotronThree_name").innerHTML = "";
    document.getElementById("synchrotronThree_title").innerHTML = "";
    $("#synchrotronThree_uploaded").attr("src","");
    $("#synchrotronThree_delete").remove();
  },

  'change #synchrotronFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("synchrotronFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#synchrotronFiles3").val('');
          $("#synchrotronFiles3_id").val('');
          document.getElementById("synchrotronThree_name").innerHTML = "";
          document.getElementById("synchrotronThree_title").innerHTML = "";
          $("#synchrotronThree_uploaded").attr("src","");
          $("#synchrotronThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#synchrotronFiles3").val(photoThree);
            $("#synchrotronFiles3_id").val(photoThreeId);
            Session.set("synchrotronFiles3_id", photoThreeId);
            document.getElementById("synchrotronThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#synchrotronThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="synchrotronThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#synchrotronThree_progress").remove();
                            }
                            console.log(result);
                            $("#synchrotronThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("synchrotronThree_title").innerHTML = "Picture three";
                  document.getElementById("synchrotronThree_name").innerHTML = "new"; // set name in label
                  $("#synchrotronThree_uploaded").attr("src",url);
                  $("#synchrotronThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="synchrotronThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #synchrotronFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("synchrotronFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#synchrotronFiles4").val('');
    $("#synchrotronFiles4_id").val('');
    document.getElementById("synchrotronFour_name").innerHTML = "";
    document.getElementById("synchrotronFour_title").innerHTML = "";
    $("#synchrotronFour_uploaded").attr("src","");
    $("#synchrotronFour_delete").remove();
  },

  'change #synchrotronFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("synchrotronFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#synchrotronFiles4").val('');
          $("#synchrotronFiles4_id").val('');
          document.getElementById("synchrotronFour_name").innerHTML = "";
          document.getElementById("synchrotronFour_title").innerHTML = "";
          $("#synchrotronFour_uploaded").attr("src","");
          $("#synchrotronFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#synchrotronFiles4").val(photoFour);
            $("#synchrotronFiles4_id").val(photoFourId);
            Session.set("synchrotronFiles4_id", photoFourId);
            document.getElementById("synchrotronFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#synchrotronFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="synchrotronFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#synchrotronFour_progress").remove();
                            }
                            console.log(result);
                            $("#synchrotronFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("synchrotronFour_title").innerHTML = "Picture four";
                  document.getElementById("synchrotronFour_name").innerHTML = "new"; // set name in label
                  $("#synchrotronFour_uploaded").attr("src",url);
                  $("#synchrotronFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="synchrotronFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #synchrotronFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("synchrotronFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#synchrotronFiles5").val('');
    $("#synchrotronFiles5_id").val('');
    document.getElementById("synchrotronFiles_name").innerHTML = "";
    document.getElementById("upload_synchrotronFiles5").innerHTML = "(.zip)";
    $("#synchrotronFile_delete").remove();
  },
  'change #synchrotronFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("synchrotronFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#synchrotronFiles5").val('');
          $("#synchrotronFiles5_id").val('');
          document.getElementById("synchrotronFiles_name").innerHTML = "";
          document.getElementById("upload_synchrotronFiles5").innerHTML = "(.zip)";
          $("#synchrotronFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#synchrotronFiles5").val(files);
            $("#synchrotronFiles5_id").val(filesId);
            Session.set("synchrotronFiles5_id", filesId);

            // track progress of upload
            $("#synchrotronFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="synchrotronFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#synchrotronFive_progress").remove();
                            }
                            console.log(result);
                            $("#synchrotronFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("synchrotronFiles_name").innerHTML = "new"; 
                  $("#synchrotronFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="synchrotronFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})