import React from 'react';
import './App.css';
import Reviews from './Reviews';

function App() {
  return (
    <main>
      <section className="container">
        <div className='review-head'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Reviews />
      </section>
    </main>
  );
}

export default App;
