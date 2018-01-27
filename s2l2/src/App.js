import React, { Component } from "react";
import "./App.css";
import "./NewsPost";
import NewsPost from "./NewsPost";

class App extends Component {
    state = {
        tempString: "",
        posts: []
    }

    handleClick = () => {
        this.setState(state => {
            let {tempString, posts} = state;
            posts.push(tempString);
            tempString = '';
            return {tempString, posts};
        })
    }

    handleChange = event => {
        this.setState({tempString: event.target.value});
    };

    render() { 
        const {tempString, posts} = this.state;
        console.log(tempString, posts);
        return (
            <div className="App">
                <p>test</p>
                <input onChange={this.handleChange} value={tempString} />
                <button onClick={this.handleClick}>Add Post</button>
                {
                    posts.map(post => (
                        <NewsPost key={post}>
                            <p  style={{color: 'green'}}>{post}</p>
                        </NewsPost>
                    ))
                }
                
            </div>
        );
    }
}

export default App;
