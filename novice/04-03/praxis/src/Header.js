import React from 'react'

class Header extends React.Component {
constructor(){

	super()
}
    render() {

        return (
        	<div>
            <h1> THIS IS HEADER COMPONENT </h1>
            <ul>
            <li> Home </li> 
            <li> List Mahasiswa</li> 
            <li> Add Mahasiswa< /li> 
            </ul> 
</div>
        )
    }
}

export default Header