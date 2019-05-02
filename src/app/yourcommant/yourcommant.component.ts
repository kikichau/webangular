import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-yourcommant',
  templateUrl: './yourcommant.component.html',
  styleUrls: ['./yourcommant.component.scss']
})
export class YourcommantComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
