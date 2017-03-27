Template.files_methods_libs.events({
  'change #libsFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var libsFiles1 = $("#libsFiles1").val();
        var noValue = "";
        if(libsFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("libsFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var libsFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var libsFiles1Id = fileObj._id;

            var fullPath = document.getElementById("libsFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#libsFiles1").val(libsFiles1);
            $("#libsFiles1_id").val(libsFiles1Id);
            document.getElementById("upload_libsFiles1").innerHTML = filename; //no jquery
            Session.set("libsFiles1_id", libsFiles1Id);
          }
        });
     });
   },
  'change #libsFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var libsFiles2 = $("#libsFiles2").val();
        var noValue = "";
        if(libsFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("libsFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var libsFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var libsFiles2Id = fileObj._id;

            var fullPath = document.getElementById("libsFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#libsFiles2").val(libsFiles2);
            $("#libsFiles2_id").val(libsFiles2Id);
            document.getElementById("upload_libsFiles2").innerHTML = filename; //no jquery
            Session.set("libsFiles2_id", libsFiles2Id);
          }
        });
     });
   },
  'change #libsFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var libsFiles3 = $("#libsFiles3").val();
        var noValue = "";
        if(libsFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("libsFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var libsFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var libsFiles3Id = fileObj._id;

            var fullPath = document.getElementById("libsFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#libsFiles3").val(libsFiles3);
            $("#libsFiles3_id").val(libsFiles3Id);
            document.getElementById("upload_libsFiles3").innerHTML = filename; //no jquery
            Session.set("libsFiles3_id", libsFiles3Id);
          }
        });
     });
   },
  'change #libsFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var libsFiles4 = $("#libsFiles4").val();
        var noValue = "";
        if(libsFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("libsFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var libsFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var libsFiles4Id = fileObj._id;

            var fullPath = document.getElementById("libsFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#libsFiles4").val(libsFiles4);
            $("#libsFiles4_id").val(libsFiles4Id);
            document.getElementById("upload_libsFiles4").innerHTML = filename; //no jquery
            Session.set("libsFiles4_id", libsFiles4Id);
          }
        });
     });
   },
  'change #libsFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var libsFiles5 = $("#libsFiles5").val();
        var noValue = "";
        if(libsFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("libsFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var libsFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var libsFiles5Id = fileObj._id;

            var fullPath = document.getElementById("libsFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#libsFiles5").val(libsFiles5);
            $("#libsFiles5_id").val(libsFiles5Id);
            document.getElementById("upload_libsFiles5").innerHTML = filename; //no jquery
            Session.set("libsFiles5_id", libsFiles5Id);
          }
        });
     });
   },
})