import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { STATION as stOptions } from '../models/resultModel';

@Injectable({
  providedIn: 'root'
})

export class ResultComponent {
  base: string = 'https://api-v3.mbta.com/stops/';

  getStation(stOptions) {
    return this.http.get(`${this.base}${stOptions}`);
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}
