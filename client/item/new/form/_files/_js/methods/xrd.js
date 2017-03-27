Template.files_methods_xrd.events({
  'change #xrdFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrdFiles1 = $("#xrdFiles1").val();
        var noValue = "";
        if(xrdFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrdFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrdFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrdFiles1Id = fileObj._id;

            var fullPath = document.getElementById("xrdFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrdFiles1").val(xrdFiles1);
            $("#xrdFiles1_id").val(xrdFiles1Id);
            document.getElementById("upload_xrdFiles1").innerHTML = filename; //no jquery
            Session.set("xrdFiles1_id", xrdFiles1Id);
          }
        });
     });
   },
  'change #xrdFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrdFiles2 = $("#xrdFiles2").val();
        var noValue = "";
        if(xrdFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrdFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrdFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrdFiles2Id = fileObj._id;

            var fullPath = document.getElementById("xrdFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrdFiles2").val(xrdFiles2);
            $("#xrdFiles2_id").val(xrdFiles2Id);
            document.getElementById("upload_xrdFiles2").innerHTML = filename; //no jquery
            Session.set("xrdFiles2_id", xrdFiles2Id);
          }
        });
     });
   },
  'change #xrdFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrdFiles3 = $("#xrdFiles3").val();
        var noValue = "";
        if(xrdFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrdFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrdFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrdFiles3Id = fileObj._id;

            var fullPath = document.getElementById("xrdFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrdFiles3").val(xrdFiles3);
            $("#xrdFiles3_id").val(xrdFiles3Id);
            document.getElementById("upload_xrdFiles3").innerHTML = filename; //no jquery
            Session.set("xrdFiles3_id", xrdFiles3Id);
          }
        });
     });
   },
  'change #xrdFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrdFiles4 = $("#xrdFiles4").val();
        var noValue = "";
        if(xrdFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrdFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrdFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrdFiles4Id = fileObj._id;

            var fullPath = document.getElementById("xrdFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrdFiles4").val(xrdFiles4);
            $("#xrdFiles4_id").val(xrdFiles4Id);
            document.getElementById("upload_xrdFiles4").innerHTML = filename; //no jquery
            Session.set("xrdFiles4_id", xrdFiles4Id);
          }
        });
     });
   },
  'change #xrdFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var xrdFiles5 = $("#xrdFiles5").val();
        var noValue = "";
        if(xrdFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("xrdFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var xrdFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var xrdFiles5Id = fileObj._id;

            var fullPath = document.getElementById("xrdFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#xrdFiles5").val(xrdFiles5);
            $("#xrdFiles5_id").val(xrdFiles5Id);
            document.getElementById("upload_xrdFiles5").innerHTML = filename; //no jquery
            Session.set("xrdFiles5_id", xrdFiles5Id);
          }
        });
     });
   },
})