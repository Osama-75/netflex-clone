import React, { useEffect } from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';
import HomeScreen from './main/HomeScreen';
import Login from './main/Auth/Login';
import { auth } from './firebase/firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import SavedShows from './components/Parts/SavedShows';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth){
        dispatch(
          login({
            uid: userAuth.uid,
            email :userAuth.email
          })
        )

      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
        {!user ? (<Login />) : ( <Routes>
          <Route path="/savedshows" element={<SavedShows />} />
          <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      
    </div>
  );
}

export default App;
