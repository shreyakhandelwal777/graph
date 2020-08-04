import React from 'react'
import {Pie} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import './Pie.css'

function Piechart({d}){
	const data={
		labels:['jan','feb','march','april','may'],
		datasets:[
		 {

		 	display:true,
		 	text:'Pie Chart',
		 	label:'sales for 2020(M)',
		 	data:d,
		 	
		 	backgroundColor:['rgba(166, 240, 48)',
		 	'rgba(235, 64, 52)',
		 	'rgba(230, 132, 14)',
		 	'rgba(195, 214, 96)',
		 	'rgba(188, 54, 209)'
		 	],

		 	
		 }
		]
	}
	
	return (
		<div class='p'>
		<Card >
		<Pie data={data} />
		</Card>
		</div>
)
		
}
export default Piechart