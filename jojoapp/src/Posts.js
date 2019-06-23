import React, { Component } from 'react';


class Posts extends Component {

    state = {
        posts: [],
    }
    
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({
                posts: myJson
            });
        });
    }

    render() {
        return (
              <div>
                { this.state.posts.map(x => {
                    return <div className="post"> 
                            <h2 className="title">{x.title}</h2>
                            <div className="body">{x.body}</div>
                        </div> 
                }) }                
              </div>
            );
    }
}




export default Posts;
