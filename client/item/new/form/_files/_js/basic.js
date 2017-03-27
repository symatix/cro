Template.form_files_basic.events({
  'change #data_img_front': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var img_front = $("#img_front").val();
        var noValue = "";
        if(img_front != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("frontId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror - "+err);
          } else {
             // grabbing url and placing it for gallery img_front value
            var frontImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var frontImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_front").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
            $("#img_front").val(frontImg);
            $("#img_front_id").val(frontImgId);
            document.getElementById("upload_front").innerHTML = filename; //no jquery
            Session.set("frontId", frontImgId);
            console.log(Session.get("frontId"));
          }
        });
     });
   },
  'change #data_img_back': function(event, template) {
    event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        var img_back = $("#img_back").val();
        var noValue = "";
        if(img_back != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("backId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // grabbing url and placing it for gallery img_front value
            var backImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var backImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_back").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_back").val(backImg);
            $("#img_back_id").val(backImgId);
            document.getElementById("upload_back").innerHTML = filename; //no jquery
            Session.set("backId", backImgId);
          }
        });
     });
   },
  'change #data_img_side': function(event, template) {
    event.preventDefault();
      console.log("fajlovi");
      FS.Utility.eachFile(event, function(file) {
        var side = $("#data_img_side").val();
        var noValue = "";
        if(side != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("sideId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // grabbing url and placing it for gallery img_front value
            var sideImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var sideImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_side").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }

            $("#img_side").val(sideImg);
            $("#img_side_id").val(sideImgId);
            document.getElementById("upload_side").innerHTML = filename; //no jquery
            Session.set("sideId", sideImgId);
          }
        });
     });
   },
  'change #data_img_sig': function(event, template) {
    event.preventDefault();
      console.log("fajlovi");
      FS.Utility.eachFile(event, function(file) {
        var sig = $("#data_img_sig").val();
        var noValue = "";
        if(sig != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("sigId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // grabbing url and placing it for gallery img_front value
            var sigImg = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var sigImgId = fileObj._id;

            var fullPath = document.getElementById("data_img_sig").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
              console.log(filename);
            $("#img_signature").val(sigImg);
            $("#img_signature_id").val(sigImgId);
            document.getElementById("upload_signature").innerHTML = filename; //no jquery
            Session.set("sigId", sigImgId);
          }
        });
     });
   },
  'change #data_basic_files': function(event, template) {
    event.preventDefault();
      console.log("fajlovi");
      FS.Utility.eachFile(event, function(file) {
        var sig = $("#data_basic_files").val();
        var noValue = "";
        if(sig != noValue){
          console.log("nema dzabe ni u stare babe")
          Data.remove(Session.get("basicFilesId"));
        }
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // grabbing url and placing it for gallery img_front value
            var basicFile = "/cfs/files/data/" + fileObj._id +"/data?store=data";
            var basicFileId = fileObj._id;

            var fullPath = document.getElementById("data_basic_files").value; //jquery a "no go" lol
            if (fullPath) {
                var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                var filename = fullPath.substring(startIndex);
                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                    filename = filename.substring(1);
                }
              }
              console.log(filename);
            $("#basic_files").val(basicFile);
            $("#basic_files_id").val(basicFileId);
            document.getElementById("upload_basic_files").innerHTML = filename; //no jquery
            Session.set("basicFilesId", basicFileId);
          }
        });
     });
   }
})
