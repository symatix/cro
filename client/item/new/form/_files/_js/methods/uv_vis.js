Template.files_methods_uv_vis.events({
  'change #uv_visFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uv_visFiles1 = $("#uv_visFiles1").val();
        var noValue = "";
        if(uv_visFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uv_visFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uv_visFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uv_visFiles1Id = fileObj._id;

            var fullPath = document.getElementById("uv_visFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uv_visFiles1").val(uv_visFiles1);
            $("#uv_visFiles1_id").val(uv_visFiles1Id);
            document.getElementById("upload_uv_visFiles1").innerHTML = filename; //no jquery
            Session.set("uv_visFiles1_id", uv_visFiles1Id);
          }
        });
     });
   },
  'change #uv_visFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uv_visFiles2 = $("#uv_visFiles2").val();
        var noValue = "";
        if(uv_visFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uv_visFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uv_visFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uv_visFiles2Id = fileObj._id;

            var fullPath = document.getElementById("uv_visFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uv_visFiles2").val(uv_visFiles2);
            $("#uv_visFiles2_id").val(uv_visFiles2Id);
            document.getElementById("upload_uv_visFiles2").innerHTML = filename; //no jquery
            Session.set("uv_visFiles2_id", uv_visFiles2Id);
          }
        });
     });
   },
  'change #uv_visFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uv_visFiles3 = $("#uv_visFiles3").val();
        var noValue = "";
        if(uv_visFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uv_visFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uv_visFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uv_visFiles3Id = fileObj._id;

            var fullPath = document.getElementById("uv_visFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uv_visFiles3").val(uv_visFiles3);
            $("#uv_visFiles3_id").val(uv_visFiles3Id);
            document.getElementById("upload_uv_visFiles3").innerHTML = filename; //no jquery
            Session.set("uv_visFiles3_id", uv_visFiles3Id);
          }
        });
     });
   },
  'change #uv_visFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uv_visFiles4 = $("#uv_visFiles4").val();
        var noValue = "";
        if(uv_visFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uv_visFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uv_visFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uv_visFiles4Id = fileObj._id;

            var fullPath = document.getElementById("uv_visFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uv_visFiles4").val(uv_visFiles4);
            $("#uv_visFiles4_id").val(uv_visFiles4Id);
            document.getElementById("upload_uv_visFiles4").innerHTML = filename; //no jquery
            Session.set("uv_visFiles4_id", uv_visFiles4Id);
          }
        });
     });
   },
  'change #uv_visFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var uv_visFiles5 = $("#uv_visFiles5").val();
        var noValue = "";
        if(uv_visFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("uv_visFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var uv_visFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var uv_visFiles5Id = fileObj._id;

            var fullPath = document.getElementById("uv_visFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#uv_visFiles5").val(uv_visFiles5);
            $("#uv_visFiles5_id").val(uv_visFiles5Id);
            document.getElementById("upload_uv_visFiles5").innerHTML = filename; //no jquery
            Session.set("uv_visFiles5_id", uv_visFiles5Id);
          }
        });
     });
   },
})