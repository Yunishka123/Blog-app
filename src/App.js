
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Link} from 'react-router-dom'
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from 'react';
import { signOut } from 'firebase/auth';

import { auth } from './firebase-config';



function App() {
  const [isAuth,setIsAuth] = useState(false);



  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
      
    })
  }
  return (
<Router>
<nav>
<>
  <Link to="/">home</Link>
  <Link to="/CreatePost">Create Post</Link>
  </>
  {!isAuth ? <Link to="/Login">Login</Link>: <button onClick={signUserOut}> Log out</button>}
</nav>


  <Routes>
<Route path="/" element={<Home />}/>
<Route path="/CreatePost" element={<CreatePost isAuth = {isAuth} />}/>
<Route path="/Login" element = {<Login setIsAuth={setIsAuth} />}/>
  </Routes>
</Router>
  );
}

export default App;






