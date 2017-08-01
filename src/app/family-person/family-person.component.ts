import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'family-person',
  styleUrls: [ './family-person.component.css' ],
  templateUrl: './family-person.component.html'
})
export class FamilyPersonComponent implements OnInit {
  constructor(
    public appState: AppState
  ) {

  }

  public ngOnInit() {
    console.log('family person');
  }
}
