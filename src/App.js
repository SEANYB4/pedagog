
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (

    
    <Router>
          <div className="head">
          <h1>Hello English Teachers</h1>
         </div>

         <div>
            <nav className='nav'>
              <ul className='navList'>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/lessons">Lessons</Link>
                </li>
                <li>
                  <Link to="/forum">Forum</Link>
                </li>
              </ul>
            </nav>

            {/* <Routes>
              <Route path="/about">
                <About />
              </Route>

              <Route path='/lessons'>
                <Lessons />
              </Route>

              <Route path='/'>
                <Home />
              </Route>

              <Route path='/forum'>
                <Forum />
              </Route>

            </Routes> */}
         </div>
    </Router>
  );
}



function About() {
  return <h2>Home</h2>
}

function Lessons() {
  return <h2>Lessons</h2>
}

function Home() {
  return <h2>Home</h2>
}

function Forum() {
  return <h2>Forum</h2>
}

export default App;
