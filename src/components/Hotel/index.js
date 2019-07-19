import React from 'react';
import axios from 'axios';
import './styles.css';

import ReviewsList from '../ReviewsList';

class Hotel extends React.Component {

    state = {
        requestedReviews: false,
        reviews: [],
        reviewsVisible: false
    };

    renderStars = (count) => {
        const maxStars = 5;
        const stars = [];

        for(let i = 1; i <= maxStars; ++i) {
            const element = <span key={i} className={ i < count ? 'star': ''}>&#9733;</span>;
            stars.push(element);
        }

        return stars;
    };

    handler = (hotel) => {
        const { requestedReviews, reviewsVisible } = this.state;

        if (!requestedReviews) {
            this.getReviews(hotel);
            return;
        }

        if (reviewsVisible) {
            this.setState({ reviewsVisible: false });
        } else {
            this.setState({ reviewsVisible: true });
        }
    };

    getReviews = (hotel) => {
        const url = `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${hotel}`;
        axios.get(url).then(({data}) => {
            this.setState({
                reviews: [...data],
                requestedReviews: true,
                reviewsVisible: true
            });
        }).catch(error => {
            console.log(error);
        });
    };

    render() {
        const { reviewsVisible, reviews } = this.state;
        const { data: hotel, data: { dateStart, dateEnd }} = this.props;
        const start = new Date(dateStart);
        const end = new Date(dateEnd);

        return (
            <div className="hotel-container">
                <div className={ reviewsVisible ? 'hotel reviews-display' : 'hotel' }>
                    <div className="photo" style={{ backgroundImage: `url(${hotel.images[0]})` }}></div>
                    <div className="data">
                        <div className="title">
                            <div className="name">
                                <h2>{hotel.name}</h2>
                                <p>
                                    <span className="country">{ hotel.country }</span>
                                    -
                                    <span className="city">{ hotel.city }</span>
                                </p>
                            </div>
                            <div className="stars">
                                { this.renderStars(hotel.stars) }
                            </div>
                        </div>
                        <div className="description">
                            { hotel.description}
                        </div>
                        <div className="footer">
                            <div className="action">
                                <button
                                    className="btn btn-lg btn-primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        this.handler(hotel.id)
                                    }}
                                >
                                    Show reviews
                                </button>
                            </div>
                            <div className="price">
                                <p className="value mb-1">{hotel.price} &euro;</p>
                                <p>
                                    {start.toLocaleDateString('de-DE')}
                                    -
                                    {end.toLocaleDateString('de-DE')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                { reviewsVisible ? <ReviewsList reviews={reviews} /> : null}
            </div>
        )
    }
}

export default Hotel;
