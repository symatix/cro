Template.files_methods_c_14.events({
  'change #c_14Files1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var c_14Files1 = $("#c_14Files1").val();
        var noValue = "";
        if(c_14Files1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("c_14Files1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var c_14Files1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var c_14Files1Id = fileObj._id;

            var fullPath = document.getElementById("c_14Files1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#c_14Files1").val(c_14Files1);
            $("#c_14Files1_id").val(c_14Files1Id);
            document.getElementById("upload_c_14Files1").innerHTML = filename; //no jquery
            Session.set("c_14Files1_id", c_14Files1Id);
          }
        });
     });
   },
  'change #c_14Files2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var c_14Files2 = $("#c_14Files2").val();
        var noValue = "";
        if(c_14Files2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("c_14Files2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var c_14Files2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var c_14Files2Id = fileObj._id;

            var fullPath = document.getElementById("c_14Files2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#c_14Files2").val(c_14Files2);
            $("#c_14Files2_id").val(c_14Files2Id);
            document.getElementById("upload_c_14Files2").innerHTML = filename; //no jquery
            Session.set("c_14Files2_id", c_14Files2Id);
          }
        });
     });
   },
  'change #c_14Files3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var c_14Files3 = $("#c_14Files3").val();
        var noValue = "";
        if(c_14Files3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("c_14Files3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var c_14Files3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var c_14Files3Id = fileObj._id;

            var fullPath = document.getElementById("c_14Files3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#c_14Files3").val(c_14Files3);
            $("#c_14Files3_id").val(c_14Files3Id);
            document.getElementById("upload_c_14Files3").innerHTML = filename; //no jquery
            Session.set("c_14Files3_id", c_14Files3Id);
          }
        });
     });
   },
  'change #c_14Files4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var c_14Files4 = $("#c_14Files4").val();
        var noValue = "";
        if(c_14Files4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("c_14Files4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var c_14Files4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var c_14Files4Id = fileObj._id;

            var fullPath = document.getElementById("c_14Files4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#c_14Files4").val(c_14Files4);
            $("#c_14Files4_id").val(c_14Files4Id);
            document.getElementById("upload_c_14Files4").innerHTML = filename; //no jquery
            Session.set("c_14Files4_id", c_14Files4Id);
          }
        });
     });
   },
  'change #c_14Files5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var c_14Files5 = $("#c_14Files5").val();
        var noValue = "";
        if(c_14Files5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("c_14Files5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var c_14Files5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var c_14Files5Id = fileObj._id;

            var fullPath = document.getElementById("c_14Files5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#c_14Files5").val(c_14Files5);
            $("#c_14Files5_id").val(c_14Files5Id);
            document.getElementById("upload_c_14Files5").innerHTML = filename; //no jquery
            Session.set("c_14Files5_id", c_14Files5Id);
          }
        });
     });
   },
})