Template.files_methods_binderFiller.events({
  'change #binderFillerFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var binderFillerFiles1 = $("#binderFillerFiles1").val();
        var noValue = "";
        if(binderFillerFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("binderFillerFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var binderFillerFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var binderFillerFiles1Id = fileObj._id;

            var fullPath = document.getElementById("binderFillerFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#binderFillerFiles1").val(binderFillerFiles1);
            $("#binderFillerFiles1_id").val(binderFillerFiles1Id);
            document.getElementById("upload_binderFillerFiles1").innerHTML = filename; //no jquery
            Session.set("binderFillerFiles1_id", binderFillerFiles1Id);
          }
        });
     });
   },
  'change #binderFillerFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var binderFillerFiles2 = $("#binderFillerFiles2").val();
        var noValue = "";
        if(binderFillerFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("binderFillerFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var binderFillerFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var binderFillerFiles2Id = fileObj._id;

            var fullPath = document.getElementById("binderFillerFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#binderFillerFiles2").val(binderFillerFiles2);
            $("#binderFillerFiles2_id").val(binderFillerFiles2Id);
            document.getElementById("upload_binderFillerFiles2").innerHTML = filename; //no jquery
            Session.set("binderFillerFiles2_id", binderFillerFiles2Id);
          }
        });
     });
   },
  'change #binderFillerFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var binderFillerFiles3 = $("#binderFillerFiles3").val();
        var noValue = "";
        if(binderFillerFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("binderFillerFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var binderFillerFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var binderFillerFiles3Id = fileObj._id;

            var fullPath = document.getElementById("binderFillerFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#binderFillerFiles3").val(binderFillerFiles3);
            $("#binderFillerFiles3_id").val(binderFillerFiles3Id);
            document.getElementById("upload_binderFillerFiles3").innerHTML = filename; //no jquery
            Session.set("binderFillerFiles3_id", binderFillerFiles3Id);
          }
        });
     });
   },
  'change #binderFillerFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var binderFillerFiles4 = $("#binderFillerFiles4").val();
        var noValue = "";
        if(binderFillerFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("binderFillerFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var binderFillerFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var binderFillerFiles4Id = fileObj._id;

            var fullPath = document.getElementById("binderFillerFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#binderFillerFiles4").val(binderFillerFiles4);
            $("#binderFillerFiles4_id").val(binderFillerFiles4Id);
            document.getElementById("upload_binderFillerFiles4").innerHTML = filename; //no jquery
            Session.set("binderFillerFiles4_id", binderFillerFiles4Id);
          }
        });
     });
   },
  'change #binderFillerFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var binderFillerFiles5 = $("#binderFillerFiles5").val();
        var noValue = "";
        if(binderFillerFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("binderFillerFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var binderFillerFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var binderFillerFiles5Id = fileObj._id;

            var fullPath = document.getElementById("binderFillerFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#binderFillerFiles5").val(binderFillerFiles5);
            $("#binderFillerFiles5_id").val(binderFillerFiles5Id);
            document.getElementById("upload_binderFillerFiles5").innerHTML = filename; //no jquery
            Session.set("binderFillerFiles5_id", binderFillerFiles5Id);
          }
        });
     });
   },
})