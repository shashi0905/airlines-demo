import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private MYFLIGHTS: Flight[] = [
  {"flightNumber" : "F1000", "source": "NDLS", "destination" : "GUW"},
  {"flightNumber" : "F1001", "source": "NDLS", "destination" : "DDN"}
];

constructor(private http: HttpClient) { }

 //test with local mock data
 public getMyFlights() : Flight[]{
 return this.MYFLIGHTS;
 }

 public getFlightsData() : Observable<Flight[]>{
    let url = "http://localhost:8080/flights";
    return this.http.get<Flight[]>(url);
  }

}
