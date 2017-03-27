Template.item_files_details_1.events({
  'change #photoOne_label1': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoOne = $("#photoOne1").val();
        var noValue = "";
        if(photoOne != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoOne1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoOne = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoOneId = fileObj._id;

            var fullPath = document.getElementById("photoOne_label1").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoOne1").val(photoOne);
            $("#photoOne1_id").val(photoOneId);
            document.getElementById("upload_photoOne1").innerHTML = filename; //no jquery
            Session.set("photoOne1_id", photoOneId);
          }
        });
     });
   },
  'change #photoTwo_label1': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoTwo = $("#photoTwo1").val();
        var noValue = "";
        if(photoTwo != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoTwo1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoTwo = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoTwoId = fileObj._id;

            var fullPath = document.getElementById("photoTwo_label1").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoTwo1").val(photoTwo);
            $("#photoTwo1_id").val(photoTwoId);
            document.getElementById("upload_photoTwo1").innerHTML = filename; //no jquery
            Session.set("photoTwo1_id", photoTwoId);
          }
        });
     });
   },
  'change #photoThree_label1': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoThree = $("#photoThree1").val();
        var noValue = "";
        if(photoThree != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoThree1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoThree = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoThreeId = fileObj._id;

            var fullPath = document.getElementById("photoThree_label1").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoThree1").val(photoThree);
            $("#photoThree1_id").val(photoThreeId);
            document.getElementById("upload_photoThree1").innerHTML = filename; //no jquery
            Session.set("photoThree1_id", photoThreeId);
          }
        });
     });
   },
  'change #photoFour_label1': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var photoFour = $("#photoFour1").val();
        var noValue = "";
        if(photoFour != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("photoFour1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var photoFour = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var photoFourId = fileObj._id;

            var fullPath = document.getElementById("photoFour_label1").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#photoFour1").val(photoFour);
            $("#photoFour1_id").val(photoFourId);
            document.getElementById("upload_photoFour1").innerHTML = filename; //no jquery
            Session.set("photoFour1_id", photoFourId);
          }
        });
     });
   },
  'change #files_label1': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {

        var files = $("#files1").val();
        var noValue = "";

        if(files != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("files1_id"));
        }

        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
            // grabbing url and placing it for gallery img_front value
            var files = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var filesId = fileObj._id;

            var fullPath = document.getElementById("files_label1").value; //jquery a "no go" lol

            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            

            $("#files1").val(files);
            $("#files1_id").val(filesId);
            document.getElementById("upload_files1").innerHTML = filename; //no jquery
            Session.set("files1_id", filesId);
          }
        });
     });
   },
})
