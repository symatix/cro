Template.files_methods_tl.events({
  'change #tlFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlFiles1 = $("#tlFiles1").val();
        var noValue = "";
        if(tlFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlFiles1Id = fileObj._id;

            var fullPath = document.getElementById("tlFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlFiles1").val(tlFiles1);
            $("#tlFiles1_id").val(tlFiles1Id);
            document.getElementById("upload_tlFiles1").innerHTML = filename; //no jquery
            Session.set("tlFiles1_id", tlFiles1Id);
          }
        });
     });
   },
  'change #tlFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlFiles2 = $("#tlFiles2").val();
        var noValue = "";
        if(tlFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlFiles2Id = fileObj._id;

            var fullPath = document.getElementById("tlFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlFiles2").val(tlFiles2);
            $("#tlFiles2_id").val(tlFiles2Id);
            document.getElementById("upload_tlFiles2").innerHTML = filename; //no jquery
            Session.set("tlFiles2_id", tlFiles2Id);
          }
        });
     });
   },
  'change #tlFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlFiles3 = $("#tlFiles3").val();
        var noValue = "";
        if(tlFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlFiles3Id = fileObj._id;

            var fullPath = document.getElementById("tlFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlFiles3").val(tlFiles3);
            $("#tlFiles3_id").val(tlFiles3Id);
            document.getElementById("upload_tlFiles3").innerHTML = filename; //no jquery
            Session.set("tlFiles3_id", tlFiles3Id);
          }
        });
     });
   },
  'change #tlFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlFiles4 = $("#tlFiles4").val();
        var noValue = "";
        if(tlFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlFiles4Id = fileObj._id;

            var fullPath = document.getElementById("tlFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlFiles4").val(tlFiles4);
            $("#tlFiles4_id").val(tlFiles4Id);
            document.getElementById("upload_tlFiles4").innerHTML = filename; //no jquery
            Session.set("tlFiles4_id", tlFiles4Id);
          }
        });
     });
   },
  'change #tlFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlFiles5 = $("#tlFiles5").val();
        var noValue = "";
        if(tlFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlFiles5Id = fileObj._id;

            var fullPath = document.getElementById("tlFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlFiles5").val(tlFiles5);
            $("#tlFiles5_id").val(tlFiles5Id);
            document.getElementById("upload_tlFiles5").innerHTML = filename; //no jquery
            Session.set("tlFiles5_id", tlFiles5Id);
          }
        });
     });
   },
})