import React from 'react'
import { FaRegCheckCircle, FaComment, FaHeart, FaRetweet, FaLeaf } from 'react-icons/fa'

const Posts = () => {
    return (
        <div className="postss">
            <div className="post_first">
                <div className="post_first_img">
                    <img src="/images/myimg.jpg" alt="profile img" />
                </div>
                <div className="post_firstname">
                    <strong>Vedant</strong>
                    <FaRegCheckCircle className="verify" />
                </div>
                <div className="post_firstusername">
                    @vedant<span>10m</span>
                </div>
            </div>
            <div className="posts_details">
                <div className="posts_details_msg">
                    Text
                </div>
                <div className="post_details_img">
                    <img src="/images/PM.jpg" alt="PM" />
                </div>
                <div className="reactions">
                    <span><FaComment className="re" />576</span>
                    <span><FaRetweet className="re" />1.8K</span>
                    <span><FaHeart className="re" />11.4K</span>
                    <span><FaLeaf className="re" /></span>
                </div>
            </div>
        </div>
    )
}

export default Posts
