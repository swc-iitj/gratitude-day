import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from  './Home';
import Memorywall from './memorywall';
import {React} from "react";
import CreatePostCard from './createpostcard';
const App = () =>  {
 
    return (
     
      <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="memorywall/" element={<Memorywall />} />
        <Route exact path="createPostCard/" element={<CreatePostCard />} />
  
      </Routes>
    </HashRouter>
         

      
    )

   
}

export default App;
