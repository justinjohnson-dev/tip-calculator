// Tip - Calculator

let range = $('.range-slider-range');
let value = $('.range-slider-value');


let tipSlider = function(){
  let slider = $('.tip-slider')
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


  let foo = parseInt(value);
  
  let theTotal = checkAmount * 0.15;
  let finalTotal = parseInt(checkAmount);

  document.getElementById('split-total').value = theTotal;
  document.getElementById('bill-total').value = theTotal + finalTotal;
}
