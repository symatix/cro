Template.item_files_details_3.events({
  'change #photoOne_label3': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoOne = $("#photoOne3").val();
        var noValue = "";
        if(photoOne != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoOne3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;

            var fullPath = document.getElementById("photoOne_label3").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoOne3").val(photoOne);
            $("#photoOne3_id").val(photoOneId);
            document.getElementById("upload_photoOne3").innerHTML = filename; //no jquery
            Session.set("photoOne3_id", photoOneId);
          }
        });
     });
   },
  'change #photoTwo_label3': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoTwo = $("#photoTwo3").val();
        var noValue = "";
        if(photoTwo != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoTwo3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;

            var fullPath = document.getElementById("photoTwo_label3").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoTwo3").val(photoTwo);
            $("#photoTwo3_id").val(photoTwoId);
            document.getElementById("upload_photoTwo3").innerHTML = filename; //no jquery
            Session.set("photoTwo3_id", photoTwoId);
          }
        });
     });
   },
  'change #photoThree_label3': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoThree = $("#photoThree3_id").val();
        var noValue = "";
        if(photoThree != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoThreeId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;

            var fullPath = document.getElementById("photoThree_label3").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoThree3").val(photoThree);
            $("#photoThree3_id").val(photoThreeId);
            document.getElementById("upload_photoThree3").innerHTML = filename; //no jquery
            Session.set("photoThree3_id", photoThreeId);
          }
        });
     });
   },
  'change #photoFour_label3': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoFour = $("#photoFour3").val();
        var noValue = "";
        if(photoFour != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoFour3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;

            var fullPath = document.getElementById("photoFour_label3").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoFour3").val(photoFour);
            $("#photoFour3_id").val(photoFourId);
            document.getElementById("upload_photoFour3").innerHTML = filename; //no jquery
            Session.set("photoFour3_id", photoFourId);
          }
        });
     });
   },
  'change #files_label3': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var files = $("#files3").val();
        var noValue = "";
        if(files != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("files3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;

            var fullPath = document.getElementById("files_label3").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#files3").val(files);
            $("#files3_id").val(filesId);
            document.getElementById("upload_files3").innerHTML = filename; //no jquery
            Session.set("files3_id", filesId);
          }
        });
     });
   },
})