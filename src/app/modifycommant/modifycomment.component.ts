import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap'
import * as Rellax from 'rellax';

import { AlertService, CommentService, AuthenticationService } from '../_services';
import { Subscription } from 'rxjs';
import { User } from 'app/_models';

@Component({
    selector: 'app-modifycomment',
    templateUrl: './modifycomment.component.html',
    styleUrls: ['./modifycomment.component.scss']
})

export class ModifycommentComponent implements OnInit {

    data: Date = new Date();

    focus;
    focus1;
    modifycommentForm: FormGroup;
    loading = false;
    submitted = false;

    date: { year: number, month: number };
    model: NgbDateStruct;

    currentUser: User;
    currentUserSubscription: Subscription;

    comment: Comment[] = [];

    constructor(public router: Router,
        private alertService: AlertService,
        private commentService: CommentService,
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService, ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);

            this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
                this.currentUser = user;
            });
        }
    }

    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: { month: number }) {
        return date.month !== current.month;
    }

    ngOnInit() {
        var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        this.modifycommentForm = this.formBuilder.group({
            username: ['', Validators.required],
            gamename: ['', Validators.required],
            comment: ['', Validators.required],
            release_date: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    // convenience getter for easy access to form fields
    get f() { return this.modifycommentForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.modifycommentForm.invalid) {
            return;
        }

        this.loading = true;
        this.commentService.create(this.modifycommentForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Modify comment successful', true);
                    this.router.navigate(['/yourcomment']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    updateById(commentId: number) {
        this.commentService.updateById(commentId).pipe(first()).subscribe(() => {
            this.getAll()
        });
    }

    private getAll() {
        this.commentService.getAll().pipe(first()).subscribe(comment => {
            this.comment = comment;
        });
    }
}