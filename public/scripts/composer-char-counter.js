$(document).ready(function() {

  
  const $inputArea = $('#tweet-text');
  const $counter = $('.counter');
 
  $inputArea.on('input',function() {

    const $input = $(this);

    const len = $input.val().length;
    const charLeft = 140 - len;

    $counter.text(charLeft);

    if (charLeft < 0) {
      $counter.addClass('counterRed');
    } else {
      $counter.removeClass('counterRed');
    }

  });




});

