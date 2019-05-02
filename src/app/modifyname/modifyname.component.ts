import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import * as Rellax from 'rellax';

import { AlertService, UserService, AuthenticationService } from '../_services';
import { User } from 'app/_models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-modifyname',
    templateUrl: './modifyname.component.html',
    styleUrls: ['./modifyname.component.scss']
})

export class ModifynameComponent implements OnInit {
    data: Date = new Date();
    focus;
    focus1;
    modifynameForm: FormGroup;
    loading = false;
    submitted = false;

    currentUser: User;
    currentUserSubscription: Subscription;

    user: User[] = [];

    constructor(public router: Router,
        private userService: UserService,
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

        this.modifynameForm = this.formBuilder.group({
            username: ['', Validators.required]
        });

        this.updateById;
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    // convenience getter for easy access to form fields
    get f() { return this.modifynameForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.modifynameForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.create(this.modifynameForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Modify comment successful', true);
                    this.router.navigate(['/yourprofile']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    updateById(userId: number) {
        this.userService.updateById(userId).pipe(first()).subscribe(user => {
            this.user = user;
        });
    }
}