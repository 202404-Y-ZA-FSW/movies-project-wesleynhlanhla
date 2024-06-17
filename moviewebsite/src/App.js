import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviesPage from './Pages/MoviesPg/Movies';

function App() {
  return (
    <div> 
      <Header />
      <MoviesPage />
    </div>
  );
}

export default App;

