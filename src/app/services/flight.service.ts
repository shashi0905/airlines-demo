import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private MYFLIGHTS: Flight[] = [
  {"id": 1000, "flightNumber" : "F1000", "origin": "NDLS", "destination" : "GUW"},
  {"id": 1001, "flightNumber" : "F1001", "origin": "NDLS", "destination" : "DDN"}
];

constructor(private http: HttpClient) { }

 //test with local mock data
 public getMyFlights() : Flight[]{
 return this.MYFLIGHTS;
 }

}
