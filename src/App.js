import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddBook from './components/AddBook';
import MyBooks from './components/MyBooks';

function App() {

  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    // Send a POST request to the backend API to add the book
    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks([...books, data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteBook = (id) => {
    // Send a DELETE request to the backend API to delete the book
    fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBooks(books.filter((book) => book._id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
       
       <h1>Book Collection</h1>
      <AddBook addBook={addBook} />
      <MyBooks deleteBook={deleteBook} />
    </div>
  );
}

export default App;
