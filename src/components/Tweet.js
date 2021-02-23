import React from 'react';
import { DateTime } from 'luxon';

import './Tweet.css';

export const Tweet = (props) => {
  const { name, handle, avatars, content, created_at } = props;
  const readableDate = DateTime.fromMillis(created_at).toLocaleString();
  return (
    <article className="tweet">
      <div className="tweet-header">
        <div className="author">
          <div className="author-avatar">
            <img src={avatars} alt="Girl in a jacket" width="50" height="50" />
          </div>
          <div className="author-name">{name}</div>
        </div>
        <div className="author-handle">{handle}</div>
      </div>
      <div className="tweet-body">{content}</div>
      <div className="tweet-footer">
        <div className="tweet-age">{readableDate}</div>
        <div className="tweet-actions">
          <i className="fas fa-flag fa-xs" />
          <i className="fas fa-retweet fa-xs" />
          <i className="fas fa-heart fa-xs" />
        </div>
      </div>
    </article>
  );
};
