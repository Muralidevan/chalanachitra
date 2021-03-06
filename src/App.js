import './App.css';
import Home from './components/Home'
import searchMovies from './components/Movies'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>


        </nav>
        <section className="container">
          <Route path="/" component={Home} exact={true}/>
          <Route path="/movies" component={searchMovies} exact={true}/>
        </section>
    
   </div>
   </Router>
    
  );
}

export default App;
