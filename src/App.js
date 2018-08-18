import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetail";

const API_KEY = "AIzaSyBi7EAtEStmQGLF_vM2p_Et1aLGvkBgeMM";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] }
  }

  handleInputChange = (searchTerm) => {
    YTSearch({ key: API_KEY, term: searchTerm }, (videos) => {
      this.setState( { videos } );
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleInputChange={this.handleInputChange} />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
