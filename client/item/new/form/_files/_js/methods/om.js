Template.files_methods_om.events({
  'change #omFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var omFiles1 = $("#omFiles1").val();
        var noValue = "";
        if(omFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("omFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var omFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var omFiles1Id = fileObj._id;

            var fullPath = document.getElementById("omFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#omFiles1").val(omFiles1);
            $("#omFiles1_id").val(omFiles1Id);
            document.getElementById("upload_omFiles1").innerHTML = filename; //no jquery
            Session.set("omFiles1_id", omFiles1Id);
          }
        });
     });
   },
  'change #omFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var omFiles2 = $("#omFiles2").val();
        var noValue = "";
        if(omFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("omFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var omFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var omFiles2Id = fileObj._id;

            var fullPath = document.getElementById("omFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#omFiles2").val(omFiles2);
            $("#omFiles2_id").val(omFiles2Id);
            document.getElementById("upload_omFiles2").innerHTML = filename; //no jquery
            Session.set("omFiles2_id", omFiles2Id);
          }
        });
     });
   },
  'change #omFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var omFiles3 = $("#omFiles3").val();
        var noValue = "";
        if(omFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("omFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var omFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var omFiles3Id = fileObj._id;

            var fullPath = document.getElementById("omFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#omFiles3").val(omFiles3);
            $("#omFiles3_id").val(omFiles3Id);
            document.getElementById("upload_omFiles3").innerHTML = filename; //no jquery
            Session.set("omFiles3_id", omFiles3Id);
          }
        });
     });
   },
  'change #omFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var omFiles4 = $("#omFiles4").val();
        var noValue = "";
        if(omFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("omFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var omFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var omFiles4Id = fileObj._id;

            var fullPath = document.getElementById("omFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#omFiles4").val(omFiles4);
            $("#omFiles4_id").val(omFiles4Id);
            document.getElementById("upload_omFiles4").innerHTML = filename; //no jquery
            Session.set("omFiles4_id", omFiles4Id);
          }
        });
     });
   },
  'change #omFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var omFiles5 = $("#omFiles5").val();
        var noValue = "";
        if(omFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("omFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var omFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var omFiles5Id = fileObj._id;

            var fullPath = document.getElementById("omFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#omFiles5").val(omFiles5);
            $("#omFiles5_id").val(omFiles5Id);
            document.getElementById("upload_omFiles5").innerHTML = filename; //no jquery
            Session.set("omFiles5_id", omFiles5Id);
          }
        });
     });
   },
})