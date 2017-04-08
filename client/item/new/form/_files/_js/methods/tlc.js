Template.files_methods_tlc.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlcOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlcFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlcFiles1").val('');
    $("#tlcFiles1_id").val('');
    document.getElementById("tlcOne_name").innerHTML = "";
    document.getElementById("tlcOne_title").innerHTML = "";
    $("#tlcOne_uploaded").attr("src","");
    $("#tlcOne_delete").remove();
  },
  'change #tlcFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("tlcFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlcFiles1").val('');
          $("#tlcFiles1_id").val('');
          document.getElementById("tlcOne_name").innerHTML = "";
          document.getElementById("tlcOne_title").innerHTML = "";
          $("#tlcOne_uploaded").attr("src","");
          $("#tlcOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#tlcFiles1").val(photoOne);
            $("#tlcFiles1_id").val(photoOneId);
            Session.set("tlcFiles1_id", photoOneId);
            document.getElementById("tlcOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlcOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlcOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlcOne_progress").remove();
                            }
                            console.log(result);
                            $("#tlcOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlcOne_title").innerHTML = "Picture one";
                  document.getElementById("tlcOne_name").innerHTML = "new";
                  $("#tlcOne_uploaded").attr("src",url);
                  $("#tlcOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlcOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlcTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlcFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlcFiles2").val('');
    $("#tlcFiles2_id").val('');
    document.getElementById("tlcTwo_name").innerHTML = "";
    document.getElementById("tlcTwo_title").innerHTML = "";
    $("#tlcTwo_uploaded").attr("src","");
    $("#tlcTwo_delete").remove();
  },

  'change #tlcFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("tlcFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlcFiles2").val('');
          $("#tlcFiles2_id").val('');
          document.getElementById("tlcTwo_name").innerHTML = "";
          document.getElementById("tlcTwo_title").innerHTML = "";
          $("#tlcTwo_uploaded").attr("src","");
          $("#tlcTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#tlcFiles2").val(photoTwo);
            $("#tlcFiles2_id").val(photoTwoId);
            Session.set("tlcFiles2_id", photoTwoId);
            document.getElementById("tlcTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlcTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlcTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlcTwo_progress").remove();
                            }
                            console.log(result);
                            $("#tlcTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlcTwo_title").innerHTML = "Picture two";
                  document.getElementById("tlcTwo_name").innerHTML = "new"; // set name in label
                  $("#tlcTwo_uploaded").attr("src",url);
                  $("#tlcTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlcTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlcThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlcFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlcFiles3").val('');
    $("#tlcFiles3_id").val('');
    document.getElementById("tlcThree_name").innerHTML = "";
    document.getElementById("tlcThree_title").innerHTML = "";
    $("#tlcThree_uploaded").attr("src","");
    $("#tlcThree_delete").remove();
  },

  'change #tlcFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("tlcFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlcFiles3").val('');
          $("#tlcFiles3_id").val('');
          document.getElementById("tlcThree_name").innerHTML = "";
          document.getElementById("tlcThree_title").innerHTML = "";
          $("#tlcThree_uploaded").attr("src","");
          $("#tlcThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#tlcFiles3").val(photoThree);
            $("#tlcFiles3_id").val(photoThreeId);
            Session.set("tlcFiles3_id", photoThreeId);
            document.getElementById("tlcThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlcThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlcThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlcThree_progress").remove();
                            }
                            console.log(result);
                            $("#tlcThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlcThree_title").innerHTML = "Picture three";
                  document.getElementById("tlcThree_name").innerHTML = "new"; // set name in label
                  $("#tlcThree_uploaded").attr("src",url);
                  $("#tlcThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlcThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlcFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlcFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlcFiles4").val('');
    $("#tlcFiles4_id").val('');
    document.getElementById("tlcFour_name").innerHTML = "";
    document.getElementById("tlcFour_title").innerHTML = "";
    $("#tlcFour_uploaded").attr("src","");
    $("#tlcFour_delete").remove();
  },

  'change #tlcFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("tlcFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlcFiles4").val('');
          $("#tlcFiles4_id").val('');
          document.getElementById("tlcFour_name").innerHTML = "";
          document.getElementById("tlcFour_title").innerHTML = "";
          $("#tlcFour_uploaded").attr("src","");
          $("#tlcFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#tlcFiles4").val(photoFour);
            $("#tlcFiles4_id").val(photoFourId);
            Session.set("tlcFiles4_id", photoFourId);
            document.getElementById("tlcFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#tlcFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlcFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlcFour_progress").remove();
                            }
                            console.log(result);
                            $("#tlcFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("tlcFour_title").innerHTML = "Picture four";
                  document.getElementById("tlcFour_name").innerHTML = "new"; // set name in label
                  $("#tlcFour_uploaded").attr("src",url);
                  $("#tlcFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlcFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #tlcFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("tlcFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#tlcFiles5").val('');
    $("#tlcFiles5_id").val('');
    document.getElementById("tlcFiles_name").innerHTML = "";
    document.getElementById("upload_tlcFiles5").innerHTML = "(.zip)";
    $("#tlcFile_delete").remove();
  },
  'change #tlcFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("tlcFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#tlcFiles5").val('');
          $("#tlcFiles5_id").val('');
          document.getElementById("tlcFiles_name").innerHTML = "";
          document.getElementById("upload_tlcFiles5").innerHTML = "(.zip)";
          $("#tlcFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#tlcFiles5").val(files);
            $("#tlcFiles5_id").val(filesId);
            Session.set("tlcFiles5_id", filesId);

            // track progress of upload
            $("#tlcFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="tlcFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#tlcFive_progress").remove();
                            }
                            console.log(result);
                            $("#tlcFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("tlcFiles_name").innerHTML = "new"; 
                  $("#tlcFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="tlcFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})