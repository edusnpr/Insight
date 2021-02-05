import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cases from './pages/Cases';
import About from './pages/About';

function App() {
  return (
    <>
      
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cases" component={Cases} />
          <Route path="/about" component={About} />
          <Route path="/contato" component={About} />
       

        </Switch>
      </Router>
    </>
  );
}

export default App;
