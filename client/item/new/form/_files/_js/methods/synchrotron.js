Template.files_methods_synchrotron.events({
  'change #synchrotronFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var synchrotronFiles1 = $("#synchrotronFiles1").val();
        var noValue = "";
        if(synchrotronFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("synchrotronFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var synchrotronFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var synchrotronFiles1Id = fileObj._id;

            var fullPath = document.getElementById("synchrotronFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#synchrotronFiles1").val(synchrotronFiles1);
            $("#synchrotronFiles1_id").val(synchrotronFiles1Id);
            document.getElementById("upload_synchrotronFiles1").innerHTML = filename; //no jquery
            Session.set("synchrotronFiles1_id", synchrotronFiles1Id);
          }
        });
     });
   },
  'change #synchrotronFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var synchrotronFiles2 = $("#synchrotronFiles2").val();
        var noValue = "";
        if(synchrotronFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("synchrotronFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var synchrotronFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var synchrotronFiles2Id = fileObj._id;

            var fullPath = document.getElementById("synchrotronFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#synchrotronFiles2").val(synchrotronFiles2);
            $("#synchrotronFiles2_id").val(synchrotronFiles2Id);
            document.getElementById("upload_synchrotronFiles2").innerHTML = filename; //no jquery
            Session.set("synchrotronFiles2_id", synchrotronFiles2Id);
          }
        });
     });
   },
  'change #synchrotronFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var synchrotronFiles3 = $("#synchrotronFiles3").val();
        var noValue = "";
        if(synchrotronFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("synchrotronFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var synchrotronFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var synchrotronFiles3Id = fileObj._id;

            var fullPath = document.getElementById("synchrotronFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#synchrotronFiles3").val(synchrotronFiles3);
            $("#synchrotronFiles3_id").val(synchrotronFiles3Id);
            document.getElementById("upload_synchrotronFiles3").innerHTML = filename; //no jquery
            Session.set("synchrotronFiles3_id", synchrotronFiles3Id);
          }
        });
     });
   },
  'change #synchrotronFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var synchrotronFiles4 = $("#synchrotronFiles4").val();
        var noValue = "";
        if(synchrotronFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("synchrotronFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var synchrotronFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var synchrotronFiles4Id = fileObj._id;

            var fullPath = document.getElementById("synchrotronFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#synchrotronFiles4").val(synchrotronFiles4);
            $("#synchrotronFiles4_id").val(synchrotronFiles4Id);
            document.getElementById("upload_synchrotronFiles4").innerHTML = filename; //no jquery
            Session.set("synchrotronFiles4_id", synchrotronFiles4Id);
          }
        });
     });
   },
  'change #synchrotronFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var synchrotronFiles5 = $("#synchrotronFiles5").val();
        var noValue = "";
        if(synchrotronFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("synchrotronFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var synchrotronFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var synchrotronFiles5Id = fileObj._id;

            var fullPath = document.getElementById("synchrotronFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#synchrotronFiles5").val(synchrotronFiles5);
            $("#synchrotronFiles5_id").val(synchrotronFiles5Id);
            document.getElementById("upload_synchrotronFiles5").innerHTML = filename; //no jquery
            Session.set("synchrotronFiles5_id", synchrotronFiles5Id);
          }
        });
     });
   },
})