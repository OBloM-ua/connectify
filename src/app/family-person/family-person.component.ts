import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';
import { Helpers } from '../services/helpers.service';

@Component({
  selector: 'family-person',
  styleUrls: [ './family-person.component.css' ],
  templateUrl: './family-person.component.html'
})
export class FamilyPersonComponent implements OnInit {
  private avatarBase = 'assets/img/avatars/';
  
  public get avatarSource(): string {
    let imageCode = Math.abs(Helpers.hashCode(this.person.name) % 6) + (this.person.gender === 'f' ? 1 : 11);

    return `${this.avatarBase}/${imageCode}.jpg`;
  }

  @Input() person: Person;

  constructor(public appState: AppState) {
  }

  public ngOnInit() {
    console.log('family person');
  }
}

export interface Person {
  name: string;
  role: string;
  gender: string;
}
