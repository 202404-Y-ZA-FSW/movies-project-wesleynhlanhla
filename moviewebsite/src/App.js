// import react from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Navbar.jsx';
// import HomePage from './HomePg/HomePg.jsx';
// import Footer from './NavListItems/footer.jsx';
// import MoviesPage from './MoviesPg/Movies.jsx';
// import singleMoviesPg from './SingleActorsPg/SingleActors.jsx';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Navbar />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePg/HomePg';
import Footer from './components/Footer';
import MoviesPage from './pages/MoviesPg/Movies';
import MovieDetailPage from './pages/SingleMoviesPg/SingleMovies';
import ActorsPage from './pages/ActorsPg/Actors';
import ActorDetailPage from './pages/SingleActorsPg/SingleActors';
import SearchPage from './pages/SearchPage'; 

function App() {
  return (
    <Navbar />
  );
}

export default App;

