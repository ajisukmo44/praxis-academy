import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormMahasiswa from './FormMahasiswa'
import Header from './Header'
//Component
//State
//Props


class App extends Component {
    render() {
        return ( <div className = "App">
            <Header/>
            <FormMahasiswa/>            
            </div>
        );
    }
}
export default App;