import React from 'react';
import './App.css';

class Main extends React.Component {

    render() {
        const axios = require('axios');
        const url = 'https://www.vg.no/';

        axios.get(url).then(
            function (response) {
                // Return if the status is not 200 - OK
                if (response.status !== 200) {
                    return;
                }
                let numberOfPlusCases = ((response.data.match(/VG-Pluss/g)
                    || []).length);
                console.log("numberOfPlusCases: " + numberOfPlusCases);
            });

        return (
            <div className="App">
                <header className="App-header">
                    <p className="Text-VG">
                        VG har nå antall XX pluss saker!
                    </p>
                </header>

            </div>
        );
    }
}

export default Main;