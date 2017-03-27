Template.files_methods_xrr.events({
  'change #rtgFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rtgFiles1 = $("#rtgFiles1").val();
        var noValue = "";
        if(rtgFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rtgFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rtgFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rtgFiles1Id = fileObj._id;

            var fullPath = document.getElementById("rtgFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rtgFiles1").val(rtgFiles1);
            $("#rtgFiles1_id").val(rtgFiles1Id);
            document.getElementById("upload_rtgFiles1").innerHTML = filename; //no jquery
            Session.set("rtgFiles1_id", rtgFiles1Id);
          }
        });
     });
   },
  'change #rtgFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rtgFiles2 = $("#rtgFiles2").val();
        var noValue = "";
        if(rtgFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rtgFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rtgFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rtgFiles2Id = fileObj._id;

            var fullPath = document.getElementById("rtgFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rtgFiles2").val(rtgFiles2);
            $("#rtgFiles2_id").val(rtgFiles2Id);
            document.getElementById("upload_rtgFiles2").innerHTML = filename; //no jquery
            Session.set("rtgFiles2_id", rtgFiles2Id);
          }
        });
     });
   },
  'change #rtgFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rtgFiles3 = $("#rtgFiles3").val();
        var noValue = "";
        if(rtgFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rtgFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rtgFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rtgFiles3Id = fileObj._id;

            var fullPath = document.getElementById("rtgFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rtgFiles3").val(rtgFiles3);
            $("#rtgFiles3_id").val(rtgFiles3Id);
            document.getElementById("upload_rtgFiles3").innerHTML = filename; //no jquery
            Session.set("rtgFiles3_id", rtgFiles3Id);
          }
        });
     });
   },
  'change #rtgFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rtgFiles4 = $("#rtgFiles4").val();
        var noValue = "";
        if(rtgFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rtgFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rtgFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rtgFiles4Id = fileObj._id;

            var fullPath = document.getElementById("rtgFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rtgFiles4").val(rtgFiles4);
            $("#rtgFiles4_id").val(rtgFiles4Id);
            document.getElementById("upload_rtgFiles4").innerHTML = filename; //no jquery
            Session.set("rtgFiles4_id", rtgFiles4Id);
          }
        });
     });
   },
  'change #rtgFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var rtgFiles5 = $("#rtgFiles5").val();
        var noValue = "";
        if(rtgFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("rtgFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var rtgFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var rtgFiles5Id = fileObj._id;

            var fullPath = document.getElementById("rtgFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#rtgFiles5").val(rtgFiles5);
            $("#rtgFiles5_id").val(rtgFiles5Id);
            document.getElementById("upload_rtgFiles5").innerHTML = filename; //no jquery
            Session.set("rtgFiles5_id", rtgFiles5Id);
          }
        });
     });
   },
})