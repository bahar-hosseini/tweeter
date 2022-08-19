$(document).ready(function() {

  const $input = $('#tweet-text');
  const $counter = $('.counter');
  
  $input.keyup(function() {
    $(this).val().length > 140 ? $counter.text(140 - $(this).val().length) && $counter.addClass('counterRed') : $counter.text($(this).val().length) && $counter.removeClass('counterRed');
  
  });
});

