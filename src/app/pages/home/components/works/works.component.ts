
import { Component, Input, OnInit } from '@angular/core';
import { Work } from './../../models/workflix';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input() public work!: Work
  constructor() { }

  ngOnInit(): void {
  }

}
