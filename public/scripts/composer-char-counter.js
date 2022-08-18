$(document).ready(function() {
  let numberOfchar = 0;
  

  const $input = $('#tweet-text');
  const $counter = $('.counter');
  $input.keyup(function() {

    // console.log($(this).val().length)



    $(this).val().length > 140 ? $counter.text(140 - $(this).val().length) && $counter.addClass('counterRed') : $counter.text($(this).val().length) && $counter.removeClass('counterRed');
  
  });
});

