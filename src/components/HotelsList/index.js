import React from 'react';
import Hotel from '../Hotel'

class HotelsList extends React.Component {

    render() {
        const {hotels} = this.props;
        const hotelBlock = hotels.map((hotel, i) => <Hotel key={i} data={hotel} />);

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="hotels-list">
                        { hotelBlock }
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelsList
