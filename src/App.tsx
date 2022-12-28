import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage'
import {First} from "./pages/First";
import {Second} from "./pages/Second";
import {Third} from "./pages/Third";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route index element={<First/>}/>
          <Route path="dog" element={<Second/>}/>
          <Route path="parrot" element={<Third/>}/>
        </Route>
      </Routes>
  );
}

export default App;
