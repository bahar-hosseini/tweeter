/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


/**
 * A Function to create each tweet
 **/


const createTweetElement = (tweetObj) =>{
// escape function to prevent xxs
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  let $tweet = (` <section class="tweet-container">
    <article id="tweet">
    <div class="userInfo">
  <h3>
    <img src=${escape(tweetObj.user.avatars)}></img>
    ${escape(tweetObj.user.name)}
  </h3>
  <a>${escape(tweetObj.user.handle)}</a>
</div>
  <p>${escape(tweetObj.content.text)}</p>
  <div class="font-awesome">
    <i class="fa-solid fa-flag fa-2xs"></i>
    <i class="fa-solid fa-repeat fa-2xs"></i>
    <i class="fa-solid fa-heart fa-2xs"></i>
  </div>
  <span class="need_to_be_rendered" datetime="2022-08-18T01:48:17Z"> ${timeago.format(new Date())}</span>
</article>
</section>`);

  return $tweet;
};


/**
 * A Function to render tweets
 **/
const renderTweets = (arrTweetObj)=>{
  let $tweet;
  for (const item of arrTweetObj) {
    $tweet = createTweetElement(item);

    $('.main-container').prepend($tweet);
  }


};


/**
 * Post request using ajax
 **/

 $('.warning').hide();
 $('.error').hide();

const $tweetForm = $('form');
$tweetForm.submit((event)=>{
  event.preventDefault();
  const $textAreaField = $('#tweet-text');
  const $inputTerm = $textAreaField.val();
  const url = $tweetForm.attr("action");

  if (!$inputTerm) {
    $('.error').slideDown(400);
  }
  if ($inputTerm.length > 139) {
    $('.warning').slideDown(100);
    $('.warning').fix();
   
  }


  $.ajax({
    type: 'POST',
    url:'/tweets',
    data: $tweetForm.serialize(),
    success :(res)=>{

      window.location.reload(true);
    },
    error:()=>{
      console.error();
    },
  });
});


/**
 * Get request using ajax
 **/
$(document).ready(function() {

  const loadTweets = () =>{
    $.ajax({
      type:'Get',
      url:'/tweets',

      success :(resp)=>{
      
        renderTweets(resp);
      },
      error:(err)=>{
        console.log(err);
      },

    });
  };
  loadTweets();


});







