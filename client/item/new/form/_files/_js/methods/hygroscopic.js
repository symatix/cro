Template.files_methods_aas.events({
  'change #aasFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aasFiles1 = $("#aasFiles1").val();
        var noValue = "";
        if(aasFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aasFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aasFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aasFiles1Id = fileObj._id;

            var fullPath = document.getElementById("aasFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aasFiles1").val(aasFiles1);
            $("#aasFiles1_id").val(aasFiles1Id);
            document.getElementById("upload_aasFiles1").innerHTML = filename; //no jquery
            Session.set("aasFiles1_id", aasFiles1Id);
          }
        });
     });
   },
  'change #aasFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aasFiles2 = $("#aasFiles2").val();
        var noValue = "";
        if(aasFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aasFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aasFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aasFiles2Id = fileObj._id;

            var fullPath = document.getElementById("aasFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aasFiles2").val(aasFiles2);
            $("#aasFiles2_id").val(aasFiles2Id);
            document.getElementById("upload_aasFiles2").innerHTML = filename; //no jquery
            Session.set("aasFiles2_id", aasFiles2Id);
          }
        });
     });
   },
  'change #aasFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aasFiles3 = $("#aasFiles3").val();
        var noValue = "";
        if(aasFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aasFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aasFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aasFiles3Id = fileObj._id;

            var fullPath = document.getElementById("aasFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aasFiles3").val(aasFiles3);
            $("#aasFiles3_id").val(aasFiles3Id);
            document.getElementById("upload_aasFiles3").innerHTML = filename; //no jquery
            Session.set("aasFiles3_id", aasFiles3Id);
          }
        });
     });
   },
  'change #aasFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aasFiles4 = $("#aasFiles4").val();
        var noValue = "";
        if(aasFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aasFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aasFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aasFiles4Id = fileObj._id;

            var fullPath = document.getElementById("aasFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aasFiles4").val(aasFiles4);
            $("#aasFiles4_id").val(aasFiles4Id);
            document.getElementById("upload_aasFiles4").innerHTML = filename; //no jquery
            Session.set("aasFiles4_id", aasFiles4Id);
          }
        });
     });
   },
  'change #aasFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var aasFiles5 = $("#aasFiles5").val();
        var noValue = "";
        if(aasFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("aasFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var aasFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var aasFiles5Id = fileObj._id;

            var fullPath = document.getElementById("aasFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#aasFiles5").val(aasFiles5);
            $("#aasFiles5_id").val(aasFiles5Id);
            document.getElementById("upload_aasFiles5").innerHTML = filename; //no jquery
            Session.set("aasFiles5_id", aasFiles5Id);
          }
        });
     });
   },
})