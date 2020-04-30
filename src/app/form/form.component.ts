import { Component } from '@angular/core';
import { ResultComponent } from '../result/result.component'
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  title = 'CS400 PS7';
  stations: any;

  var1: any;
  name: FormControl = new FormControl('Forest St @ Beaver St');

  station: FormGroup = new FormGroup(
    {
      name_ex: new FormControl('Forest St @ Beaver St')
    }
  );

  stOptions: {};

  stationB = this.form.group({
    nameB: [''],
  })

  constructor(private st: ResultComponent, private form: FormBuilder) {
  }

  getStation() {
    this.stOptions = {
      latitude: this.station.get('lat_ex').value,
      longitude: this.station.get('long_ex').value,
      municipality: this.station.get('mun_ex').value,
    };

    this.st.getStation(this.stOptions).subscribe(
      response => {
        this.stations = response['main']['temp'];
        console.table(response);
      }

    )
  }
}
