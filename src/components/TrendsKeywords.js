import React from 'react'

const TrendsKeywords = () => {
    const [state,setState] = React.useState([
        {
            id:1,
            country: 'Trending in India',
            keyword: '#Patriarchy',
            totalKeywords: '200k'
        },
        {
            id:2,
            country: 'Trending in India',
            keyword: 'NARENDRAMODI',
            totalKeywords: '600k'
        },
        {
            id:3,
            country: 'Trending in India',
            keyword: 'Covid19inIndia',
            totalKeywords: '256k'
        }
    ]);
    return (
        <div className="keywords">
            <div className="key">
                <div className="keyword_heading">
                    <h1>Filter Tweets</h1>
                    <br></br>
                    <h4>Trends for you</h4>
                </div>
                {state.map(keyword => (
                    <div key={keyword.id}>
                        <div className="country">
                            {keyword.country}
                        </div>
                            <div className="keyword_name">
                            <strong>{keyword.keyword}</strong>
                        </div>
                        <div className="keyword_tweets">
                                {keyword.totalKeywords}
                        </div>
                    </div>
                ))}
            </div>
            <h3>Show more</h3>
        </div>
    )
}

export default TrendsKeywords;
