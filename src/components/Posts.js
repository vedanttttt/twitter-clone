import React from 'react'
import { FaRegCheckCircle, FaComment, FaHeart, FaRetweet, FaLeaf } from 'react-icons/fa'

const Posts = () => {
    return (
        <div className="postss">
            <div className="post_first">
                <div className="post_first_img">
                    <img src="/images/PMimg.jpg" alt="PM logo" />
                </div>
                <div className="post_firstname">
                    <strong>Narendra Modi</strong>
                    <FaRegCheckCircle className="verify" />
                </div>
                <div className="post_firstusername">
                    @narendramodi<span>10m</span>
                </div>
            </div>
            <div className="posts_details">
                <div className="posts_details_msg">
                कल 9 सितंबर को सुबह 11 बजे वीडियो कॉन्फ्रेंसिंग के माध्यम से होने वाले ‘स्वनिधि संवाद’ को लेकर बेहद उत्सुक हूं। इस विशेष बातचीत में मध्य प्रदेश के हमारे परिश्रमी स्ट्रीट वेंडर्स के अनुभवों को जानने का अवसर मिलेगा। <a>#AatmaNirbharVendor</a>
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
            <div className="post_first">
                <div className="post_first_img">
                    <img src="/images/netflix_logo.jpg" alt="profile img" />
                </div>
                <div className="post_firstname">
                    <strong>Netflix</strong>
                    <FaRegCheckCircle className="verify" />
                </div>
                <div className="post_firstusername">
                    @netflix<span>2h</span>
                </div>
            </div>
            <div className="posts_details">
                <div className="posts_details_msg">
                <a>#Cargo</a> is now streaming on Netflix all across. Is this Indian sci-fi movie worth your time? Here's what we think:
                </div>
                <div className="post_details_img">
                    <img src="/images/netflix_img.jpg" alt="netflix" />
                </div>
                <div className="reactions">
                    <span><FaComment className="re" />230</span>
                    <span><FaRetweet className="re" />1.4K</span>
                    <span><FaHeart className="re" />9K</span>
                    <span><FaLeaf className="re" /></span>
                </div>
            </div>
            <div className="post_first">
                <div className="post_first_img">
                    <img src="/images/republiclogo.jpg" alt="profile img" />
                </div>
                <div className="post_firstname">
                    <strong>Republic</strong>
                    <FaRegCheckCircle className="verify" />
                </div>
                <div className="post_firstusername">
                    @republic<span>19m</span>
                </div>
            </div>
            <div className="posts_details">
                <div className="posts_details_msg">
                The Maharashtra government is demolishing Kangana's office right after she spoke up against the Bollywood drug mafia. Do you stand with Kangana? Fire in your take with hashtag <a>#BharatForKangana</a>; send us a video & watch here 
                </div>
                <div className="post_details_img">
                    <img src="/images/Republicimg.jpg" alt="PM" />
                </div>
                <div className="reactions">
                    <span><FaComment className="re" />1k</span>
                    <span><FaRetweet className="re" />600</span>
                    <span><FaHeart className="re" />36.7k</span>
                    <span><FaLeaf className="re" /></span>
                </div>
            </div>
        </div>
    )
}

export default Posts
