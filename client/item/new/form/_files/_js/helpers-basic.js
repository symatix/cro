Template.form_files_basic.helpers({
	imgFrontSrc:function(){
		var imgId = $("#img_front_id").attr("src");
		if (imgId){
			return true;
		}
	}
})