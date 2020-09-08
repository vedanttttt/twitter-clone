import React from 'react'
import { FaSistrix } from 'react-icons/fa';
import TrendsKeywords from './TrendsKeywords';

const Trends = () => {
    return (
        <div className="trends">
            <div className="trends_search">
                <input type="text" className="trend_control" placeholder="Search Twitter" />
                <div className="trend_icon">
                    <FaSistrix className="search" />
                </div>
            </div>
            <TrendsKeywords />
        </div>
    )
}

export default Trends
