import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { AppState } from '../app.service';
import { Helpers } from '../services/helpers.service';

@Component({
  selector: 'family-tree',
  styleUrls: [ './family-tree.component.css' ],
  templateUrl: './family-tree.component.html'
})
export class FamilyTreeComponent implements OnInit {
  constructor(public appState: AppState) {
  }

  public ngOnInit() {
  }
}