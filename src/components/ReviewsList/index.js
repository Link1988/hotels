import React from 'react';

import Review from '../Review';
import './styles.css';

class ReviewsList extends React.Component {

    render() {
        const { reviews } =  this.props;
        const reviewBlocks = reviews.map((review, i) => <Review key={i} data={review} /> );

        let diplayBlock;

        if(reviews.length !== 0) {
            diplayBlock = reviewBlocks;
        } else {
            diplayBlock = <div>This hotel has no reviews yet!</div>
        }

        return (
            <div className="reviews-list">
                { diplayBlock }
            </div>
        );
    }
}

export default ReviewsList;
