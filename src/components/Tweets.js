import React from 'react';
import CreateTweet from './CreateTweet';
import Posts from './Posts';

const Tweets = () => {
    return (
        <div className="posts">
            <div className="posts_home">
                Home
            </div>
            <CreateTweet />
            <Posts />
        </div>
    )
}

export default Tweets
