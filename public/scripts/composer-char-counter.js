$(document).ready(function() {
  let numberOfchar = 0;

  const $input = $('#tweet-text');
  const $counter = $('.counter');

  $input.keypress(function() {
    $counter.text(numberOfchar += 1);
    numberOfchar > 140 ? $counter.css('color','red') : null;
  });
});














// const $button = $('button');
// $button.on('click',(e)=>{
//   console.log('i got clicked');

//   const $input = $('#tweet-text');
//   const value = $input.val();
//   const $li = $(`<li>${value}</li>`).text(value);
//   const $mainList = $(`main`);
//   $mainList.prepend($li);
//   $input.val('');
//   $input.focus();
// });