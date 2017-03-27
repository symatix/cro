Template.files_methods_aes.events({
  'change #aesFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aesFiles1 = $("#aesFiles1").val();
        var noValue = "";
        if(aesFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aesFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aesFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aesFiles1Id = fileObj._id;

            var fullPath = document.getElementById("aesFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aesFiles1").val(aesFiles1);
            $("#aesFiles1_id").val(aesFiles1Id);
            document.getElementById("upload_aesFiles1").innerHTML = filename; //no jquery
            Session.set("aesFiles1_id", aesFiles1Id);
          }
        });
     });
   },
  'change #aesFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aesFiles2 = $("#aesFiles2").val();
        var noValue = "";
        if(aesFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aesFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aesFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aesFiles2Id = fileObj._id;

            var fullPath = document.getElementById("aesFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aesFiles2").val(aesFiles2);
            $("#aesFiles2_id").val(aesFiles2Id);
            document.getElementById("upload_aesFiles2").innerHTML = filename; //no jquery
            Session.set("aesFiles2_id", aesFiles2Id);
          }
        });
     });
   },
  'change #aesFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aesFiles3 = $("#aesFiles3").val();
        var noValue = "";
        if(aesFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aesFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aesFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aesFiles3Id = fileObj._id;

            var fullPath = document.getElementById("aesFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aesFiles3").val(aesFiles3);
            $("#aesFiles3_id").val(aesFiles3Id);
            document.getElementById("upload_aesFiles3").innerHTML = filename; //no jquery
            Session.set("aesFiles3_id", aesFiles3Id);
          }
        });
     });
   },
  'change #aesFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aesFiles4 = $("#aesFiles4").val();
        var noValue = "";
        if(aesFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aesFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aesFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aesFiles4Id = fileObj._id;

            var fullPath = document.getElementById("aesFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aesFiles4").val(aesFiles4);
            $("#aesFiles4_id").val(aesFiles4Id);
            document.getElementById("upload_aesFiles4").innerHTML = filename; //no jquery
            Session.set("aesFiles4_id", aesFiles4Id);
          }
        });
     });
   },
  'change #aesFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aesFiles5 = $("#aesFiles5").val();
        var noValue = "";
        if(aesFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aesFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aesFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aesFiles5Id = fileObj._id;

            var fullPath = document.getElementById("aesFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aesFiles5").val(aesFiles5);
            $("#aesFiles5_id").val(aesFiles5Id);
            document.getElementById("upload_aesFiles5").innerHTML = filename; //no jquery
            Session.set("aesFiles5_id", aesFiles5Id);
          }
        });
     });
   },
})