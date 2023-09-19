import './App.css';
import Guidelines from './components/Guidelines';
import MovieList from './components/MovieList';

import './guidelines.css'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>React technical test</h1>
      </div>

      <div className="App-body">
        <Guidelines />
        <div className="movie-list-container">
          <MovieList />
        </div>
      </div>

    </div>
  );
}

export default App;
