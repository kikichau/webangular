import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import * as Rellax from 'rellax';

import { AlertService, GameService, AuthenticationService } from '../_services';
import { Game, User } from '../_models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-creategame',
    templateUrl: './creategame.component.html',
    styleUrls: ['./creategame.component.scss']
})

export class CreategameComponent implements OnInit {
    data: Date = new Date();
    focus;
    focus1;
    creategameForm: FormGroup;
    loading = false;
    submitted = false;

    currentUser: User;
    currentUserSubscription: Subscription;

    game: Game[] = [];

    constructor(public router: Router,
        private gameService: GameService,
        private alertService: AlertService,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService) {
            // redirect to home if already logged in
            if (this.authenticationService.currentUserValue) {
                this.router.navigate(['/']);
                this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                    this.currentUser = user;
                });
            }
        }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        this.creategameForm = this.formBuilder.group({
            username: ['', Validators.required],
            gamename: ['', Validators.required],
            comment: ['', Validators.required],
            release_date: ['', [Validators.required,]]
        });
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    // convenience getter for easy access to form fields
    get f() { return this.creategameForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.creategameForm.invalid) {
            return;
        }

        this.loading = true;
        this.gameService.create(this.creategameForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Create game successful', true);
                    this.router.navigate(['/yourgame']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}