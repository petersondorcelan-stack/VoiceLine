import React from 'react';

function Book() {
  return (
    <section className="book-section">
      <h1>Book Your Session</h1>
      <p>
        Ready to connect with a professional interpreter? Click the button below to book your session via our Google Form.
      </p>
      <a className="book-btn" href="https://forms.gle/4CXA9LTY6nAPhxjE8" target="_blank" rel="noopener noreferrer">
        Book Now
      </a>
    </section>
  );
}

export default Book;
