import React, { Component } from 'react'

export default class ListMahasiswa extends Component {
	
render()
{
return (
	<div>
	<ul>
	{ this.props.Mahasiswa.map( (mahasiswa,idx) => {
	return	<li key={idx}> { mahasiswa.name }, age {mahasiswa.age} </li>
	})}
</ul>
</div>
)
}
}