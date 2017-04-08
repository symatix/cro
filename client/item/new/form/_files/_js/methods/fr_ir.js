Template.files_methods_ft_ir.events({
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #ft_irOne_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("ft_irFiles1_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#ft_irFiles1").val('');
    $("#ft_irFiles1_id").val('');
    document.getElementById("ft_irOne_name").innerHTML = "";
    document.getElementById("ft_irOne_title").innerHTML = "";
    $("#ft_irOne_uploaded").attr("src","");
    $("#ft_irOne_delete").remove();
  },
  'change #ft_irFiles1_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("ft_irFiles1_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#ft_irFiles1").val('');
          $("#ft_irFiles1_id").val('');
          document.getElementById("ft_irOne_name").innerHTML = "";
          document.getElementById("ft_irOne_title").innerHTML = "";
          $("#ft_irOne_uploaded").attr("src","");
          $("#ft_irOne_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;
            $("#ft_irFiles1").val(photoOne);
            $("#ft_irFiles1_id").val(photoOneId);
            Session.set("ft_irFiles1_id", photoOneId);
            document.getElementById("ft_irOne_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#ft_irOne_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="ft_irOne_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#ft_irOne_progress").remove();
                            }
                            console.log(result);
                            $("#ft_irOne_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);


            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("ft_irOne_title").innerHTML = "Picture one";
                  document.getElementById("ft_irOne_name").innerHTML = "new";
                  $("#ft_irOne_uploaded").attr("src",url);
                  $("#ft_irOne-delete-container").append('<a href="#" class="list-font btn btn-danger" id="ft_irOne_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #ft_irTwo_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("ft_irFiles2_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#ft_irFiles2").val('');
    $("#ft_irFiles2_id").val('');
    document.getElementById("ft_irTwo_name").innerHTML = "";
    document.getElementById("ft_irTwo_title").innerHTML = "";
    $("#ft_irTwo_uploaded").attr("src","");
    $("#ft_irTwo_delete").remove();
  },

  'change #ft_irFiles2_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("ft_irFiles2_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#ft_irFiles2").val('');
          $("#ft_irFiles2_id").val('');
          document.getElementById("ft_irTwo_name").innerHTML = "";
          document.getElementById("ft_irTwo_title").innerHTML = "";
          $("#ft_irTwo_uploaded").attr("src","");
          $("#ft_irTwo_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;
            $("#ft_irFiles2").val(photoTwo);
            $("#ft_irFiles2_id").val(photoTwoId);
            Session.set("ft_irFiles2_id", photoTwoId);
            document.getElementById("ft_irTwo_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#ft_irTwo_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="ft_irTwo_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#ft_irTwo_progress").remove();
                            }
                            console.log(result);
                            $("#ft_irTwo_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);

            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("ft_irTwo_title").innerHTML = "Picture two";
                  document.getElementById("ft_irTwo_name").innerHTML = "new"; // set name in label
                  $("#ft_irTwo_uploaded").attr("src",url);
                  $("#ft_irTwo-delete-container").append('<a href="#" class="list-font btn btn-danger" id="ft_irTwo_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #ft_irThree_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("ft_irFiles3_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#ft_irFiles3").val('');
    $("#ft_irFiles3_id").val('');
    document.getElementById("ft_irThree_name").innerHTML = "";
    document.getElementById("ft_irThree_title").innerHTML = "";
    $("#ft_irThree_uploaded").attr("src","");
    $("#ft_irThree_delete").remove();
  },

  'change #ft_irFiles3_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("ft_irFiles3_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#ft_irFiles3").val('');
          $("#ft_irFiles3_id").val('');
          document.getElementById("ft_irThree_name").innerHTML = "";
          document.getElementById("ft_irThree_title").innerHTML = "";
          $("#ft_irThree_uploaded").attr("src","");
          $("#ft_irThree_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;
            $("#ft_irFiles3").val(photoThree);
            $("#ft_irFiles3_id").val(photoThreeId);
            Session.set("ft_irFiles3_id", photoThreeId);
            document.getElementById("ft_irThree_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#ft_irThree_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="ft_irThree_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#ft_irThree_progress").remove();
                            }
                            console.log(result);
                            $("#ft_irThree_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("ft_irThree_title").innerHTML = "Picture three";
                  document.getElementById("ft_irThree_name").innerHTML = "new"; // set name in label
                  $("#ft_irThree_uploaded").attr("src",url);
                  $("#ft_irThree-delete-container").append('<a href="#" class="list-font btn btn-danger" id="ft_irThree_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #ft_irFour_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("ft_irFiles4_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#ft_irFiles4").val('');
    $("#ft_irFiles4_id").val('');
    document.getElementById("ft_irFour_name").innerHTML = "";
    document.getElementById("ft_irFour_title").innerHTML = "";
    $("#ft_irFour_uploaded").attr("src","");
    $("#ft_irFour_delete").remove();
  },

  'change #ft_irFiles4_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {


        var imgId = document.getElementById("ft_irFiles4_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#ft_irFiles4").val('');
          $("#ft_irFiles4_id").val('');
          document.getElementById("ft_irFour_name").innerHTML = "";
          document.getElementById("ft_irFour_title").innerHTML = "";
          $("#ft_irFour_uploaded").attr("src","");
          $("#ft_irFour_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {

             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;
            $("#ft_irFiles4").val(photoFour);
            $("#ft_irFiles4_id").val(photoFourId);
            Session.set("ft_irFiles4_id", photoFourId);
            document.getElementById("ft_irFour_title").innerHTML = "status: uploading"; 

            // track progress of upload
            $("#ft_irFour_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="ft_irFour_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#ft_irFour_progress").remove();
                            }
                            console.log(result);
                            $("#ft_irFour_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callback
                  var url = file.url();
                  var name = file.name();

                  document.getElementById("ft_irFour_title").innerHTML = "Picture four";
                  document.getElementById("ft_irFour_name").innerHTML = "new"; // set name in label
                  $("#ft_irFour_uploaded").attr("src",url);
                  $("#ft_irFour-delete-container").append('<a href="#" class="list-font btn btn-danger" id="ft_irFour_delete">DELETE</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'click #ft_irFile_delete':function(event){
    event.preventDefault();
    var id = document.getElementById("ft_irFiles5_id").value;
    Data.remove(id);
    //reset eeeveryyyythiiiinnnng
    $("#ft_irFiles5").val('');
    $("#ft_irFiles5_id").val('');
    document.getElementById("ft_irFiles_name").innerHTML = "";
    document.getElementById("upload_ft_irFiles5").innerHTML = "(.zip)";
    $("#ft_irFile_delete").remove();
  },
  'change #ft_irFiles5_label': function(event, template) {
    event.preventDefault();

      FS.Utility.eachFile(event, function(file) {

        var imgId = document.getElementById("ft_irFiles5_id").value;
        if(imgId){
          Data.remove(imgId);
          //reset eeeveryyyythiiiinnnng
          $("#ft_irFiles5").val('');
          $("#ft_irFiles5_id").val('');
          document.getElementById("ft_irFiles_name").innerHTML = "";
          document.getElementById("upload_ft_irFiles5").innerHTML = "(.zip)";
          $("#ft_irFile_delete").remove();
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;
            $("#ft_irFiles5").val(files);
            $("#ft_irFiles5_id").val(filesId);
            Session.set("ft_irFiles5_id", filesId);

            // track progress of upload
            $("#ft_irFiles_name").append('<div class="progress"><div class="progress-bar progress-bar-custom" id="ft_irFive_progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;"></div></div>');
            var progress = setInterval(function () {
                            var result = fileObj.uploadProgress();
                            if( fileObj.uploadProgress() === 100 
                                && fileObj.hasStored('data') ) {  
                                clearInterval(progress);
                                $("#ft_irFive_progress").remove();
                            }
                            console.log(result);
                            $("#ft_irFive_progress").attr("aria-valuenow",result).css("width",result+"%");
                        }, 100);
            
            // wait for upload to finish than display img
            Data.find(fileObj._id).observe({
              changed: function(file, oldFile) {
                if (file.url() !== null) { // waiting for unFinished callfiles
                  var url = file.url();
                  var name = file.name();
                  document.getElementById("ft_irFiles_name").innerHTML = "new"; 
                  $("#ft_irFiles-delete-container").append('<a href="#" class="list-font btn btn-danger" id="ft_irFile_delete">DELETE ADDITIONAL FILES</a>');

                }
              }
            }); // end of wait
          }
        });
     });
   },
})