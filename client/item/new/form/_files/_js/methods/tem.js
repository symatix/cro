Template.files_methods_tem.events({
  'change #temFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var temFiles1 = $("#temFiles1").val();
        var noValue = "";
        if(temFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("temFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var temFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var temFiles1Id = fileObj._id;

            var fullPath = document.getElementById("temFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#temFiles1").val(temFiles1);
            $("#temFiles1_id").val(temFiles1Id);
            document.getElementById("upload_temFiles1").innerHTML = filename; //no jquery
            Session.set("temFiles1_id", temFiles1Id);
          }
        });
     });
   },
  'change #temFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var temFiles2 = $("#temFiles2").val();
        var noValue = "";
        if(temFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("temFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var temFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var temFiles2Id = fileObj._id;

            var fullPath = document.getElementById("temFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#temFiles2").val(temFiles2);
            $("#temFiles2_id").val(temFiles2Id);
            document.getElementById("upload_temFiles2").innerHTML = filename; //no jquery
            Session.set("temFiles2_id", temFiles2Id);
          }
        });
     });
   },
  'change #temFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var temFiles3 = $("#temFiles3").val();
        var noValue = "";
        if(temFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("temFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var temFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var temFiles3Id = fileObj._id;

            var fullPath = document.getElementById("temFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#temFiles3").val(temFiles3);
            $("#temFiles3_id").val(temFiles3Id);
            document.getElementById("upload_temFiles3").innerHTML = filename; //no jquery
            Session.set("temFiles3_id", temFiles3Id);
          }
        });
     });
   },
  'change #temFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var temFiles4 = $("#temFiles4").val();
        var noValue = "";
        if(temFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("temFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var temFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var temFiles4Id = fileObj._id;

            var fullPath = document.getElementById("temFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#temFiles4").val(temFiles4);
            $("#temFiles4_id").val(temFiles4Id);
            document.getElementById("upload_temFiles4").innerHTML = filename; //no jquery
            Session.set("temFiles4_id", temFiles4Id);
          }
        });
     });
   },
  'change #temFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var temFiles5 = $("#temFiles5").val();
        var noValue = "";
        if(temFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("temFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var temFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var temFiles5Id = fileObj._id;

            var fullPath = document.getElementById("temFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#temFiles5").val(temFiles5);
            $("#temFiles5_id").val(temFiles5Id);
            document.getElementById("upload_temFiles5").innerHTML = filename; //no jquery
            Session.set("temFiles5_id", temFiles5Id);
          }
        });
     });
   },
})