Template.mainGallery.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
