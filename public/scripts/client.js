/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// const createTweetElement = (tweetObj) =>{

// };

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

// const $tweet = createTweetElement(tweetData);
const $tweet = $(` <section class="tweet-container">
<ul>
  <li>
    <article id="tweet">
    <div class="userInfo">
  <h3>
    <img src='https://i.imgur.com/73hZDYK.png'></img>
    Bahar Hosseini
  </h3>
  
  <a>@irIsaac</a>
</div>
  <p>Test new Tweet</p>
  <div class="font-awesome">
    <i class="fa-solid fa-flag fa-2xs"></i>
    <i class="fa-solid fa-repeat fa-2xs"></i>
    <i class="fa-solid fa-heart fa-2xs"></i>
  </div>
</article>
</li>
</ul>
</section>`);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.main-container').prepend($tweet);

