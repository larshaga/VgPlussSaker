import React from 'react';
import './App.css';

const Main = ({number}) => {
        return (
                <header className="App-header">
                    <p>
                       VG har nå {number} pluss saker!
                    </p>
                </header>
        );
}

export default Main;