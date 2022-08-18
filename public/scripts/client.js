/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const mockDb = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1660609135613
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1660695535613
  }
];


const createTweetElement = (tweetObj) =>{
  let $tweet = (` <section class="tweet-container">
    <article id="tweet">
    <div class="userInfo">
  <h3>
    <img src=${tweetObj.user.avatars}></img>
    ${tweetObj.user.name}
  </h3>
  <a>${tweetObj.user.handle}</a>
</div>
  <p>${tweetObj.content.text}</p>
  <div class="font-awesome">
    <i class="fa-solid fa-flag fa-2xs"></i>
    <i class="fa-solid fa-repeat fa-2xs"></i>
    <i class="fa-solid fa-heart fa-2xs"></i>
  </div>
</article>
</section>`);

  return $tweet;
};



const renderTweets = (arrTweetObj)=>{
  let $tweet;
  for (const item of arrTweetObj) {
    $tweet = createTweetElement(item);

  $('.main-container').prepend($tweet);
  }


};
renderTweets(mockDb);

// const $tweet = $(` <section class="tweet-container">
//     <article id="tweet">
//     <div class="userInfo">
//   <h3>
//     <img src='https://i.imgur.com/73hZDYK.png'></img>
//     Bahar Hosseini
//   </h3>
//   <a>@irIsaac</a>
// </div>
//   <p>Test new Tweet</p>
//   <div class="font-awesome">
//     <i class="fa-solid fa-flag fa-2xs"></i>
//     <i class="fa-solid fa-repeat fa-2xs"></i>
//     <i class="fa-solid fa-heart fa-2xs"></i>
//   </div>
// </article>
// </section>`);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like

