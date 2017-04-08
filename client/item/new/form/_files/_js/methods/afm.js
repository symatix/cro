Template.files_methods_afm.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #afmOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("afmFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#afmFiles1").val('');
    $("#afmFiles1_id").val('');
    document.getElementById("afmOne_name").innerHTML = "";
    document.getElementById("afmOne_title").innerHTML = "";
    $("#afmOne_uploaded").attr("src","");
    $("#afmOne_delete").remove();
  },
  'change #afmFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("afmFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#afmFiles1").val('');
          $("#afmFiles1_id").val('');
          document.getElementById("afmOne_name").innerHTML = "";
          document.getElementById("afmOne_title").innerHTML = "";
          $("#afmOne_uploaded").attr("src","");
          $("#afmOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#afmFiles1").val(photoOne);
            $("#afmFiles1_id").val(photoOneId);
            Session.set("afmFiles1_id", photoOneId);
            document.getElementById("afmOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#afmOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="afmOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#afmOne_progress").remove();
                            }
                            console.log(result);
                            $("#afmOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("afmOne_title").innerHTML = "Picture one";
                  document.getElementById("afmOne_name").innerHTML = "new";
                  $("#afmOne_uploaded").attr("src",url);
                  $("#afmOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="afmOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #afmTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("afmFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#afmFiles2").val('');
    $("#afmFiles2_id").val('');
    document.getElementById("afmTwo_name").innerHTML = "";
    document.getElementById("afmTwo_title").innerHTML = "";
    $("#afmTwo_uploaded").attr("src","");
    $("#afmTwo_delete").remove();
  },

  'change #afmFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("afmFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#afmFiles2").val('');
          $("#afmFiles2_id").val('');
          document.getElementById("afmTwo_name").innerHTML = "";
          document.getElementById("afmTwo_title").innerHTML = "";
          $("#afmTwo_uploaded").attr("src","");
          $("#afmTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#afmFiles2").val(photoTwo);
            $("#afmFiles2_id").val(photoTwoId);
            Session.set("afmFiles2_id", photoTwoId);
            document.getElementById("afmTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#afmTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="afmTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#afmTwo_progress").remove();
                            }
                            console.log(result);
                            $("#afmTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("afmTwo_title").innerHTML = "Picture two";
                  document.getElementById("afmTwo_name").innerHTML = "new"; // set name in label
                  $("#afmTwo_uploaded").attr("src",url);
                  $("#afmTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="afmTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #afmThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("afmFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#afmFiles3").val('');
    $("#afmFiles3_id").val('');
    document.getElementById("afmThree_name").innerHTML = "";
    document.getElementById("afmThree_title").innerHTML = "";
    $("#afmThree_uploaded").attr("src","");
    $("#afmThree_delete").remove();
  },

  'change #afmFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("afmFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#afmFiles3").val('');
          $("#afmFiles3_id").val('');
          document.getElementById("afmThree_name").innerHTML = "";
          document.getElementById("afmThree_title").innerHTML = "";
          $("#afmThree_uploaded").attr("src","");
          $("#afmThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#afmFiles3").val(photoThree);
            $("#afmFiles3_id").val(photoThreeId);
            Session.set("afmFiles3_id", photoThreeId);
            document.getElementById("afmThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#afmThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="afmThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#afmThree_progress").remove();
                            }
                            console.log(result);
                            $("#afmThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("afmThree_title").innerHTML = "Picture three";
                  document.getElementById("afmThree_name").innerHTML = "new"; // set name in label
                  $("#afmThree_uploaded").attr("src",url);
                  $("#afmThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="afmThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #afmFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("afmFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#afmFiles4").val('');
    $("#afmFiles4_id").val('');
    document.getElementById("afmFour_name").innerHTML = "";
    document.getElementById("afmFour_title").innerHTML = "";
    $("#afmFour_uploaded").attr("src","");
    $("#afmFour_delete").remove();
  },

  'change #afmFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("afmFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#afmFiles4").val('');
          $("#afmFiles4_id").val('');
          document.getElementById("afmFour_name").innerHTML = "";
          document.getElementById("afmFour_title").innerHTML = "";
          $("#afmFour_uploaded").attr("src","");
          $("#afmFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#afmFiles4").val(photoFour);
            $("#afmFiles4_id").val(photoFourId);
            Session.set("afmFiles4_id", photoFourId);
            document.getElementById("afmFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#afmFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="afmFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#afmFour_progress").remove();
                            }
                            console.log(result);
                            $("#afmFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("afmFour_title").innerHTML = "Picture four";
                  document.getElementById("afmFour_name").innerHTML = "new"; // set name in label
                  $("#afmFour_uploaded").attr("src",url);
                  $("#afmFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="afmFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #afmFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("afmFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#afmFiles5").val('');
    $("#afmFiles5_id").val('');
    document.getElementById("afmFiles_name").innerHTML = "";
    document.getElementById("upload_afmFiles5").innerHTML = "(.zip)";
    $("#afmFile_delete").remove();
  },
  'change #afmFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("afmFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#afmFiles5").val('');
          $("#afmFiles5_id").val('');
          document.getElementById("afmFiles_name").innerHTML = "";
          document.getElementById("upload_afmFiles5").innerHTML = "(.zip)";
          $("#afmFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#afmFiles5").val(files);
            $("#afmFiles5_id").val(filesId);
            Session.set("afmFiles5_id", filesId);

            // track progress of upload
            $("#afmFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="afmFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#afmFive_progress").remove();
                            }
                            console.log(result);
                            $("#afmFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("afmFiles_name").innerHTML = "new"; 
                  $("#afmFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="afmFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})