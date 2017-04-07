Template.display_fs_basic.helpers({
	data:function(){
		if(this._id){
			var basicFile = [];
			var obj = Prospero.findOne(this._id);
	    	var basic = obj.data.basic;
		    for (var basicId in basic) {
		     	if (basic.hasOwnProperty(basicId)) {
		            var fileId = basic[basicId];
		            if (basicId !== "basic_files_id"){
			            if (fileId){
				            if (fileId[0] !== "/"){
				            	basicFile.push(fileId);
							}
			            }
			        }
				}
			}

		}
		console.log("Data.basic._id: {"+basicFile+"}");
		return Data.find({_id:{$in:basicFile}})
	}
})