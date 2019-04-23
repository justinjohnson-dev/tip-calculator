// Tip - Calculator

let tipSlider = function(){
  let slider = $('.tip-slider')
    range = $('.range-slider-range'),
    value = $('.range-slider-value');

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
    });
  });
};

splitSlider();

function calculatingTotal() {
  let checkAmount = document.getElementById('check-amount').value;
  let rangeAmount = document.getElementById('rangeSplit');
  let splitt = document.getElementById('split');

  console.log(splitt);
  console.log(rangeAmount);

  document.getElementById('bill-total').value = checkAmount;
  document.getElementById('split-total').value = splitt;
}
