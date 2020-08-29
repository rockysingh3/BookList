import React, { createContext, useReducer } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  // function getRandomNumber() {
  //   return Math.random() * (1000000 - 0) + 0;
  // }

  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: getRandomNumber() }]);
  // };

  // const removeBook = (ids) => {
  //   setBooks(
  //     books.filter((book) => {
  //       return book.id !== ids;
  //     })
  //   );
  // };

  return (
    // <BookContext.Provider value={{ books, setBooks, addBook, removeBook }}>
    //   {props.children}
    // </BookContext.Provider>
    <BookContext.Provider value={{ books, dispatch}}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
