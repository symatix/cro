Template.files_methods_semSemEdx.events({
  'change #semSemEdxFiles1_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var semSemEdxFiles1 = $("#semSemEdxFiles1").val();
        var noValue = "";
        if(semSemEdxFiles1 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("semSemEdxFiles1_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var semSemEdxFiles1 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var semSemEdxFiles1Id = fileObj._id;

            var fullPath = document.getElementById("semSemEdxFiles1_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#semSemEdxFiles1").val(semSemEdxFiles1);
            $("#semSemEdxFiles1_id").val(semSemEdxFiles1Id);
            document.getElementById("upload_semSemEdxFiles1").innerHTML = filename; //no jquery
            Session.set("semSemEdxFiles1_id", semSemEdxFiles1Id);
          }
        });
     });
   },
  'change #semSemEdxFiles2_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var semSemEdxFiles2 = $("#semSemEdxFiles2").val();
        var noValue = "";
        if(semSemEdxFiles2 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("semSemEdxFiles2_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var semSemEdxFiles2 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var semSemEdxFiles2Id = fileObj._id;

            var fullPath = document.getElementById("semSemEdxFiles2_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#semSemEdxFiles2").val(semSemEdxFiles2);
            $("#semSemEdxFiles2_id").val(semSemEdxFiles2Id);
            document.getElementById("upload_semSemEdxFiles2").innerHTML = filename; //no jquery
            Session.set("semSemEdxFiles2_id", semSemEdxFiles2Id);
          }
        });
     });
   },
  'change #semSemEdxFiles3_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var semSemEdxFiles3 = $("#semSemEdxFiles3").val();
        var noValue = "";
        if(semSemEdxFiles3 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("semSemEdxFiles3_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var semSemEdxFiles3 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var semSemEdxFiles3Id = fileObj._id;

            var fullPath = document.getElementById("semSemEdxFiles3_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#semSemEdxFiles3").val(semSemEdxFiles3);
            $("#semSemEdxFiles3_id").val(semSemEdxFiles3Id);
            document.getElementById("upload_semSemEdxFiles3").innerHTML = filename; //no jquery
            Session.set("semSemEdxFiles3_id", semSemEdxFiles3Id);
          }
        });
     });
   },
  'change #semSemEdxFiles4_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var semSemEdxFiles4 = $("#semSemEdxFiles4").val();
        var noValue = "";
        if(semSemEdxFiles4 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("semSemEdxFiles4_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var semSemEdxFiles4 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var semSemEdxFiles4Id = fileObj._id;

            var fullPath = document.getElementById("semSemEdxFiles4_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#semSemEdxFiles4").val(semSemEdxFiles4);
            $("#semSemEdxFiles4_id").val(semSemEdxFiles4Id);
            document.getElementById("upload_semSemEdxFiles4").innerHTML = filename; //no jquery
            Session.set("semSemEdxFiles4_id", semSemEdxFiles4Id);
          }
        });
     });
   },
  'change #semSemEdxFiles5_label': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var semSemEdxFiles5 = $("#semSemEdxFiles5").val();
        var noValue = "";
        if(semSemEdxFiles5 != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("semSemEdxFiles5_id"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var semSemEdxFiles5 = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var semSemEdxFiles5Id = fileObj._id;

            var fullPath = document.getElementById("semSemEdxFiles5_label").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#semSemEdxFiles5").val(semSemEdxFiles5);
            $("#semSemEdxFiles5_id").val(semSemEdxFiles5Id);
            document.getElementById("upload_semSemEdxFiles5").innerHTML = filename; //no jquery
            Session.set("semSemEdxFiles5_id", semSemEdxFiles5Id);
          }
        });
     });
   },
})