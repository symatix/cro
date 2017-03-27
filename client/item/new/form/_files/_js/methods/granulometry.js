Template.files_methods_granulometry.events({
  'change #granulometryFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var granulometryFiles1 = $("#granulometryFiles1").val();
        var noValue = "";
        if(granulometryFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("granulometryFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var granulometryFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var granulometryFiles1Id = fileObj._id;

            var fullPath = document.getElementById("granulometryFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#granulometryFiles1").val(granulometryFiles1);
            $("#granulometryFiles1_id").val(granulometryFiles1Id);
            document.getElementById("upload_granulometryFiles1").innerHTML = filename; //no jquery
            Session.set("granulometryFiles1_id", granulometryFiles1Id);
          }
        });
     });
   },
  'change #granulometryFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var granulometryFiles2 = $("#granulometryFiles2").val();
        var noValue = "";
        if(granulometryFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("granulometryFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var granulometryFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var granulometryFiles2Id = fileObj._id;

            var fullPath = document.getElementById("granulometryFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#granulometryFiles2").val(granulometryFiles2);
            $("#granulometryFiles2_id").val(granulometryFiles2Id);
            document.getElementById("upload_granulometryFiles2").innerHTML = filename; //no jquery
            Session.set("granulometryFiles2_id", granulometryFiles2Id);
          }
        });
     });
   },
  'change #granulometryFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var granulometryFiles3 = $("#granulometryFiles3").val();
        var noValue = "";
        if(granulometryFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("granulometryFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var granulometryFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var granulometryFiles3Id = fileObj._id;

            var fullPath = document.getElementById("granulometryFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#granulometryFiles3").val(granulometryFiles3);
            $("#granulometryFiles3_id").val(granulometryFiles3Id);
            document.getElementById("upload_granulometryFiles3").innerHTML = filename; //no jquery
            Session.set("granulometryFiles3_id", granulometryFiles3Id);
          }
        });
     });
   },
  'change #granulometryFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var granulometryFiles4 = $("#granulometryFiles4").val();
        var noValue = "";
        if(granulometryFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("granulometryFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var granulometryFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var granulometryFiles4Id = fileObj._id;

            var fullPath = document.getElementById("granulometryFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#granulometryFiles4").val(granulometryFiles4);
            $("#granulometryFiles4_id").val(granulometryFiles4Id);
            document.getElementById("upload_granulometryFiles4").innerHTML = filename; //no jquery
            Session.set("granulometryFiles4_id", granulometryFiles4Id);
          }
        });
     });
   },
  'change #granulometryFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var granulometryFiles5 = $("#granulometryFiles5").val();
        var noValue = "";
        if(granulometryFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("granulometryFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var granulometryFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var granulometryFiles5Id = fileObj._id;

            var fullPath = document.getElementById("granulometryFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#granulometryFiles5").val(granulometryFiles5);
            $("#granulometryFiles5_id").val(granulometryFiles5Id);
            document.getElementById("upload_granulometryFiles5").innerHTML = filename; //no jquery
            Session.set("granulometryFiles5_id", granulometryFiles5Id);
          }
        });
     });
   },
})