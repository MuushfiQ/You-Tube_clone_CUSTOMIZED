import React, { Component } from 'react';
import VideoDetails from './components/video-details';
import VideoItems from './components/video-items';
import axios from 'axios';
//import { Button } from 'react-bootstrap';
import SearchBar from './components/searchBar';

class App extends Component {

  state = {
    video: [],
    selectedVideo: {},
    searchValue: 'Ted Talks',
    searchterm: 'Ted Talks',
    Id: '',
    title: '',
    description: '',
    url: ''
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ searchValue: value })

  }

  handleHome = (baseSearch) => {
    this.setState({ searchterm: baseSearch })
  }

  handleSearch = () => {
    this.setState({ searchterm: this.state.searchValue });
  }

  onVideoSelect = (video) => {
    this.setState({
      Id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description
    });
  }

  getYouTubeVideos = () => {
    const baseUrl = "https://www.googleapis.com/youtube/v3/search";
    const API_KEY = process.env.REACT_APP_API_KEY;
    const q = this.state.searchterm;
    const url = `${baseUrl}?type=video&part=snippet&key=${API_KEY}&q=${encodeURIComponent(q)}&maxResults=10&videoEmbeddable=true`;

    axios.get(url)
      .then((response) => {
        const items = response.data.items;
        const randomIndex = Math.floor(Math.random() * items.length);
        const video = items[randomIndex];
        this.setState({ video: items, Id: video.id.videoId, title: video.snippet.title, description: video.snippet.description });
      }
      )
      .catch(() => console.log("ERROR"));
  }

  componentDidMount = () => {
    console.log("Mount Successful")
    this.getYouTubeVideos();

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchterm !== this.state.searchterm) {
      this.getYouTubeVideos();
    } 
  }

render() {
  return (
    <div className="container-fluid bg-dark text-danger min-vh-100 px-5 pt-4 rounded">

      <div className="row w-100 align-items-center justify-content-center mb-3">
        <div className="col-lg-8">
          <SearchBar
            handleHome={this.handleHome}
            handleChange={this.handleChange}
            handleSearch={this.handleSearch}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="bg-black p-0   rounded-4 shadow">
            <VideoDetails
              VideoId={this.state.Id}
              title={this.state.title}
              description={this.state.description}
            />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="bg-secondary fw-semibold p-3 rounded-4   shadow-sm h h-100">
            <VideoItems
              video={this.state.video}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
}

export default App; 