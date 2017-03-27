Template.files_methods_pixe.events({
  'change #pixeFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pixeFiles1 = $("#pixeFiles1").val();
        var noValue = "";
        if(pixeFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pixeFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pixeFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pixeFiles1Id = fileObj._id;

            var fullPath = document.getElementById("pixeFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pixeFiles1").val(pixeFiles1);
            $("#pixeFiles1_id").val(pixeFiles1Id);
            document.getElementById("upload_pixeFiles1").innerHTML = filename; //no jquery
            Session.set("pixeFiles1_id", pixeFiles1Id);
          }
        });
     });
   },
  'change #pixeFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pixeFiles2 = $("#pixeFiles2").val();
        var noValue = "";
        if(pixeFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pixeFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pixeFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pixeFiles2Id = fileObj._id;

            var fullPath = document.getElementById("pixeFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pixeFiles2").val(pixeFiles2);
            $("#pixeFiles2_id").val(pixeFiles2Id);
            document.getElementById("upload_pixeFiles2").innerHTML = filename; //no jquery
            Session.set("pixeFiles2_id", pixeFiles2Id);
          }
        });
     });
   },
  'change #pixeFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pixeFiles3 = $("#pixeFiles3").val();
        var noValue = "";
        if(pixeFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pixeFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pixeFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pixeFiles3Id = fileObj._id;

            var fullPath = document.getElementById("pixeFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pixeFiles3").val(pixeFiles3);
            $("#pixeFiles3_id").val(pixeFiles3Id);
            document.getElementById("upload_pixeFiles3").innerHTML = filename; //no jquery
            Session.set("pixeFiles3_id", pixeFiles3Id);
          }
        });
     });
   },
  'change #pixeFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pixeFiles4 = $("#pixeFiles4").val();
        var noValue = "";
        if(pixeFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pixeFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pixeFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pixeFiles4Id = fileObj._id;

            var fullPath = document.getElementById("pixeFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pixeFiles4").val(pixeFiles4);
            $("#pixeFiles4_id").val(pixeFiles4Id);
            document.getElementById("upload_pixeFiles4").innerHTML = filename; //no jquery
            Session.set("pixeFiles4_id", pixeFiles4Id);
          }
        });
     });
   },
  'change #pixeFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pixeFiles5 = $("#pixeFiles5").val();
        var noValue = "";
        if(pixeFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pixeFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pixeFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pixeFiles5Id = fileObj._id;

            var fullPath = document.getElementById("pixeFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pixeFiles5").val(pixeFiles5);
            $("#pixeFiles5_id").val(pixeFiles5Id);
            document.getElementById("upload_pixeFiles5").innerHTML = filename; //no jquery
            Session.set("pixeFiles5_id", pixeFiles5Id);
          }
        });
     });
   },
})