Template.files_methods_tem.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #temOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("temFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#temFiles1").val('');
    $("#temFiles1_id").val('');
    document.getElementById("temOne_name").innerHTML = "";
    document.getElementById("temOne_title").innerHTML = "";
    $("#temOne_uploaded").attr("src","");
    $("#temOne_delete").remove();
  },
  'change #temFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("temFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#temFiles1").val('');
          $("#temFiles1_id").val('');
          document.getElementById("temOne_name").innerHTML = "";
          document.getElementById("temOne_title").innerHTML = "";
          $("#temOne_uploaded").attr("src","");
          $("#temOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#temFiles1").val(photoOne);
            $("#temFiles1_id").val(photoOneId);
            Session.set("temFiles1_id", photoOneId);
            document.getElementById("temOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#temOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="temOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#temOne_progress").remove();
                            }
                            console.log(result);
                            $("#temOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("temOne_title").innerHTML = "Picture one";
                  document.getElementById("temOne_name").innerHTML = "new";
                  $("#temOne_uploaded").attr("src",url);
                  $("#temOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="temOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #temTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("temFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#temFiles2").val('');
    $("#temFiles2_id").val('');
    document.getElementById("temTwo_name").innerHTML = "";
    document.getElementById("temTwo_title").innerHTML = "";
    $("#temTwo_uploaded").attr("src","");
    $("#temTwo_delete").remove();
  },

  'change #temFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("temFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#temFiles2").val('');
          $("#temFiles2_id").val('');
          document.getElementById("temTwo_name").innerHTML = "";
          document.getElementById("temTwo_title").innerHTML = "";
          $("#temTwo_uploaded").attr("src","");
          $("#temTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#temFiles2").val(photoTwo);
            $("#temFiles2_id").val(photoTwoId);
            Session.set("temFiles2_id", photoTwoId);
            document.getElementById("temTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#temTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="temTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#temTwo_progress").remove();
                            }
                            console.log(result);
                            $("#temTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("temTwo_title").innerHTML = "Picture two";
                  document.getElementById("temTwo_name").innerHTML = "new"; // set name in label
                  $("#temTwo_uploaded").attr("src",url);
                  $("#temTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="temTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #temThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("temFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#temFiles3").val('');
    $("#temFiles3_id").val('');
    document.getElementById("temThree_name").innerHTML = "";
    document.getElementById("temThree_title").innerHTML = "";
    $("#temThree_uploaded").attr("src","");
    $("#temThree_delete").remove();
  },

  'change #temFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("temFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#temFiles3").val('');
          $("#temFiles3_id").val('');
          document.getElementById("temThree_name").innerHTML = "";
          document.getElementById("temThree_title").innerHTML = "";
          $("#temThree_uploaded").attr("src","");
          $("#temThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#temFiles3").val(photoThree);
            $("#temFiles3_id").val(photoThreeId);
            Session.set("temFiles3_id", photoThreeId);
            document.getElementById("temThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#temThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="temThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#temThree_progress").remove();
                            }
                            console.log(result);
                            $("#temThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("temThree_title").innerHTML = "Picture three";
                  document.getElementById("temThree_name").innerHTML = "new"; // set name in label
                  $("#temThree_uploaded").attr("src",url);
                  $("#temThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="temThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #temFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("temFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#temFiles4").val('');
    $("#temFiles4_id").val('');
    document.getElementById("temFour_name").innerHTML = "";
    document.getElementById("temFour_title").innerHTML = "";
    $("#temFour_uploaded").attr("src","");
    $("#temFour_delete").remove();
  },

  'change #temFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("temFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#temFiles4").val('');
          $("#temFiles4_id").val('');
          document.getElementById("temFour_name").innerHTML = "";
          document.getElementById("temFour_title").innerHTML = "";
          $("#temFour_uploaded").attr("src","");
          $("#temFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#temFiles4").val(photoFour);
            $("#temFiles4_id").val(photoFourId);
            Session.set("temFiles4_id", photoFourId);
            document.getElementById("temFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#temFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="temFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#temFour_progress").remove();
                            }
                            console.log(result);
                            $("#temFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("temFour_title").innerHTML = "Picture four";
                  document.getElementById("temFour_name").innerHTML = "new"; // set name in label
                  $("#temFour_uploaded").attr("src",url);
                  $("#temFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="temFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #temFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("temFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#temFiles5").val('');
    $("#temFiles5_id").val('');
    document.getElementById("temFiles_name").innerHTML = "";
    document.getElementById("upload_temFiles5").innerHTML = "(.zip)";
    $("#temFile_delete").remove();
  },
  'change #temFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("temFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#temFiles5").val('');
          $("#temFiles5_id").val('');
          document.getElementById("temFiles_name").innerHTML = "";
          document.getElementById("upload_temFiles5").innerHTML = "(.zip)";
          $("#temFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#temFiles5").val(files);
            $("#temFiles5_id").val(filesId);
            Session.set("temFiles5_id", filesId);

            // track progress of upload
            $("#temFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="temFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#temFive_progress").remove();
                            }
                            console.log(result);
                            $("#temFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("temFiles_name").innerHTML = "new"; 
                  $("#temFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="temFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})