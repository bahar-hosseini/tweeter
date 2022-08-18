$(document).ready(function() {
  let numberOfchar = 0;
  

  const $input = $('#tweet-text');
  const $counter = $('.counter');
  $input.keypress(function() {
    numberOfchar += 1;
    let characterRemaining = 140 - numberOfchar;

    numberOfchar > 140 ? $counter.text(characterRemaining) && $counter.addClass('counterRed') : $counter.text(numberOfchar);
  
  });
});














// const $button = $('button');
// $button.on('click',(e)=>{

//   const $input = $('#tweet-text');
//   const value = $input.val();
//   const $li = $(`<li>${value}</li>`).text(value);
//   const $mainList = $(`main`);
//   $mainList.prepend($li);
//   $input.val('');
//   $input.focus();
// });