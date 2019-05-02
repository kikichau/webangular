import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { Game, User } from 'app/_models';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GameService, AuthenticationService } from 'app/_services';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-yourgame',
  templateUrl: './yourgame.component.html',
  styleUrls: ['./yourgame.component.scss']
})
export class YourgameComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  modifynameForm: FormGroup;
  loading = false;
  submitted = false;

  currentUser: User;
  currentUserSubscription: Subscription;

  game: Game[] = [];

  constructor(public router: Router,
    private gameService: GameService,
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
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');

    this.getByUsername;
    this.deleteById;
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

  getByUsername(game: Game) {
    this.gameService.getByUsername(game).pipe(first()).subscribe(game => {
      this.game = game;
      console.log(this.game);
    })
  }

  deleteById(gameId: number) {
    this.gameService.deleteById(gameId).pipe(first()).subscribe(game => {
      this.game = game;
      console.log(this.game);
    })
  }
}
