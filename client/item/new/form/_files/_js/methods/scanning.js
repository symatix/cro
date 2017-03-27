Template.files_methods_scanning.events({
  'change #scanningFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var scanningFiles1 = $("#scanningFiles1").val();
        var noValue = "";
        if(scanningFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("scanningFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var scanningFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var scanningFiles1Id = fileObj._id;

            var fullPath = document.getElementById("scanningFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#scanningFiles1").val(scanningFiles1);
            $("#scanningFiles1_id").val(scanningFiles1Id);
            document.getElementById("upload_scanningFiles1").innerHTML = filename; //no jquery
            Session.set("scanningFiles1_id", scanningFiles1Id);
          }
        });
     });
   },
  'change #scanningFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var scanningFiles2 = $("#scanningFiles2").val();
        var noValue = "";
        if(scanningFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("scanningFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var scanningFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var scanningFiles2Id = fileObj._id;

            var fullPath = document.getElementById("scanningFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#scanningFiles2").val(scanningFiles2);
            $("#scanningFiles2_id").val(scanningFiles2Id);
            document.getElementById("upload_scanningFiles2").innerHTML = filename; //no jquery
            Session.set("scanningFiles2_id", scanningFiles2Id);
          }
        });
     });
   },
  'change #scanningFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var scanningFiles3 = $("#scanningFiles3").val();
        var noValue = "";
        if(scanningFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("scanningFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var scanningFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var scanningFiles3Id = fileObj._id;

            var fullPath = document.getElementById("scanningFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#scanningFiles3").val(scanningFiles3);
            $("#scanningFiles3_id").val(scanningFiles3Id);
            document.getElementById("upload_scanningFiles3").innerHTML = filename; //no jquery
            Session.set("scanningFiles3_id", scanningFiles3Id);
          }
        });
     });
   },
  'change #scanningFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var scanningFiles4 = $("#scanningFiles4").val();
        var noValue = "";
        if(scanningFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("scanningFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var scanningFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var scanningFiles4Id = fileObj._id;

            var fullPath = document.getElementById("scanningFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#scanningFiles4").val(scanningFiles4);
            $("#scanningFiles4_id").val(scanningFiles4Id);
            document.getElementById("upload_scanningFiles4").innerHTML = filename; //no jquery
            Session.set("scanningFiles4_id", scanningFiles4Id);
          }
        });
     });
   },
  'change #scanningFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var scanningFiles5 = $("#scanningFiles5").val();
        var noValue = "";
        if(scanningFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("scanningFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var scanningFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var scanningFiles5Id = fileObj._id;

            var fullPath = document.getElementById("scanningFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#scanningFiles5").val(scanningFiles5);
            $("#scanningFiles5_id").val(scanningFiles5Id);
            document.getElementById("upload_scanningFiles5").innerHTML = filename; //no jquery
            Session.set("scanningFiles5_id", scanningFiles5Id);
          }
        });
     });
   },
})