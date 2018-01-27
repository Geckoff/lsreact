import React, { Component } from "react";
import "./App.css";
import "./NewsPost";
import NewsPost from "./NewsPost";

class App extends Component {
    state = {
        newsInput: "",
        news: []
    }

    handleNewPost = () => {
        this.setState(state => {
            let {newsInput, news} = state;
            news.push(newsInput);
            newsInput = '';
            return {newsInput, news};
        })
    }

    handleChange = event => {
        this.setState({newsInput: event.target.value});
    };

    render() { 
        const {newsInput, news} = this.state;
        console.log(newsInput, news);
        return (
            <div className="App">
                <p>test</p>
                <input onChange={this.handleChange} value={newsInput} />
                <button onClick={this.handleNewPost}>Add Post</button>
                {
                    news.map(post => (
                        <NewsPost post={post} />
                    ))
                }
                
            </div>
        );
    }
}

export default App;
