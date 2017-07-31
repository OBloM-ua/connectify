import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'bottom-nav',
  styleUrls: [ './bottom-nav.component.css' ],
  templateUrl: './bottom-nav.component.html'
})
export class BottomNavComponent implements OnInit {
  constructor(
    public appState: AppState
  ) {

  }

  public ngOnInit() {
    console.log('bottom nav');
  }
}
