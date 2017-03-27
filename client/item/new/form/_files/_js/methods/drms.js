Template.files_methods_drms.events({
  'change #drmsFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var drmsFiles1 = $("#drmsFiles1").val();
        var noValue = "";
        if(drmsFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("drmsFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var drmsFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var drmsFiles1Id = fileObj._id;

            var fullPath = document.getElementById("drmsFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#drmsFiles1").val(drmsFiles1);
            $("#drmsFiles1_id").val(drmsFiles1Id);
            document.getElementById("upload_drmsFiles1").innerHTML = filename; //no jquery
            Session.set("drmsFiles1_id", drmsFiles1Id);
          }
        });
     });
   },
  'change #drmsFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var drmsFiles2 = $("#drmsFiles2").val();
        var noValue = "";
        if(drmsFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("drmsFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var drmsFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var drmsFiles2Id = fileObj._id;

            var fullPath = document.getElementById("drmsFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#drmsFiles2").val(drmsFiles2);
            $("#drmsFiles2_id").val(drmsFiles2Id);
            document.getElementById("upload_drmsFiles2").innerHTML = filename; //no jquery
            Session.set("drmsFiles2_id", drmsFiles2Id);
          }
        });
     });
   },
  'change #drmsFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var drmsFiles3 = $("#drmsFiles3").val();
        var noValue = "";
        if(drmsFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("drmsFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var drmsFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var drmsFiles3Id = fileObj._id;

            var fullPath = document.getElementById("drmsFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#drmsFiles3").val(drmsFiles3);
            $("#drmsFiles3_id").val(drmsFiles3Id);
            document.getElementById("upload_drmsFiles3").innerHTML = filename; //no jquery
            Session.set("drmsFiles3_id", drmsFiles3Id);
          }
        });
     });
   },
  'change #drmsFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var drmsFiles4 = $("#drmsFiles4").val();
        var noValue = "";
        if(drmsFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("drmsFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var drmsFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var drmsFiles4Id = fileObj._id;

            var fullPath = document.getElementById("drmsFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#drmsFiles4").val(drmsFiles4);
            $("#drmsFiles4_id").val(drmsFiles4Id);
            document.getElementById("upload_drmsFiles4").innerHTML = filename; //no jquery
            Session.set("drmsFiles4_id", drmsFiles4Id);
          }
        });
     });
   },
  'change #drmsFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var drmsFiles5 = $("#drmsFiles5").val();
        var noValue = "";
        if(drmsFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("drmsFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var drmsFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var drmsFiles5Id = fileObj._id;

            var fullPath = document.getElementById("drmsFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#drmsFiles5").val(drmsFiles5);
            $("#drmsFiles5_id").val(drmsFiles5Id);
            document.getElementById("upload_drmsFiles5").innerHTML = filename; //no jquery
            Session.set("drmsFiles5_id", drmsFiles5Id);
          }
        });
     });
   },
})