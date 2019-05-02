import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, GameService } from '../_services';

@Component({
  selector: 'app-modifygame',
  templateUrl: './modifygame.component.html',
  styleUrls: ['./modifygame.component.scss']
})

export class ModifygameComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;
    modifygameForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(public router: Router,
        private gameService: GameService,
        private alertService: AlertService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');

        this.modifygameForm = this.formBuilder.group({
            username: ['', Validators.required],
            gamename: ['', Validators.required],
            comment: ['', Validators.required],
            release_date: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    // convenience getter for easy access to form fields
    get f() { return this.modifygameForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.modifygameForm.invalid) {
            return;
        }

        this.loading = true;
        this.gameService.create(this.modifygameForm.value)
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
}

