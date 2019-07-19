import React, {Component} from 'react';
import axios from 'axios';
import {hot} from 'react-hot-loader';
import Button from './components/Button';
import HotelsList from './components/HotelsList';

import './App.css';

class App extends Component {

    state = {
        hotels: [],
        hotelsError: false,
    };

    getHotels = () => {
        axios.get('http://fake-hotel-api.herokuapp.com/api/hotels?count=5').then(({data}) => {
            const hotels = this.state.hotels;

            this.setState({
                hotelsError: false,
                hotels: [...hotels, ...data]
            });
        }).catch(() => {
            this.setState({
                hotelsError: true
            })
        });
    };

    errorMessage = (
        <div className="alert alert-secondary">Error</div>
    );

    render() {
        const {hotelsError, hotels} = this.state;

        return(
            <div className="App container">
                <div className="row">
                    <div className="col-12">
                        <Button getHotels={this.getHotels} />
                        { hotelsError ? this.errorMessage : null }
                        { hotels.length > 0 ? <HotelsList hotels={hotels} /> : null }
                    </div>
                </div>
            </div>
        );
    }
}

export default hot(module)(App);
