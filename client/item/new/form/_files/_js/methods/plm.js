Template.files_methods_plm.events({
  'change #plmFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var plmFiles1 = $("#plmFiles1").val();
        var noValue = "";
        if(plmFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("plmFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var plmFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var plmFiles1Id = fileObj._id;

            var fullPath = document.getElementById("plmFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#plmFiles1").val(plmFiles1);
            $("#plmFiles1_id").val(plmFiles1Id);
            document.getElementById("upload_plmFiles1").innerHTML = filename; //no jquery
            Session.set("plmFiles1_id", plmFiles1Id);
          }
        });
     });
   },
  'change #plmFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var plmFiles2 = $("#plmFiles2").val();
        var noValue = "";
        if(plmFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("plmFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var plmFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var plmFiles2Id = fileObj._id;

            var fullPath = document.getElementById("plmFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#plmFiles2").val(plmFiles2);
            $("#plmFiles2_id").val(plmFiles2Id);
            document.getElementById("upload_plmFiles2").innerHTML = filename; //no jquery
            Session.set("plmFiles2_id", plmFiles2Id);
          }
        });
     });
   },
  'change #plmFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var plmFiles3 = $("#plmFiles3").val();
        var noValue = "";
        if(plmFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("plmFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var plmFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var plmFiles3Id = fileObj._id;

            var fullPath = document.getElementById("plmFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#plmFiles3").val(plmFiles3);
            $("#plmFiles3_id").val(plmFiles3Id);
            document.getElementById("upload_plmFiles3").innerHTML = filename; //no jquery
            Session.set("plmFiles3_id", plmFiles3Id);
          }
        });
     });
   },
  'change #plmFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var plmFiles4 = $("#plmFiles4").val();
        var noValue = "";
        if(plmFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("plmFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var plmFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var plmFiles4Id = fileObj._id;

            var fullPath = document.getElementById("plmFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#plmFiles4").val(plmFiles4);
            $("#plmFiles4_id").val(plmFiles4Id);
            document.getElementById("upload_plmFiles4").innerHTML = filename; //no jquery
            Session.set("plmFiles4_id", plmFiles4Id);
          }
        });
     });
   },
  'change #plmFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var plmFiles5 = $("#plmFiles5").val();
        var noValue = "";
        if(plmFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("plmFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var plmFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var plmFiles5Id = fileObj._id;

            var fullPath = document.getElementById("plmFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#plmFiles5").val(plmFiles5);
            $("#plmFiles5_id").val(plmFiles5Id);
            document.getElementById("upload_plmFiles5").innerHTML = filename; //no jquery
            Session.set("plmFiles5_id", plmFiles5Id);
          }
        });
     });
   },
})