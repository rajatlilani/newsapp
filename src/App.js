
import './App.css';

import {


  BrowserRouter,

} from "react-router-dom";




import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <News />

        </BrowserRouter>
      </div>

    )
  }
}
