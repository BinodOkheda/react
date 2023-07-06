// MyBooks.js
import React, { useEffect, useState } from 'react';

const MyBooks = ({ deleteBook }) => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('https://odd-pear-cygnet-sock.cyclic.app/api/books');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://odd-pear-cygnet-sock.cyclic.app/api/books/${id}`, { method: 'DELETE' });
      deleteBook(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = async (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    try {
      const response = await fetch(`https://odd-pear-cygnet-sock.cyclic.app/api/books/filter?genre=${selectedFilter}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSort = async (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);

    try {
      const response = await fetch(`https://odd-pear-cygnet-sock.cyclic.app/api/books/sort?sort=${selectedSort}`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>My Books</h2>
      <div>
        <label>Filter by Genre:</label>
        <select value={filter} onChange={handleFilter}>
          <option value="">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Science">Science</option>
          <option value="Comic">Comic</option>
        </select>
      </div>
      <div>
        <label>Sort by Price:</label>
        <select value={sort} onChange={handleSort}>
          <option value="">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div>
        {books.map((book) => (
          <div key={book._id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Description: {book.description}</p>
            <p>Price: {book.price}</p>
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
