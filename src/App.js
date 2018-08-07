import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/searchBar";

const API_KEY = "AIzaSyBi7EAtEStmQGLF_vM2p_Et1aLGvkBgeMM";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
