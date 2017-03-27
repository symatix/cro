Template.painting_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
Template.sculpture_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
Template.architectural_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
Template.archival_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
Template.archaeological_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
Template.pigment_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})
Template.other_list.events({
  "mouseenter .img-list":function(event){
    var imgSrc = $("#img-front-"+this.__originalId).attr("src");
    var author = Prospero.findOne(this.__originalId).basic.author;
    var title = Prospero.findOne(this.__originalId).basic.title;
    $(".img-modal").attr("src",imgSrc);
    $(".modal-title").text(author+" - "+title);
  }
})