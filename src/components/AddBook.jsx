// AddBook.js
import React, { useState } from 'react';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Fiction');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { title, author, genre, description, price };
    addBook(newBook);
    setTitle('');
    setAuthor('');
    setGenre('Fiction');
    setDescription('');
    setPrice('');
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div>
          <label>Genre:</label>
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="Fiction">Fiction</option>
            <option value="Science">Science</option>
            <option value="Comic">Comic</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBook;
