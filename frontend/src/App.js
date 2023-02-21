import './App.css';
import Header from "./components/Header/Header"
import { Footer } from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from "./screens/Loginscreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import SingleNote from "./screens/SingleNote";
import React, { useState } from "react";
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';

const App = () => {
  const [search, setSearch] = useState("");

  return ( 
  <BrowserRouter>
  
  <Header setSearch={setSearch}/>
    <Routes>
     <Route path="/" element={<LandingPage />} exact/>
     <Route path="/login" element={<LoginScreen />} exact/>
     <Route path="/profile" element={<ProfileScreen />}/>
     <Route path="/register" element={<RegisterScreen />} exact/>
     <Route path="/createnote" component={CreateNote} exact />
     <Route path="/note/:id" component={SingleNote} /> 
     <Route path="/mynotes" element={<MyNotes search={search} />}/> 
    </Routes>
    <Footer />
 
  </BrowserRouter>
  );
}

export default App;
