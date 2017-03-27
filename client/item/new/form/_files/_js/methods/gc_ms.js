Template.files_methods_gc_ms.events({
  'change #gc_msFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var gc_msFiles1 = $("#gc_msFiles1").val();
        var noValue = "";
        if(gc_msFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("gc_msFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var gc_msFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var gc_msFiles1Id = fileObj._id;

            var fullPath = document.getElementById("gc_msFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#gc_msFiles1").val(gc_msFiles1);
            $("#gc_msFiles1_id").val(gc_msFiles1Id);
            document.getElementById("upload_gc_msFiles1").innerHTML = filename; //no jquery
            Session.set("gc_msFiles1_id", gc_msFiles1Id);
          }
        });
     });
   },
  'change #gc_msFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var gc_msFiles2 = $("#gc_msFiles2").val();
        var noValue = "";
        if(gc_msFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("gc_msFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var gc_msFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var gc_msFiles2Id = fileObj._id;

            var fullPath = document.getElementById("gc_msFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#gc_msFiles2").val(gc_msFiles2);
            $("#gc_msFiles2_id").val(gc_msFiles2Id);
            document.getElementById("upload_gc_msFiles2").innerHTML = filename; //no jquery
            Session.set("gc_msFiles2_id", gc_msFiles2Id);
          }
        });
     });
   },
  'change #gc_msFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var gc_msFiles3 = $("#gc_msFiles3").val();
        var noValue = "";
        if(gc_msFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("gc_msFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var gc_msFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var gc_msFiles3Id = fileObj._id;

            var fullPath = document.getElementById("gc_msFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#gc_msFiles3").val(gc_msFiles3);
            $("#gc_msFiles3_id").val(gc_msFiles3Id);
            document.getElementById("upload_gc_msFiles3").innerHTML = filename; //no jquery
            Session.set("gc_msFiles3_id", gc_msFiles3Id);
          }
        });
     });
   },
  'change #gc_msFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var gc_msFiles4 = $("#gc_msFiles4").val();
        var noValue = "";
        if(gc_msFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("gc_msFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var gc_msFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var gc_msFiles4Id = fileObj._id;

            var fullPath = document.getElementById("gc_msFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#gc_msFiles4").val(gc_msFiles4);
            $("#gc_msFiles4_id").val(gc_msFiles4Id);
            document.getElementById("upload_gc_msFiles4").innerHTML = filename; //no jquery
            Session.set("gc_msFiles4_id", gc_msFiles4Id);
          }
        });
     });
   },
  'change #gc_msFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var gc_msFiles5 = $("#gc_msFiles5").val();
        var noValue = "";
        if(gc_msFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("gc_msFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var gc_msFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var gc_msFiles5Id = fileObj._id;

            var fullPath = document.getElementById("gc_msFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#gc_msFiles5").val(gc_msFiles5);
            $("#gc_msFiles5_id").val(gc_msFiles5Id);
            document.getElementById("upload_gc_msFiles5").innerHTML = filename; //no jquery
            Session.set("gc_msFiles5_id", gc_msFiles5Id);
          }
        });
     });
   },
})