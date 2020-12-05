import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFlightsComponent } from './components/my-flights/my-flights.component';
import { FlightService } from './services/flight.service';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    MyFlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	AgGridModule.withComponents(null)
  ],
  providers: [FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
