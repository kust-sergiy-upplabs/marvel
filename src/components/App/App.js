import React, { Component } from 'react';
import "./App.sass";
import ItemList from '../ItemList/ItemList';
import Login from '../Login/Login';
import MarvelService from '../../services/marvel-services';

class App extends Component {
    constructor() {
        super()
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        const marvel = new MarvelService();
        this.res = marvel.get().then((body) => {
            console.log(body.data)
            this.setState({
                items: body.data.results
            })
        })
    }
	render() {
		return (
			<div className="App">
				<div className="container">
                    <div className="row">
                        <Login/>
                    </div>
                </div>
			</div>
		);
	}
}

export default App;
