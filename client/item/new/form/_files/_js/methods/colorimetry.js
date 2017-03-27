Template.files_methods_colorimetry.events({
  'change #colorimetryFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var colorimetryFiles1 = $("#colorimetryFiles1").val();
        var noValue = "";
        if(colorimetryFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("colorimetryFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var colorimetryFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var colorimetryFiles1Id = fileObj._id;

            var fullPath = document.getElementById("colorimetryFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#colorimetryFiles1").val(colorimetryFiles1);
            $("#colorimetryFiles1_id").val(colorimetryFiles1Id);
            document.getElementById("upload_colorimetryFiles1").innerHTML = filename; //no jquery
            Session.set("colorimetryFiles1_id", colorimetryFiles1Id);
          }
        });
     });
   },
  'change #colorimetryFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var colorimetryFiles2 = $("#colorimetryFiles2").val();
        var noValue = "";
        if(colorimetryFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("colorimetryFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var colorimetryFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var colorimetryFiles2Id = fileObj._id;

            var fullPath = document.getElementById("colorimetryFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#colorimetryFiles2").val(colorimetryFiles2);
            $("#colorimetryFiles2_id").val(colorimetryFiles2Id);
            document.getElementById("upload_colorimetryFiles2").innerHTML = filename; //no jquery
            Session.set("colorimetryFiles2_id", colorimetryFiles2Id);
          }
        });
     });
   },
  'change #colorimetryFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var colorimetryFiles3 = $("#colorimetryFiles3").val();
        var noValue = "";
        if(colorimetryFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("colorimetryFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var colorimetryFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var colorimetryFiles3Id = fileObj._id;

            var fullPath = document.getElementById("colorimetryFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#colorimetryFiles3").val(colorimetryFiles3);
            $("#colorimetryFiles3_id").val(colorimetryFiles3Id);
            document.getElementById("upload_colorimetryFiles3").innerHTML = filename; //no jquery
            Session.set("colorimetryFiles3_id", colorimetryFiles3Id);
          }
        });
     });
   },
  'change #colorimetryFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var colorimetryFiles4 = $("#colorimetryFiles4").val();
        var noValue = "";
        if(colorimetryFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("colorimetryFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var colorimetryFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var colorimetryFiles4Id = fileObj._id;

            var fullPath = document.getElementById("colorimetryFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#colorimetryFiles4").val(colorimetryFiles4);
            $("#colorimetryFiles4_id").val(colorimetryFiles4Id);
            document.getElementById("upload_colorimetryFiles4").innerHTML = filename; //no jquery
            Session.set("colorimetryFiles4_id", colorimetryFiles4Id);
          }
        });
     });
   },
  'change #colorimetryFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var colorimetryFiles5 = $("#colorimetryFiles5").val();
        var noValue = "";
        if(colorimetryFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("colorimetryFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var colorimetryFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var colorimetryFiles5Id = fileObj._id;

            var fullPath = document.getElementById("colorimetryFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#colorimetryFiles5").val(colorimetryFiles5);
            $("#colorimetryFiles5_id").val(colorimetryFiles5Id);
            document.getElementById("upload_colorimetryFiles5").innerHTML = filename; //no jquery
            Session.set("colorimetryFiles5_id", colorimetryFiles5Id);
          }
        });
     });
   },
})