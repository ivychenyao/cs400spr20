import { Component } from '@angular/core';
import { STATIONS } from './STATIONS-MOCK';
import { STATION } from './STATION';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS400 PS 6';
  stations = STATIONS;
  selectedStation: STATION;

  selectStation(station: STATION) {
    this.selectedStation = station;
  }
}
