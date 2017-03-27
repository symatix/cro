
Template.form.events({
  'click .btn_toggleBasic':function(event){
    event.preventDefault();
    $('.toggleBasic').slideToggle('slow').toggleClass('active');
    
    if ($('.toggleBasic').hasClass('active')) {
      $('.btn_toggleBasic').text('Expand');
    } else {
      $('.btn_toggleBasic').text('Colapse');
    }
  }
})