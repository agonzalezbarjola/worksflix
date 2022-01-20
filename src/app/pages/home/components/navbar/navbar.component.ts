import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../../models/workflix';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() public navbar!: Navbar;
  public btnText: string = "DARK"

  constructor() { }

  ngOnInit(): void {
  }

  public setDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.btnText == 'DARK' ? this.btnText = 'LIGHT' : this.btnText = 'DARK'
  }
}
