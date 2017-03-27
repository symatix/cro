Template.files_methods_rbs.events({
  'change #rbsFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rbsFiles1 = $("#rbsFiles1").val();
        var noValue = "";
        if(rbsFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rbsFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rbsFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rbsFiles1Id = fileObj._id;

            var fullPath = document.getElementById("rbsFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rbsFiles1").val(rbsFiles1);
            $("#rbsFiles1_id").val(rbsFiles1Id);
            document.getElementById("upload_rbsFiles1").innerHTML = filename; //no jquery
            Session.set("rbsFiles1_id", rbsFiles1Id);
          }
        });
     });
   },
  'change #rbsFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rbsFiles2 = $("#rbsFiles2").val();
        var noValue = "";
        if(rbsFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rbsFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rbsFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rbsFiles2Id = fileObj._id;

            var fullPath = document.getElementById("rbsFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rbsFiles2").val(rbsFiles2);
            $("#rbsFiles2_id").val(rbsFiles2Id);
            document.getElementById("upload_rbsFiles2").innerHTML = filename; //no jquery
            Session.set("rbsFiles2_id", rbsFiles2Id);
          }
        });
     });
   },
  'change #rbsFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rbsFiles3 = $("#rbsFiles3").val();
        var noValue = "";
        if(rbsFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rbsFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rbsFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rbsFiles3Id = fileObj._id;

            var fullPath = document.getElementById("rbsFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rbsFiles3").val(rbsFiles3);
            $("#rbsFiles3_id").val(rbsFiles3Id);
            document.getElementById("upload_rbsFiles3").innerHTML = filename; //no jquery
            Session.set("rbsFiles3_id", rbsFiles3Id);
          }
        });
     });
   },
  'change #rbsFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rbsFiles4 = $("#rbsFiles4").val();
        var noValue = "";
        if(rbsFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rbsFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rbsFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rbsFiles4Id = fileObj._id;

            var fullPath = document.getElementById("rbsFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rbsFiles4").val(rbsFiles4);
            $("#rbsFiles4_id").val(rbsFiles4Id);
            document.getElementById("upload_rbsFiles4").innerHTML = filename; //no jquery
            Session.set("rbsFiles4_id", rbsFiles4Id);
          }
        });
     });
   },
  'change #rbsFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rbsFiles5 = $("#rbsFiles5").val();
        var noValue = "";
        if(rbsFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rbsFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rbsFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rbsFiles5Id = fileObj._id;

            var fullPath = document.getElementById("rbsFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rbsFiles5").val(rbsFiles5);
            $("#rbsFiles5_id").val(rbsFiles5Id);
            document.getElementById("upload_rbsFiles5").innerHTML = filename; //no jquery
            Session.set("rbsFiles5_id", rbsFiles5Id);
          }
        });
     });
   },
})