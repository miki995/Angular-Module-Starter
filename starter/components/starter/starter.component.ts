import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IStarterState } from '../../store';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {


  constructor(private readonly store: Store<IStarterState>) {
  }

  ngOnInit() {
  }
}
