Template.item_files_details_2.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #interventionsOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoOne2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoOne2").val('');
    $("#photoOne2_id").val('');
    document.getElementById("interventionsOne_name").innerHTML = "";
    document.getElementById("interventionsOne_title").innerHTML = "";
    $("#interventionsOne_uploaded").attr("src","");
    $("#interventionsOne_delete").remove();
  },
  'change #photoOne_label2': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("photoOne2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoOne2").val('');
          $("#photoOne2_id").val('');
          document.getElementById("interventionsOne_name").innerHTML = "";
          document.getElementById("interventionsOne_title").innerHTML = "";
          $("#interventionsOne_uploaded").attr("src","");
          $("#interventionsOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#photoOne2").val(photoOne);
            $("#photoOne2_id").val(photoOneId);
            Session.set("photoOne2_id", photoOneId);
            document.getElementById("interventionsOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#interventionsOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="interventionsOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#interventionsOne_progress").remove();
                            }
                            console.log(result);
                            $("#interventionsOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("interventionsOne_title").innerHTML = "Picture one";
                  document.getElementById("interventionsOne_name").innerHTML = "new"; // set name in label
                  $("#interventionsOne_uploaded").attr("src",url);
                  $("#interventionsOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="interventionsOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #interventionsTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoTwo2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoTwo2").val('');
    $("#photoTwo2_id").val('');
    document.getElementById("interventionsTwo_name").innerHTML = "";
    document.getElementById("interventionsTwo_title").innerHTML = "";
    $("#interventionsTwo_uploaded").attr("src","");
    $("#interventionsTwo_delete").remove();
  },

  'change #photoTwo_label2': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("photoTwo2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoTwo2").val('');
          $("#photoTwo2_id").val('');
          document.getElementById("interventionsTwo_name").innerHTML = "";
          document.getElementById("interventionsTwo_title").innerHTML = "";
          $("#interventionsTwo_uploaded").attr("src","");
          $("#interventionsTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#photoTwo2").val(photoTwo);
            $("#photoTwo2_id").val(photoTwoId);
            Session.set("photoTwo2_id", photoTwoId);
            document.getElementById("interventionsTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#interventionsTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="interventionsTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#interventionsTwo_progress").remove();
                            }
                            console.log(result);
                            $("#interventionsTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("interventionsTwo_title").innerHTML = "Picture two";
                  document.getElementById("interventionsTwo_name").innerHTML = "new"; // set name in label
                  $("#interventionsTwo_uploaded").attr("src",url);
                  $("#interventionsTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="interventionsTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #interventionsThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoThree2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoThree2").val('');
    $("#photoThree2_id").val('');
    document.getElementById("interventionsThree_name").innerHTML = "";
    document.getElementById("interventionsThree_title").innerHTML = "";
    $("#interventionsThree_uploaded").attr("src","");
    $("#interventionsThree_delete").remove();
  },

  'change #photoThree_label2': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("photoThree2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoThree2").val('');
          $("#photoThree2_id").val('');
          document.getElementById("interventionsThree_name").innerHTML = "";
          document.getElementById("interventionsThree_title").innerHTML = "";
          $("#interventionsThree_uploaded").attr("src","");
          $("#interventionsThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#photoThree2").val(photoThree);
            $("#photoThree2_id").val(photoThreeId);
            Session.set("photoThree2_id", photoThreeId);
            document.getElementById("interventionsThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#interventionsThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="interventionsThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#interventionsThree_progress").remove();
                            }
                            console.log(result);
                            $("#interventionsThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("interventionsThree_title").innerHTML = "Picture three";
                  document.getElementById("interventionsThree_name").innerHTML = "new"; // set name in label
                  $("#interventionsThree_uploaded").attr("src",url);
                  $("#interventionsThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="interventionsThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #interventionsFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("photoFour2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#photoFour2").val('');
    $("#photoFour2_id").val('');
    document.getElementById("interventionsFour_name").innerHTML = "";
    document.getElementById("interventionsFour_title").innerHTML = "";
    $("#interventionsFour_uploaded").attr("src","");
    $("#interventionsFour_delete").remove();
  },

  'change #photoFour_label2': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("photoFour2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#photoFour2").val('');
          $("#photoFour2_id").val('');
          document.getElementById("interventionsFour_name").innerHTML = "";
          document.getElementById("interventionsFour_title").innerHTML = "";
          $("#interventionsFour_uploaded").attr("src","");
          $("#interventionsFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#photoFour2").val(photoFour);
            $("#photoFour2_id").val(photoFourId);
            Session.set("photoFour2_id", photoFourId);
            document.getElementById("interventionsFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#interventionsFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="interventionsFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#interventionsFour_progress").remove();
                            }
                            console.log(result);
                            $("#interventionsFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("interventionsFour_title").innerHTML = "Picture four";
                  document.getElementById("interventionsFour_name").innerHTML = "new"; // set name in label
                  $("#interventionsFour_uploaded").attr("src",url);
                  $("#interventionsFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="interventionsFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #interventionsFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("files2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#files2").val('');
    $("#files2_id").val('');
    document.getElementById("interventionsFiles_name").innerHTML = "";
    $("#interventionsFile_delete").remove();
  },
  'change #files_label2': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("files2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#files2").val('');
          $("#files2_id").val('');
          document.getElementById("interventionsFiles_name").innerHTML = "";
          $("#interventionsFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#files2").val(files);
            $("#files2_id").val(filesId);
            Session.set("files2_id", filesId);

            // track progress of upload
            $("#interventionsFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="interventionsFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#interventionsFive_progress").remove();
                            }
                            console.log(result);
                            $("#interventionsFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("interventionsFiles_name").innerHTML = "new"; // set name in label
                  $("#interventionsFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="interventionsFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})