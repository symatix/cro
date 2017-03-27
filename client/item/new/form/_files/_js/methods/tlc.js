Template.files_methods_tlc.events({
  'change #tlcFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlcFiles1 = $("#tlcFiles1").val();
        var noValue = "";
        if(tlcFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlcFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlcFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlcFiles1Id = fileObj._id;

            var fullPath = document.getElementById("tlcFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlcFiles1").val(tlcFiles1);
            $("#tlcFiles1_id").val(tlcFiles1Id);
            document.getElementById("upload_tlcFiles1").innerHTML = filename; //no jquery
            Session.set("tlcFiles1_id", tlcFiles1Id);
          }
        });
     });
   },
  'change #tlcFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlcFiles2 = $("#tlcFiles2").val();
        var noValue = "";
        if(tlcFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlcFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlcFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlcFiles2Id = fileObj._id;

            var fullPath = document.getElementById("tlcFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlcFiles2").val(tlcFiles2);
            $("#tlcFiles2_id").val(tlcFiles2Id);
            document.getElementById("upload_tlcFiles2").innerHTML = filename; //no jquery
            Session.set("tlcFiles2_id", tlcFiles2Id);
          }
        });
     });
   },
  'change #tlcFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlcFiles3 = $("#tlcFiles3").val();
        var noValue = "";
        if(tlcFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlcFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlcFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlcFiles3Id = fileObj._id;

            var fullPath = document.getElementById("tlcFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlcFiles3").val(tlcFiles3);
            $("#tlcFiles3_id").val(tlcFiles3Id);
            document.getElementById("upload_tlcFiles3").innerHTML = filename; //no jquery
            Session.set("tlcFiles3_id", tlcFiles3Id);
          }
        });
     });
   },
  'change #tlcFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlcFiles4 = $("#tlcFiles4").val();
        var noValue = "";
        if(tlcFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlcFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlcFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlcFiles4Id = fileObj._id;

            var fullPath = document.getElementById("tlcFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlcFiles4").val(tlcFiles4);
            $("#tlcFiles4_id").val(tlcFiles4Id);
            document.getElementById("upload_tlcFiles4").innerHTML = filename; //no jquery
            Session.set("tlcFiles4_id", tlcFiles4Id);
          }
        });
     });
   },
  'change #tlcFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var tlcFiles5 = $("#tlcFiles5").val();
        var noValue = "";
        if(tlcFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("tlcFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var tlcFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var tlcFiles5Id = fileObj._id;

            var fullPath = document.getElementById("tlcFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#tlcFiles5").val(tlcFiles5);
            $("#tlcFiles5_id").val(tlcFiles5Id);
            document.getElementById("upload_tlcFiles5").innerHTML = filename; //no jquery
            Session.set("tlcFiles5_id", tlcFiles5Id);
          }
        });
     });
   },
})