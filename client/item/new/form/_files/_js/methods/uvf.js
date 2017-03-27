Template.files_methods_uvf.events({
  'change #uvfFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uvfFiles1 = $("#uvfFiles1").val();
        var noValue = "";
        if(uvfFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uvfFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uvfFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uvfFiles1Id = fileObj._id;

            var fullPath = document.getElementById("uvfFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uvfFiles1").val(uvfFiles1);
            $("#uvfFiles1_id").val(uvfFiles1Id);
            document.getElementById("upload_uvfFiles1").innerHTML = filename; //no jquery
            Session.set("uvfFiles1_id", uvfFiles1Id);
          }
        });
     });
   },
  'change #uvfFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uvfFiles2 = $("#uvfFiles2").val();
        var noValue = "";
        if(uvfFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uvfFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uvfFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uvfFiles2Id = fileObj._id;

            var fullPath = document.getElementById("uvfFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uvfFiles2").val(uvfFiles2);
            $("#uvfFiles2_id").val(uvfFiles2Id);
            document.getElementById("upload_uvfFiles2").innerHTML = filename; //no jquery
            Session.set("uvfFiles2_id", uvfFiles2Id);
          }
        });
     });
   },
  'change #uvfFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uvfFiles3 = $("#uvfFiles3").val();
        var noValue = "";
        if(uvfFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uvfFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uvfFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uvfFiles3Id = fileObj._id;

            var fullPath = document.getElementById("uvfFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uvfFiles3").val(uvfFiles3);
            $("#uvfFiles3_id").val(uvfFiles3Id);
            document.getElementById("upload_uvfFiles3").innerHTML = filename; //no jquery
            Session.set("uvfFiles3_id", uvfFiles3Id);
          }
        });
     });
   },
  'change #uvfFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uvfFiles4 = $("#uvfFiles4").val();
        var noValue = "";
        if(uvfFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uvfFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uvfFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uvfFiles4Id = fileObj._id;

            var fullPath = document.getElementById("uvfFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uvfFiles4").val(uvfFiles4);
            $("#uvfFiles4_id").val(uvfFiles4Id);
            document.getElementById("upload_uvfFiles4").innerHTML = filename; //no jquery
            Session.set("uvfFiles4_id", uvfFiles4Id);
          }
        });
     });
   },
  'change #uvfFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uvfFiles5 = $("#uvfFiles5").val();
        var noValue = "";
        if(uvfFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uvfFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uvfFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uvfFiles5Id = fileObj._id;

            var fullPath = document.getElementById("uvfFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uvfFiles5").val(uvfFiles5);
            $("#uvfFiles5_id").val(uvfFiles5Id);
            document.getElementById("upload_uvfFiles5").innerHTML = filename; //no jquery
            Session.set("uvfFiles5_id", uvfFiles5Id);
          }
        });
     });
   },
})