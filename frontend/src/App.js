import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  './Home';
import Memorywall from './memorywall';
import {React} from "react";
import CreatePostCard from './createpostcard';
const App = () =>  {
 
    return (
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="memorywall/" element={<Memorywall />} />
        <Route path="createPostCard/" element={<CreatePostCard />} />
  
      </Routes>
    </BrowserRouter>
         

      
    )

   
}

export default App;
