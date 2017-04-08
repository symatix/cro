Template.files_methods_gl.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #glOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("glFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#glFiles1").val('');
    $("#glFiles1_id").val('');
    document.getElementById("glOne_name").innerHTML = "";
    document.getElementById("glOne_title").innerHTML = "";
    $("#glOne_uploaded").attr("src","");
    $("#glOne_delete").remove();
  },
  'change #glFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("glFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#glFiles1").val('');
          $("#glFiles1_id").val('');
          document.getElementById("glOne_name").innerHTML = "";
          document.getElementById("glOne_title").innerHTML = "";
          $("#glOne_uploaded").attr("src","");
          $("#glOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#glFiles1").val(photoOne);
            $("#glFiles1_id").val(photoOneId);
            Session.set("glFiles1_id", photoOneId);
            document.getElementById("glOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#glOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="glOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#glOne_progress").remove();
                            }
                            console.log(result);
                            $("#glOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("glOne_title").innerHTML = "Picture one";
                  document.getElementById("glOne_name").innerHTML = "new";
                  $("#glOne_uploaded").attr("src",url);
                  $("#glOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="glOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #glTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("glFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#glFiles2").val('');
    $("#glFiles2_id").val('');
    document.getElementById("glTwo_name").innerHTML = "";
    document.getElementById("glTwo_title").innerHTML = "";
    $("#glTwo_uploaded").attr("src","");
    $("#glTwo_delete").remove();
  },

  'change #glFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("glFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#glFiles2").val('');
          $("#glFiles2_id").val('');
          document.getElementById("glTwo_name").innerHTML = "";
          document.getElementById("glTwo_title").innerHTML = "";
          $("#glTwo_uploaded").attr("src","");
          $("#glTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#glFiles2").val(photoTwo);
            $("#glFiles2_id").val(photoTwoId);
            Session.set("glFiles2_id", photoTwoId);
            document.getElementById("glTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#glTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="glTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#glTwo_progress").remove();
                            }
                            console.log(result);
                            $("#glTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("glTwo_title").innerHTML = "Picture two";
                  document.getElementById("glTwo_name").innerHTML = "new"; // set name in label
                  $("#glTwo_uploaded").attr("src",url);
                  $("#glTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="glTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #glThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("glFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#glFiles3").val('');
    $("#glFiles3_id").val('');
    document.getElementById("glThree_name").innerHTML = "";
    document.getElementById("glThree_title").innerHTML = "";
    $("#glThree_uploaded").attr("src","");
    $("#glThree_delete").remove();
  },

  'change #glFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("glFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#glFiles3").val('');
          $("#glFiles3_id").val('');
          document.getElementById("glThree_name").innerHTML = "";
          document.getElementById("glThree_title").innerHTML = "";
          $("#glThree_uploaded").attr("src","");
          $("#glThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#glFiles3").val(photoThree);
            $("#glFiles3_id").val(photoThreeId);
            Session.set("glFiles3_id", photoThreeId);
            document.getElementById("glThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#glThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="glThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#glThree_progress").remove();
                            }
                            console.log(result);
                            $("#glThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("glThree_title").innerHTML = "Picture three";
                  document.getElementById("glThree_name").innerHTML = "new"; // set name in label
                  $("#glThree_uploaded").attr("src",url);
                  $("#glThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="glThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #glFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("glFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#glFiles4").val('');
    $("#glFiles4_id").val('');
    document.getElementById("glFour_name").innerHTML = "";
    document.getElementById("glFour_title").innerHTML = "";
    $("#glFour_uploaded").attr("src","");
    $("#glFour_delete").remove();
  },

  'change #glFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("glFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#glFiles4").val('');
          $("#glFiles4_id").val('');
          document.getElementById("glFour_name").innerHTML = "";
          document.getElementById("glFour_title").innerHTML = "";
          $("#glFour_uploaded").attr("src","");
          $("#glFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#glFiles4").val(photoFour);
            $("#glFiles4_id").val(photoFourId);
            Session.set("glFiles4_id", photoFourId);
            document.getElementById("glFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#glFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="glFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#glFour_progress").remove();
                            }
                            console.log(result);
                            $("#glFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("glFour_title").innerHTML = "Picture four";
                  document.getElementById("glFour_name").innerHTML = "new"; // set name in label
                  $("#glFour_uploaded").attr("src",url);
                  $("#glFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="glFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #glFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("glFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#glFiles5").val('');
    $("#glFiles5_id").val('');
    document.getElementById("glFiles_name").innerHTML = "";
    document.getElementById("upload_glFiles5").innerHTML = "(.zip)";
    $("#glFile_delete").remove();
  },
  'change #glFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("glFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#glFiles5").val('');
          $("#glFiles5_id").val('');
          document.getElementById("glFiles_name").innerHTML = "";
          document.getElementById("upload_glFiles5").innerHTML = "(.zip)";
          $("#glFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#glFiles5").val(files);
            $("#glFiles5_id").val(filesId);
            Session.set("glFiles5_id", filesId);

            // track progress of upload
            $("#glFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="glFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#glFive_progress").remove();
                            }
                            console.log(result);
                            $("#glFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("glFiles_name").innerHTML = "new"; 
                  $("#glFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="glFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})