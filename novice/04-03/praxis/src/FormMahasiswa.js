import React from 'react'

class FormMahasiswa extends React.Component {
    constructor() {

        super()
        this.state = {
            Mahasiswa: ['Aji Sukmo'],
            currentMahasiswaName: ''
        }
    }

addMahasiswa(){
let currentMahasiswas = this.state.Mahasiswa
currentMahasiswas.push(this.state.currentMahasiswaName)
this.setState({
    Mahasiswa:currentMahasiswas
})

}

    render() {

        return ( 
            <div>
            <span>{ this.state.currentMahasiswaName }</span> <br/>
            <h4 > THIS IS HEADER FORM </h4>
            <input 
            type="text" 
            name="mahasiswa_name" 
            onChange={(e) => this.setState({currentMahasiswaName: e.target.value}) } />
            <br/>
            <input 
            type="submit" 
            value="Add Mahasiswa" 
            onClick= { () => this.addMahasiswa() } />
            <h2> Mahasiswa: </h2>
                { this.state.Mahasiswa.map( mahasiswa => {
                    return <h3> { mahasiswa } </h3>
                })}
            </div>
        )
    }
}

export default FormMahasiswa