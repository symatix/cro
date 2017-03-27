Template.files_methods_rs.events({
  'change #rsFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rsFiles1 = $("#rsFiles1").val();
        var noValue = "";
        if(rsFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rsFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rsFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rsFiles1Id = fileObj._id;

            var fullPath = document.getElementById("rsFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rsFiles1").val(rsFiles1);
            $("#rsFiles1_id").val(rsFiles1Id);
            document.getElementById("upload_rsFiles1").innerHTML = filename; //no jquery
            Session.set("rsFiles1_id", rsFiles1Id);
          }
        });
     });
   },
  'change #rsFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rsFiles2 = $("#rsFiles2").val();
        var noValue = "";
        if(rsFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rsFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rsFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rsFiles2Id = fileObj._id;

            var fullPath = document.getElementById("rsFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rsFiles2").val(rsFiles2);
            $("#rsFiles2_id").val(rsFiles2Id);
            document.getElementById("upload_rsFiles2").innerHTML = filename; //no jquery
            Session.set("rsFiles2_id", rsFiles2Id);
          }
        });
     });
   },
  'change #rsFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rsFiles3 = $("#rsFiles3").val();
        var noValue = "";
        if(rsFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rsFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rsFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rsFiles3Id = fileObj._id;

            var fullPath = document.getElementById("rsFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rsFiles3").val(rsFiles3);
            $("#rsFiles3_id").val(rsFiles3Id);
            document.getElementById("upload_rsFiles3").innerHTML = filename; //no jquery
            Session.set("rsFiles3_id", rsFiles3Id);
          }
        });
     });
   },
  'change #rsFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rsFiles4 = $("#rsFiles4").val();
        var noValue = "";
        if(rsFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rsFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rsFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rsFiles4Id = fileObj._id;

            var fullPath = document.getElementById("rsFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rsFiles4").val(rsFiles4);
            $("#rsFiles4_id").val(rsFiles4Id);
            document.getElementById("upload_rsFiles4").innerHTML = filename; //no jquery
            Session.set("rsFiles4_id", rsFiles4Id);
          }
        });
     });
   },
  'change #rsFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rsFiles5 = $("#rsFiles5").val();
        var noValue = "";
        if(rsFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rsFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rsFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rsFiles5Id = fileObj._id;

            var fullPath = document.getElementById("rsFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rsFiles5").val(rsFiles5);
            $("#rsFiles5_id").val(rsFiles5Id);
            document.getElementById("upload_rsFiles5").innerHTML = filename; //no jquery
            Session.set("rsFiles5_id", rsFiles5Id);
          }
        });
     });
   },
})