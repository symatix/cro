Template.files_methods_plm.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #plmOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("plmFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#plmFiles1").val('');
    $("#plmFiles1_id").val('');
    document.getElementById("plmOne_name").innerHTML = "";
    document.getElementById("plmOne_title").innerHTML = "";
    $("#plmOne_uploaded").attr("src","");
    $("#plmOne_delete").remove();
  },
  'change #plmFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("plmFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#plmFiles1").val('');
          $("#plmFiles1_id").val('');
          document.getElementById("plmOne_name").innerHTML = "";
          document.getElementById("plmOne_title").innerHTML = "";
          $("#plmOne_uploaded").attr("src","");
          $("#plmOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#plmFiles1").val(photoOne);
            $("#plmFiles1_id").val(photoOneId);
            Session.set("plmFiles1_id", photoOneId);
            document.getElementById("plmOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#plmOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="plmOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#plmOne_progress").remove();
                            }
                            console.log(result);
                            $("#plmOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("plmOne_title").innerHTML = "Picture one";
                  document.getElementById("plmOne_name").innerHTML = "new";
                  $("#plmOne_uploaded").attr("src",url);
                  $("#plmOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="plmOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #plmTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("plmFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#plmFiles2").val('');
    $("#plmFiles2_id").val('');
    document.getElementById("plmTwo_name").innerHTML = "";
    document.getElementById("plmTwo_title").innerHTML = "";
    $("#plmTwo_uploaded").attr("src","");
    $("#plmTwo_delete").remove();
  },

  'change #plmFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("plmFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#plmFiles2").val('');
          $("#plmFiles2_id").val('');
          document.getElementById("plmTwo_name").innerHTML = "";
          document.getElementById("plmTwo_title").innerHTML = "";
          $("#plmTwo_uploaded").attr("src","");
          $("#plmTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#plmFiles2").val(photoTwo);
            $("#plmFiles2_id").val(photoTwoId);
            Session.set("plmFiles2_id", photoTwoId);
            document.getElementById("plmTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#plmTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="plmTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#plmTwo_progress").remove();
                            }
                            console.log(result);
                            $("#plmTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("plmTwo_title").innerHTML = "Picture two";
                  document.getElementById("plmTwo_name").innerHTML = "new"; // set name in label
                  $("#plmTwo_uploaded").attr("src",url);
                  $("#plmTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="plmTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #plmThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("plmFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#plmFiles3").val('');
    $("#plmFiles3_id").val('');
    document.getElementById("plmThree_name").innerHTML = "";
    document.getElementById("plmThree_title").innerHTML = "";
    $("#plmThree_uploaded").attr("src","");
    $("#plmThree_delete").remove();
  },

  'change #plmFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("plmFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#plmFiles3").val('');
          $("#plmFiles3_id").val('');
          document.getElementById("plmThree_name").innerHTML = "";
          document.getElementById("plmThree_title").innerHTML = "";
          $("#plmThree_uploaded").attr("src","");
          $("#plmThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#plmFiles3").val(photoThree);
            $("#plmFiles3_id").val(photoThreeId);
            Session.set("plmFiles3_id", photoThreeId);
            document.getElementById("plmThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#plmThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="plmThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#plmThree_progress").remove();
                            }
                            console.log(result);
                            $("#plmThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("plmThree_title").innerHTML = "Picture three";
                  document.getElementById("plmThree_name").innerHTML = "new"; // set name in label
                  $("#plmThree_uploaded").attr("src",url);
                  $("#plmThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="plmThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #plmFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("plmFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#plmFiles4").val('');
    $("#plmFiles4_id").val('');
    document.getElementById("plmFour_name").innerHTML = "";
    document.getElementById("plmFour_title").innerHTML = "";
    $("#plmFour_uploaded").attr("src","");
    $("#plmFour_delete").remove();
  },

  'change #plmFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("plmFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#plmFiles4").val('');
          $("#plmFiles4_id").val('');
          document.getElementById("plmFour_name").innerHTML = "";
          document.getElementById("plmFour_title").innerHTML = "";
          $("#plmFour_uploaded").attr("src","");
          $("#plmFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#plmFiles4").val(photoFour);
            $("#plmFiles4_id").val(photoFourId);
            Session.set("plmFiles4_id", photoFourId);
            document.getElementById("plmFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#plmFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="plmFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#plmFour_progress").remove();
                            }
                            console.log(result);
                            $("#plmFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("plmFour_title").innerHTML = "Picture four";
                  document.getElementById("plmFour_name").innerHTML = "new"; // set name in label
                  $("#plmFour_uploaded").attr("src",url);
                  $("#plmFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="plmFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #plmFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("plmFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#plmFiles5").val('');
    $("#plmFiles5_id").val('');
    document.getElementById("plmFiles_name").innerHTML = "";
    document.getElementById("upload_plmFiles5").innerHTML = "(.zip)";
    $("#plmFile_delete").remove();
  },
  'change #plmFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("plmFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#plmFiles5").val('');
          $("#plmFiles5_id").val('');
          document.getElementById("plmFiles_name").innerHTML = "";
          document.getElementById("upload_plmFiles5").innerHTML = "(.zip)";
          $("#plmFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#plmFiles5").val(files);
            $("#plmFiles5_id").val(filesId);
            Session.set("plmFiles5_id", filesId);

            // track progress of upload
            $("#plmFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="plmFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#plmFive_progress").remove();
                            }
                            console.log(result);
                            $("#plmFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("plmFiles_name").innerHTML = "new"; 
                  $("#plmFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="plmFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})