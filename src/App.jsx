import React, {Component} from 'react';
import Main from './Main';
import axios from 'axios/index';

class App extends Component {
    render() {
        return (
            <Main number={this.state.number} />
        )
    }

    state = {
        number: []
    };

    componentDidMount() {
    var self = this;
    var numberOfCases;
    axios.get('http://vg.no').then(
    function (response) {
        numberOfCases = ((response.data.match(/VG-Pluss/g)|| []).length);
        self.setState({number: numberOfCases})
    }
    )
    }
}

export default App;