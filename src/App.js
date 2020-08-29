import React from 'react';
import BookListProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';


function App() {
  return (
    <BookListProvider>
      <Navbar />
      <BookList />
      <NewBookForm />
    </BookListProvider>
  );
}

export default App;
