import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviesPage from './Pages/MoviesPg/Movies';
// import DropdownMenu from './DropdownMenu/DropDownMenu';

function App() {
  return (
    <div> 
      <Header />
      <MoviesPage />
      {/* <DropdownMenu /> */}
    </div>
  );
}

export default App;

