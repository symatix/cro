Template.files_methods_tl.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlFiles1").val('');
    $("#tlFiles1_id").val('');
    document.getElementById("tlOne_name").innerHTML = "";
    document.getElementById("tlOne_title").innerHTML = "";
    $("#tlOne_uploaded").attr("src","");
    $("#tlOne_delete").remove();
  },
  'change #tlFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("tlFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlFiles1").val('');
          $("#tlFiles1_id").val('');
          document.getElementById("tlOne_name").innerHTML = "";
          document.getElementById("tlOne_title").innerHTML = "";
          $("#tlOne_uploaded").attr("src","");
          $("#tlOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#tlFiles1").val(photoOne);
            $("#tlFiles1_id").val(photoOneId);
            Session.set("tlFiles1_id", photoOneId);
            document.getElementById("tlOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlOne_progress").remove();
                            }
                            console.log(result);
                            $("#tlOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlOne_title").innerHTML = "Picture one";
                  document.getElementById("tlOne_name").innerHTML = "new";
                  $("#tlOne_uploaded").attr("src",url);
                  $("#tlOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlFiles2").val('');
    $("#tlFiles2_id").val('');
    document.getElementById("tlTwo_name").innerHTML = "";
    document.getElementById("tlTwo_title").innerHTML = "";
    $("#tlTwo_uploaded").attr("src","");
    $("#tlTwo_delete").remove();
  },

  'change #tlFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("tlFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlFiles2").val('');
          $("#tlFiles2_id").val('');
          document.getElementById("tlTwo_name").innerHTML = "";
          document.getElementById("tlTwo_title").innerHTML = "";
          $("#tlTwo_uploaded").attr("src","");
          $("#tlTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#tlFiles2").val(photoTwo);
            $("#tlFiles2_id").val(photoTwoId);
            Session.set("tlFiles2_id", photoTwoId);
            document.getElementById("tlTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlTwo_progress").remove();
                            }
                            console.log(result);
                            $("#tlTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlTwo_title").innerHTML = "Picture two";
                  document.getElementById("tlTwo_name").innerHTML = "new"; // set name in label
                  $("#tlTwo_uploaded").attr("src",url);
                  $("#tlTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlFiles3").val('');
    $("#tlFiles3_id").val('');
    document.getElementById("tlThree_name").innerHTML = "";
    document.getElementById("tlThree_title").innerHTML = "";
    $("#tlThree_uploaded").attr("src","");
    $("#tlThree_delete").remove();
  },

  'change #tlFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("tlFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlFiles3").val('');
          $("#tlFiles3_id").val('');
          document.getElementById("tlThree_name").innerHTML = "";
          document.getElementById("tlThree_title").innerHTML = "";
          $("#tlThree_uploaded").attr("src","");
          $("#tlThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#tlFiles3").val(photoThree);
            $("#tlFiles3_id").val(photoThreeId);
            Session.set("tlFiles3_id", photoThreeId);
            document.getElementById("tlThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlThree_progress").remove();
                            }
                            console.log(result);
                            $("#tlThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlThree_title").innerHTML = "Picture three";
                  document.getElementById("tlThree_name").innerHTML = "new"; // set name in label
                  $("#tlThree_uploaded").attr("src",url);
                  $("#tlThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlFiles4").val('');
    $("#tlFiles4_id").val('');
    document.getElementById("tlFour_name").innerHTML = "";
    document.getElementById("tlFour_title").innerHTML = "";
    $("#tlFour_uploaded").attr("src","");
    $("#tlFour_delete").remove();
  },

  'change #tlFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("tlFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlFiles4").val('');
          $("#tlFiles4_id").val('');
          document.getElementById("tlFour_name").innerHTML = "";
          document.getElementById("tlFour_title").innerHTML = "";
          $("#tlFour_uploaded").attr("src","");
          $("#tlFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#tlFiles4").val(photoFour);
            $("#tlFiles4_id").val(photoFourId);
            Session.set("tlFiles4_id", photoFourId);
            document.getElementById("tlFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlFour_progress").remove();
                            }
                            console.log(result);
                            $("#tlFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlFour_title").innerHTML = "Picture four";
                  document.getElementById("tlFour_name").innerHTML = "new"; // set name in label
                  $("#tlFour_uploaded").attr("src",url);
                  $("#tlFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlFiles5").val('');
    $("#tlFiles5_id").val('');
    document.getElementById("tlFiles_name").innerHTML = "";
    document.getElementById("upload_tlFiles5").innerHTML = "(.zip)";
    $("#tlFile_delete").remove();
  },
  'change #tlFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("tlFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlFiles5").val('');
          $("#tlFiles5_id").val('');
          document.getElementById("tlFiles_name").innerHTML = "";
          document.getElementById("upload_tlFiles5").innerHTML = "(.zip)";
          $("#tlFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#tlFiles5").val(files);
            $("#tlFiles5_id").val(filesId);
            Session.set("tlFiles5_id", filesId);

            // track progress of upload
            $("#tlFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlFive_progress").remove();
                            }
                            console.log(result);
                            $("#tlFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("tlFiles_name").innerHTML = "new"; 
                  $("#tlFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})