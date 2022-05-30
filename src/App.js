
import './App.css';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Forum from './Pages/Forum';
import ErrorPage from './Pages/ErrorPage';
import Profile from './Pages/Profile';


function App() {
  return (

    
    <Router>
          <div className="head">
              <h1>Hello English Teachers</h1>
              <div className='login'>
                <button className='loginButton' onClick={console.log('Login')}>LOGIN</button>
              </div> 
          </div>

         <div className='app'>
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
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>

            <Routes>
           
                  <Route path='/' element={<Home />}/>

                  <Route path='/about' element={<About />}/>

                  <Route path='/forum' element={<Forum />}/>

                  <Route path='*' element={<ErrorPage />}/>

                  <Route path='/profile/:username' element={<Profile />}/>

            </Routes>

          <div className='footer'>
            <p>Copyright BainCorp</p>
          </div>


         </div>
    </Router>
  );
}




function Lessons() {
  return <h2>Lessons</h2>
}



export default App;
