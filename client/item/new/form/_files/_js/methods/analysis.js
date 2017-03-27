Template.files_methods_analysis.events({
  'change #analysisFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var analysisFiles1 = $("#analysisFiles1").val();
        var noValue = "";
        if(analysisFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("analysisFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var analysisFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var analysisFiles1Id = fileObj._id;

            var fullPath = document.getElementById("analysisFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#analysisFiles1").val(analysisFiles1);
            $("#analysisFiles1_id").val(analysisFiles1Id);
            document.getElementById("upload_analysisFiles1").innerHTML = filename; //no jquery
            Session.set("analysisFiles1_id", analysisFiles1Id);
          }
        });
     });
   },
  'change #analysisFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var analysisFiles2 = $("#analysisFiles2").val();
        var noValue = "";
        if(analysisFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("analysisFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var analysisFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var analysisFiles2Id = fileObj._id;

            var fullPath = document.getElementById("analysisFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#analysisFiles2").val(analysisFiles2);
            $("#analysisFiles2_id").val(analysisFiles2Id);
            document.getElementById("upload_analysisFiles2").innerHTML = filename; //no jquery
            Session.set("analysisFiles2_id", analysisFiles2Id);
          }
        });
     });
   },
  'change #analysisFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var analysisFiles3 = $("#analysisFiles3").val();
        var noValue = "";
        if(analysisFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("analysisFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var analysisFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var analysisFiles3Id = fileObj._id;

            var fullPath = document.getElementById("analysisFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#analysisFiles3").val(analysisFiles3);
            $("#analysisFiles3_id").val(analysisFiles3Id);
            document.getElementById("upload_analysisFiles3").innerHTML = filename; //no jquery
            Session.set("analysisFiles3_id", analysisFiles3Id);
          }
        });
     });
   },
  'change #analysisFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var analysisFiles4 = $("#analysisFiles4").val();
        var noValue = "";
        if(analysisFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("analysisFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var analysisFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var analysisFiles4Id = fileObj._id;

            var fullPath = document.getElementById("analysisFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#analysisFiles4").val(analysisFiles4);
            $("#analysisFiles4_id").val(analysisFiles4Id);
            document.getElementById("upload_analysisFiles4").innerHTML = filename; //no jquery
            Session.set("analysisFiles4_id", analysisFiles4Id);
          }
        });
     });
   },
  'change #analysisFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var analysisFiles5 = $("#analysisFiles5").val();
        var noValue = "";
        if(analysisFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("analysisFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var analysisFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var analysisFiles5Id = fileObj._id;

            var fullPath = document.getElementById("analysisFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#analysisFiles5").val(analysisFiles5);
            $("#analysisFiles5_id").val(analysisFiles5Id);
            document.getElementById("upload_analysisFiles5").innerHTML = filename; //no jquery
            Session.set("analysisFiles5_id", analysisFiles5Id);
          }
        });
     });
   },
})