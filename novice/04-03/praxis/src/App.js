import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header'
import FormMahasiswa from './components/FormMahasiswa'
import ListMahasiswa from './components/ListMahasiswa'
//Component
//State
//Props


class App extends Component {
	constructor(){
		super()
		this.state = {
			Mahasiswa: [
            {name: 'Aji Sukmo', age: 21 }
            ],
		}
	}

addMahasiswa(name, age){
let currentMahasiswas = this.state.Mahasiswa
let newMahasiswa ={
name,
age
}
currentMahasiswas.push(newMahasiswa)
this.setState({
    Mahasiswa:currentMahasiswas
})

}





    render() {
        return ( <div className = "App">
            <Header/>
            <FormMahasiswa addMahasiswa={ (name, age )=> this.addMahasiswa(name, age) }/> 
 <br/><br/>
            <h2> Data Mahasiswa: </h2>
            <ListMahasiswa Mahasiswa={this.state.Mahasiswa}/>           
            </div>
        );
    }
}

export default App;