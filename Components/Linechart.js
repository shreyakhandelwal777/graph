import React from 'react'
import {Line} from 'react-chartjs-2'
import Card from '@material-ui/core/Card';
import './Pie.css'
function Linechart({d}){
	const data={
		labels:['jan','feb','march','april','may'],
		datasets:[
		 {
		 	label:'sales for 2020(M)',
		 	data:d,
		 	borderColor:['rgba(166, 240, 48)'],
		 	
		 	pointBackgroundColor:'rgba(166, 240, 48)',
		 	pointBorderColor:'rgba(166, 240, 48)'
		 }
		]
	}
	const options={
		title:{
			display:true,
			text:'Line Chart',
			backgroundColor:['rgba(166, 240, 48)'],
		},
		scales:{
			yAxes:[
			{
				ticks:{
					min:0,
					max:6,
					stepSize:1,
				}
			}
			]
		}
	}
	return (
		<div className="p3">
		<Card>
		<Line data={data} options={options}/>
		</Card>
		</div>
)
		
}
export default Linechart