import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../_services';

@Component({
  selector: 'app-modifyname',
  templateUrl: './modifyname.component.html',
  styleUrls: ['./modifyname.component.scss']
})

export class ModifynameComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    creategameForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(public router: Router,
        private alertService: AlertService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    // convenience getter for easy access to form fields
    get f() { return this.creategameForm.controls; }

    onSubmit() { }
}

