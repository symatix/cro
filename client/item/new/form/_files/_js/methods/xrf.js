Template.files_methods_xrf.events({
  'change #xrfFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrfFiles1 = $("#xrfFiles1").val();
        var noValue = "";
        if(xrfFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrfFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrfFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrfFiles1Id = fileObj._id;

            var fullPath = document.getElementById("xrfFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrfFiles1").val(xrfFiles1);
            $("#xrfFiles1_id").val(xrfFiles1Id);
            document.getElementById("upload_xrfFiles1").innerHTML = filename; //no jquery
            Session.set("xrfFiles1_id", xrfFiles1Id);
          }
        });
     });
   },
  'change #xrfFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrfFiles2 = $("#xrfFiles2").val();
        var noValue = "";
        if(xrfFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrfFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrfFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrfFiles2Id = fileObj._id;

            var fullPath = document.getElementById("xrfFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrfFiles2").val(xrfFiles2);
            $("#xrfFiles2_id").val(xrfFiles2Id);
            document.getElementById("upload_xrfFiles2").innerHTML = filename; //no jquery
            Session.set("xrfFiles2_id", xrfFiles2Id);
          }
        });
     });
   },
  'change #xrfFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrfFiles3 = $("#xrfFiles3").val();
        var noValue = "";
        if(xrfFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrfFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrfFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrfFiles3Id = fileObj._id;

            var fullPath = document.getElementById("xrfFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrfFiles3").val(xrfFiles3);
            $("#xrfFiles3_id").val(xrfFiles3Id);
            document.getElementById("upload_xrfFiles3").innerHTML = filename; //no jquery
            Session.set("xrfFiles3_id", xrfFiles3Id);
          }
        });
     });
   },
  'change #xrfFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrfFiles4 = $("#xrfFiles4").val();
        var noValue = "";
        if(xrfFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrfFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrfFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrfFiles4Id = fileObj._id;

            var fullPath = document.getElementById("xrfFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrfFiles4").val(xrfFiles4);
            $("#xrfFiles4_id").val(xrfFiles4Id);
            document.getElementById("upload_xrfFiles4").innerHTML = filename; //no jquery
            Session.set("xrfFiles4_id", xrfFiles4Id);
          }
        });
     });
   },
  'change #xrfFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrfFiles5 = $("#xrfFiles5").val();
        var noValue = "";
        if(xrfFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrfFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrfFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrfFiles5Id = fileObj._id;

            var fullPath = document.getElementById("xrfFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrfFiles5").val(xrfFiles5);
            $("#xrfFiles5_id").val(xrfFiles5Id);
            document.getElementById("upload_xrfFiles5").innerHTML = filename; //no jquery
            Session.set("xrfFiles5_id", xrfFiles5Id);
          }
        });
     });
   },
})