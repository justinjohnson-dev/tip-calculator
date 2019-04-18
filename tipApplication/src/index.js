function calculatingTotal() {
    let checkAmount = document.getElementById('check-amount').value;
    document.getElementById('bill-total').value = checkAmount;
}

let tipSlider = function(){
  let slider = $('.tip-slider'),
    range = $('.range-slider__range'),
    value = $('.range-slider__value');

    slider.each(function(){
      value.each(function(){
        let value = $(this).prev().attr('value');
        $(this).html(value);
    });
    range.on('input', function(){
      $(this).next(value).html(this.value);
   });
  });
};

tipSlider();

let splitSlider = function(){
  let slider = $('.split-between'),
    range = $('.people-split'),
    value = $('.slideValue');

    slider.each(function(){
      value.each(function(){
        let value = $(this).prev().attr('value');
        $(this).html(value);
      });
    range.on('input', function(){
      $(this).next(value).html(this.value);
      console.log(parseInt(value));
    });
  });
};

splitSlider();