Template.files_methods_pige.events({
  'change #pigeFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pigeFiles1 = $("#pigeFiles1").val();
        var noValue = "";
        if(pigeFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pigeFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pigeFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pigeFiles1Id = fileObj._id;

            var fullPath = document.getElementById("pigeFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pigeFiles1").val(pigeFiles1);
            $("#pigeFiles1_id").val(pigeFiles1Id);
            document.getElementById("upload_pigeFiles1").innerHTML = filename; //no jquery
            Session.set("pigeFiles1_id", pigeFiles1Id);
          }
        });
     });
   },
  'change #pigeFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pigeFiles2 = $("#pigeFiles2").val();
        var noValue = "";
        if(pigeFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pigeFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pigeFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pigeFiles2Id = fileObj._id;

            var fullPath = document.getElementById("pigeFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pigeFiles2").val(pigeFiles2);
            $("#pigeFiles2_id").val(pigeFiles2Id);
            document.getElementById("upload_pigeFiles2").innerHTML = filename; //no jquery
            Session.set("pigeFiles2_id", pigeFiles2Id);
          }
        });
     });
   },
  'change #pigeFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pigeFiles3 = $("#pigeFiles3").val();
        var noValue = "";
        if(pigeFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pigeFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pigeFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pigeFiles3Id = fileObj._id;

            var fullPath = document.getElementById("pigeFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pigeFiles3").val(pigeFiles3);
            $("#pigeFiles3_id").val(pigeFiles3Id);
            document.getElementById("upload_pigeFiles3").innerHTML = filename; //no jquery
            Session.set("pigeFiles3_id", pigeFiles3Id);
          }
        });
     });
   },
  'change #pigeFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pigeFiles4 = $("#pigeFiles4").val();
        var noValue = "";
        if(pigeFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pigeFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pigeFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pigeFiles4Id = fileObj._id;

            var fullPath = document.getElementById("pigeFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pigeFiles4").val(pigeFiles4);
            $("#pigeFiles4_id").val(pigeFiles4Id);
            document.getElementById("upload_pigeFiles4").innerHTML = filename; //no jquery
            Session.set("pigeFiles4_id", pigeFiles4Id);
          }
        });
     });
   },
  'change #pigeFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var pigeFiles5 = $("#pigeFiles5").val();
        var noValue = "";
        if(pigeFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("pigeFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var pigeFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var pigeFiles5Id = fileObj._id;

            var fullPath = document.getElementById("pigeFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#pigeFiles5").val(pigeFiles5);
            $("#pigeFiles5_id").val(pigeFiles5Id);
            document.getElementById("upload_pigeFiles5").innerHTML = filename; //no jquery
            Session.set("pigeFiles5_id", pigeFiles5Id);
          }
        });
     });
   },
})