Template.files_methods_irpIrrIrfc.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #irpIrrIrfcOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("irpIrrIrfcFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#irpIrrIrfcFiles1").val('');
    $("#irpIrrIrfcFiles1_id").val('');
    document.getElementById("irpIrrIrfcOne_name").innerHTML = "";
    document.getElementById("irpIrrIrfcOne_title").innerHTML = "";
    $("#irpIrrIrfcOne_uploaded").attr("src","");
    $("#irpIrrIrfcOne_delete").remove();
  },
  'change #irpIrrIrfcFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("irpIrrIrfcFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#irpIrrIrfcFiles1").val('');
          $("#irpIrrIrfcFiles1_id").val('');
          document.getElementById("irpIrrIrfcOne_name").innerHTML = "";
          document.getElementById("irpIrrIrfcOne_title").innerHTML = "";
          $("#irpIrrIrfcOne_uploaded").attr("src","");
          $("#irpIrrIrfcOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#irpIrrIrfcFiles1").val(photoOne);
            $("#irpIrrIrfcFiles1_id").val(photoOneId);
            Session.set("irpIrrIrfcFiles1_id", photoOneId);
            document.getElementById("irpIrrIrfcOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#irpIrrIrfcOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="irpIrrIrfcOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#irpIrrIrfcOne_progress").remove();
                            }
                            console.log(result);
                            $("#irpIrrIrfcOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("irpIrrIrfcOne_title").innerHTML = "Picture one";
                  document.getElementById("irpIrrIrfcOne_name").innerHTML = "new";
                  $("#irpIrrIrfcOne_uploaded").attr("src",url);
                  $("#irpIrrIrfcOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="irpIrrIrfcOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #irpIrrIrfcTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("irpIrrIrfcFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#irpIrrIrfcFiles2").val('');
    $("#irpIrrIrfcFiles2_id").val('');
    document.getElementById("irpIrrIrfcTwo_name").innerHTML = "";
    document.getElementById("irpIrrIrfcTwo_title").innerHTML = "";
    $("#irpIrrIrfcTwo_uploaded").attr("src","");
    $("#irpIrrIrfcTwo_delete").remove();
  },

  'change #irpIrrIrfcFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("irpIrrIrfcFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#irpIrrIrfcFiles2").val('');
          $("#irpIrrIrfcFiles2_id").val('');
          document.getElementById("irpIrrIrfcTwo_name").innerHTML = "";
          document.getElementById("irpIrrIrfcTwo_title").innerHTML = "";
          $("#irpIrrIrfcTwo_uploaded").attr("src","");
          $("#irpIrrIrfcTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#irpIrrIrfcFiles2").val(photoTwo);
            $("#irpIrrIrfcFiles2_id").val(photoTwoId);
            Session.set("irpIrrIrfcFiles2_id", photoTwoId);
            document.getElementById("irpIrrIrfcTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#irpIrrIrfcTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="irpIrrIrfcTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#irpIrrIrfcTwo_progress").remove();
                            }
                            console.log(result);
                            $("#irpIrrIrfcTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("irpIrrIrfcTwo_title").innerHTML = "Picture two";
                  document.getElementById("irpIrrIrfcTwo_name").innerHTML = "new"; // set name in label
                  $("#irpIrrIrfcTwo_uploaded").attr("src",url);
                  $("#irpIrrIrfcTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="irpIrrIrfcTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #irpIrrIrfcThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("irpIrrIrfcFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#irpIrrIrfcFiles3").val('');
    $("#irpIrrIrfcFiles3_id").val('');
    document.getElementById("irpIrrIrfcThree_name").innerHTML = "";
    document.getElementById("irpIrrIrfcThree_title").innerHTML = "";
    $("#irpIrrIrfcThree_uploaded").attr("src","");
    $("#irpIrrIrfcThree_delete").remove();
  },

  'change #irpIrrIrfcFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("irpIrrIrfcFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#irpIrrIrfcFiles3").val('');
          $("#irpIrrIrfcFiles3_id").val('');
          document.getElementById("irpIrrIrfcThree_name").innerHTML = "";
          document.getElementById("irpIrrIrfcThree_title").innerHTML = "";
          $("#irpIrrIrfcThree_uploaded").attr("src","");
          $("#irpIrrIrfcThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#irpIrrIrfcFiles3").val(photoThree);
            $("#irpIrrIrfcFiles3_id").val(photoThreeId);
            Session.set("irpIrrIrfcFiles3_id", photoThreeId);
            document.getElementById("irpIrrIrfcThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#irpIrrIrfcThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="irpIrrIrfcThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#irpIrrIrfcThree_progress").remove();
                            }
                            console.log(result);
                            $("#irpIrrIrfcThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("irpIrrIrfcThree_title").innerHTML = "Picture three";
                  document.getElementById("irpIrrIrfcThree_name").innerHTML = "new"; // set name in label
                  $("#irpIrrIrfcThree_uploaded").attr("src",url);
                  $("#irpIrrIrfcThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="irpIrrIrfcThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #irpIrrIrfcFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("irpIrrIrfcFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#irpIrrIrfcFiles4").val('');
    $("#irpIrrIrfcFiles4_id").val('');
    document.getElementById("irpIrrIrfcFour_name").innerHTML = "";
    document.getElementById("irpIrrIrfcFour_title").innerHTML = "";
    $("#irpIrrIrfcFour_uploaded").attr("src","");
    $("#irpIrrIrfcFour_delete").remove();
  },

  'change #irpIrrIrfcFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("irpIrrIrfcFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#irpIrrIrfcFiles4").val('');
          $("#irpIrrIrfcFiles4_id").val('');
          document.getElementById("irpIrrIrfcFour_name").innerHTML = "";
          document.getElementById("irpIrrIrfcFour_title").innerHTML = "";
          $("#irpIrrIrfcFour_uploaded").attr("src","");
          $("#irpIrrIrfcFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#irpIrrIrfcFiles4").val(photoFour);
            $("#irpIrrIrfcFiles4_id").val(photoFourId);
            Session.set("irpIrrIrfcFiles4_id", photoFourId);
            document.getElementById("irpIrrIrfcFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#irpIrrIrfcFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="irpIrrIrfcFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#irpIrrIrfcFour_progress").remove();
                            }
                            console.log(result);
                            $("#irpIrrIrfcFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("irpIrrIrfcFour_title").innerHTML = "Picture four";
                  document.getElementById("irpIrrIrfcFour_name").innerHTML = "new"; // set name in label
                  $("#irpIrrIrfcFour_uploaded").attr("src",url);
                  $("#irpIrrIrfcFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="irpIrrIrfcFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #irpIrrIrfcFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("irpIrrIrfcFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#irpIrrIrfcFiles5").val('');
    $("#irpIrrIrfcFiles5_id").val('');
    document.getElementById("irpIrrIrfcFiles_name").innerHTML = "";
    document.getElementById("upload_irpIrrIrfcFiles5").innerHTML = "(.zip)";
    $("#irpIrrIrfcFile_delete").remove();
  },
  'change #irpIrrIrfcFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("irpIrrIrfcFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#irpIrrIrfcFiles5").val('');
          $("#irpIrrIrfcFiles5_id").val('');
          document.getElementById("irpIrrIrfcFiles_name").innerHTML = "";
          document.getElementById("upload_irpIrrIrfcFiles5").innerHTML = "(.zip)";
          $("#irpIrrIrfcFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#irpIrrIrfcFiles5").val(files);
            $("#irpIrrIrfcFiles5_id").val(filesId);
            Session.set("irpIrrIrfcFiles5_id", filesId);

            // track progress of upload
            $("#irpIrrIrfcFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="irpIrrIrfcFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#irpIrrIrfcFive_progress").remove();
                            }
                            console.log(result);
                            $("#irpIrrIrfcFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("irpIrrIrfcFiles_name").innerHTML = "new"; 
                  $("#irpIrrIrfcFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="irpIrrIrfcFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})