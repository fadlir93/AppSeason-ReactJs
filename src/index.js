import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import SpinnerLoad from './SpinnerLoader';

class App extends React.Component {
    state = { test: null}

    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ coord: position.coords.latitude}),
            err => this.setState({errorMessage : err.message})
        )        
    }

    render() {
        if(this.state.errorMessage && !this.state.coord) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.coord){
            return <SeasonDisplay lat={this.state.coord}/>;
        } 
        return <SpinnerLoad message="plese allow request location"/>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));