import React, { Component } from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videoList";

const API_KEY = "AIzaSyBi7EAtEStmQGLF_vM2p_Et1aLGvkBgeMM";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], searchTerm: "" }
  }

  handleInputChange = (searchTerm) => {
    this.setState({ searchTerm });
    console.log(searchTerm);
  }

  componentDidMount() {
    // takes object with key and term properties and callback that takes returned data (videos)
    YTSearch({ key: API_KEY, term: "surf" }, (videos) => {
      this.setState( { videos } );
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar handleInputChange={this.handleInputChange} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
