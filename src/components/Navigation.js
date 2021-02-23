import React from 'react';
import './Navigation.css';

export const Navigation = () => (
  <nav>
    <span>tweeter</span>
    <section>
      <span>Write a tweet</span>
      <button>
        <i className="fas fa-angle-double-down" />
      </button>
    </section>
  </nav>
);
