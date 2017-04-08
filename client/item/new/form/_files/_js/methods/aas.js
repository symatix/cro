Template.files_methods_aas.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aasOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aasFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aasFiles1").val('');
    $("#aasFiles1_id").val('');
    document.getElementById("aasOne_name").innerHTML = "";
    document.getElementById("aasOne_title").innerHTML = "";
    $("#aasOne_uploaded").attr("src","");
    $("#aasOne_delete").remove();
  },
  'change #aasFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("aasFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aasFiles1").val('');
          $("#aasFiles1_id").val('');
          document.getElementById("aasOne_name").innerHTML = "";
          document.getElementById("aasOne_title").innerHTML = "";
          $("#aasOne_uploaded").attr("src","");
          $("#aasOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#aasFiles1").val(photoOne);
            $("#aasFiles1_id").val(photoOneId);
            Session.set("aasFiles1_id", photoOneId);
            document.getElementById("aasOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aasOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aasOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aasOne_progress").remove();
                            }
                            console.log(result);
                            $("#aasOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aasOne_title").innerHTML = "Picture one";
                  document.getElementById("aasOne_name").innerHTML = "new";
                  $("#aasOne_uploaded").attr("src",url);
                  $("#aasOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aasOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aasTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aasFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aasFiles2").val('');
    $("#aasFiles2_id").val('');
    document.getElementById("aasTwo_name").innerHTML = "";
    document.getElementById("aasTwo_title").innerHTML = "";
    $("#aasTwo_uploaded").attr("src","");
    $("#aasTwo_delete").remove();
  },

  'change #aasFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("aasFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aasFiles2").val('');
          $("#aasFiles2_id").val('');
          document.getElementById("aasTwo_name").innerHTML = "";
          document.getElementById("aasTwo_title").innerHTML = "";
          $("#aasTwo_uploaded").attr("src","");
          $("#aasTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#aasFiles2").val(photoTwo);
            $("#aasFiles2_id").val(photoTwoId);
            Session.set("aasFiles2_id", photoTwoId);
            document.getElementById("aasTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aasTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aasTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aasTwo_progress").remove();
                            }
                            console.log(result);
                            $("#aasTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aasTwo_title").innerHTML = "Picture two";
                  document.getElementById("aasTwo_name").innerHTML = "new"; // set name in label
                  $("#aasTwo_uploaded").attr("src",url);
                  $("#aasTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aasTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aasThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aasFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aasFiles3").val('');
    $("#aasFiles3_id").val('');
    document.getElementById("aasThree_name").innerHTML = "";
    document.getElementById("aasThree_title").innerHTML = "";
    $("#aasThree_uploaded").attr("src","");
    $("#aasThree_delete").remove();
  },

  'change #aasFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("aasFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aasFiles3").val('');
          $("#aasFiles3_id").val('');
          document.getElementById("aasThree_name").innerHTML = "";
          document.getElementById("aasThree_title").innerHTML = "";
          $("#aasThree_uploaded").attr("src","");
          $("#aasThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#aasFiles3").val(photoThree);
            $("#aasFiles3_id").val(photoThreeId);
            Session.set("aasFiles3_id", photoThreeId);
            document.getElementById("aasThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aasThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aasThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aasThree_progress").remove();
                            }
                            console.log(result);
                            $("#aasThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aasThree_title").innerHTML = "Picture three";
                  document.getElementById("aasThree_name").innerHTML = "new"; // set name in label
                  $("#aasThree_uploaded").attr("src",url);
                  $("#aasThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aasThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aasFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aasFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aasFiles4").val('');
    $("#aasFiles4_id").val('');
    document.getElementById("aasFour_name").innerHTML = "";
    document.getElementById("aasFour_title").innerHTML = "";
    $("#aasFour_uploaded").attr("src","");
    $("#aasFour_delete").remove();
  },

  'change #aasFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("aasFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aasFiles4").val('');
          $("#aasFiles4_id").val('');
          document.getElementById("aasFour_name").innerHTML = "";
          document.getElementById("aasFour_title").innerHTML = "";
          $("#aasFour_uploaded").attr("src","");
          $("#aasFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#aasFiles4").val(photoFour);
            $("#aasFiles4_id").val(photoFourId);
            Session.set("aasFiles4_id", photoFourId);
            document.getElementById("aasFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#aasFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aasFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aasFour_progress").remove();
                            }
                            console.log(result);
                            $("#aasFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("aasFour_title").innerHTML = "Picture four";
                  document.getElementById("aasFour_name").innerHTML = "new"; // set name in label
                  $("#aasFour_uploaded").attr("src",url);
                  $("#aasFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aasFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #aasFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("aasFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#aasFiles5").val('');
    $("#aasFiles5_id").val('');
    document.getElementById("aasFiles_name").innerHTML = "";
    document.getElementById("upload_aasFiles5").innerHTML = "(.zip)";
    $("#aasFile_delete").remove();
  },
  'change #aasFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("aasFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#aasFiles5").val('');
          $("#aasFiles5_id").val('');
          document.getElementById("aasFiles_name").innerHTML = "";
          document.getElementById("upload_aasFiles5").innerHTML = "(.zip)";
          $("#aasFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#aasFiles5").val(files);
            $("#aasFiles5_id").val(filesId);
            Session.set("aasFiles5_id", filesId);

            // track progress of upload
            $("#aasFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="aasFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#aasFive_progress").remove();
                            }
                            console.log(result);
                            $("#aasFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("aasFiles_name").innerHTML = "new"; 
                  $("#aasFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="aasFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})