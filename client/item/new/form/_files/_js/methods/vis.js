Template.files_methods_vis.events({
  'change #visFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var visFiles1 = $("#visFiles1").val();
        var noValue = "";
        if(visFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("visFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var visFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var visFiles1Id = fileObj._id;

            var fullPath = document.getElementById("visFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#visFiles1").val(visFiles1);
            $("#visFiles1_id").val(visFiles1Id);
            document.getElementById("upload_visFiles1").innerHTML = filename; //no jquery
            Session.set("visFiles1_id", visFiles1Id);
          }
        });
     });
   },
  'change #visFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var visFiles2 = $("#visFiles2").val();
        var noValue = "";
        if(visFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("visFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var visFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var visFiles2Id = fileObj._id;

            var fullPath = document.getElementById("visFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#visFiles2").val(visFiles2);
            $("#visFiles2_id").val(visFiles2Id);
            document.getElementById("upload_visFiles2").innerHTML = filename; //no jquery
            Session.set("visFiles2_id", visFiles2Id);
          }
        });
     });
   },
  'change #visFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var visFiles3 = $("#visFiles3").val();
        var noValue = "";
        if(visFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("visFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var visFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var visFiles3Id = fileObj._id;

            var fullPath = document.getElementById("visFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#visFiles3").val(visFiles3);
            $("#visFiles3_id").val(visFiles3Id);
            document.getElementById("upload_visFiles3").innerHTML = filename; //no jquery
            Session.set("visFiles3_id", visFiles3Id);
          }
        });
     });
   },
  'change #visFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var visFiles4 = $("#visFiles4").val();
        var noValue = "";
        if(visFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("visFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var visFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var visFiles4Id = fileObj._id;

            var fullPath = document.getElementById("visFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#visFiles4").val(visFiles4);
            $("#visFiles4_id").val(visFiles4Id);
            document.getElementById("upload_visFiles4").innerHTML = filename; //no jquery
            Session.set("visFiles4_id", visFiles4Id);
          }
        });
     });
   },
  'change #visFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var visFiles5 = $("#visFiles5").val();
        var noValue = "";
        if(visFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("visFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var visFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var visFiles5Id = fileObj._id;

            var fullPath = document.getElementById("visFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#visFiles5").val(visFiles5);
            $("#visFiles5_id").val(visFiles5Id);
            document.getElementById("upload_visFiles5").innerHTML = filename; //no jquery
            Session.set("visFiles5_id", visFiles5Id);
          }
        });
     });
   },
})