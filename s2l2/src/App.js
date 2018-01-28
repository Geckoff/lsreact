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
        // this.setState(state => {
        //     let {newsInput, news} = state;
        //     news.push(newsInput);
        //     newsInput = '';
        //     return {newsInput, news};
        // })
        let {newsInput, news} = this.state;
        this.setState({ news: [...news, {text: newsInput}], newsInput: '' });
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
                    news.map((post, i) => (
                        <NewsPost text={post.text} key={i}/>
                    ))
                }
                
            </div>
        );
    }
}

export default App;
