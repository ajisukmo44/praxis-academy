import React from 'react'
import ListMahasiswa from './ListMahasiswa'
class FormMahasiswa extends React.Component {
    constructor() {

        super()
        this.state = {
            currentMahasiswaName: ''
        }
    }

addNewMahasiswa(){
this.props.addMahasiswa(
    this.state.currentMahasiswaName, this.state.currentMahasiswaAge )

}




    render() {

        return ( 
            <div>
            <span>{ this.state.currentMahasiswaName }</span> <br/>
            Nama : <input 
            type="text" 
            name="mahasiswa_name" 
            onChange={(e) => this.setState({currentMahasiswaName: e.target.value}) } />
            <br/><br/>
            Umur : <input 
            type="text" 
            name="mahasiswa_age" 
            onChange={(e) => this.setState({currentMahasiswaAge: e.target.value}) } />
            <br/><br/>
           <input 
            type="submit" 
            value="Tambah Data Mahasiswa" 
            onClick= { () => this.addNewMahasiswa() } />
              
            </div>
        )
    }
}

export default FormMahasiswa