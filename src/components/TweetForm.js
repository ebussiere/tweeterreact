import React, { useState } from 'react';
import './TweetForm.css';

export const TweetForm = (props) => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength >= 0 ? 'black' : 'red' };
   const isDisabled = tweetRemainingLength < 0?'true':'';
  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
    }
  };
  return (
    <section className="tweets">
      {/* <h2>Compose Tweet</h2>  */}
      <form onSubmit={submitTweet} method="POST" action="/tweets">
        <div className="tweet-input">
          <label htmlFor="tweet-field">What are you humming about?</label>
          <textarea
            value={tweetText}
            onChange={(event) => setTweetText(event.target.value)}
            name="text"
            placeholder="Hello World"
            id="tweet-field"
          />
        </div>
        <footer>
          <button className="tweet-btn" type="submit" disabled={isDisabled}>
            Tweet
          </button>
          <output
            style={spanStyle}
            name="counter"
            id="count"
            className="counter"
            htmlFor="tweet-text"
          >
            {tweetRemainingLength}
          </output>
        </footer>
      </form>
    </section>
  );
};
