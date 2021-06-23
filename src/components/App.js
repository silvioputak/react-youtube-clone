import React from 'react'
import youtube from '../apis/youtube'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoSelected from './VideoSelected'


class App extends React.Component{
    state = {videos: [], selectedVideo: null };
    words = ['building', 'tractor', 'fortnite', 'javascript', 'flower', 'dolar', 'kid cudi', 'bitcoin', 'gamer','luka modric']
    componentDidMount() {
       this.onTermSubmit(this.randomTermGenerator());
   }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(this.state.videos)
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    randomTermGenerator = () => {
        var length = Math.trunc(Math.random() * 11);
        return this.words[length];
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar input={this.onTermSubmit}/>

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoSelected video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
                
                    
                
            </div>
        ); 
    }
}

export default App;