import logo from './logo.svg';
import Navbar from './components/navbar';
import Newscom  from './components/news';
import Newsitem from './components/newsitem';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react'

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API_KEY
  
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={< Newscom apikey={this.apikey}  key="general" country="in" category="general" />} />
            <Route path="/sports" element={< Newscom  apikey={this.apikey} key="sports"country="in" category="sports" />} />
            <Route path="/business" element={< Newscom  apikey={this.apikey} key="business"country="in" category="business" />} />
            <Route path="/entertainment" element={< Newscom  apikey={this.apikey} key="entertainment"country="in" category="entertainment" />} />
            <Route path="/science" element={< Newscom  apikey={this.apikey} key="science"country="in" category="science" />} />
            <Route path="/health" element={< Newscom  apikey={this.apikey} key="health"country="in" category="health" />} />
            <Route path="/technology" element={< Newscom  apikey={this.apikey} key="technology"country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}


