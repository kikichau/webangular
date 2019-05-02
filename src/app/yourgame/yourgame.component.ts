import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-yourgame',
  templateUrl: './yourgame.component.html',
  styleUrls: ['./yourgame.component.scss']
})
export class YourgameComponent implements OnInit {
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
