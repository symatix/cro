// is not needed because search filters 10 results
Session.set("siteLimit", 15);
lastScrollTop = 0;
$(window).scroll(function(){
    if($(window).scrollTop() + $(window).height() > $(document).height() - 150) {
      var scrollTop = $(this).scrollTop();
      if (scrollTop > lastScrollTop){
      	Session.set("siteLimit", Session.get("siteLimit") + 8);
      }
      lastScrollTop = scrollTop;
    }
});
