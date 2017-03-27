Template.materials_techniques.events({
  'click .btn_toggleMaterials':function(event){
    event.preventDefault();
    $('.toggleMaterials').slideToggle('').toggleClass('active');
    
    if ($('.toggleMaterials').hasClass('active')) {
      $('.btn_toggleMaterials').text('Expand');
    } else {
      $('.btn_toggleMaterials').text('Colapse');
    }
  }
})