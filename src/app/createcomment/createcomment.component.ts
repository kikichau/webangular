import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';

import { AlertService, AuthenticationService } from '../_services';
import { CommentService } from '../_services';
import { User } from 'app/_models';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-createcomment',
    templateUrl: './createcomment.component.html',
    styleUrls: ['./createcomment.component.scss']
})

export class CreatecommentComponent implements OnInit {
    data: Date = new Date();
    focus;
    focus1;
    createcommentForm: FormGroup;
    loading = false;
    submitted = false;

    currentUser: User;
    currentUserSubscription: Subscription;

    comment: Comment[] = [];

    constructor(private router: Router,
        private alertService: AlertService,
        private commentService: CommentService,
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

        this.createcommentForm = this.formBuilder.group({
            username: ['', Validators.required],
            gamename: ['', Validators.required],
            comment: ['', Validators.required],
            release_date: ['', [Validators.required]]
        });
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    // convenience getter for easy access to form fields
    get f() { return this.createcommentForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.createcommentForm.invalid) {
            return;
        }

        this.loading = true;
        this.commentService.create(this.createcommentForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Create comment successful', true);
                    this.router.navigate(['/yourcomment']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}