import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./checkout";
import Login from "./Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useStateValue} from "./stateProvider";
import { auth} from './firebase';

function App() {
  const [basket, dispatch] = useStateValue();

  useEffect(() =>  {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser   ,       
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    })
    return () => {
      unsubscribe();
    }
  }, [])



   
  return (
    <Router>
      <div className="app">
      <Routes>
        <Route path="/" exact element={<><Header/><Home /></>}>
        
        </Route>
        <Route path="/login" element={<><Header/><Login/></>}>
        </Route>
        <Route path='/checkout' element={<><Header /><Checkout/></>}>
          
        </Route>
      </Routes>
      </div>
    </Router>
  )
}

export default App;
