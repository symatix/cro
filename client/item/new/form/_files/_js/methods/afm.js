Template.files_methods_afm.events({
  'change #afmFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var afmFiles1 = $("#afmFiles1").val();
        var noValue = "";
        if(afmFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("afmFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var afmFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var afmFiles1Id = fileObj._id;

            var fullPath = document.getElementById("afmFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#afmFiles1").val(afmFiles1);
            $("#afmFiles1_id").val(afmFiles1Id);
            document.getElementById("upload_afmFiles1").innerHTML = filename; //no jquery
            Session.set("afmFiles1_id", afmFiles1Id);
          }
        });
     });
   },
  'change #afmFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var afmFiles2 = $("#afmFiles2").val();
        var noValue = "";
        if(afmFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("afmFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var afmFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var afmFiles2Id = fileObj._id;

            var fullPath = document.getElementById("afmFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#afmFiles2").val(afmFiles2);
            $("#afmFiles2_id").val(afmFiles2Id);
            document.getElementById("upload_afmFiles2").innerHTML = filename; //no jquery
            Session.set("afmFiles2_id", afmFiles2Id);
          }
        });
     });
   },
  'change #afmFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var afmFiles3 = $("#afmFiles3").val();
        var noValue = "";
        if(afmFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("afmFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var afmFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var afmFiles3Id = fileObj._id;

            var fullPath = document.getElementById("afmFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#afmFiles3").val(afmFiles3);
            $("#afmFiles3_id").val(afmFiles3Id);
            document.getElementById("upload_afmFiles3").innerHTML = filename; //no jquery
            Session.set("afmFiles3_id", afmFiles3Id);
          }
        });
     });
   },
  'change #afmFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var afmFiles4 = $("#afmFiles4").val();
        var noValue = "";
        if(afmFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("afmFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var afmFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var afmFiles4Id = fileObj._id;

            var fullPath = document.getElementById("afmFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#afmFiles4").val(afmFiles4);
            $("#afmFiles4_id").val(afmFiles4Id);
            document.getElementById("upload_afmFiles4").innerHTML = filename; //no jquery
            Session.set("afmFiles4_id", afmFiles4Id);
          }
        });
     });
   },
  'change #afmFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var afmFiles5 = $("#afmFiles5").val();
        var noValue = "";
        if(afmFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("afmFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var afmFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var afmFiles5Id = fileObj._id;

            var fullPath = document.getElementById("afmFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#afmFiles5").val(afmFiles5);
            $("#afmFiles5_id").val(afmFiles5Id);
            document.getElementById("upload_afmFiles5").innerHTML = filename; //no jquery
            Session.set("afmFiles5_id", afmFiles5Id);
          }
        });
     });
   },
})