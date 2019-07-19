import React from 'react';
import './styles.css';

const Review = (props) => {
    const { data: review } = props;

    return (
        <div className="review">
            <div className="type">
                <div className="icon">
                    <span>{review.positive ? '+' : '\u2013'}</span>
                </div>
            </div>
            <div className="content">
                <h4>{ review.name }</h4>
                <p className="m-0">{ review.comment }</p>
            </div>
        </div>
    );
}

export default Review;
