Template.files_methods_fors.events({
  'change #forsFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var forsFiles1 = $("#forsFiles1").val();
        var noValue = "";
        if(forsFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("forsFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var forsFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var forsFiles1Id = fileObj._id;

            var fullPath = document.getElementById("forsFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#forsFiles1").val(forsFiles1);
            $("#forsFiles1_id").val(forsFiles1Id);
            document.getElementById("upload_forsFiles1").innerHTML = filename; //no jquery
            Session.set("forsFiles1_id", forsFiles1Id);
          }
        });
     });
   },
  'change #forsFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var forsFiles2 = $("#forsFiles2").val();
        var noValue = "";
        if(forsFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("forsFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var forsFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var forsFiles2Id = fileObj._id;

            var fullPath = document.getElementById("forsFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#forsFiles2").val(forsFiles2);
            $("#forsFiles2_id").val(forsFiles2Id);
            document.getElementById("upload_forsFiles2").innerHTML = filename; //no jquery
            Session.set("forsFiles2_id", forsFiles2Id);
          }
        });
     });
   },
  'change #forsFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var forsFiles3 = $("#forsFiles3").val();
        var noValue = "";
        if(forsFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("forsFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var forsFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var forsFiles3Id = fileObj._id;

            var fullPath = document.getElementById("forsFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#forsFiles3").val(forsFiles3);
            $("#forsFiles3_id").val(forsFiles3Id);
            document.getElementById("upload_forsFiles3").innerHTML = filename; //no jquery
            Session.set("forsFiles3_id", forsFiles3Id);
          }
        });
     });
   },
  'change #forsFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var forsFiles4 = $("#forsFiles4").val();
        var noValue = "";
        if(forsFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("forsFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var forsFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var forsFiles4Id = fileObj._id;

            var fullPath = document.getElementById("forsFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#forsFiles4").val(forsFiles4);
            $("#forsFiles4_id").val(forsFiles4Id);
            document.getElementById("upload_forsFiles4").innerHTML = filename; //no jquery
            Session.set("forsFiles4_id", forsFiles4Id);
          }
        });
     });
   },
  'change #forsFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var forsFiles5 = $("#forsFiles5").val();
        var noValue = "";
        if(forsFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("forsFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var forsFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var forsFiles5Id = fileObj._id;

            var fullPath = document.getElementById("forsFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#forsFiles5").val(forsFiles5);
            $("#forsFiles5_id").val(forsFiles5Id);
            document.getElementById("upload_forsFiles5").innerHTML = filename; //no jquery
            Session.set("forsFiles5_id", forsFiles5Id);
          }
        });
     });
   },
})