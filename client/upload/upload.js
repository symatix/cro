Template.submit_data.helpers({
   data: Data.find() 
});

Template.upload_data.events({

'change #dataInput': function(event, template) {
	event.preventDefault();
      FS.Utility.eachFile(event, function(file) {
        Data.insert(file, function (err, fileObj) {
          if (err){
             console.log("hendlam eror");
          } else {
             // handle success depending what you need to do
            var frontImg = {
              "front_img": "/cfs/files/data/" + fileObj._id
            };
          }
        });
     });
   } 
});