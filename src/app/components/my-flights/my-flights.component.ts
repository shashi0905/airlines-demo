import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/flight';
import { FlightService } from "../../services/flight.service"

@Component({
	selector: 'app-my-flights',
	templateUrl: './my-flights.component.html',
	styleUrls: ['./my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {

	public rowData: Flight[];

	columnDefs = [
		{ headerName: 'Flight No', field: 'flightNumber' },
		{ headerName: 'Source', field: 'origin' },
		{ headerName: 'Destination', field: 'destination', editable: true }
	];

	constructor(private flightService: FlightService) { }

	ngOnInit(): void {
		this.rowData = this.flightService.getMyFlights();
	}

}
