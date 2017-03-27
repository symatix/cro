Template.files_methods_ft_ir.events({
  'change #fr_irFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var fr_irFiles1 = $("#fr_irFiles1").val();
        var noValue = "";
        if(fr_irFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("fr_irFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var fr_irFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var fr_irFiles1Id = fileObj._id;

            var fullPath = document.getElementById("fr_irFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#fr_irFiles1").val(fr_irFiles1);
            $("#fr_irFiles1_id").val(fr_irFiles1Id);
            document.getElementById("upload_fr_irFiles1").innerHTML = filename; //no jquery
            Session.set("fr_irFiles1_id", fr_irFiles1Id);
          }
        });
     });
   },
  'change #fr_irFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var fr_irFiles2 = $("#fr_irFiles2").val();
        var noValue = "";
        if(fr_irFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("fr_irFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var fr_irFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var fr_irFiles2Id = fileObj._id;

            var fullPath = document.getElementById("fr_irFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#fr_irFiles2").val(fr_irFiles2);
            $("#fr_irFiles2_id").val(fr_irFiles2Id);
            document.getElementById("upload_fr_irFiles2").innerHTML = filename; //no jquery
            Session.set("fr_irFiles2_id", fr_irFiles2Id);
          }
        });
     });
   },
  'change #fr_irFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var fr_irFiles3 = $("#fr_irFiles3").val();
        var noValue = "";
        if(fr_irFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("fr_irFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var fr_irFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var fr_irFiles3Id = fileObj._id;

            var fullPath = document.getElementById("fr_irFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#fr_irFiles3").val(fr_irFiles3);
            $("#fr_irFiles3_id").val(fr_irFiles3Id);
            document.getElementById("upload_fr_irFiles3").innerHTML = filename; //no jquery
            Session.set("fr_irFiles3_id", fr_irFiles3Id);
          }
        });
     });
   },
  'change #fr_irFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var fr_irFiles4 = $("#fr_irFiles4").val();
        var noValue = "";
        if(fr_irFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("fr_irFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var fr_irFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var fr_irFiles4Id = fileObj._id;

            var fullPath = document.getElementById("fr_irFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#fr_irFiles4").val(fr_irFiles4);
            $("#fr_irFiles4_id").val(fr_irFiles4Id);
            document.getElementById("upload_fr_irFiles4").innerHTML = filename; //no jquery
            Session.set("fr_irFiles4_id", fr_irFiles4Id);
          }
        });
     });
   },
  'change #fr_irFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var fr_irFiles5 = $("#fr_irFiles5").val();
        var noValue = "";
        if(fr_irFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("fr_irFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var fr_irFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var fr_irFiles5Id = fileObj._id;

            var fullPath = document.getElementById("fr_irFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#fr_irFiles5").val(fr_irFiles5);
            $("#fr_irFiles5_id").val(fr_irFiles5Id);
            document.getElementById("upload_fr_irFiles5").innerHTML = filename; //no jquery
            Session.set("fr_irFiles5_id", fr_irFiles5Id);
          }
        });
     });
   },
})