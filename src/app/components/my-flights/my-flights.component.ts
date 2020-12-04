import { Component, OnInit } from '@angular/core';
import { Flight } from '../../models/flight';
import { FlightsService } from "../../services/flight.service";

@Component({
  selector: 'app-my-flights',
  templateUrl: './my-flights.component.html',
  styleUrls: ['./my-flights.component.css']
})
export class MyFlightsComponent implements OnInit {

  private flights : Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flights = this.flightService.getMyFlights();
  }

}
