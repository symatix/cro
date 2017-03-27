Template.item_files_details_2.events({
  'change #photoOne_label2': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoOne = $("#photoOne2").val();
        var noValue = "";
        if(photoOne != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoOne2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;

            var fullPath = document.getElementById("photoOne_label2").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoOne2").val(photoOne);
            $("#photoOne2_id").val(photoOneId);
            document.getElementById("upload_photoOne2").innerHTML = filename; //no jquery
            Session.set("photoOne2_id", photoOneId);
          }
        });
     });
   },
  'change #photoTwo_label2': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoTwo = $("#photoTwo2").val();
        var noValue = "";
        if(photoTwo != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoTwo2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;

            var fullPath = document.getElementById("photoTwo_label2").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoTwo2").val(photoTwo);
            $("#photoTwo2_id").val(photoTwoId);
            document.getElementById("upload_photoTwo2").innerHTML = filename; //no jquery
            Session.set("photoTwo2_id", photoTwoId);
          }
        });
     });
   },
  'change #photoThree_label2': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoThree = $("#photoThree2").val();
        var noValue = "";
        if(photoThree != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoThree2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;

            var fullPath = document.getElementById("photoThree_label2").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoThree2").val(photoThree);
            $("#photoThree2_id").val(photoThreeId);
            document.getElementById("upload_photoThree2").innerHTML = filename; //no jquery
            Session.set("photoThree2_id", photoThreeId);
          }
        });
     });
   },
  'change #photoFour_label2': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoFour = $("#photoFour2").val();
        var noValue = "";
        if(photoFour != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoFour2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;

            var fullPath = document.getElementById("photoFour_label2").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoFour2").val(photoFour);
            $("#photoFour2_id").val(photoFourId);
            document.getElementById("upload_photoFour2").innerHTML = filename; //no jquery
            Session.set("photoFour2_id", photoFourId);
          }
        });
     });
   },
  'change #files_label2': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var files = $("#files2").val();
        var noValue = "";
        if(files != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("files2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;

            var fullPath = document.getElementById("files_label2").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#files2").val(files);
            $("#files2_id").val(filesId);
            document.getElementById("upload_files2").innerHTML = filename; //no jquery
            Session.set("files2_id", filesId);
          }
        });
     });
   },
})