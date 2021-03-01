import './App.css';
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Profile } from './components/Profile';
import { Tweet } from './components/Tweet';
import { TweetForm } from './components/TweetForm';

const initialTweetData = [
  {
    user: {
      name: 'Newton',
      avatars: 'https://i.imgur.com/73hZDYK.png',
      handle: '@SirIsaac'
    },
    content: {
      text:
        'If I have seen further it is by standing on the shoulders of giants',
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: 'Descartes',
      avatars: 'https://i.imgur.com/nlhLi3I.png',
      handle: '@rd',
    },
    content: {
      text: 'Je pense , donc je suis',
    },
    created_at: 1481113959088,
  },
];

function App() {
  const [tweetData, setTweetData] = useState(initialTweetData);

  const tweets = tweetData.map((tweetData, index) => (
    <Tweet
      key={index}
      name={tweetData.user.name}
      handle={tweetData.user.handle}
      avatars={tweetData.user.avatars}
      content={tweetData.content.text}
      created_at={tweetData.created_at}
    />
  ));

  const addNewTweet = (text) => {
    const newTweet = {
      user: {
        name: 'Descartes',
        avatars: 'https://i.imgur.com/nlhLi3I.png',
        handle: '@rd',
      },
      content: {
        text,
      },
      created_at: Date.now(),
    };
    setTweetData([newTweet, ...tweetData]);
  };
  return (
    <div className="App">
      <Navigation />
      <main>
        <Profile />
        <section className="tweets" >
          <TweetForm addNewTweet={addNewTweet}  />
          <div className="history">{tweets}</div>
        </section>
      </main>
      
      <footer>
        {/* <button className="bottom-toggle">
          <i className="fas fa-angle-double-up" />
        </button> */}
      </footer>
    </div>
  );
}

export default App;
