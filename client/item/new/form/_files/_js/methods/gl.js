Template.files_methods_gl.events({
  'change #glFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var glFiles1 = $("#glFiles1").val();
        var noValue = "";
        if(glFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("glFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var glFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var glFiles1Id = fileObj._id;

            var fullPath = document.getElementById("glFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#glFiles1").val(glFiles1);
            $("#glFiles1_id").val(glFiles1Id);
            document.getElementById("upload_glFiles1").innerHTML = filename; //no jquery
            Session.set("glFiles1_id", glFiles1Id);
          }
        });
     });
   },
  'change #glFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var glFiles2 = $("#glFiles2").val();
        var noValue = "";
        if(glFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("glFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var glFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var glFiles2Id = fileObj._id;

            var fullPath = document.getElementById("glFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#glFiles2").val(glFiles2);
            $("#glFiles2_id").val(glFiles2Id);
            document.getElementById("upload_glFiles2").innerHTML = filename; //no jquery
            Session.set("glFiles2_id", glFiles2Id);
          }
        });
     });
   },
  'change #glFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var glFiles3 = $("#glFiles3").val();
        var noValue = "";
        if(glFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("glFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var glFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var glFiles3Id = fileObj._id;

            var fullPath = document.getElementById("glFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#glFiles3").val(glFiles3);
            $("#glFiles3_id").val(glFiles3Id);
            document.getElementById("upload_glFiles3").innerHTML = filename; //no jquery
            Session.set("glFiles3_id", glFiles3Id);
          }
        });
     });
   },
  'change #glFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var glFiles4 = $("#glFiles4").val();
        var noValue = "";
        if(glFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("glFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var glFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var glFiles4Id = fileObj._id;

            var fullPath = document.getElementById("glFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#glFiles4").val(glFiles4);
            $("#glFiles4_id").val(glFiles4Id);
            document.getElementById("upload_glFiles4").innerHTML = filename; //no jquery
            Session.set("glFiles4_id", glFiles4Id);
          }
        });
     });
   },
  'change #glFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var glFiles5 = $("#glFiles5").val();
        var noValue = "";
        if(glFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("glFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var glFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var glFiles5Id = fileObj._id;

            var fullPath = document.getElementById("glFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#glFiles5").val(glFiles5);
            $("#glFiles5_id").val(glFiles5Id);
            document.getElementById("upload_glFiles5").innerHTML = filename; //no jquery
            Session.set("glFiles5_id", glFiles5Id);
          }
        });
     });
   },
})