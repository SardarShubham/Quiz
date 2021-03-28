import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import MainComponent from './Components/MainComponent';
import './App.css';

const App = (props) => {
 
   return(
     <BrowserRouter>
      <div className="App">
        <MainComponent/>
        </div>
      </BrowserRouter>
    );
  }
export default App;
