import { Component, OnInit, Input } from '@angular/core';
import { Work } from '../../models/workflix';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() public hero!: Work
  constructor() { }

  ngOnInit(): void {
  }

}
