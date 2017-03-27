Template.files_methods_irpIrrIrfc.events({
  'change #irpIrrIrfcFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var irpIrrIrfcFiles1 = $("#irpIrrIrfcFiles1").val();
        var noValue = "";
        if(irpIrrIrfcFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("irpIrrIrfcFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var irpIrrIrfcFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var irpIrrIrfcFiles1Id = fileObj._id;

            var fullPath = document.getElementById("irpIrrIrfcFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#irpIrrIrfcFiles1").val(irpIrrIrfcFiles1);
            $("#irpIrrIrfcFiles1_id").val(irpIrrIrfcFiles1Id);
            document.getElementById("upload_irpIrrIrfcFiles1").innerHTML = filename; //no jquery
            Session.set("irpIrrIrfcFiles1_id", irpIrrIrfcFiles1Id);
          }
        });
     });
   },
  'change #irpIrrIrfcFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var irpIrrIrfcFiles2 = $("#irpIrrIrfcFiles2").val();
        var noValue = "";
        if(irpIrrIrfcFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("irpIrrIrfcFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var irpIrrIrfcFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var irpIrrIrfcFiles2Id = fileObj._id;

            var fullPath = document.getElementById("irpIrrIrfcFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#irpIrrIrfcFiles2").val(irpIrrIrfcFiles2);
            $("#irpIrrIrfcFiles2_id").val(irpIrrIrfcFiles2Id);
            document.getElementById("upload_irpIrrIrfcFiles2").innerHTML = filename; //no jquery
            Session.set("irpIrrIrfcFiles2_id", irpIrrIrfcFiles2Id);
          }
        });
     });
   },
  'change #irpIrrIrfcFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var irpIrrIrfcFiles3 = $("#irpIrrIrfcFiles3").val();
        var noValue = "";
        if(irpIrrIrfcFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("irpIrrIrfcFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var irpIrrIrfcFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var irpIrrIrfcFiles3Id = fileObj._id;

            var fullPath = document.getElementById("irpIrrIrfcFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#irpIrrIrfcFiles3").val(irpIrrIrfcFiles3);
            $("#irpIrrIrfcFiles3_id").val(irpIrrIrfcFiles3Id);
            document.getElementById("upload_irpIrrIrfcFiles3").innerHTML = filename; //no jquery
            Session.set("irpIrrIrfcFiles3_id", irpIrrIrfcFiles3Id);
          }
        });
     });
   },
  'change #irpIrrIrfcFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var irpIrrIrfcFiles4 = $("#irpIrrIrfcFiles4").val();
        var noValue = "";
        if(irpIrrIrfcFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("irpIrrIrfcFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var irpIrrIrfcFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var irpIrrIrfcFiles4Id = fileObj._id;

            var fullPath = document.getElementById("irpIrrIrfcFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#irpIrrIrfcFiles4").val(irpIrrIrfcFiles4);
            $("#irpIrrIrfcFiles4_id").val(irpIrrIrfcFiles4Id);
            document.getElementById("upload_irpIrrIrfcFiles4").innerHTML = filename; //no jquery
            Session.set("irpIrrIrfcFiles4_id", irpIrrIrfcFiles4Id);
          }
        });
     });
   },
  'change #irpIrrIrfcFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var irpIrrIrfcFiles5 = $("#irpIrrIrfcFiles5").val();
        var noValue = "";
        if(irpIrrIrfcFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("irpIrrIrfcFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var irpIrrIrfcFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var irpIrrIrfcFiles5Id = fileObj._id;

            var fullPath = document.getElementById("irpIrrIrfcFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#irpIrrIrfcFiles5").val(irpIrrIrfcFiles5);
            $("#irpIrrIrfcFiles5_id").val(irpIrrIrfcFiles5Id);
            document.getElementById("upload_irpIrrIrfcFiles5").innerHTML = filename; //no jquery
            Session.set("irpIrrIrfcFiles5_id", irpIrrIrfcFiles5Id);
          }
        });
     });
   },
})