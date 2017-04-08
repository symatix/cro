Template.files_methods_semSemEdx.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #semSemEdxOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("semSemEdxFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#semSemEdxFiles1").val('');
    $("#semSemEdxFiles1_id").val('');
    document.getElementById("semSemEdxOne_name").innerHTML = "";
    document.getElementById("semSemEdxOne_title").innerHTML = "";
    $("#semSemEdxOne_uploaded").attr("src","");
    $("#semSemEdxOne_delete").remove();
  },
  'change #semSemEdxFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("semSemEdxFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#semSemEdxFiles1").val('');
          $("#semSemEdxFiles1_id").val('');
          document.getElementById("semSemEdxOne_name").innerHTML = "";
          document.getElementById("semSemEdxOne_title").innerHTML = "";
          $("#semSemEdxOne_uploaded").attr("src","");
          $("#semSemEdxOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#semSemEdxFiles1").val(photoOne);
            $("#semSemEdxFiles1_id").val(photoOneId);
            Session.set("semSemEdxFiles1_id", photoOneId);
            document.getElementById("semSemEdxOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#semSemEdxOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="semSemEdxOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#semSemEdxOne_progress").remove();
                            }
                            console.log(result);
                            $("#semSemEdxOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("semSemEdxOne_title").innerHTML = "Picture one";
                  document.getElementById("semSemEdxOne_name").innerHTML = "new";
                  $("#semSemEdxOne_uploaded").attr("src",url);
                  $("#semSemEdxOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="semSemEdxOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #semSemEdxTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("semSemEdxFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#semSemEdxFiles2").val('');
    $("#semSemEdxFiles2_id").val('');
    document.getElementById("semSemEdxTwo_name").innerHTML = "";
    document.getElementById("semSemEdxTwo_title").innerHTML = "";
    $("#semSemEdxTwo_uploaded").attr("src","");
    $("#semSemEdxTwo_delete").remove();
  },

  'change #semSemEdxFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("semSemEdxFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#semSemEdxFiles2").val('');
          $("#semSemEdxFiles2_id").val('');
          document.getElementById("semSemEdxTwo_name").innerHTML = "";
          document.getElementById("semSemEdxTwo_title").innerHTML = "";
          $("#semSemEdxTwo_uploaded").attr("src","");
          $("#semSemEdxTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#semSemEdxFiles2").val(photoTwo);
            $("#semSemEdxFiles2_id").val(photoTwoId);
            Session.set("semSemEdxFiles2_id", photoTwoId);
            document.getElementById("semSemEdxTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#semSemEdxTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="semSemEdxTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#semSemEdxTwo_progress").remove();
                            }
                            console.log(result);
                            $("#semSemEdxTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("semSemEdxTwo_title").innerHTML = "Picture two";
                  document.getElementById("semSemEdxTwo_name").innerHTML = "new"; // set name in label
                  $("#semSemEdxTwo_uploaded").attr("src",url);
                  $("#semSemEdxTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="semSemEdxTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #semSemEdxThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("semSemEdxFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#semSemEdxFiles3").val('');
    $("#semSemEdxFiles3_id").val('');
    document.getElementById("semSemEdxThree_name").innerHTML = "";
    document.getElementById("semSemEdxThree_title").innerHTML = "";
    $("#semSemEdxThree_uploaded").attr("src","");
    $("#semSemEdxThree_delete").remove();
  },

  'change #semSemEdxFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("semSemEdxFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#semSemEdxFiles3").val('');
          $("#semSemEdxFiles3_id").val('');
          document.getElementById("semSemEdxThree_name").innerHTML = "";
          document.getElementById("semSemEdxThree_title").innerHTML = "";
          $("#semSemEdxThree_uploaded").attr("src","");
          $("#semSemEdxThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#semSemEdxFiles3").val(photoThree);
            $("#semSemEdxFiles3_id").val(photoThreeId);
            Session.set("semSemEdxFiles3_id", photoThreeId);
            document.getElementById("semSemEdxThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#semSemEdxThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="semSemEdxThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#semSemEdxThree_progress").remove();
                            }
                            console.log(result);
                            $("#semSemEdxThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("semSemEdxThree_title").innerHTML = "Picture three";
                  document.getElementById("semSemEdxThree_name").innerHTML = "new"; // set name in label
                  $("#semSemEdxThree_uploaded").attr("src",url);
                  $("#semSemEdxThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="semSemEdxThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #semSemEdxFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("semSemEdxFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#semSemEdxFiles4").val('');
    $("#semSemEdxFiles4_id").val('');
    document.getElementById("semSemEdxFour_name").innerHTML = "";
    document.getElementById("semSemEdxFour_title").innerHTML = "";
    $("#semSemEdxFour_uploaded").attr("src","");
    $("#semSemEdxFour_delete").remove();
  },

  'change #semSemEdxFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("semSemEdxFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#semSemEdxFiles4").val('');
          $("#semSemEdxFiles4_id").val('');
          document.getElementById("semSemEdxFour_name").innerHTML = "";
          document.getElementById("semSemEdxFour_title").innerHTML = "";
          $("#semSemEdxFour_uploaded").attr("src","");
          $("#semSemEdxFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#semSemEdxFiles4").val(photoFour);
            $("#semSemEdxFiles4_id").val(photoFourId);
            Session.set("semSemEdxFiles4_id", photoFourId);
            document.getElementById("semSemEdxFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#semSemEdxFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="semSemEdxFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#semSemEdxFour_progress").remove();
                            }
                            console.log(result);
                            $("#semSemEdxFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("semSemEdxFour_title").innerHTML = "Picture four";
                  document.getElementById("semSemEdxFour_name").innerHTML = "new"; // set name in label
                  $("#semSemEdxFour_uploaded").attr("src",url);
                  $("#semSemEdxFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="semSemEdxFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #semSemEdxFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("semSemEdxFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#semSemEdxFiles5").val('');
    $("#semSemEdxFiles5_id").val('');
    document.getElementById("semSemEdxFiles_name").innerHTML = "";
    document.getElementById("upload_semSemEdxFiles5").innerHTML = "(.zip)";
    $("#semSemEdxFile_delete").remove();
  },
  'change #semSemEdxFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("semSemEdxFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#semSemEdxFiles5").val('');
          $("#semSemEdxFiles5_id").val('');
          document.getElementById("semSemEdxFiles_name").innerHTML = "";
          document.getElementById("upload_semSemEdxFiles5").innerHTML = "(.zip)";
          $("#semSemEdxFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#semSemEdxFiles5").val(files);
            $("#semSemEdxFiles5_id").val(filesId);
            Session.set("semSemEdxFiles5_id", filesId);

            // track progress of upload
            $("#semSemEdxFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="semSemEdxFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#semSemEdxFive_progress").remove();
                            }
                            console.log(result);
                            $("#semSemEdxFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("semSemEdxFiles_name").innerHTML = "new"; 
                  $("#semSemEdxFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="semSemEdxFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})